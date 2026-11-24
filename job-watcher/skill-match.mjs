// Tags each job with which of the candidate's skills its text mentions, so the
// page can filter / sort by fit.
//
// The vocabulary is a curated list of concrete, unambiguous tech tokens — kept
// roughly in sync with docs/skills.md (the human source of truth). Weight ≈ tier:
// 3 core, 2 strong, 1 working, 0.5 exploratory.
//
// Match surface = job title + company + matched keyword + feed description + any
// already-scraped detail text in data/details/. No extra network calls.

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DETAILS_DIR = path.join(__dirname, "data", "details");

// term -> [weight, ...aliases]. `term` is the canonical label shown on the card.
const SKILLS = {
  // --- core (3) ---
  JavaScript: [3, "js"],
  TypeScript: [3, "ts"],
  Angular: [3],
  React: [3, "react.js", "reactjs"],
  "Three.js": [3, "threejs", "three js"],
  // --- strong (2) ---
  "Next.js": [2, "nextjs", "next js"],
  Vite: [2],
  NgRx: [2],
  RxJS: [2, "rx.js"],
  Zustand: [2],
  "React Query": [2, "tanstack query", "react-query"],
  "React Router": [2],
  Redux: [2, "redux toolkit", "rtk"],
  SCSS: [2, "sass"],
  "CSS Modules": [2],
  Webpack: [2],
  "Node.js": [2, "nodejs", "node js"],
  Fastify: [2],
  Express: [2, "express.js", "expressjs"],
  WebSockets: [2, "websocket", "web sockets", "socket.io"],
  Redis: [2],
  BullMQ: [2],
  PostgreSQL: [2, "postgres", "psql"],
  Docker: [2, "docker compose", "docker-compose"],
  NGINX: [2, "nginx"],
  "CI/CD": [2, "cicd", "continuous integration", "continuous delivery"],
  "GitHub Actions": [2, "gh actions"],
  "GitLab CI": [2, "gitlab ci/cd", "gitlab pipelines"],
  Git: [1.5],
  pnpm: [2],
  Playwright: [2],
  Vitest: [2],
  Jest: [2],
  LuciadRIA: [2, "luciad ria", "luciad"],
  WebGL: [2],
  Canvas: [2, "canvas api"],
  PWA: [2, "progressive web app", "service worker"],
  i18n: [2, "internationalization", "internationalisation", "localization", "localisation"],
  SEO: [2],
  "Web Performance": [2, "core web vitals", "lighthouse"],
  Zod: [2],
  "SQL": [2],
  // --- working (1) ---
  NestJS: [1, "nest.js", "nest js"],
  Hono: [1],
  Flask: [1],
  TypeORM: [1],
  Mongoose: [1],
  MongoDB: [1, "mongo"],
  GraphQL: [1, "graph ql", "apollo"],
  gRPC: [1],
  "Server-Sent Events": [1, "sse"],
  WebRTC: [1],
  "React Native": [1],
  Expo: [1],
  Recoil: [1],
  "Tailwind CSS": [1, "tailwind", "tailwindcss"],
  "Material UI": [1, "mui"],
  "styled-components": [1],
  "TanStack Table": [1, "react table"],
  FullCalendar: [1],
  Highcharts: [1],
  MySQL: [1, "mariadb"],
  SQLite: [1],
  Firebase: [1, "firestore"],
  Supabase: [1],
  S3: [1, "object storage"],
  Cloudflare: [1],
  DigitalOcean: [1, "droplet"],
  Tailscale: [1],
  Kubernetes: [1, "k8s"],
  Prometheus: [1],
  Grafana: [1],
  OpenLayers: [1],
  Leaflet: [1],
  GeoTIFF: [1],
  OAuth2: [1, "oauth 2", "oauth2.0"],
  OIDC: [1, "openid connect"],
  Keycloak: [1],
  JWT: [1],
  RBAC: [1],
  Bash: [1, "shell script"],
  Python: [1],
  Rust: [1],
  "C++": [1, "c/c++"],
  ESP32: [1],
  Arduino: [1],
  PlatformIO: [1],
  BLE: [1, "bluetooth low energy"],
  RFID: [1],
  NFC: [1],
  Sharp: [1],
  FFmpeg: [1, "fluent-ffmpeg"],
  Cypress: [1],
  "Testing Library": [1, "react testing library", "rtl"],
  ESLint: [1],
  Prettier: [1],
  Husky: [1],
  WebAssembly: [1, "wasm", "emscripten"],
  "cannon-es": [1, "cannonjs", "cannon.js"],
  GIS: [1],
  "Point Clouds": [1, "point cloud"],
  "3D Tiles": [1],
  MCP: [1, "model context protocol"],
  "AI Orchestration": [2, "multi-agent", "agent orchestration", "ai agents", "subagents"],
  "AI Validation": [2, "quality gates", "structured outputs", "evals", "prompt evaluation"],
  "GPU.js": [1],
  "OpenCV": [1, "opencv.js"],
  // --- exploratory (0.5) ---
  PostGIS: [0.5],
  Knex: [0.5],
  Lua: [0.5],
  OpenSCAD: [0.5],
  "IFC / BIM": [0.5, "web-ifc"],
  Antigravity: [0.5],
};

function boundaryRe(term) {
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // token boundaries that tolerate + and # (c++, c#) but not letters/digits/dots
  return new RegExp(`(?:^|[^a-z0-9+#.])${esc}(?:$|[^a-z0-9+#])`, "i");
}

const VOCAB = Object.entries(SKILLS).map(([term, [weight, ...aliases]]) => ({
  term,
  weight,
  res: [term, ...aliases].map((s) => boundaryRe(s.toLowerCase())),
}));

const detailCacheFile = (id) =>
  path.join(DETAILS_DIR, String(id).replace(/[^a-z0-9._-]+/gi, "_").slice(0, 120) + ".json");

/**
 * Mutates each job, adding:
 *   job.skills      — matched skill labels, strongest first
 *   job.skillScore  — Σ weights of matched skills (1 decimal)
 */
export async function annotateSkills(jobs) {
  for (const job of jobs) {
    let text = `${job.title || ""} ${job.company || ""} ${job.matchedOn || ""} ${job.description || ""}`;
    try {
      const d = JSON.parse(await readFile(detailCacheFile(job.id), "utf8"));
      if (d.descriptionText) text += " " + d.descriptionText;
    } catch {
      /* no cached detail — title/feed text only */
    }
    const hay = " " + text.toLowerCase().replace(/<[^>]+>/g, " ").replace(/\s+/g, " ") + " ";

    const matched = [];
    let score = 0;
    for (const v of VOCAB) {
      if (v.res.some((re) => re.test(hay))) {
        matched.push(v);
        score += v.weight;
      }
    }
    matched.sort((a, b) => b.weight - a.weight);
    job.skills = matched.map((v) => v.term);
    job.skillScore = Math.round(score * 10) / 10;
  }
  return jobs;
}
