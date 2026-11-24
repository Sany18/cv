import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { fetchAllJobs } from "./fetch-jobs.mjs";
import { generateCv, readCvVersions, readCvIndex } from "./cv-generate.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");
const JOBS_PATH = path.join(__dirname, "data", "jobs.json");
const PORT = process.env.PORT || 4173;

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

let refreshing = null;
const cvInFlight = new Map(); // job id -> Promise

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => {
      data += c;
      if (data.length > 1e6) reject(new Error("body too large"));
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sendJson(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
}

async function handleCv(req, res) {
  // GET /api/cv/list  -> { jobId: { slug, generatedAt, versions:[{backend,ok}] } }
  if (req.method === "GET" && req.url === "/api/cv/list") {
    sendJson(res, 200, await readCvIndex());
    return true;
  }

  // POST /api/cv  { id }  -> generate (or return in-flight/cached) tailored CV
  if (req.url === "/api/cv" && req.method === "POST") {
    let body;
    try {
      body = JSON.parse((await readBody(req)) || "{}");
    } catch {
      return sendJson(res, 400, { error: "invalid JSON body" }), true;
    }
    if (!body.id) return sendJson(res, 400, { error: "missing job id" }), true;

    let jobs = [];
    try {
      jobs = JSON.parse(await readFile(JOBS_PATH, "utf8")).jobs || [];
    } catch {
      /* ignore */
    }
    const job = jobs.find((j) => j.id === body.id);
    if (!job) return sendJson(res, 404, { error: `job ${body.id} not found` }), true;

    try {
      const run =
        cvInFlight.get(job.id) ||
        generateCv(job, { force: !!body.force }).finally(() => cvInFlight.delete(job.id));
      cvInFlight.set(job.id, run);
      const { slug, versions } = await run;
      sendJson(res, 200, { slug, versions });
    } catch (err) {
      sendJson(res, 500, { error: err.message });
    }
    return true;
  }

  // GET /api/cv?slug=...  -> re-read a previously generated set of versions
  if (req.method === "GET" && req.url.startsWith("/api/cv?")) {
    const slug = new URL(req.url, "http://x").searchParams.get("slug") || "";
    if (!slug || slug.includes("/") || slug.includes("..")) {
      return sendJson(res, 400, { error: "bad slug" }), true;
    }
    try {
      sendJson(res, 200, await readCvVersions(slug));
    } catch (err) {
      sendJson(res, 404, { error: err.message });
    }
    return true;
  }
  return false;
}

async function handleApi(req, res) {
  if (req.url === "/api/jobs" && req.method === "GET") {
    try {
      const body = await readFile(JOBS_PATH, "utf8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(body);
    } catch {
      // no data yet — fetch once so the first page load isn't empty
      const data = await (refreshing ??= fetchAllJobs().finally(() => (refreshing = null)));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }
    return true;
  }
  if (req.url === "/api/refresh" && req.method === "POST") {
    try {
      const data = await (refreshing ??= fetchAllJobs().finally(() => (refreshing = null)));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return true;
  }
  return false;
}

async function serveStatic(req, res) {
  const urlPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(PUBLIC_DIR, urlPath);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    const body = await readFile(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      // local dev tool — always revalidate so UI edits show up on a plain reload
      "Cache-Control": "no-cache, must-revalidate",
    });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  if (await handleApi(req, res)) return;
  if (await handleCv(req, res)) return;
  await serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Job watcher running at http://localhost:${PORT}`);
});
