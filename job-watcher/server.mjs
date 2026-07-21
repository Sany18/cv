import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { fetchAllJobs } from "./fetch-jobs.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");
const JOBS_PATH = path.join(__dirname, "data", "jobs.json");
const PORT = process.env.PORT || 4173;

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

let refreshing = null;

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
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  if (await handleApi(req, res)) return;
  await serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Job watcher running at http://localhost:${PORT}`);
});
