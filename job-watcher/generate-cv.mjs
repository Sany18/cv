// CLI: generate one tailored CV per configured backend for a single job.
//
//   node generate-cv.mjs <job-id | url | "text to match in title/company">
//                        [--force]           re-fetch description + ignore cache
//                        [--backends a,b]     comma list, overrides config/env
//
// Resolves the argument against data/jobs.json. A bare URL not in jobs.json is
// accepted as an ad-hoc posting (title/company unknown — the model works from
// the scraped page text).

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { generateCv } from "./cv-generate.mjs";
import { resolveBackends, describeBackends } from "./llm.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JOBS_PATH = path.join(__dirname, "data", "jobs.json");

const argv = process.argv.slice(2);
const force = argv.includes("--force");
const bIdx = argv.indexOf("--backends");
const backendsArg = bIdx !== -1 ? argv[bIdx + 1] : null;
const query = argv
  .filter((a, i) => a !== "--force" && a !== "--backends" && (bIdx === -1 || i !== bIdx + 1))
  .join(" ")
  .trim();

if (!query) {
  console.error('Usage: node generate-cv.mjs <job-id | url | "match text"> [--force] [--backends a,b]');
  process.exit(1);
}

function sourceFromUrl(url) {
  if (url.includes("djinni.co")) return "Djinni";
  if (url.includes("jobs.dou.ua")) return "DOU";
  if (url.includes("remoteok.com")) return "RemoteOK";
  if (url.includes("weworkremotely.com")) return "WeWorkRemotely";
  return "Web";
}

async function resolveJob(q) {
  let jobs = [];
  try {
    jobs = JSON.parse(await readFile(JOBS_PATH, "utf8")).jobs || [];
  } catch {
    /* no jobs.json yet — only a URL will work */
  }
  const exact = jobs.find((j) => j.id === q || j.url === q);
  if (exact) return exact;

  const ql = q.toLowerCase();
  const partial = jobs.filter(
    (j) =>
      (j.url && j.url.toLowerCase().includes(ql)) ||
      `${j.title} ${j.company}`.toLowerCase().includes(ql)
  );
  if (partial.length === 1) return partial[0];
  if (partial.length > 1) {
    console.error(`"${q}" matches ${partial.length} jobs:`);
    for (const j of partial.slice(0, 12)) console.error(`  ${j.id}  ${j.title} — ${j.company}`);
    process.exit(1);
  }
  if (/^https?:\/\//i.test(q)) {
    return {
      id: `web:${Buffer.from(q).toString("base64url").slice(0, 16)}`,
      source: sourceFromUrl(q),
      url: q,
      title: "",
      company: "",
    };
  }
  console.error(`No job matched "${q}". Pass a job id, a full URL, or text from a title/company.`);
  process.exit(1);
}

const job = await resolveJob(query);
const backends = backendsArg
  ? backendsArg.split(",").map((s) => {
      const i = s.indexOf("=");
      return i === -1 ? { name: s.trim(), command: s.trim() } : { name: s.slice(0, i).trim(), command: s.slice(i + 1).trim() };
    })
  : resolveBackends();

console.error(`→ ${job.title || job.url}${job.company ? ` — ${job.company}` : ""}`);
console.error(`→ backends: ${backendsArg ? backends.map((b) => `${b.name} (${b.command})`).join(", ") : describeBackends()}`);
console.error(`→ generating ${backends.length} version(s) in parallel…\n`);

const { slug, dir, versions } = await generateCv(job, { force, backends });

const rel = path.relative(process.cwd(), dir);
for (const v of versions) {
  const status = v.ok ? (v.cached ? "cached" : `ok (${Math.round(v.ms / 1000)}s)`) : `ERROR: ${v.error}`;
  console.error(`  ${v.backend.padEnd(14)} ${status}`);
}
const okVersions = versions.filter((v) => v.ok);
console.error(`\n✓ ${rel}/`);
console.error(
  `    job.json${okVersions.length ? " · " + okVersions.map((v) => `${v.backend}/{cv,match}.md`).join(" · ") : " (no version succeeded)"}\n`
);

const firstOk = versions.find((v) => v.ok && v.matchMarkdown);
if (firstOk) {
  console.error(`--- match report (${firstOk.backend}) ---\n`);
  console.log(firstOk.matchMarkdown);
}
