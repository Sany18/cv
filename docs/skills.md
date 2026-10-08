# Olexandr Tantsiura — Master Skills Inventory

*Compiled 2026-08-27. Sources: `docs/` notes, CV site source, `job-watcher/`, GitHub
`github.com/Sany18`, `hoxzy.blogspot.com` / Medium `@parubok.sashko`, a 4-round skills
survey, and a full scan of `~/allProjs` on **two machines** — the laptop and the `x1`
Ubuntu workstation (`x1-tail`, user `sa`), which doubles as the ops / homelab box.*

*Fill in manually if wanted (not machine-readable): Stack Overflow top tags
(`stackoverflow.com/users/12074431/hoxz`), LinkedIn skills/endorsements.*

## Proficiency tiers

| Tier | Meaning |
|---|---|
| **Core** | Expert — reaches for it without thinking; can lead/architect with it. *(User-confirmed set: JS, TS, Angular, React, Three.js.)* |
| **Strong** | Production experience across multiple years / projects; independent and fluent. |
| **Working** | Shipped real project work with it; productive, may need reference for edge cases. |
| **Exploratory** | Hobby / recent / single-project; hands-on but not yet deep. |

---

## 0. Project index (`~/allProjs`)

Ownership: **solo** = own GitHub repo (`Sany18/*`); **employer** = work codebase, local copy;
**devops** = infra/deploy contribution only; **collab** = built with others; **local** = private
experiment, no remote.

| Project | Own | What it is | Stack / what it demonstrates |
|---|---|---|---|
| **veronica** | solo | Production e-commerce + CRM/ERP for a flower business (the "Founding Full-Stack Engineer" role) | pnpm monorepo (6 apps) · Fastify · Next 15 · React+Vite SPA · Postgres 16 · Redis + BullMQ · Zod · SSE · multi-droplet DigitalOcean · custom Bash deploy framework w/ blue-green · nginx bastion · Cloudflare · WayForPay · Telegram/WhatsApp/Instagram · Prometheus/GlitchTip/Uptime Kuma · MCP server |
| **port_AI** | employer | The **InfraCloud** geospatial infra-inspection platform. Olexandr's role (~1.5 yr): **front-end, maps, 3D** + a little backend (optimization, complex bug-fixes) — backend mostly not his | *His work:* Angular 20 + **Luciad RIA 2026** + NgRx + Material + geotiff + Highcharts + ngx-translate + keycloak-angular; daily oxlint/oxfmt + Husky + trufflehog + Compodoc. *Codebase context (not his):* NestJS 11 + Knex + PostGIS + Keycloak backend · AWS (S3 presign, CloudFront signing, SNS, SQS, Cognito, ECR) · Express + ExcelJS + web-ifc · CapRover |
| **alter-space.biz.ua** | solo | Personal multi-app site — collection of web toys, deployed as one origin | Per-app builds + `deploy-all.sh` orchestrator · templated `nginx.conf` (Cloudflare origin, Firebase auth proxy, SW cache rules, WS proxy, WASM asset shaping) · Cloudflare purge |
| ├ **meadowkeep** | solo | Procedural open-world 3D RPG (in progress) | Three.js · cannon-es · **three-mesh-bvh** · **three-bvh-csg** · custom GLSL shaders · three.quarks particles · React 19 · Vite 6 · PWA · Playwright · **Bun WebSocket multiplayer server** · Voronoi biomes, hydraulic erosion, infinite chunk streaming + LOD, Poisson-disk scattering, modular dungeons |
| ├ **gta-vc** | solo | GTA: Vice City (reVC/revcDOS) running in the browser | **WebAssembly / Emscripten** engine port · Bun static server · speculative asset preloading |
| ├ **note-keeper** | solo | Markdown note-taking PWA (listed on CV) | React 18 · Vite 6 · **Firebase** (auth + Firestore) · **Recoil** · react-router · marked · **versioned service-worker PWA** + release bump script · Jest + Testing Library |
| ├ **synthwave** | solo | Music / sound visualiser | Three.js · **Web Audio API** · oimo physics · webpack + Babel |
| ├ **tetris** | solo | Classic Tetris | Vanilla JS + Canvas |
| ├ **screen-saver / water-pro / welcome-page** | solo | Small React/Vite demos, water sim, landing | React 19 · Vite · SASS |
| **radiosniper** | solo | Solo full-stack image-catalog site | NestJS 11 + **TypeORM** + Postgres · JWT/Passport · `@nestjs/throttler` · sharp · **sshpk** (SSH-key admin provisioning) · React 18 + React Router 7 · dual webpack apps (main + admin) · nginx + ufw deploy scripts |
| **cv** | solo | Personal portfolio website + `job-watcher` tool | Next.js static export · i18n routing · JSON-LD · GitHub Actions → Pages · zero-dep Node CLI/scraper |
| **TinyPanel-Studio** | solo | Open-source studio to build/flash/stream Canvas apps to ESP32 displays | Node server · CodeMirror · hybrid Canvas renderer + RGB565 · **ACK-controlled TCP** streaming · JPEG frame transport · PlatformIO firmware builds + browser flashing · ffmpeg |
| **bro** | solo | From-scratch minimal web browser | **Rust** |
| **arduino** | solo | ESP32 / Arduino sketches (each with its own README) | ESP32-C3 · SPI TFT (ST7735) · WiFi crypto ticker w/ candlestick chart · pseudo-3D demo |
| **wroom-wroom** | local | Multi-protocol RF/RFID bench firmware | PlatformIO · **ESP32-S3** (16MB/8MB PSRAM) · **PN532** (13.56 MHz NFC) · **RDM6300** (125 kHz RFID) · **CC1101** (sub-GHz RF) · ST7789 · ULN2803A driver |
| **wt32** | local | Wired-Ethernet UART↔TCP bridge between field stations | PlatformIO · **WT32-ETH01** (ESP32 + LAN8720A PHY) · dual TCP server/client per node · IP-based arbitration · 4 KB ring buffer · auto-reconnect |
| **FPV** | local | FPV drone build | **Betaflight** + **iNav** flight-controller firmware · **ELRS** link · parametric **OpenSCAD** 3D-printed mounts |
| **smart-band** | solo | Xiaomi Band 9 Pro reverse-engineering notes + tooling | **BLE** V2 handshake · auth-key pairing · RPK/quick-app format · Vela/NuttX · `aiot-toolkit` SDK + emulator · Gadgetbridge |
| **reser** | local | Android APK decompile / patch / recompile workflow | **apktool** · **Smali** bytecode · AXML · jadx-gui · uber-apk-signer · split-APK · adb · package renaming |
| **ai** | local | Web UI client for a local diffusion model (Draw Things) | Python service over **gRPC** · built web frontend · venv + launcher script |
| **range** | local | Personal offensive-security / load-testing lab | **Bun** · raw `net`/`tls` sockets · custom HTTP-flood + **Slowloris** · proxy-rotation manager · THC-Hydra wrapper · live terminal dashboard |
| **search-home-page** | solo | Browser new-tab page: Google search with Russian results filtered out | Vanilla JS · webpack 5 + Babel · themes · search history |
| **bash / local-setup / tools** | solo | Personal shell scripts (system, AI-agent usage, memory) | Bash |
| **carlink** | devops | Car-data API — Olexandr did the **DevOps** (containerization, deploy, dev tunneling); API code by M. Zinchenko | Docker Compose dev/prod overrides · deploy script · ngrok · (app: Express · TypeORM + migrations · firebase-admin · blurhash) |
| **telefony** | local | Xiaomi phone recovery / flashing notes | fastboot / recovery |

### `x1` workstation — `~/allProjs` (ops / homelab / extra projects)

| Project | Own | What it is | Stack / what it demonstrates |
|---|---|---|---|
| **fto** | solo | Crypto financial charting + market-analysis platform | Monorepo (fe/be/shared) · **Bun + Hono** + **Mongoose/MongoDB** · React 18 + Webpack + **Canvas** OHLCV charts · Docker Compose (dev/prod/remote-dev) · self-hosted on x1. The Ruby `pd_detector` component was written by a friend he shared the project with; the rest is his. Planned: multi-metric ensemble incl. **multi-AI-agent forecasting**, news, cross-pair correlation, funding/liquidations/order-book history |
| **telegram_bot** | solo/local | Private Telegram bot to run & monitor the x1 server | **Flask** HTTP API + `python-telegram-bot` · **Telegram Mini App** (terminal UI; `initData` HMAC verification) · `/ai` runs a local **opencode** agent · `/status` (uptime/disk/RAM/tailscale) · arbitrary msg → bash · **SSH reverse tunnel** to `localhost.run` for a public HTTPS URL · Tailnet URLs |
| **xiaomi** | local | Umbrella for the Xiaomi wearable RE work (`smart-band` repo is the published subset) | APK decompile (jadx, apktool) · **Xiaomi Quick App / HAP toolkit** + RPK/manifest schema · **Lua watchface** dev + `mi-watchface-uploader` · `xiaomi-auth-sdk` · **ADB tooling** (`node-adb`, `reconnect-adb.sh`) · Gadgetbridge / Watchdrip |
| **homelab (x1)** | — | Self-hosted services on the ops box | **Pi-hole** (docker — network DNS ad-blocking) · **Minecraft** dedicated server · **Tailscale** mesh VPN (tailnet across laptop/x1/droplets) · **Veronica Control Center** runs here (hits the DigitalOcean API) · automated **port_AI backups** (`backup-portai.sh` → zstd/gzip archives + SHA-256 verification) · Claude Code / OpenCode / Codex / Copilot / Gemini CLIs all installed |

---

## 1. Languages

| Skill | Tier | Evidence |
|---|---|---|
| JavaScript | **Core** | 8+ yrs, every job & project |
| TypeScript | **Core** | Primary since ~2020 — port_AI, veronica, radiosniper, this CV, all recent apps |
| SQL (PostgreSQL, incl. PostGIS) | **Strong** | veronica (raw `pg`, hand-written migrations, recursive cost recalculation); port_AI (Knex + PostGIS spatial); radiosniper/carlink (TypeORM) |
| Bash / Shell | **Strong** | veronica + alter-space + radiosniper deploy frameworks, `Sany18/bash`, job-watcher, CI |
| C / C++ | **Working** | ESP32/Arduino firmware — arduino, wroom-wroom, wt32, TinyPanel |
| Python | **Working** | `telegram_bot` (Flask API + `python-telegram-bot`), `ai` (gRPC client + web build), tooling scripts |
| Rust | **Exploratory** | `bro` — from-scratch browser |
| Lua | **Exploratory** | `xiaomi` — Mi Watch Lua watchfaces |
| Smali (Dalvik bytecode) | **Exploratory** | `reser` — APK patching |
| C# | *Archived* | NovuMedical accounting app, 2016–2018 — work history only |
| Ruby | *Archived* | MileStep RoR / Jekyll, 2018–2020 — work history only (the `fto/pd_detector` service was written by a friend, not him) |

## 2. Front-end frameworks & UI

| Skill | Tier | Evidence |
|---|---|---|
| Angular | **Core** | SPD-Technology; **port_AI = Angular 20** (latest) + Material + CDK |
| React | **Core** | port_AI n/a; veronica (19 + 18), radiosniper, note-keeper, meadowkeep (19), SPD, MileStep, Alter Space |
| Next.js | **Strong** | veronica storefront (15, App Router, SSR/SSG) + this CV (static export, i18n) |
| Vite | **Strong** | veronica admin + control-center, meadowkeep, note-keeper, screen-saver — multiple production SPAs |
| NgRx | **Strong** | port_AI (store + effects + devtools) on a large Angular 20 app |
| RxJS | **Strong** | Angular reactive architecture (port_AI, SPD) |
| Zustand | **Strong** | veronica — client, admin, control-center |
| TanStack Query (React Query) | **Strong** | veronica — all three frontends |
| Recoil | **Working** | note-keeper state |
| Redux / Redux Toolkit | **Working** | React global state; veronica admin |
| React Router | **Strong** | veronica, radiosniper (v7), note-keeper (v6) |
| SCSS / SASS | **Strong** | deep — mixins, architecture; this CV, SPD, radiosniper, meadowkeep |
| CSS Modules | **Strong** | veronica client site |
| CSS design tokens + BEM | **Strong** | veronica admin — token system, strict BEM, PostCSS custom-media |
| Tailwind CSS | **Working** | utility-first styling |
| Material UI / Angular Material (+ CDK) | **Working** | port_AI, other component-library work |
| styled-components | **Working** | CSS-in-JS |
| TanStack Table | **Working** | veronica admin grids |
| FullCalendar | **Working** | veronica admin scheduling |
| Highcharts | **Working** | port_AI charts |
| ngx-translate / i18n | **Strong** | port_AI (ngx-translate), this CV + veronica (locale routing, glossary-driven copy) |
| PWA / service workers | **Strong** | note-keeper (versioned SW + release bumps), meadowkeep, veronica, listed CV skill |
| React Native / Expo | **Working** | MileStep apps, Froth (Play + App Store release & support) |
| Web performance / Core Web Vitals | **Strong** | explicit SPD responsibility; droplet memory tuning; web-vitals in radiosniper |
| Accessibility (a11y) | **Working** | ARIA, semantic markup, Lighthouse |
| SEO (SSR/SSG, sitemaps, structured data) | **Working** | veronica (SSR catalog, sitemap ping, Google Merchant feed); JSON-LD on this CV |
| jQuery / Parallax.js | **Working** | MileStep, Milestep parallax site — dated but real |
| Webpack | **Strong** | MileStep, SPD, radiosniper (multi-config), synthwave, search-home-page |
| CodeMirror | **Working** | TinyPanel live editor |

## 3. 3D / Graphics / Games / GIS

| Skill | Tier | Evidence |
|---|---|---|
| Three.js | **Core** | Spector.AI, Alter Space; **meadowkeep** (BVH, CSG, custom GLSL shaders, GPU particles, procedural world gen), synthwave |
| WebGL / GLSL shaders | **Strong** | custom shader materials in meadowkeep; render optimization |
| Physics engines (cannon-es / CannonJS / oimo) | **Working** | meadowkeep (cannon-es + heightfield collisions), Alter Space, synthwave |
| Procedural generation | **Working** | meadowkeep — Voronoi biomes, hydraulic erosion, chunk streaming + LOD, Poisson-disk scattering |
| Game development | **Working** | meadowkeep (open-world RPG), tetris, synthwave; gta-vc engine port |
| Real-time multiplayer / netcode | **Working** | meadowkeep — Bun WebSocket server; Clyste (WS/WebRTC) |
| WebAssembly / Emscripten | **Working** | gta-vc — running a compiled C++ game engine in-browser |
| Canvas 2D API | **Strong** | canvas-to-console-art, TinyPanel hybrid renderer + RGB565, tetris, `fto` custom OHLCV/candlestick charts |
| Web Audio API | **Working** | synthwave sound visualiser |
| LuciadRIA | **Strong** | InfraCloud / port_AI — core mapping library (RIA 2026) |
| GIS / geo-reference systems | **Strong** | InfraCloud / port_AI — 1.5 yr on the front-end for maps, CRS handling, geotiff rasters, 3D tiles, point clouds |
| Point clouds / 3D Tiles | **Working** | InfraCloud |
| PostGIS (spatial SQL) | **Exploratory** | port_AI codebase — aware of it; backend not his primary work |
| IFC / BIM (web-ifc) | **Exploratory** | port_AI codebase — building-information-model parsing (backend not his primary work) |
| OpenLayers / Leaflet | **Working** | Spector.AI (OpenLayers); veronica (Leaflet delivery zones) |
| GPU.js / OpenCV.js | **Exploratory** | Spector.AI compute / CV experiments |
| Parametric CAD (OpenSCAD) | **Exploratory** | FPV — 3D-printed drone mounts |
| Data viz — SVG / custom Canvas / Highcharts | **Working** | ESP32 candlestick chart, veronica schema-diagram generator, port_AI Highcharts |

## 4. Back-end / Platform

| Skill | Tier | Evidence |
|---|---|---|
| Node.js | **Strong** | veronica, radiosniper, Alter Space servers, tooling; carlink (devops) |
| Bun (runtime) | **Working** | `fto` backend (Bun + Hono), meadowkeep WS server, gta-vc server, `range` |
| NestJS | **Working** | radiosniper (11, solo — DI, guards, throttler, JWT/Passport, TypeORM); occasional backend fixes/optimization on port_AI's NestJS API over 1.5 yr |
| Fastify | **Strong** | veronica API — plugins, route/plugin/middleware split, JSON-schema validation |
| Hono | **Working** | `fto` backend — replaced a legacy Express impl after route-parity migration |
| Express.js | **Strong** | Alter Space, job-watcher; listed CV skill (carlink app is Express but authored by another) |
| Flask | **Working** | `telegram_bot` — HMAC-verified API + Telegram Mini App server on x1 |
| REST API design | **Strong** | veronica (versioned, envelope, full status taxonomy, public + admin); radiosniper (solo); port_AI (consumed + occasionally fixed) |
| API security & reliability patterns | **Strong** | veronica — JWT+refresh, RBAC (7 roles), 2FA, HMAC webhooks, CSP+nonce, Idempotency-Key, correlation IDs, Outbox, rate limiting, audit log |
| Auth — JWT / Passport / refresh / 2FA | **Strong** | veronica (JWT+refresh+2FA, HMAC webhooks — solo), radiosniper (Passport-JWT — solo) |
| OAuth2 / OpenID Connect / Keycloak | **Working** | port_AI — client-side integration (keycloak-angular / keycloak-js) + 1.5 yr working in a Keycloak-secured system; did not operate the IdP |
| BullMQ (queues / workers) | **Strong** | veronica — outbox, payment sync, notifications, video, retention workers |
| Redis | **Strong** | veronica — cache, sessions, rate-limit, idempotency locks, BullMQ store |
| ORM — TypeORM / Mongoose | **Working** | radiosniper (TypeORM — migrations, seeds, dev/prod); `fto` (Mongoose ODM) |
| Query builder — Knex | **Exploratory** | port_AI codebase (backend not his primary work) |
| Zod | **Strong** | veronica — validation across API + shared + MCP server |
| WebSockets (ws / Socket.io) | **Strong** | Clyste, meadowkeep multiplayer, TinyPanel TCP transport, Alter Space |
| Server-Sent Events (SSE) | **Working** | veronica — live order feed, webchat |
| WebRTC | **Working** | Clyste — video calls & chat |
| gRPC | **Working** | `ai` — client for a local diffusion model's gRPC API |
| GraphQL | **Working** | schema / resolvers (Apollo) |
| Raw TCP / sockets / binary protocols | **Working** | TinyPanel (RGB565 over ACK'd TCP), wt32 (dual TCP nodes + ring buffer), `range` (raw net/tls) |
| SSH reverse tunnels / ad-hoc public endpoints | **Working** | `telegram_bot` — `ssh -R` to `localhost.run`; ngrok on carlink |
| Transactional email (nodemailer) | **Working** | veronica — SMTP, templates |
| Media processing — Sharp / fluent-ffmpeg / pdfkit / blurhash | **Working** | veronica (images/video/PDF), radiosniper (sharp), carlink (blurhash) |
| Spreadsheet export (ExcelJS) | **Exploratory** | port_AI excel-exporter (backend not his primary work) |
| Ruby on Rails / Jekyll | *Archived* | MileStep 2018–2020 — work history only |

## 5. Databases / Storage

| Skill | Tier | Evidence |
|---|---|---|
| PostgreSQL | **Strong** | veronica (Postgres 16 — hand-written migrations, recursive recalculation, finance aggregation), radiosniper (solo, TypeORM) |
| Redis | **Strong** | veronica (see Back-end) |
| MySQL / MariaDB | **Working** | RoR era + NovuMedical |
| MongoDB | **Working** | `fto` — Mongoose ODM, primary store; Compass for admin |
| SQLite | **Working** | embedded DB |
| Firebase / Firestore | **Working** | note-keeper (auth + DB), carlink (firebase-admin) |
| Supabase | **Working** | BaaS |
| Object storage — S3 API (via DigitalOcean Spaces) | **Working** | veronica — `@aws-sdk/client-s3` for product media + CDN, S3-based backups (solo) |

## 6. DevOps / Infrastructure / Cloud

| Skill | Tier | Evidence |
|---|---|---|
| Ubuntu / Linux server administration | **Strong** | *(self-assessed high)* veronica multi-host fleet, radiosniper + alter-space deploy targets — provisioning, systemd, apt, users/perms, `ufw`, private networking, resource-budget tuning; Ubuntu on Lenovo A390t phone; HP T5740 thin-client home servers |
| Docker | **Strong** | veronica, port_AI, radiosniper, carlink — locally-built images, multi-stage |
| Docker Compose | **Strong** | veronica (6 files), carlink (DevOps — dev/prod overrides), radiosniper; port_AI multi-service stack |
| NGINX | **Strong** | veronica (public bastion + TLS edge, stream/service configs, blue-green upstream flips); alter-space (`absolute_redirect off`, Firebase auth proxy, SW cache rules, WS proxy, WASM asset shaping); radiosniper |
| SSH (bastion / jump-host / key automation) | **Strong** | veronica `ssh -J` topology; radiosniper `sshpk` remote admin-key generation; per-target host resolution |
| CI/CD & deploy automation | **Strong** | veronica custom Bash framework (rsync, git-diff gating, test gate, blue-green, rollback, log-scan); alter-space `deploy-all.sh` orchestrator; GitHub Actions (this CV → Pages); GitLab CI (port_AI, SPD, MileStep) |
| Blue-green / zero-downtime deploys | **Working** | veronica — alt-port container, health-check, nginx upstream flip |
| UFW / firewall management | **Working** | veronica per-host allow-lists keyed to internal IPs; radiosniper |
| Let's Encrypt / TLS | **Working** | veronica SSL bootstrap; Cloudflare TLS termination in front of nginx |
| DigitalOcean (Droplets, Spaces, CDN, private networking) | **Working** | veronica production hosting |
| AWS SDK (SNS, SQS, CloudFront signing, Cognito, ECR) | **Exploratory** | present in the port_AI codebase; Olexandr's work there was front-end / maps / 3D, not the AWS-integrated backend |
| Cloudflare (DNS, CDN, TLS, Turnstile, cache-purge API) | **Working** | veronica + alter-space edge; API-driven cache purge in deploy flows |
| CapRover (PaaS) | **Exploratory** | port_AI `captain-definition` (deployment not his area) |
| Keycloak (self-hosted IdP) | **Exploratory** | 1.5 yr inside a Keycloak-secured system (port_AI); integrated on the client, did not operate the IdP |
| ngrok | **Working** | carlink — dev tunneling |
| pnpm workspaces (monorepo) | **Strong** | veronica, port_AI, meadowkeep |
| Testing — Vitest / Jest / Testing Library / Playwright / Cypress | **Strong** | Vitest + Jest across veronica/port_AI/radiosniper; Playwright E2E (veronica admin, meadowkeep); Testing Library (note-keeper, veronica); Cypress elsewhere |
| Lint/format tooling — ESLint, oxlint/oxfmt, Prettier, Husky | **Working** | port_AI (Rust-based oxlint/oxfmt + Husky pre-commit), this repo, veronica |
| Secret scanning (trufflehog) | **Working** | port_AI pre-commit gate |
| Observability — Prometheus / node_exporter / cAdvisor / Uptime Kuma | **Working** | veronica Control Center |
| Error tracking — GlitchTip / self-hosted Sentry | **Working** | veronica error-tracker service |
| Self-hosting third-party services | **Working** | veronica (Evolution API, GlitchTip, Uptime Kuma, Prometheus); x1 homelab (Pi-hole DNS ad-blocking, Minecraft server, `fto`) |
| Tailscale (mesh VPN / tailnet) | **Working** | private addressing across laptop, x1, and droplets — SSH, Control Center, bot API |
| Backups / DR | **Working** | veronica Postgres dump/restore + media→S3 + backup-status monitoring; `backup-portai.sh` on x1 — zstd/gzip archives + SHA-256 verification |
| Docs generation (Compodoc) | **Working** | port_AI Angular docs |
| Kubernetes | *Gap* | not used |
| Terraform / Ansible / full IaC | *Gap* | infra is scripted Bash + Compose, not declarative IaC |

## 7. Architecture / Delivery

| Skill | Tier | Evidence |
|---|---|---|
| Full-stack architecture | **Strong** | veronica — entire e-commerce + CRM/ERP platform solo, front to infra; radiosniper solo full-stack |
| Domain-driven / modular design | **Strong** | veronica (`<domain>.<segment>.ts`, `shared` as single source of truth); port_AI (feature-modular NestJS) |
| Event-driven / integration architecture | **Strong** | veronica — domain events → Outbox → workers → channel adapters; at-least-once + idempotency; SMS→email fallback |
| RBAC / authn / authz | **Strong** | veronica (7 roles incl. additive `owner`, `usePermission`, guards, 2FA); port_AI (Keycloak roles from JWT claims) |
| Multi-tenant architecture | **Working** | founding-engineer contractor isolation; veronica Control Center multi-brand future track |
| E-commerce / CRM systems | **Strong** | veronica — catalog, cart, guest checkout, orders, refunds, payment links, conversations/webchat, order cards |
| Inventory / ERP-style logic | **Working** | veronica — BOM/recipe costing, stocktaking acts, warehouse receipts, multi-location stock, write-offs, unit-cost snapshots, price history |
| Pricing-engine design | **Working** | veronica — cost-price modes, recursive BOM recalculation, order-level overrides, auditable snapshots |
| Payments integration | **Working** | veronica — WayForPay sessions, HMAC-MD5 signing, webhook sync, Refund API |
| Geospatial / infra-inspection domain | **Strong** | InfraCloud / port_AI — 1.5 yr on the front-end for damage / annotation / inspection workflows, maps, point clouds, 3D tiles |
| Performance optimization / debugging complex issues | **Strong** | explicit SPD responsibility; on InfraCloud, the person pulled in to optimize and fix hard cross-stack bugs (incl. backend he didn't normally touch); veronica droplet tuning; meadowkeep LOD/streaming |
| Technical documentation | **Strong** | veronica `plan/` specs + self-maintaining `.github/instructions/*`; meadowkeep migration plan; detailed repo READMEs |
| Estimation / scoping | **Working** | SPD-Technology — project time estimation |
| Single-operator ops model | **Working** | veronica — dev+prod, smoke-check per deploy, documented rollback per service |

## 8. Integrations / Third-Party APIs

| Skill | Tier | Evidence |
|---|---|---|
| WayForPay (payments) | **Working** | veronica — sessions, webhooks, refunds, HMAC |
| Cloudflare Turnstile | **Working** | veronica — invisible anti-bot on checkout/auth/callback |
| Telegram Bot API | **Working** | veronica — CRM notifications, webhook secret, RBAC + per-location filtering |
| Evolution API (self-hosted WhatsApp) | **Working** | veronica — dedicated droplet, QR pairing, webhook ingestion |
| Instagram Graph API | **Working** | veronica — media import, comment handling |
| Dilovod (UA accounting) | **Working** | veronica — component + contragent import |
| Google — Sign-In, Merchant Center / Shopping feed, Search Console API | **Working** | veronica — GSI, product feed, sitemap ping |
| GTM / Meta Pixel / Google Ads (consent-gated) | **Working** | veronica — CSP-allowlisted, consent-gated analytics |
| Firebase Auth (redirect flow, cross-origin) | **Working** | note-keeper — nginx `/__/auth/` proxy to keep redirect auth on-origin |
| DroneDeploy extension | **Working** | Spector.AI |

## 9. AI / LLM & agentic tooling

| Skill | Tier | Evidence |
|---|---|---|
| AI coding agents / CLIs | **Strong** | **Claude Code, OpenCode, OpenAI Codex CLI, GitHub Copilot CLI, Google Antigravity / Gemini** — all installed & used on x1 and the laptop, pair programming & engineering automation across cv, veronica, port_AI, fto, note-keeper, carlink, ai, reser |
| Multi-agent orchestration & subagents | **Strong** | Task decomposition into specialized roles (researcher, planner, coder, reviewer), context sharing, handoffs, parallel agent coordination, prompt chaining |
| AI Output Validation & Quality Gates | **Strong** | Strict schema validation (Zod, structured outputs), automated test-gated execution (Vitest, Jest, Playwright before commits/deploys), linter gates (oxlint/ESLint), hallucination mitigation, human-in-the-loop review |
| Agent-instruction engineering & context design | **Strong** | veronica `CLAUDE.md`/`AGENTS.md` + self-maintaining `.github/instructions/*`; `.mcp.json`; dynamic context priming, per-repo instructions in port_AI, fto, carlink, reser, wt32, note-keeper, search-home-page |
| MCP (Model Context Protocol) server development | **Working** | veronica `apps/mcp-server` — `@modelcontextprotocol/sdk`, stdio transport, Zod-typed tools for DB/API tool access |
| Embedding an agent into a service | **Working** | `telegram_bot` — `/ai` command shells out to a non-interactive `opencode` run behind an HMAC-verified API; runtime isolation |
| Multi-agent forecasting design | **Exploratory** | `fto` — planned ensemble where several AI agents each return an independent directional index (`agent-orchestration-plan.md`) |
| Prompt engineering / pipeline automation | **Working** | Prompt-driven scripts, `local-setup/agent-usage.sh`, reproducible migration and codegen pipelines |
| Local image-gen & ML models over API | **Working** | `ai` — web UI client for Draw Things' gRPC server; built + bundled the frontend; Ollama / llama.cpp exploration |
| LLM API integration in shipped products (RAG, embeddings, agents) | *Emerging* | not yet a product claim |

## 10. Browser extensions / userscripts / automation / scraping

| Skill | Tier | Evidence |
|---|---|---|
| Chrome extensions / new-tab pages | **Working** | Spector.AI DroneDeploy extension; `search-home-page`; listed CV skill |
| Userscripts / Tampermonkey | **Working** | listed CV skill |
| CLI tools / internal tooling | **Strong** | veronica deploy + MCP + Control Center; job-watcher (zero-dep CLI + server); `Sany18/bash` |
| Web scraping / parsers / bots | **Working** | job-watcher regex parsers, Djinni scraper |

## 11. Embedded / IoT / hardware — *dedicated professional block (per survey)*

| Skill | Tier | Evidence |
|---|---|---|
| Firmware — C/C++, PlatformIO, ESP-IDF, Arduino | **Working** | ~3+ yrs ongoing — arduino, wroom-wroom, wt32, TinyPanel |
| ESP32 family (C3, S3 w/ PSRAM) | **Working** | TinyPanel (C3), wroom-wroom (S3 N16R8), arduino |
| Wired Ethernet on MCU (LAN8720A PHY) | **Working** | wt32 — WT32-ETH01 UART↔TCP bridge, dual server/client nodes, ring buffer, auto-reconnect |
| Sub-GHz RF (CC1101) | **Working** | wroom-wroom — SmartRC-CC1101 driver, multi-band transceiver bench |
| NFC / RFID (PN532 13.56 MHz, RDM6300 125 kHz) | **Working** | wroom-wroom |
| Radio / RF / signals — TDOA, RF modules, antennas | **Working** | NovuMedical — TDOA noise-direction detector, RF plane-tail module |
| SPI TFT display drivers — ST7735/S, ST7789, ILI9341, ILI9486 | **Working** | multiple builds; `fbcp-ili9341` fork; blog write-ups |
| RGB565 graphics / framebuffer streaming | **Working** | TinyPanel display-client architecture |
| FPV drones — Betaflight / iNav / ELRS | **Working** | FPV build — flight-controller firmware config, ELRS link |
| BLE protocols / reverse engineering | **Working** | smart-band / `xiaomi` — Band 9 Pro V2 handshake, auth-key pairing, RPK format, Vela/NuttX, `aiot-toolkit` |
| Xiaomi Quick App / HAP hybrid platform + RPK | **Working** | `xiaomi` — `hap-toolkit`, `quickapp-docs`, manifest JSON schema, decompiled sample apps |
| Mi Watch Lua watchface development | **Working** | `xiaomi` — `MiWatchLuaWatchfaces`, `mi-watchface-uploader`, `EasyFace` |
| ADB / Android device tooling | **Working** | `xiaomi` — `node-adb`, `adb-tools`, `reconnect-adb.sh`; `reser` install flow |
| Drone photogrammetry / photo-scan projection | **Working** | "online IoT and drone photo scans with projected representation" |
| Linux SBC / Raspberry Pi | **Working** | Pi 3B+ + SPI TFT; `fbcp-ili9341`; blog |
| Electronics repair / soldering | **Working** | NovuMedical branded-equipment repair; SkyRC charger screen swap, GVDA iron repair (blog) |
| Home server / self-hosting | **Working** | HP T5740 thin-client Ubuntu server; veronica service fleet |
| Mobile Linux / phone flashing | **Exploratory** | Ubuntu on Lenovo A390t (Android 4); `telefony` Xiaomi recovery notes |

## 12. Reverse engineering / security (personal research)

| Skill | Tier | Evidence |
|---|---|---|
| Android app RE — apktool, Smali, jadx, AXML, APK resign/split | **Working** | `reser` — decompile/patch/recompile workflow for a real app; `xiaomi/decompiled` (22 apps) |
| Game-engine porting | **Working** | `gta-vc` — reVC/revcDOS WebAssembly build served in-browser |
| Wearable / BLE protocol RE | **Working** | `smart-band` / `xiaomi` — full toolkit: HAP/RPK, auth SDK, watchface pipeline, Gadgetbridge/Watchdrip |
| Network / load-testing tooling | **Exploratory** | `range` — raw-socket HTTP flood, Slowloris, proxy rotation, Hydra wrapper (personal lab) |
| Secret scanning / supply-chain hygiene | **Working** | trufflehog pre-commit gates on port_AI |

## 13. Methodologies / collaboration

| Skill | Tier | Evidence |
|---|---|---|
| Scrum / Kanban / Agile | **Working** | SPD-Technology — sprints, daily/weekly reports, roadmap participation |
| Code review | **Strong** | explicit SPD-Technology responsibility |
| Mentoring / consultations | **Working** | SPD-Technology — conducting consultations |
| Direct client communication | **Strong** | MileStep, SPD, founding-engineer |
| Requirements & roadmap shaping | **Working** | SPD-Technology; veronica `plan/` authored before build; meadowkeep migration plan |
| Technical writing / blogging | **Working** | `hoxzy.blogspot.com`, Medium `@parubok.sashko` |

## 14. Domains

3D web apps · geospatial / infrastructure inspection (GIS, PostGIS, LuciadRIA, IFC/BIM) ·
industrial asset inspection (AI platform) · drone data · **e-commerce (full platform)** ·
**CRM / customer messaging** · **inventory & pricing / ERP back office** · payments & refunds ·
**crypto / financial market analysis** (OHLCV/TA, pump-dump detection, funding & liquidations,
order-book history, backtesting) · open-world game engines · social platforms (video/chat) ·
IoT / wearables / RF · FPV · homelab / self-hosting.

## 15. Spoken languages

- **Ukrainian** — native
- **English** — Advanced (C1)
- *Russian — prefer to avoid*

## 16. Education

- **Cherkasy State Technological University** — Bachelor's, *Economics and Management:
  Economic Cybernetics*, 2011–2015.

## 17. Achievements / signals

- Solo-designed, built, deployed, and operates **veronica** — a production e-commerce + CRM/ERP
  platform with its own multi-host infra and blue-green pipeline; ~100% uptime.
- **alter-space.biz.ua** — self-hosted playground incl. an in-progress procedural open-world
  3D RPG and a browser WASM port of a full C++ game engine.
- **fto** — self-built crypto market-analysis platform (Bun/Hono + Mongo, custom Canvas charts);
  **telegram_bot** — runs & monitors the x1 server end-to-end from Telegram.
- Open-source maintainer: **TinyPanel-Studio** (ESP32 display platform).
- GitHub: Arctic Code Vault Contributor, Pull Shark ×2, Quickdraw.

---

## Not featured (kept in work history only, per 2026-08-27 survey)

- **Ruby / Rails / Jekyll** — 2018–2020 at MileStep; Experience section only. Not a current
  skill (the `pd_detector` service in `fto` was written by a friend).
- **C# / MySQL (radio-engineer role)** — Experience only; not a current skill.
- **GPU.js / OpenCV.js** — narrow single-project experiments; keep listed, low priority.

## Notes

- **`port_AI` = the InfraCloud codebase.** Olexandr's ~1.5 yr there was front-end / maps / 3D,
  with occasional backend optimization and hard-bug fixes. Its NestJS / Knex / PostGIS / Keycloak /
  AWS backend is codebase *context*, not attributed work — the tiers above reflect that.
- **`carlink`** — DevOps contribution only (containerization, deploy, tunneling); API by another author.
- **`x1`** is the Ubuntu ops / homelab workstation (`x1-tail`, user `sa`): runs the Veronica
  Control Center, self-hosts Pi-hole + Minecraft + `fto`, holds the `port_AI` backups, and is
  the second `~/allProjs` checkout (`fto`, `telegram_bot`, `xiaomi` live only here).
- **`range`** and the offensive-security tooling stay an internal note, not for an outward-facing CV.
- Stack Overflow / LinkedIn endorsements — skipped per Olexandr.
