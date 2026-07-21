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

To refresh in the background instead (e.g. via cron) without keeping the page open:
```
node fetch-jobs.mjs
```
`data/jobs.json` and `data/seen.json` are gitignored — they're local state, not something to commit.

## Notes / caveats
- Djinni has no public API, so that fetcher scrapes the public search results page. It's for
  personal, low-frequency polling only (respect their `robots.txt` / ToS if you plan to run this
  more aggressively than manually clicking refresh).
- RemoteOK's API terms ask API consumers to link back to remoteok.com — this tool links directly
  to each job's original page, which covers that.
- No third-party dependencies — everything is done with Node's built-in `fetch` and a couple of
  small regex-based parsers in `lib.mjs` / `sources.mjs`.
