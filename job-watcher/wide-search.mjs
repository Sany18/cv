// Wide Djinni search that surfaces vacancies with few applicants.
// Djinni shows "N views · M applications" on every card but has no filter for it,
// so this scrapes many keywords/pages and filters/sorts on that number itself.
//
//   node wide-search.mjs                       # config.mjs -> wideSearch defaults
//   node wide-search.mjs --max 10 --pages 5    # applicants <= 10, 5 pages per query
//   node wide-search.mjs --kw "Three.js,WebGL" # free-text search instead of categories
//   node wide-search.mjs --days 14             # only vacancies updated within N days
//
// Output: table in the terminal + data/wide.json. Personal, low-frequency use only.

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { fetchText, stripTags, decodeEntities } from "./lib.mjs";
import { config } from "./config.mjs";

const DATA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "data");

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};

const cfg = config.wideSearch;
const maxApplicants = Number(opt("max", cfg.maxApplicants));
const pages = Number(opt("pages", cfg.pages));
const maxAgeDays = Number(opt("days", cfg.maxAgeDays));
const keywords = opt("kw", "").split(",").map((s) => s.trim());
const delayMs = cfg.delayMs;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function num(chunk, re) {
  const m = chunk.match(re);
  return m ? Number(m[1].replace(/\s/g, "")) : null;
}

// "оновлено 4 дн. тому" / "5 год. тому" / "вчора" -> age in days
function ageDays(text) {
  if (!text) return null;
  const m = text.match(/(\d+)\s*(хв|год|дн|тиж|міс)/);
  if (!m) return /сьогодні|щойно/.test(text) ? 0 : /вчора/.test(text) ? 1 : null;
  const n = Number(m[1]);
  return { хв: 0, год: 0, дн: n, тиж: n * 7, міс: n * 30 }[m[2]];
}

function parseChunk(chunk, query) {
  const id = chunk.match(/^(\d+)"/)?.[1];
  const href = chunk.match(/href="(\/jobs\/[^"]+)"/)?.[1];
  const title = chunk.match(/class="job-item__position[^>]*>([\s\S]*?)<\/h2>/)?.[1];
  if (!id || !href || !title) return null;
  // 2026-11 markup: <span class="fs-5 text-secondary fw-medium">Company</span>; older: small text-gray-800 …
  const company =
    chunk.match(/class="fs-5 text-secondary fw-medium">([^<]*)</)?.[1] ??
    chunk.match(/class="small text-gray-800 opacity-75 font-weight-500">([^<]*)</)?.[1];
  const views = num(chunk, /(\d[\d\s]*)\s+перегляд/) ?? num(chunk, /(\d[\d\s]*)\s+views?/i);
  const applicants = num(chunk, /(\d[\d\s]*)\s+відгук/) ?? num(chunk, /(\d[\d\s]*)\s+applications?/i);
  const updatedText = chunk.match(/>\s*((?:оновлено|опубліковано)[^<]*?)\s*</)?.[1] ?? null;
  const location = decodeEntities(chunk.match(/class="location-text">\s*([^<]*?)\s*</)?.[1] ?? "").trim();
  const years = num(chunk, /(\d+(?:\.\d+)?)\s+(?:рок|років|роки|year)/i);
  // fact chips: <span class="… text-nowrap"><svg…/svg> Тільки віддалено </span>
  const facts = [...chunk.replace(/<svg[\s\S]*?<\/svg>/g, "").matchAll(/<span class="[^"]*\btext-nowrap\b[^"]*"[^>]*>\s*([^<]+?)\s*<\/span>/g)]
    .map((m) => decodeEntities(m[1]))
    .filter((t) => !/перегляд|відгук|оновлено|Більше/.test(t));
  return {
    id: `djinni:${id}`,
    title: stripTags(title),
    company: company ? decodeEntities(company).trim() : "",
    url: `https://djinni.co${href}`,
    views,
    // a card with views but no applications line means nobody applied yet
    applicants: applicants ?? (views != null ? 0 : null),
    ageDays: ageDays(updatedText),
    updated: updatedText,
    location,
    years,
    facts: facts.join(" · "),
    matchedOn: query,
  };
}

async function scrape(query) {
  const found = [];
  let lastPage = 1;
  for (let page = 1; page <= pages && page <= Math.max(lastPage, 1); page++) {
    const qs = new URLSearchParams(query.params);
    if (page > 1) qs.set("page", String(page));
    const url = `https://djinni.co/jobs/?${qs}`;
    let html;
    try {
      html = await fetchText(url);
    } catch (err) {
      console.warn(`[wide] ${query.label} p${page}: ${err.message}`);
      break;
    }
    // Past the real last page Djinni silently serves the unfiltered global feed, so only
    // continue while this page's pagination links point further ahead.
    const nums = [...html.matchAll(/(?:\?|&amp;|&)page=(\d+)/g)].map((m) => Number(m[1]));
    lastPage = nums.length ? Math.max(...nums) : page;
    // An unknown category name returns the whole board (hundreds of pages) — bail out.
    if (page === 1 && lastPage > 100) {
      console.warn(`[wide] "${query.label}" is not a Djinni category (unfiltered feed) — skipped`);
      break;
    }
    const chunks = html.split('<div id="job-item-').slice(1);
    if (!chunks.length) break;
    for (const c of chunks) {
      const job = parseChunk(c, query.label);
      if (job) found.push(job);
    }
    await sleep(delayMs);
  }
  return found;
}

// Default: Djinni's own categories (precise). --kw switches to free-text search,
// which is fuzzy on Djinni and pulls in non-dev roles — use it for niche terms only.
const queries = opt("kw", null)
  ? keywords.map((k) => ({ label: k, params: { all_keywords: k } }))
  : cfg.primaryKeywords.map((k) => ({ label: k, params: { primary_keyword: k } }));

const byId = new Map();
for (const q of queries) {
  process.stderr.write(`[wide] ${q.label} … `);
  const jobs = await scrape(q);
  process.stderr.write(`${jobs.length}\n`);
  for (const j of jobs) if (!byId.has(j.id)) byId.set(j.id, j);
}

const all = [...byId.values()];
// Drop vacancies Djinni would refuse you anyway (it hides the Apply button): wrong work
// format, a country list that excludes you, or more experience than you have.
const prof = cfg.profile;
const eligible = (j) =>
  (!prof.remoteOnly || /Тільки віддалено/.test(j.facts)) &&
  (!prof.countries.length || !j.location || prof.countries.some((c) => j.location.includes(c))) &&
  (j.years == null || j.years <= prof.maxYears);
const eligibleJobs = all.filter(eligible);

const result = eligibleJobs
  .filter((j) => j.applicants != null && j.applicants <= maxApplicants)
  .filter((j) => !maxAgeDays || j.ageDays == null || j.ageDays <= maxAgeDays)
  // fewest applicants first; among equals, the ones that are fresher
  .sort((a, b) => a.applicants - b.applicants || (a.ageDays ?? 99) - (b.ageDays ?? 99));

await mkdir(DATA_DIR, { recursive: true });
await writeFile(
  path.join(DATA_DIR, "wide.json"),
  JSON.stringify({ fetchedAt: new Date().toISOString(), maxApplicants, scanned: all.length, eligible: eligibleJobs.length, jobs: result }, null, 2)
);

console.log(`\nscanned ${all.length} unique vacancies, ${eligibleJobs.length} match your profile, ${result.length} with ≤ ${maxApplicants} applicants\n`);
for (const j of result) {
  console.log(`${String(j.applicants).padStart(3)} appl · ${String(j.views ?? "?").padStart(4)} views · ${(j.updated ?? "").padEnd(18)} ${j.title} — ${j.company}`);
  console.log(`      ${j.url}  [${j.facts}]`);
}
console.log(`\nsaved -> data/wide.json`);
