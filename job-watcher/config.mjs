// Edit this file to change what the watcher looks for.

export const config = {
  // How long (ms) a job stays flagged "NEW" after it's first seen.
  newWindowMs: 3 * 24 * 60 * 60 * 1000, // 3 days

  djinni: {
    enabled: true,
    keywords: ["React", "TypeScript", "Angular", "Three.js"],
  },

  dou: {
    enabled: true,
    categories: ["React", "JavaScript", "Node.js", "Front End"],
  },

  remoteOk: {
    enabled: true,
    // job is kept if any of its RemoteOK tags matches one of these (case-insensitive)
    tags: ["react", "typescript", "javascript", "angular", "frontend", "front-end", "node"],
  },

  weWorkRemotely: {
    enabled: true,
    categories: ["remote-programming-jobs", "remote-front-end-programming-jobs"],
    // WWR categories are broad, so titles are filtered against these keywords
    keywords: ["react", "typescript", "javascript", "angular", "three.js", "frontend", "front-end", "front end", "node"],
  },

  // wide-search.mjs: broad Djinni sweep that keeps only vacancies with few applicants.
  wideSearch: {
    maxApplicants: 10,
    maxAgeDays: 30, // by "updated N days ago"
    pages: 4, // result pages per query (15 or so cards each)
    delayMs: 1000, // pause between requests
    // Your side of Djinni's eligibility check (it hides Apply when you don't qualify)
    profile: {
      remoteOnly: true,
      countries: ["Україна", "Весь світ"], // location text must mention one of these
      maxYears: 8, // years of experience a posting may ask for
    },
    // Djinni's own categories (primary_keyword) — precise, unlike free-text search
    // names must match Djinni exactly; unknown ones are detected and skipped
    primaryKeywords: ["JavaScript", "React.js", "Angular", "Fullstack", "Node.js"],
  },

  // apply-djinni.mjs: slow supervised auto-apply (uses the résumé + note saved in your Djinni profile).
  autoApply: {
    perDay: 15, // hard daily cap across runs
    perRun: 5,
    // titles matching this are never applied to (wrong level or stack)
    excludeTitle: /\b(junior|trainee|intern)\b|\.net|asp\.net|c#|php|interviewer|inactive|неактивна/i,
    // Cover note typed into every application. Djinni does NOT prefill it from your account.
    message: "Hi! I'm a front-end / full-stack engineer with 8+ years in production web, strongest in 3D/GIS visualisation (LuciadRIA, Three.js, WebGL), WebAssembly/WebGPU and React/Angular + TypeScript. Most recently I built and run a production e-commerce + CRM platform end to end (Next.js, React, Fastify, PostgreSQL, LLM chat assistant) and lead WebPorts: 25+ Windows apps and games running in the browser. Live demo: https://demo.alter-space.tech · CV: https://sany18.github.io/cv/en. Happy to talk about how I can help your team.",
    minSkillScore: 3, // from skill-match.mjs
    maxApplicants: 10,
    minPauseMs: 60_000,
    maxPauseMs: 180_000,
  },

  // Tag each job with which of your skills (from docs/resume-skills-experience.json)
  // its text mentions, so the page can filter / sort by fit. Uses feed descriptions
  // + any already-scraped detail (data/details/) — no extra network.
  skillMatch: { enabled: true },

  // Per-vacancy CV generator (see cv-generate.mjs / generate-cv.mjs).
  //
  // Every backend produces its own version of the CV + match report, run in
  // parallel, so you can compare them. A backend's `command` is either the
  // literal "api" (Anthropic Messages API — needs ANTHROPIC_API_KEY) or a shell
  // command the prompt is piped to on stdin.
  //
  // Override the list without editing this file:
  //   CV_BACKENDS="claude=claude -p,oc=opencode run,api=api"
  //   CV_LLM_CMD="opencode run"           (shorthand for a single backend)
  cv: {
    backends: [
      { name: "claude", command: "claude -p" }, // reads the prompt on stdin
      { name: "antigravity", command: "agy -p", promptVia: "arg" }, // takes the prompt as an argument
      // `command` may also be the literal "api" (Anthropic Messages API — needs
      // ANTHROPIC_API_KEY). `promptVia` is "stdin" (default) or "arg".
      //   { name: "api", command: "api" },
    ],
    model: "claude-opus-5", // used only by the "api" backend
    maxOutputTokens: 16000,
    perBackendTimeoutMs: 6 * 60 * 1000,
    // Retry a policy refusal on a second model, transparently ("api" backend only).
    refusalFallback: { enabled: true, model: "claude-opus-4-8" },
    // English source of truth, resolved relative to job-watcher/.
    profileDocs: ["../docs/profile.md", "../docs/skills.md"],
  },
};
