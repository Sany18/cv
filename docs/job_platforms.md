# Job Search Platforms — Notes

*Researched 2026-07-21*

For a developer based in Ukraine, ranked by fit.

## Primary (Ukraine-focused)
- **[Djinni](https://djinni.co)** — top pick. 50,000+ active developers monthly, 28,500+ vacancies (Q3 2025), ~80% remote roles, 2000+ hiring companies (Europe, US, UK, Israel). Anonymous search, direct recruiter chat. Surpassed LinkedIn in popularity among Ukrainian devs in 2020.
- **[DOU.ua](https://jobs.dou.ua)** — community + job board hybrid. Strong for salary surveys, company reviews, and market-pulse content alongside listings.
- **Work.ua** / **Robota.ua** — broader, not IT-specific, but huge volume (4–6M+ visitors). Useful for a wider net beyond tech-specific boards.

## International / remote-focused (complements, not replacements)
- **[Arc.dev](https://arc.dev)** — partners with We Work Remotely, vets candidates; decent for landing Western remote roles as a Ukraine-based dev.
- **[RemoteOK](https://remoteok.com)** — high-volume aggregator; has a public JSON API (`/api`), good fetch target for tooling.
- **[We Work Remotely](https://weworkremotely.com)** — official RSS feeds per category, easy to poll without scraping.
- **AngelList (Wellfound)** — better if targeting startups specifically.
- **LinkedIn** — still matters internationally even though Djinni dominates locally.

## Recommendation
Djinni as primary (best fit for market + most active recruiter traffic), DOU as secondary for market intel, one remote-focused board (Arc or RemoteOK) for Western remote roles.

## Open-source tooling notes
- **[JobSpy](https://github.com/speedyapply/JobSpy)** — Python lib, scrapes LinkedIn/Indeed/Glassdoor/Google Jobs/ZipRecruiter concurrently. Actively maintained but LinkedIn scraping breaks often (site markup changed 3x in 2025).
- **[olgierrd/djinni-vacancies-project](https://github.com/olgierrd/djinni-vacancies-project)** — scrapes Python-related Djinni listings; reference only, not maintained/general-purpose.
- No native RSS/alert feed found for Djinni or DOU — custom polling required.
- RemoteOK (`remoteok.com/api`) and We Work Remotely (per-category `.rss`) both expose official, scrape-free endpoints — preferred over HTML scraping where available.

See [job-watcher/](../job-watcher/) for the local tool built on top of this research.
