# Job Watcher

Local-only page that polls a few job platforms and flags postings you haven't seen before.
Built for the sources noted in [docs/job_platforms.md](../docs/job_platforms.md).

## Sources
- **Djinni** — HTML scrape (no public API exists). Searches `config.mjs` → `djinni.keywords`.
- **DOU** — official per-category RSS feed (`jobs.dou.ua/vacancies/feeds/?category=...`).
- **RemoteOK** — official public JSON API (`remoteok.com/api`).
- **We Work Remotely** — official per-category RSS feed.

Edit `config.mjs` to change keywords/categories per source, or disable a source entirely.

## Run it

```
cd job-watcher
node fetch-jobs.mjs   # first fetch — establishes the baseline (nothing marked NEW yet)
npm start              # serves the page at http://localhost:4173
```

Open http://localhost:4173. Use "Refresh now" to poll again — anything that showed up since
the last check is flagged **NEW** (stays flagged for 3 days, see `newWindowMs` in `config.mjs`).
The page also auto-refreshes every 15 minutes while open.

## Skill match

`fetch-jobs.mjs` tags each job with which of your skills its text mentions (curated tech
vocabulary in `skill-match.mjs`, weighted by tier — roughly in sync with
[`../docs/skills.md`](../docs/skills.md)). It matches the title + feed description + any
already-scraped detail (`data/details/`) — no extra network. Each card shows a **⚡N** badge
(N = matched skills, tooltip = weighted score) and up to 6 skill chips. The controls bar has
**skills ≥ N** (hide weak matches) and **sort by skill match** (order everything by score);
both persist in `localStorage`. Disable the whole thing with `skillMatch.enabled: false` in
`config.mjs`.

## Columns

Jobs are organized into three columns: **Inbox** (everything new/unsorted), **Visited**
(clicking a job's title opens it and moves the card here automatically), and **Interesting**
(drag a card here yourself, or use its "Not interesting" button's opposite — drag it in —
to shortlist it). A fourth section, **Not interesting**, is collapsed by default; click its
header to expand it. Use each card's "Not interesting" button (or drag it into that section)
to archive a posting there, and "Restore" (or drag back out) to bring it back to Inbox.
Drag cards between any of the four areas to reclassify them at any time.
This state lives in the browser's `localStorage`, keyed by job id, so it survives refreshes
but is per-browser (not synced anywhere).

To refresh in the background instead (e.g. via cron) without keeping the page open:
```
node fetch-jobs.mjs
```
`data/jobs.json` and `data/seen.json` are gitignored — they're local state, not something to commit.

## CV generator

Each job card has a **Generate CV** button. It scrapes the full posting text, then asks **every
configured backend, in parallel**, to rewrite the CV in [`../docs/profile.md`](../docs/profile.md)
+ [`../docs/skills.md`](../docs/skills.md) for that specific role and produce a **match report**
(requirement-by-requirement coverage + honest gaps). You get one version per backend so you can
compare them (the modal has a tab per backend, plus **Copy** / **Download .md** / **PDF** —
PDF opens a print view of the pane you're viewing, where you pick "Save as PDF"). Output is
English Markdown, saved to
`job-watcher/data/cv/<slug>/<backend>/` (`cv.md`, `match.md`) plus `<slug>/job.json`. Nothing is
uploaded anywhere except the LLM calls.

Generated CVs are **bound to the job card**: `data/cv/index.json` maps job id → slug, so a card
that already has a CV shows a **CV** badge and a **View CV (N)** button (N = versions that
succeeded) that re-opens the saved versions without regenerating, plus **↻** to regenerate
(force, bypassing the cache). The binding survives page reloads and `Refresh now`, and
`index.json` is self-healing — on every load it reconciles with the `data/cv/<slug>/` dirs on
disk, so CVs generated before the index existed (or after it was edited/deleted) still show up.

CLI equivalent:
```
node generate-cv.mjs <job-id | full-url | "text from a title/company"> [--force] [--backends a,b]
```

**Backends** — `config.mjs` → `cv.backends`, default `claude` (`claude -p`, prompt on stdin) +
`antigravity` (`agy -p`, prompt as an argument). You get one version per backend, side by side
(a tab per backend in the modal). Each entry:
- `command` — the literal `"api"` (Anthropic Messages API — needs `ANTHROPIC_API_KEY`;
  model/thinking/refusal-fallback under `cv`), or a CLI command.
- `promptVia` — `"stdin"` (default; the prompt is piped in) or `"arg"` (the prompt is appended
  as a command argument, no shell — for CLIs like `agy` that don't read stdin).

A backend that isn't installed just shows an error for its version; the others still run.
Override without editing the file (`arg:` prefix = `promptVia: "arg"`):
```
CV_BACKENDS="claude=claude -p,ag=arg:agy -p,api=api"   # full list
CV_LLM_CMD="claude -p"                                  # single backend shorthand
```

**Local cache** — `data/cv-cache/<hash>.json`, keyed by *backend + model + a hash of the profile
docs + the whitespace-normalised job description*. Postings repeat the same description across
boards and reposts; an exact (post-normalisation) match reuses the cached version instead of
re-generating. Editing `profile.md` / `skills.md` invalidates it. `--force` (CLI) or the button's
force path bypasses it.

The source-of-truth docs are English only, so generated CVs are English regardless of the
posting's language. `data/details/`, `data/cv/` and `data/cv-cache/` are gitignored.

## Notes / caveats
- Djinni has no public API, so that fetcher scrapes the public search results page. It's for
  personal, low-frequency polling only (respect their `robots.txt` / ToS if you plan to run this
  more aggressively than manually clicking refresh).
- RemoteOK's API terms ask API consumers to link back to remoteok.com — this tool links directly
  to each job's original page, which covers that.
- No third-party dependencies — everything is done with Node's built-in `fetch` and a couple of
  small regex-based parsers in `lib.mjs` / `sources.mjs`.
