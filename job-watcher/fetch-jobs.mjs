import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { config } from "./config.mjs";
import { fetchDjinni, fetchDou, fetchRemoteOk, fetchWeWorkRemotely } from "./sources.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const SEEN_PATH = path.join(DATA_DIR, "seen.json");
const JOBS_PATH = path.join(DATA_DIR, "jobs.json");

async function readJsonSafe(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

export async function fetchAllJobs() {
  await mkdir(DATA_DIR, { recursive: true });

  const tasks = [];
  if (config.djinni.enabled) tasks.push(fetchDjinni(config.djinni));
  if (config.dou.enabled) tasks.push(fetchDou(config.dou));
  if (config.remoteOk.enabled) tasks.push(fetchRemoteOk(config.remoteOk));
  if (config.weWorkRemotely.enabled) tasks.push(fetchWeWorkRemotely(config.weWorkRemotely));

  const results = await Promise.all(tasks);
  const jobs = results.flat();

  const isBaselineRun = await readJsonSafe(SEEN_PATH, null) === null;
  const seen = await readJsonSafe(SEEN_PATH, {});
  const now = Date.now();

  for (const job of jobs) {
    if (seen[job.id]) {
      job.firstSeenAt = seen[job.id];
    } else {
      job.firstSeenAt = new Date(now).toISOString();
      seen[job.id] = job.firstSeenAt;
    }
    job.isNew = !isBaselineRun && now - new Date(job.firstSeenAt).getTime() < config.newWindowMs;
  }

  // prune seen entries older than the new-window so the file doesn't grow forever
  const cutoff = now - config.newWindowMs * 4;
  for (const [id, ts] of Object.entries(seen)) {
    if (new Date(ts).getTime() < cutoff) delete seen[id];
  }

  jobs.sort((a, b) => new Date(b.postedAt || b.firstSeenAt) - new Date(a.postedAt || a.firstSeenAt));

  await writeFile(SEEN_PATH, JSON.stringify(seen, null, 2));
  await writeFile(
    JOBS_PATH,
    JSON.stringify({ fetchedAt: new Date(now).toISOString(), jobs }, null, 2)
  );

  return { fetchedAt: new Date(now).toISOString(), jobs, isBaselineRun };
}

// allow `node fetch-jobs.mjs` to run standalone (e.g. from cron)
if (import.meta.url === `file://${process.argv[1]}`) {
  const { jobs, isBaselineRun } = await fetchAllJobs();
  const newCount = jobs.filter((j) => j.isNew).length;
  console.log(
    `Fetched ${jobs.length} jobs from ${new Set(jobs.map((j) => j.source)).size} sources.` +
      (isBaselineRun ? " (baseline run — nothing marked new)" : ` ${newCount} new.`)
  );
}
