# AI Recruiting / Sourcing Tools — Notes

*Researched 2026-07-21*

## How agencies find developers now

Sourcing tools aggregate candidate data from LinkedIn, GitHub, Stack Overflow, and other professional networks, then use AI to match natural-language role briefs against that data — not just keyword search. Many technical candidates are more active on GitHub than LinkedIn, so multi-platform sourcing tools increasingly reach passive candidates who aren't LinkedIn-active.

## Notable tools

- **hireEZ** — aggregates profiles from LinkedIn, GitHub, Stack Overflow, and niche networks; AI-powered natural-language search.
- **SeekOut** — goes beyond LinkedIn to GitHub, Stack Overflow, academic publications, patents. Has a "Coder Score" rating developers on actual code contributions rather than self-reported skills.
- **AmazingHiring** — built for engineering hiring specifically; pulls from 50+ professional networks, including developer-specific ones LinkedIn underweights.
- **Pin** — end-to-end agency platform: sourcing + automated multi-channel outreach + interview scheduling in one tool.

Agencies generally use AI across four workflows: sourcing (scanning multi-source databases), outreach (adaptive multi-channel sequences), scheduling, and pipeline triage.

## What this means for my profile (action items)

- **LinkedIn is still the primary data source.** Keep titles, skills, and "About" section current and specific — generic titles get deprioritized by matchers.
- **GitHub activity is now a real signal**, not just supporting text. Public repos, commit history, and real contributions carry weight. Worth pinning strongest repos.
- **Specific, contextual descriptions beat buzzwords.** E.g. "Built LuciadRIA-based 3D map interface for GIS infrastructure" scores better than "worked with mapping libraries" — AI matchers are tuned to distinguish real depth from generic claims.
- **Structured/machine-readable data helps.** My CV site (sany18.github.io/cv) already emits schema.org `Person` JSON-LD with `knowsAbout`, `hasOccupation`, etc. — worth keeping this in sync with actual current skills, since crawlers/tools can parse it directly.

## Open TODO
- Audit LinkedIn profile + [profile.md](profile.md) for stale titles / thin skill tags / missing keywords that could hurt AI-sourcing visibility.

---
Sources:
- [The top 10 sourcing tools for recruiters in 2026 — Metaview](https://www.metaview.ai/resources/blog/sourcing-tools-for-recruiters)
- [The 7 Best AI Sourcing Tools for Recruiters in 2026 — ClearCompany](https://clearcompany.com/resources/blog/best-ai-sourcing-tools)
- [The 9 Best AI Sourcing Tools for Recruiters in 2026 — Pin](https://www.pin.com/blog/best-ai-sourcing-tools-2026/)
- [How to Recruit Top Developers on GitHub in 2026 — Kula](https://www.kula.ai/blog/github-beginners-guide-source-candidates)
- [12 Best AI Recruiting Sourcing Tools for 2026 — SitePoint](https://www.sitepoint.com/12-best-ai-recruiting-sourcing-tools-for-2026/)
