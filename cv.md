# Olexandr Tantsiura
**Senior Front-End / Full-Stack Engineer — Web, 3D, WebAssembly**
Cherkasy, Ukraine — remote (Europe/Kyiv) · Open to remote full-time or B2B contract

parubok.sashko@gmail.com · +380633884959
[LinkedIn](https://www.linkedin.com/in/alexandr-tantsiura-49393a166/) · [GitHub](https://github.com/Sany18) · [CV site](https://sany18.github.io/cv/en) · [Live demo: Windows XP in a browser tab](https://demo.alter-space.tech)

## Summary
Engineer with 8+ years shipping production web applications: 4+ years on React/Angular product teams (Spector.AI, InfraCloud) and, since 2026, end-to-end ownership of whole products as a founding engineer. Strongest at the hard end of the front end — 3D/GIS visualisation (LuciadRIA, Three.js, WebGL), WebAssembly and WebGPU, offline-first PWAs holding gigabytes of data — while comfortable owning the API, database and infrastructure behind it. Recently: a production e-commerce + CRM platform with an omnichannel chat inbox and an LLM-based night assistant, and 25+ browser ports of Windows software, including contributions to a Win32/DirectX → WebGPU runtime. Heavy, disciplined user of AI coding agents (built a 10-agent parallel orchestrator with test-gated review).

## Skills

**Front-end core**
- *Core:* TypeScript, JavaScript, React, Angular
- *Strong:* Next.js (SSR/SSG), Vite, RxJS, NgRx, Zustand, TanStack Query, React Router, SCSS/SASS, CSS Modules, design tokens + BEM, i18n, web performance / Core Web Vitals
- *Working:* Tailwind CSS, Redux Toolkit, Angular Material / MUI, TanStack Table, accessibility (a11y), SEO (SSR/SSG)

**3D / graphics / visualisation**
- *Core:* Three.js
- *Strong:* LuciadRIA (3D/GIS mapping), WebGL / GLSL, Canvas 2D, GIS / coordinate reference systems
- *Working:* WebGPU, point clouds, 3D Tiles, GeoTIFF, Highcharts, OpenLayers / Leaflet

**Browser platform / WebAssembly / porting**
- *Strong:* Service Worker / PWA, offline-first (Cache Storage, OPFS, IndexedDB, Range resume, content-addressed delta updates)
- *Working:* WebAssembly / Emscripten, x86 emulation in the browser (v86, HLE Win32 / DirectX → WebGPU), Wine / Proton, Web Audio, WebSockets, WebRTC, Server-Sent Events

**Back-end / infrastructure (supporting)**
- *Strong:* Node.js, Fastify, Express, REST API design, PostgreSQL, Redis + BullMQ, Docker / Compose, NGINX, Cloudflare, CI/CD & deploy automation (blue-green), Linux server administration
- *Working:* Go, NestJS, Bun, Zod, TypeORM, DigitalOcean, Tailscale, Prometheus / Uptime Kuma / GlitchTip

**AI / LLM**
- *Strong:* AI coding agents (Claude Code, OpenCode, Codex, Gemini), multi-agent orchestration (10 parallel agents: git-worktree isolation, per-agent containers, watchdogs, review gates), output validation & test-gated execution, agent-instruction engineering
- *Working:* LLM integration in a shipped product (multi-provider OpenAI / Gemini / Claude assistant, cost tracking, scenario tests, prompt-injection defences), MCP server development

**Testing / tooling**
- *Strong:* Vitest, Jest, Playwright
- *Working:* Testing Library, Cypress, Webpack, ESLint / oxlint, pnpm monorepos

## Experience

**Founder & Lead Engineer — Alter Space Tech** *(own studio; remote)* — May 2026 – Present
- **Veronica (client product, sole engineer):** designed, built and operate a production e-commerce storefront (Next.js 15, SSR/SSG) plus CRM/ERP admin (React + Vite) on a Fastify / PostgreSQL / Redis + BullMQ API — a pnpm monorepo of six apps with a token-based design system and strict BEM components.
- Built a unified chat inbox (Instagram, Telegram, WhatsApp, SMS, email) bound to orders and customers, with a real-time order feed over SSE, WayForPay payments and RBAC.
- Shipped an LLM-based assistant that answers customers and takes orders overnight: switchable providers/models, per-conversation cost tracking, safety filtering and an automated scenario test suite.
- Owned infrastructure end to end: multi-host DigitalOcean, nginx bastion, Cloudflare, custom blue-green deploy framework with test gates and rollback, monitoring and backups.
- **Software porting:** the studio moves Windows desktop software to the browser, Mac/Linux and tablets without a rewrite; offers fixed-price portability audits built on the WebPorts work below.

**Software Systems Engineer (Web / 3D) — InfraCloud (via MLP)** — Oct 2024 – May 2026
- Built and maintained the map interface of a 3D infrastructure-inspection platform (Angular 20, NgRx, LuciadRIA), turning GIS data, point clouds, GeoTIFF rasters and 3D Tiles into visualisation tools for enterprise users.
- Built inspection dashboards and charts (Highcharts); the go-to person for performance work and hard cross-stack bugs, occasionally fixing the NestJS backend.

**Software Development Engineer (Front-End) — SPD-Technology / Spector.AI** — Nov 2020 – Oct 2024
- Designed and maintained front-end interfaces (Angular, React, Three.js) for Spector.AI, an AI-based industrial asset-inspection platform, including the landing page and a DroneDeploy extension.
- Owned code review, estimation and direct customer communication — daily/weekly reports and roadmap discussions; refactoring, performance optimisation and documentation.

**Full Stack Developer — MileStep LLC** — Sep 2018 – Nov 2020
React / React Native front ends, CI/CD and dockerized deployment across client projects (Ruby on Rails backend); shipped and supported a coffee-ordering app on Google Play and the App Store.

**Radio Engineer — NovuMedical** — Jul 2016 – Jul 2018
Hardware support and internal tooling (C#, MySQL) — pre-software-engineering career start.

## Selected projects
- **WebPorts / Alter Space hub** (2025 – present, lead developer) — classic Windows games and software running in the browser: 25+ released ports done nine different ways: C/C++ → WebAssembly with a replaced platform layer (Cossacks: Win32/DirectX → WebGL2/WebAudio), Delphi → Free Pascal → WASM (Space Rangers HD), full Windows XP in a browser VM (v86), and original .exe files on an HLE Win32/DirectX → WebGPU runtime. Several are playable on phones with touch layouts. Angular hub + Go/PostgreSQL API (Google sign-in, cloud saves), offline downloads of multi-GB games with content-addressed delta updates; ~50 concurrent players on two $6 droplets behind Cloudflare. Volunteers handle Ukrainian translations. *WebAssembly, WebGPU, Service Worker/OPFS, Angular, Go, NGINX.*
- **BottleShip / Alter86 runtime** (open source, contributor) — browser runtime that loads x86 Windows executables and reimplements Win32/COM, DirectDraw and Direct3D 3–9 on WebGPU; my work includes a v86 fork (x87 precision), D3D9 batch scheduling, OPFS staging storage and device-memory-aware streaming.
- **Veronica** — production e-commerce + CRM/ERP platform with omnichannel inbox and LLM night assistant (see Experience). *Next.js 15, React + Vite, Fastify, PostgreSQL, BullMQ.*
- **InfraCloud** — geospatial 3D inspection platform; front end, maps and visualisation. *Angular 20, LuciadRIA, Highcharts, GeoTIFF.*
- **TinyPanel Studio** (open source) — build and stream Canvas apps to ESP32 displays over Wi-Fi (60 fps, RGB565, ACK-controlled TCP), with a browser code editor and in-browser firmware flashing. *Node.js, Canvas, PlatformIO, C++.*
- **Note Keeper** — markdown note-taking PWA with a versioned service worker. *React, Vite, Firebase, Jest + Testing Library.*

## Education
Cherkasy State Technological University — Bachelor's, Economics and Management: Economic Cybernetics (2011–2015)

## Languages
Ukrainian — Native · English — Advanced (C1)
