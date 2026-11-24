// Generates one CV per configured backend (in parallel), each tailored to a
// single job posting, plus a per-backend match report — so the versions can be
// compared side by side.
//
// Output layout (data/ is gitignored):
//   data/cv/<slug>/job.json
//   data/cv/<slug>/<backend>/cv.md
//   data/cv/<slug>/<backend>/match.md
//
// Local cache: data/cv-cache/<sha256>.json keyed by
//   backend name + model + profile-docs hash + whitespace-normalised JD text.
// Many postings repeat the same description across boards / reposts; an exact
// (post-normalisation) match reuses the cached version instead of re-generating.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { config } from "./config.mjs";
import { ensureJobDescription } from "./job-detail.mjs";
import { resolveBackends, runBackend } from "./llm.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CV_DIR = path.join(__dirname, "data", "cv");
const CACHE_DIR = path.join(__dirname, "data", "cv-cache");
const CV_INDEX = path.join(CV_DIR, "index.json");
const SPLIT_MARKER = "===MATCH REPORT===";

// job id -> { slug, generatedAt, title, company, versions:[{backend,ok,cached}] }
// so a card can show "a CV exists" and re-open it without regenerating.
let indexWriteChain = Promise.resolve();
function updateCvIndex(jobId, entry) {
  indexWriteChain = indexWriteChain
    .then(async () => {
      let idx = {};
      try {
        idx = JSON.parse(await readFile(CV_INDEX, "utf8"));
      } catch {
        /* first entry */
      }
      idx[jobId] = entry;
      await mkdir(CV_DIR, { recursive: true });
      await writeFile(CV_INDEX, JSON.stringify(idx, null, 2));
    })
    .catch((e) => console.warn(`[cv] index update failed: ${e.message}`));
  return indexWriteChain;
}

// Reads the index, then reconciles it against the on-disk data/cv/<slug>/ dirs
// so that any already-generated CV — including ones made before this index
// existed, or after index.json was edited/deleted — is still discoverable from
// its job card. New entries found on disk are merged back in and persisted.
export async function readCvIndex() {
  let idx = {};
  try {
    idx = JSON.parse(await readFile(CV_INDEX, "utf8"));
  } catch {
    /* no index yet — rebuild from disk below */
  }

  let dirs;
  try {
    dirs = await readdir(CV_DIR, { withFileTypes: true });
  } catch {
    return idx; // no data/cv/ at all
  }

  const knownSlugs = new Set(Object.values(idx).map((e) => e && e.slug));
  let changed = false;
  for (const d of dirs) {
    if (!d.isDirectory() || knownSlugs.has(d.name)) continue;
    try {
      const job = JSON.parse(await readFile(path.join(CV_DIR, d.name, "job.json"), "utf8"));
      if (!job.id) continue;
      idx[job.id] = {
        slug: d.name,
        generatedAt: job.generatedAt || null,
        title: job.title || "",
        company: job.company || "",
        versions: (job.versions || []).map(({ backend, ok, cached }) => ({ backend, ok, cached })),
      };
      changed = true;
    } catch {
      /* a dir with no readable job.json — ignore */
    }
  }

  if (changed) {
    try {
      await mkdir(CV_DIR, { recursive: true });
      await writeFile(CV_INDEX, JSON.stringify(idx, null, 2));
    } catch {
      /* best effort */
    }
  }
  return idx;
}

function slugify(job) {
  const base = `${job.company || job.source} ${job.title || "role"}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const idTail = String(job.id).replace(/[^a-z0-9]+/gi, "").slice(-8);
  return `${base || "job"}-${idTail}`;
}

const safeName = (s) => String(s).replace(/[^a-z0-9._-]+/gi, "_").slice(0, 60);
const sha = (s) => createHash("sha256").update(s).digest("hex");
const normJd = (t) => (t || "").toLowerCase().replace(/\s+/g, " ").trim();

async function loadProfileDocs() {
  const parts = [];
  for (const rel of config.cv.profileDocs) {
    const abs = path.resolve(__dirname, rel);
    parts.push(`# FILE: ${rel}\n\n${await readFile(abs, "utf8")}`);
  }
  return parts.join("\n\n---\n\n");
}

function splitDocs(raw) {
  const idx = raw.indexOf(SPLIT_MARKER);
  return {
    cvMarkdown: (idx === -1 ? raw : raw.slice(0, idx)).trim(),
    matchMarkdown: (idx === -1 ? "" : raw.slice(idx + SPLIT_MARKER.length)).trim(),
  };
}

async function readCacheEntry(key) {
  try {
    return JSON.parse(await readFile(path.join(CACHE_DIR, `${key}.json`), "utf8"));
  } catch {
    return null;
  }
}
async function writeCacheEntry(key, value) {
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(path.join(CACHE_DIR, `${key}.json`), JSON.stringify(value, null, 2));
}

async function writeVersionFiles(dir, backendName, cvMarkdown, matchMarkdown) {
  const bdir = path.join(dir, safeName(backendName));
  await mkdir(bdir, { recursive: true });
  await writeFile(path.join(bdir, "cv.md"), (cvMarkdown || "").trim() + "\n");
  await writeFile(path.join(bdir, "match.md"), (matchMarkdown || "_(no match report emitted)_").trim() + "\n");
}

const SYSTEM_PROMPT = `You tailor an existing candidate's CV to one specific job posting.

Absolute rules:
- Use ONLY facts present in the provided profile documents. Never invent or infer
  employers, job titles, dates, degrees, certifications, metrics, or skills.
- If the job asks for something the candidate does not have, do NOT claim it.
  Surface it honestly in the match report instead.
- Keep every company name, role title and date exactly as written in the profile.
- Write in English (British or US, be consistent), professional and concise.
- Prefer concrete, contextual phrasing over buzzwords.
- NEVER mention or imply anywhere in Document 1 that this CV was automatically generated,
  AI-generated, tailored by an LLM/pipeline, or created for a specific vacancy.
- Do NOT add phrases like "Tailored for [Company]", "AI-tailored CV", "Auto-generated CV",
  or similar anywhere in the text.
- The candidate's name in the header must strictly be ONLY the candidate's clean full name
  (e.g., "# Olexandr Tantsiura"), never modified with company names, vacancy tags, or generation notes.
- NEVER mention automatic CV generation, CV generator tools, or CV tailoring pipelines
  anywhere in the name or content (summary, experience, skills, projects, or headers).
  If referencing the candidate's portfolio/aggregator project, describe it strictly as a
  portfolio website and job vacancy aggregator, NEVER as an automatic CV generator.
- Document 1 must look and read 100% like an authentic, professional, manually authored human resume.

You output TWO markdown documents in one response, separated by a line containing
exactly:

${SPLIT_MARKER}

Document 1 — the CV:
- Header: name, the single best-fitting title (pick from the profile's headline
  variants or compose one from real titles), location, contacts.
- Summary: 2-4 sentences, tuned to THIS role, only real facts.
- Skills: grouped, ordered so the ones this posting names come first. Drop
  groups irrelevant to the role. Keep proficiency signal where the profile gives it.
- Experience: reverse-chronological, unchanged companies/titles/dates. Under each
  relevant role, 2-4 bullets drawn from that role's real responsibilities,
  emphasising what this posting cares about. Roles with no relevance can be a
  single line.
- Selected projects: the 3-6 most relevant, each with one line + the stack that
  overlaps the posting.
- Education, languages: brief.

Document 2 — the match report (concise, for the candidate, not the employer):
- A table: Requirement (from the posting) | Covered? (yes / partial / no) | Evidence (which role/project/skill).
- "Gaps" — requirements not met, and whether they're learnable-fast or hard blockers.
- "Positioning notes" — 2-4 bullets on how to pitch this application.`;

function buildUserPrompt(job, profileDocs) {
  return [
    `## JOB POSTING`,
    `Source: ${job.source}`,
    `Title: ${job.title || "(not given)"}`,
    `Company: ${job.company || "(not given)"}`,
    `Location: ${job.location || "(not given)"}`,
    `URL: ${job.url || "(not given)"}`,
    ``,
    `### Description`,
    job.descriptionText || "(no description available)",
    ``,
    `---`,
    ``,
    `## CANDIDATE PROFILE (source of truth — do not go beyond this)`,
    ``,
    profileDocs,
    ``,
    `---`,
    ``,
    `Produce the two documents now, separated by the "${SPLIT_MARKER}" line.`,
    `CRITICAL: Document 1 must be a clean, standard CV with NO mentions of automatic CV generation, AI tailoring, or target vacancy/company tags in the candidate name, header, or content.`,
  ].join("\n");
}

/**
 * @param {object} job  needs at least { id, source, url, title }
 * @param {{ force?: boolean, backends?: Array<{name,command}> }} opts
 *   force  - re-fetch the description AND ignore the cache
 * @returns {Promise<{ slug, dir, versions: Array<{
 *   backend, ok, cached, ms, error, cvMarkdown, matchMarkdown
 * }> }>}
 */
export async function generateCv(job, { force = false, backends } = {}) {
  const withDesc = await ensureJobDescription(job, { force });
  const profileDocs = await loadProfileDocs();
  const profileHash = sha(profileDocs).slice(0, 16);
  const jdNorm = normJd(withDesc.descriptionText);
  const system = SYSTEM_PROMPT;
  const user = buildUserPrompt(withDesc, profileDocs);

  const list = backends || resolveBackends();
  const slug = slugify(withDesc);
  const dir = path.join(CV_DIR, slug);
  await mkdir(dir, { recursive: true });

  const versions = await Promise.all(
    list.map(async (backend) => {
      const model = backend.command === "api" ? config.cv.model : backend.command;
      const key = sha([backend.name, model, profileHash, jdNorm].join("\0"));

      if (!force) {
        const hit = await readCacheEntry(key);
        if (hit) {
          await writeVersionFiles(dir, backend.name, hit.cvMarkdown, hit.matchMarkdown);
          return {
            backend: backend.name, ok: true, cached: true, ms: 0, error: null,
            cvMarkdown: hit.cvMarkdown, matchMarkdown: hit.matchMarkdown,
          };
        }
      }

      const res = await runBackend(backend, { system, user });
      if (!res.ok) {
        return { backend: backend.name, ok: false, cached: false, ms: res.ms, error: res.error, cvMarkdown: "", matchMarkdown: "" };
      }
      const { cvMarkdown, matchMarkdown } = splitDocs(res.text);
      await writeCacheEntry(key, {
        backend: backend.name, model, generatedAt: new Date().toISOString(),
        jobId: withDesc.id, cvMarkdown, matchMarkdown,
      });
      await writeVersionFiles(dir, backend.name, cvMarkdown, matchMarkdown);
      return { backend: backend.name, ok: true, cached: false, ms: res.ms, error: null, cvMarkdown, matchMarkdown };
    })
  );

  const generatedAt = new Date().toISOString();
  await writeFile(
    path.join(dir, "job.json"),
    JSON.stringify(
      {
        ...withDesc,
        generatedAt,
        versions: versions.map(({ backend, ok, cached, ms, error }) => ({ backend, ok, cached, ms, error })),
      },
      null,
      2
    )
  );
  await updateCvIndex(withDesc.id, {
    slug,
    generatedAt,
    title: withDesc.title || "",
    company: withDesc.company || "",
    versions: versions.map(({ backend, ok, cached }) => ({ backend, ok, cached })),
  });

  return { slug, dir, versions };
}

/** Re-read a previously generated set of versions from disk. */
export async function readCvVersions(slug) {
  if (!/^[a-z0-9][a-z0-9._-]*$/i.test(slug)) throw new Error("bad slug");
  const dir = path.join(CV_DIR, slug);
  if (!dir.startsWith(CV_DIR + path.sep)) throw new Error("bad slug");
  const entries = await readdir(dir, { withFileTypes: true });
  const versions = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const [cvMarkdown, matchMarkdown] = await Promise.all([
      readFile(path.join(dir, e.name, "cv.md"), "utf8").catch(() => ""),
      readFile(path.join(dir, e.name, "match.md"), "utf8").catch(() => ""),
    ]);
    if (cvMarkdown) versions.push({ backend: e.name, ok: true, cached: true, ms: 0, error: null, cvMarkdown, matchMarkdown });
  }
  if (!versions.length) throw new Error("not generated yet");
  return { slug, versions };
}
