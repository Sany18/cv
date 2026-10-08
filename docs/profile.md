# Olexandr Tantsiura — Profile

*Human-readable profile. Machine-readable twin: [`resume-skills-experience.json`](resume-skills-experience.json).
Full skill breakdown with per-item proficiency and evidence: [`skills.md`](skills.md).
Last updated 2026-08-27 (incl. scan of `~/allProjs` on both the laptop and the `x1` Ubuntu
ops / homelab workstation).*

## Contact
- **Name:** Tantsiura Olexandr (Olexandr Tantsiura / Alexandr Tantsiura)
- **Title:** Software Systems Engineer (Web / 3D) / Founding Full-Stack Engineer
- **Location:** Cherkasy, Ukraine — remote-friendly, Europe/Kyiv
- **Email:** parubok.sashko@gmail.com
- **Phone:** +380633884959
- **LinkedIn:** https://www.linkedin.com/in/alexandr-tantsiura-49393a166/
- **GitHub:** https://github.com/Sany18
- **Stack Overflow:** https://stackoverflow.com/users/12074431/hoxz
- **Blog:** https://hoxzy.blogspot.com/
- **Medium:** https://medium.com/@parubok.sashko
- **CV site:** https://sany18.github.io/cv/en

## Summary
Web developer with 8+ years of experience developing, testing, debugging, optimizing,
deploying and supporting web applications. Started as a full-stack developer; for ~5 years
focused on front-end, most recently on 3D/GIS web applications. Most recently designed, built,
and now operates an entire e-commerce + CRM/ERP product solo — front-end, backend, database,
and multi-host infrastructure with a blue-green deploy pipeline.

## Skills

*Legend: **Core** = expert · **Strong** = multi-project production experience · **Working** =
shipped real project work · **Exploratory** = hobby / recent / single project.*

**Core:** JavaScript, TypeScript, Angular, React, Three.js

**Programming languages:** JavaScript, TypeScript (*Core*); SQL / PostgreSQL, Bash/Shell
(*Strong*); C/C++, Python (*Working*); Rust, Lua, Smali (*Exploratory*).
*Archived: C#, Ruby (RoR/Jekyll).*

**Front-end**
- *Strong:* Next.js, Vite, NgRx, RxJS, Zustand, TanStack Query, React Router, SCSS/SASS,
  CSS Modules, design tokens + BEM, ngx-translate / i18n, PWA & service workers, Webpack,
  web performance / Core Web Vitals
- *Working:* Redux Toolkit, Recoil, Tailwind CSS, Angular Material / MUI, styled-components,
  TanStack Table, FullCalendar, Highcharts, React Native / Expo, accessibility (a11y),
  SEO (SSR/SSG), jQuery, CodeMirror

**3D / Graphics / Games**
- *Core:* Three.js
- *Strong:* WebGL / GLSL shaders, Canvas 2D API
- *Working:* physics engines (cannon-es / oimo), procedural generation, game development,
  real-time multiplayer / netcode, WebAssembly / Emscripten, Web Audio API, data viz (SVG / Canvas)
- *Exploratory:* parametric CAD (OpenSCAD), GPU.js, OpenCV.js

**GIS / Maps**
- *Strong:* LuciadRIA (RIA 2026), GIS / geo-reference systems
- *Working:* point clouds, 3D Tiles, OpenLayers, Leaflet, GeoTIFF
- *Exploratory:* PostGIS, IFC / BIM (web-ifc)

**Back-end**
- *Strong:* Node.js, Fastify, Express.js, REST API design, API security & reliability patterns
  (JWT + refresh, RBAC, 2FA, HMAC webhooks, CSP + nonce, Idempotency-Key, correlation IDs,
  Outbox pattern, rate limiting, audit logging), BullMQ, WebSockets, Zod
- *Working:* Bun (runtime), NestJS, Hono, Flask, TypeORM / Mongoose, Server-Sent Events,
  WebRTC, gRPC, GraphQL, raw TCP / binary protocols, SSH reverse tunnels, OAuth2 / OIDC /
  Keycloak (client integration), nodemailer, media processing (Sharp / ffmpeg / pdfkit)

**Databases**
- *Strong:* PostgreSQL, Redis
- *Working:* MySQL / MariaDB, MongoDB, SQLite, Firebase / Firestore, Supabase,
  S3-compatible object storage (DigitalOcean Spaces)

**DevOps / Infrastructure**
- *Strong:* Ubuntu / Linux server administration, Docker, Docker Compose, NGINX,
  SSH (bastion / jump-host / key automation), CI/CD & deploy automation, GitHub Actions,
  GitLab CI/CD, pnpm workspaces (monorepo)
- *Working:* blue-green / zero-downtime deploys, UFW / firewall, Let's Encrypt / TLS,
  Tailscale (mesh VPN), observability (Prometheus / node_exporter / cAdvisor / Uptime Kuma),
  error tracking (GlitchTip / self-hosted Sentry), self-hosting (Pi-hole, Minecraft, app
  services), backups / DR (zstd/gzip + SHA-256 verification), lint/format tooling
  (ESLint, oxlint/oxfmt, Prettier, Husky)
- *Not used:* Kubernetes, Terraform / Ansible / declarative IaC

**Cloud**
- *Working:* DigitalOcean (Droplets, Spaces, CDN, private networking), Cloudflare (DNS, CDN,
  TLS, Turnstile, cache-purge API)
- *Exploratory / codebase exposure:* AWS SDK (SNS, SQS, CloudFront signing, Cognito, ECR),
  CapRover, self-hosted Keycloak

**Architecture**
- *Strong:* full-stack architecture, domain-driven / modular design, event-driven /
  integration architecture, RBAC / authn / authz, e-commerce / CRM systems, geospatial /
  infrastructure-inspection domain, performance optimization & complex-bug diagnosis,
  technical documentation
- *Working:* multi-tenant architecture, inventory / ERP-style logic, pricing-engine design,
  payments integration, single-operator ops model

**Integrations:** WayForPay, Cloudflare Turnstile, Telegram Bot API, Evolution API
(self-hosted WhatsApp), Instagram Graph API, Dilovod, Google (Sign-In / Merchant Center /
Search Console API), GTM / Meta Pixel / Google Ads, Firebase Auth, DroneDeploy extension

**AI / LLM tooling**
- *Strong:* AI coding agents / CLIs (Claude Code, OpenCode, OpenAI Codex CLI, GitHub Copilot CLI, Google Antigravity / Gemini); multi-agent orchestration & subagents (task decomposition, handoffs, role delegation); AI output validation & quality gates (strict Zod schema validation, automated test-gated execution, oxlint/ESLint, human-in-the-loop review); agent-instruction engineering & context design (CLAUDE.md / AGENTS.md, self-maintaining rules, .mcp.json)
- *Working:* MCP (Model Context Protocol) server development (@modelcontextprotocol/sdk, stdio/SSE), embedding agents into services (Telegram bot → `opencode` behind HMAC), local image-gen & models over API (Draw Things gRPC, Ollama/llama.cpp), prompt engineering & pipeline automation
- *Exploratory:* multi-agent forecasting design (fto ensemble), local ML libraries (TensorFlow.js, ONNX)

**Testing:** Vitest, Jest (*Strong*); Testing Library, Playwright, Cypress, Karma / Jasmine (*Working*)

**Embedded / IoT / Hardware** *(dedicated block)*
- *Working:* firmware (C/C++, PlatformIO, ESP-IDF, Arduino), ESP32 (C3, S3 with PSRAM),
  wired Ethernet on MCU (LAN8720A), sub-GHz RF (CC1101), NFC / RFID (PN532, RDM6300),
  radio / RF / signals (TDOA, RF modules, antennas), SPI TFT drivers (ST7735/S, ST7789,
  ILI9341, ILI9486), RGB565 framebuffer streaming, FPV drones (Betaflight / iNav / ELRS),
  BLE protocol reverse engineering, Xiaomi Quick App / HAP + RPK, Mi Watch Lua watchfaces,
  ADB / Android device tooling, drone photogrammetry, Raspberry Pi / Linux SBC,
  electronics repair / soldering, home server / self-hosting
- *Exploratory:* mobile Linux / phone flashing

**Reverse engineering (personal research):** Android APK RE (apktool, Smali, jadx,
resign/split), game-engine porting (WASM), wearable / BLE protocol RE, secret scanning /
supply-chain hygiene

**Methodologies:** code review, direct client communication (*Strong*); Scrum / Kanban /
Agile, mentoring / consultations, requirements & roadmap shaping, technical writing (*Working*)

## Experience

### Founding Full-Stack Engineer — Self-employed *(project: Veronica)*
*May 2026 – Present (Ukraine, on-site)*
Single-handedly designed, built, and maintain an end-to-end B2B CRM/ERP platform integrated
with an e-commerce storefront for the floral industry.

- Full-cycle workflow automation: custom business logic covering the entire operational
  lifecycle — supply chain, stock/inventory tracking, BOM/recipe costing, retail/online sales.
- Multi-tenant & contractor isolation: secure, isolated architecture with strict data privacy
  and RBAC (7 roles, optional 2FA).
- Public storefront integration: real-time sync between the CRM backend and the customer-facing
  site for instant catalog updates and order processing.
- DevOps & infrastructure: multi-droplet DigitalOcean topology behind an NGINX bastion; a
  custom Bash deploy framework with blue-green API rollout, test gate, and rollback; automated
  CI/CD, authentication, and monitoring — single-handedly maintaining ~100% production uptime.
- **Stack:** pnpm monorepo (6 apps), Fastify, Next.js 15 (SSR/SSG), React + Vite SPA,
  PostgreSQL 16, Redis + BullMQ, Zod, SSE, Docker Compose, NGINX, Cloudflare, WayForPay,
  Telegram / self-hosted WhatsApp / Instagram, Prometheus + GlitchTip + Uptime Kuma, MCP server.

### Software Systems Engineer (Web / 3D) — InfraCloud
*Oct 2024 – May 2026 (~1.5 years, Ukraine, remote)*
Front-end, map interface, and 3D for a 3D web application for infrastructure management /
inspection. Built and maintained the map interface using LuciadRIA as the core mapping
library; worked with GIS data, multiple geo-reference systems, point clouds and 3D tiles.
Also handled performance optimization and the diagnosis/fixing of hard cross-stack bugs —
including in the backend, which was otherwise outside my area.
**Skills:** Angular 20, LuciadRIA (RIA 2026), NgRx, Angular Material, GeoTIFF, Highcharts,
ngx-translate, TypeScript, GIS, point clouds, 3D Tiles, geo-reference systems,
performance optimization

### Software Development Engineer (Front-End) — SPD-Technology / Spector.AI
*Nov 2020 – Oct 2024*
Designed, developed and maintained web applications on Angular and React. Code review,
consultations, project time estimation. Communication with customer and team, daily/weekly
reports and meetings. Direct participation in project discussions and roadmap. Refactoring,
optimization, documentation.
**Skills:** Angular, React, Three.js (3D), Optimizing Performance, Software Deployment, SASS,
GPU.js, OpenLayers, OpenCV.js

### Full Stack Developer — MileStep LLC
*Sep 2018 – Nov 2020*
Development and support of applications with Ruby on Rails, Jekyll, React and React Native.
Test coverage, CI/CD integration, deployment, dockerization. Direct text communication with
customer.
**Skills:** React, React Native, Webpack, CI/CD, jQuery, Ruby on Rails, Docker

### Radio Engineer — NovuMedical
*Jul 2016 – Jul 2018*
Support of internal accounting program (C#, MySQL). Repair of branded equipment, installation
of software and hardware. ~3 years developing skills with ESP32/Arduino (TDOA noise direction
detector, custom car speedometer, pseudo-3D demo on ESP32-C3, RF plane tail module), plus
online IoT/drone photo-scan projection work.
**Skills:** C#, MySQL, ESP32, Arduino, RF, TDOA, IoT

## Projects

- **Veronica** (May 2026 – present) — solo. Production e-commerce + CRM/ERP platform for a
  Ukrainian flower business. Everything from architecture to infrastructure built solo.
  Stack: Fastify · Next.js 15 · React + Vite · PostgreSQL · Redis + BullMQ · Docker · NGINX ·
  DigitalOcean · Cloudflare · WayForPay · Telegram/WhatsApp/Instagram · Prometheus/GlitchTip.
- **InfraCloud** (Oct 2024 – May 2026) — https://www.infracloud3d.com/en/ — employer.
  Front-end / maps / 3D on a geospatial infrastructure-inspection platform; core work with
  LuciadRIA, GIS data, geo-reference systems, point clouds, 3D tiles.
- **Spector AI (SPD Technology)** (Jul 2021 – Oct 2024) — employer. AI-based platform for
  industrial asset inspection; front-end, landing page, and DroneDeploy extension.
- **alter-space.biz.ua** (2019 – present) — https://alter-space.biz.ua/ — solo. Personal
  playground of web projects, deployed as one origin (templated NGINX + Cloudflare +
  `deploy-all.sh` orchestrator). Sub-projects:
  - *meadowkeep* — procedural open-world 3D RPG (Three.js, cannon-es, three-mesh-bvh, CSG,
    custom GLSL shaders, GPU particles, Bun WebSocket multiplayer; Voronoi biomes, hydraulic
    erosion, infinite chunk streaming + LOD).
  - *gta-vc* — GTA: Vice City (reVC engine) running in the browser via WebAssembly / Emscripten
    with a Bun static server.
  - *Note Keeper* — https://alter-space.biz.ua/note-keeper/ — markdown note-taking PWA
    (React, Vite, Firebase, Recoil, versioned service worker, Jest + Testing Library).
  - *synthwave* — sound visualiser (Three.js, Web Audio API, oimo physics).
  - *Classic Tetris* — https://alter-space.biz.ua/tetris/ — vanilla JS + Canvas.
  - *screen-saver / water-pro / welcome-page* — small React/Vite demos.
- **TinyPanel Studio** — https://github.com/Sany18/TinyPanel-Studio — solo, open-source.
  Studio to build, flash, and stream Canvas apps to ESP32 displays. Node server · CodeMirror ·
  hybrid Canvas renderer + RGB565 · ACK-controlled TCP streaming · JPEG frame transport ·
  PlatformIO firmware builds + browser flashing · ffmpeg.
- **radiosniper** — solo. Full-stack image-catalog site. NestJS 11 + TypeORM + PostgreSQL,
  JWT/Passport, `@nestjs/throttler`, Sharp, `sshpk` (SSH-key admin provisioning); React 18 +
  React Router 7, dual webpack apps; custom deploy/ssh/nginx scripts + UFW.
- **fto** — solo. Crypto financial charting + market-analysis platform. Monorepo (fe/be/shared):
  Bun + Hono + Mongoose/MongoDB backend; React 18 + Webpack + Canvas OHLCV charts; Docker Compose
  (dev/prod/remote-dev); self-hosted on x1. (The Ruby `pd_detector` signal service was written by
  a friend he shared the project with; the rest is his.) Planned: a multi-metric ensemble incl.
  multi-AI-agent forecasting, news, cross-pair correlation, and funding/liquidation/order-book history.
- **telegram_bot** — solo. A private Telegram bot that runs and monitors the x1 server:
  Flask API + `python-telegram-bot`, a Telegram Mini App terminal (initData HMAC verification),
  `/ai` shelling out to a local `opencode` agent, arbitrary messages executed as bash, and an
  SSH reverse tunnel (`localhost.run`) for the public Mini App URL. Tailnet addressing.
- **CV site + job-watcher** — solo. Personal portfolio website (Next.js static export, i18n, JSON-LD,
  GitHub Actions → Pages) plus a local job-vacancy aggregator (zero-dependency Node CLI/server:
  Djinni scrape, DOU/WWR RSS, RemoteOK JSON API).
- **Froth** (Feb 2020 – Sep 2020) — https://www.instagram.com/frothcoffeeapp/ — 2-person team.
  Mobile coffee-ordering app for Cape Town; landing page, mobile app, and server side, incl.
  Play Store / App Store release and support. (Ruby on Rails, React, React Native, Webpack,
  CI/CD, Docker.)
- **Clyste** (Aug 2019 – Jan 2020) — employer. Experimental social media platform; implemented
  video calls and chat (WebSockets, WebRTC).
- **carlink** — DevOps contribution only (containerization, deploy, dev tunneling); API by
  another author.
- **Embedded / hardware** (ongoing) — `arduino` (ESP32-C3 sketches: WiFi crypto ticker with
  candlestick chart, pseudo-3D demo, SPI TFT); `wroom-wroom` (ESP32-S3 multi-protocol RF/RFID
  bench: PN532 NFC, RDM6300 RFID, CC1101 sub-GHz); `wt32` (WT32-ETH01 UART↔TCP bridge between
  field stations); `FPV` (drone build — Betaflight/iNav, ELRS, parametric OpenSCAD mounts).
- **xiaomi / smart-band** — solo. Xiaomi wearable reverse-engineering toolkit: APK decompile,
  Quick App / HAP + RPK format, Mi Watch Lua watchfaces + uploader, Xiaomi auth SDK, Node ADB
  tooling, Band 9 Pro BLE pairing (Gadgetbridge / Watchdrip).
- **Homelab / ops (x1)** — self-hosted Pi-hole (network DNS ad-blocking), Minecraft server,
  `fto`, and the Veronica Control Center; Tailscale mesh across laptop / x1 / droplets;
  automated `port_AI` backups (zstd/gzip + SHA-256 verification).
- **Alter Space (original)** (2019) — Classic Tetris, 3D shooter playground, Note Keeper —
  built with Three.js, React, Node.js/Express, WebSockets, CannonJS. *(Superseded by the
  current alter-space.biz.ua above.)*

## Education
**Cherkasy State Technological University**
Economics and Management: Economic Cybernetics — Bachelor's degree
*Sep 2011 – Jul 2015*

## Languages
- Ukrainian — Native
- English — Advanced (C1)
- Russian — prefer to avoid

---
*Sourced from the CV project at `/Users/alex/allProjs/cv` (translations.ts, JSON-LD schema,
section components), a survey, and a full scan of `~/allProjs` on the laptop and on the `x1`
Ubuntu ops workstation. See [`skills.md`](skills.md) for per-skill evidence and the full
project index (both machines).*
