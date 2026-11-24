// Fetches (and caches) the full text of a job posting.
//
// Some sources already ship a usable description in the listing:
//   - RemoteOK  — API returns full HTML inline
//   - WeWorkRemotely — RSS <description> is the whole posting
//   - DOU — RSS <description> is a short teaser; we fetch the page for the full text
//   - Djinni — listing has no description at all; always fetch the page
//
// Cached to data/details/<safeId>.json so each posting is fetched at most once.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { fetchText, stripTags } from "./lib.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DETAILS_DIR = path.join(__dirname, "data", "details");

const MIN_USABLE_LEN = 400; // shorter than this => treat as a teaser, try to fetch the full page
const MAX_TEXT_LEN = 20000; // cap what we hand to the model

function safeId(id) {
  return String(id).replace(/[^a-z0-9._-]+/gi, "_").slice(0, 120);
}

// Strip scripts/styles/nav chrome, then flatten to readable text.
function htmlToText(html) {
  const cleaned = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|noscript|svg|head)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<(nav|header|footer|form)\b[\s\S]*?<\/\1>/gi, " ");
  return stripTags(cleaned).replace(/\s+\n/g, "\n").trim();
}

// Pull the most likely "job description" block out of a full page. Try known
// per-source containers first, then the largest content-ish element anywhere,
// then the whole body as a last resort. Job boards reshuffle markup often, so a
// slightly noisy block is acceptable — an LLM can read past it.
function extractMainBlock(html, source) {
  const patterns = {
    Djinni: [
      /<div[^>]*class="[^"]*job-post__description[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i,
      /<div[^>]*class="[^"]*profile[^"]*"[^>]*>([\s\S]*?)<\/(?:section|article|main)>/i,
    ],
    DOU: [
      /<div[^>]*class="[^"]*b-typo[^"]*vacancy-section[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /<div[^>]*class="[^"]*vacancy-section[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ],
  };
  for (const re of patterns[source] || []) {
    const m = html.match(re);
    if (m && htmlToText(m[1]).length >= MIN_USABLE_LEN) return htmlToText(m[1]);
  }

  // Generic: pick the longest text among likely content containers.
  const containers = [
    ...html.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi),
    ...html.matchAll(/<main\b[^>]*>([\s\S]*?)<\/main>/gi),
    ...html.matchAll(/<div[^>]*class="[^"]*(?:description|markdown|job[-_]?(?:description|content|body)|posting|content)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi),
  ];
  let best = "";
  for (const m of containers) {
    const t = htmlToText(m[1]);
    if (t.length > best.length) best = t;
  }
  if (best.length >= MIN_USABLE_LEN) return best;

  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return htmlToText(body ? body[1] : html);
}

async function readCache(id) {
  try {
    return JSON.parse(await readFile(path.join(DETAILS_DIR, `${safeId(id)}.json`), "utf8"));
  } catch {
    return null;
  }
}

async function writeCache(id, payload) {
  await mkdir(DETAILS_DIR, { recursive: true });
  await writeFile(path.join(DETAILS_DIR, `${safeId(id)}.json`), JSON.stringify(payload, null, 2));
}

/**
 * Returns { ...job, descriptionText, descriptionSource } where descriptionSource
 * is one of "cache" | "listing" | "page:<url>".
 * Pass { force: true } to bypass the cache.
 */
export async function ensureJobDescription(job, { force = false } = {}) {
  if (!force) {
    const cached = await readCache(job.id);
    if (cached?.descriptionText) return { ...job, ...cached, descriptionSource: "cache" };
  }

  const listingText = job.description ? htmlToText(job.description) : "";
  let descriptionText = "";
  let descriptionSource = "";

  // Djinni listings never carry a description -> always fetch the page.
  // DOU RSS is a teaser -> fetch the page only when the teaser is too short.
  // RemoteOK / WWR ship the full text inline and their job pages block scrapers
  // (403) or return only nav chrome -> never page-fetch them.
  const pageCapable = job.source === "Djinni" || job.source === "DOU";
  const needsPage =
    !!job.url &&
    (job.source === "Djinni" ||
      (pageCapable && listingText.length < MIN_USABLE_LEN) ||
      (!pageCapable && listingText.length === 0 && !["RemoteOK", "WeWorkRemotely"].includes(job.source)));

  if (needsPage && job.url) {
    try {
      const html = await fetchText(job.url, { timeoutMs: 20000 });
      descriptionText = extractMainBlock(html, job.source);
      descriptionSource = `page:${job.url}`;
    } catch (err) {
      console.warn(`[job-detail] ${job.id} page fetch failed: ${err.message}`);
    }
  }

  if (descriptionText.length < listingText.length) {
    descriptionText = listingText;
    descriptionSource = descriptionSource || "listing";
  }
  if (!descriptionText) {
    descriptionText = job.title || "";
    descriptionSource = descriptionSource || "title-only";
  }

  descriptionText = descriptionText.slice(0, MAX_TEXT_LEN);
  const payload = { descriptionText, descriptionSource, fetchedAt: new Date().toISOString() };
  await writeCache(job.id, payload);
  return { ...job, ...payload };
}
