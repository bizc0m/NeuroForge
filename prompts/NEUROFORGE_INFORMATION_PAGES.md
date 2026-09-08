# NEUROFORGE — GLOBAL INFORMATION PAGES AUDIT & STANDARDIZATION

## Objective

Audit all accessible GitHub projects/repositories, identify their public information pages, then create, correct and standardize those pages according to the Neuro Forge standard.

**Do not modify functional dashboards, business interfaces, tools, applications or working pages.** This procedure concerns information surfaces only: landing/product pages, About, public presentation, onboarding documentation and GitHub Pages presenting the project.

> The dashboard remains the product. The information page presents the product.

## Phase 1 — Mandatory inventory

List all accessible repositories/projects. Detect for each: canonical name, GitHub repo, public/private, active/archive, function, type, README, GitHub Pages, public URL, existing product/info page, functional dashboard, About, EN/FR, icon/logo/screenshots, badges, release, docs, disclaimer, acknowledgements, support, GitHub Topics, Neuro Forge standard and last update.

Classify each project as `INFO_OK`, `INFO_UPDATE`, `INFO_MISSING`, `DASHBOARD_ONLY`, `ARCHIVE`, or `EXCLUDED`.

Produce `reports/information-pages-inventory.md` with:

| Project | Repo | Type | Dashboard | Info Page | About | EN/FR | Visuals | NF | Action |
|---|---|---|---|---|---|---|---|---|---|

Recommend `KEEP`, `UPDATE`, `CREATE`, or `EXCLUDE`.

**STOP after inventory. Present the list and wait for ONE global validation. After validation, execute Phase 2 without asking project-by-project.**

## Phase 2 — Standardization

### Absolute dashboard protection

Before modifying HTML, classify every target file as `INFORMATION` or `FUNCTIONAL`. Never redesign or replace a `FUNCTIONAL` file through this procedure. Preserve all existing deeplinks.

If `index.html` is a functional dashboard, keep it and create an information surface such as `product.html`, `about.html`, or another path appropriate to that repository. Do not assume `index.html` is available.

### Information-page location policy

Determine the safest publication location from the repository's existing architecture:

1. Reuse an existing information-page location when one exists.
2. Prefer the existing GitHub Pages source (`/docs`, root, or configured Pages branch) rather than creating a competing structure.
3. If `index.html` is already functional, use `product.html` or `about.html` and preserve the current entry point.
4. Never move an existing dashboard merely to satisfy this standard.
5. Record the chosen information-page path in `neuroforge.yml`.

### Requirement levels by project type

Use three levels: `REQUIRED`, `WHEN_APPLICABLE`, `OPTIONAL`.

For UI apps and dashboards: information page, About, EN/FR, disclaimer, acknowledgements, project/global GitHub links and badges are `REQUIRED`; Preferences/Help are `WHEN_APPLICABLE`; icon/screenshots are `OPTIONAL` and may be `pending`.

For CLI/tools/libraries: README/info page, disclaimer, acknowledgements, links and badges are `REQUIRED`; About/Preferences/Help are `WHEN_APPLICABLE`; screenshots are `OPTIONAL`.

Never create empty or meaningless UI merely to satisfy a checklist.

## Information page standard

### Hero

Include project icon/logo when available, canonical name, function in one sentence, real primary screenshot when available, verified badges and one appropriate CTA (`OPEN APP`, `LAUNCH DASHBOARD`, `DOWNLOAD`, `VIEW RELEASE`, `TRY IT`).

### What it does

Explain concretely what the project does. No vague marketing language.

### What you gain

Present real benefits. Label measured gains as measured and estimates explicitly as `estimated`. Otherwise remain qualitative. Never invent a gain.

### Screenshots

Use real captures. Capture automatically only when reproducible. Otherwise set `screenshots: pending`. Never manufacture a fake screenshot.

### Features / Install / Use

List principal functions only. Provide appropriate Download, Release, GitHub, installation, dashboard or web-app actions.

## About

Every UI app/dashboard must have an About surface. HTML uses a panel/modal when appropriate; native macOS uses native About where possible.

Include: name, function, version, author, Publisher: Neuro Forge, project GitHub, Neuro Forge GitHub, documentation, releases, licence, support, disclaimer and acknowledgements.

### Taillandier

Include:

> **Taillandier** is a uniquely French word with no exact equivalent in English.
>
> A taillandier is a craftsman who forges purpose-built edged tools. Neuro Forge applies the same philosophy to software: dedicated tools designed for precision and purpose.

Link to the full Neuro Forge manifesto.

Signature: `Atypical ThinkR / 0SEC WorkR`.

## Languages

Minimum for information pages and UI About: EN + FR. Preferences/Help follow EN + FR when present. Additional languages already supported may include DE, ES, IT, KO, JA, ZH. Never use flags for languages. Display only languages actually available.

## GitHub links

Clearly distinguish `PROJECT` (project repository) from `NEURO FORGE` (central repository).

## Badges

Calculate badges before page generation. Use only real statuses: Neuro Forge, release, build, tests, platform, language, license, AI-assisted, maintained. Never invent status.

## AI-assisted notice

Display on the page and About:

> This software is developed with substantial AI-assisted coding, with human direction, review and testing. It is provided as-is, without warranty.

Link to the full disclaimer.

## Acknowledgements

Detect libraries actually used and list name, role, author/project, license and official link.

> Neuro Forge stands on the work of the open-source community. Thank you.

## Support

Use `https://buymeacoffee.com/bizcom` in two locations: a discreet block near the top after presentation/badges and a Support section at the bottom. Keep financial support separate from technical badges.

## Topics / SEO / Interconnection

Audit and complete relevant GitHub Topics without deleting existing Topics. Generate appropriate title, description, canonical, OpenGraph, social image, schema.org SoftwareApplication where relevant, sitemap, robots.txt and clean heading structure.

Link only genuinely related Neuro Forge Projects, Topics, Categories, Combos and Katas. Never create artificial links for SEO.

## Combos and Katas

Preserve all existing Combos and Katas. Never automatically delete them. Add a Combo only when at least two projects are functionally complementary. Add/version a Kata only when a clearly reusable usage pattern exists.

## Global Neuro Forge page

After processing selected projects, update the global Neuro Forge information index with Projects, Categories, Topics, Combos, Katas and Gains. Project cards may contain icon, name, function, screenshot, version, platform, languages, status, Neuro Forge badge, GitHub, public page, release, Topics, Combos and Katas. Add static search/filtering when practical; avoid unnecessary backend infrastructure.

## Design

Use shared Neuro Forge design: dark, readable, subtle pixel/terminal influence, shared CSS, responsive, accessible, fast and without decorative noise. Preserve each project's own identity; Neuro Forge is publisher/signature, not a replacement identity.

## `neuroforge.yml` merge rule

Create `neuroforge.yml` only when absent. **If it already exists, merge into it; never replace it wholesale.** Preserve unknown keys, project-specific metadata, manual values and comments when technically possible. Report conflicts instead of silently choosing a value.

The file is structured source data for info pages, About, badges, Topics, languages, links, SEO, relationships, Combos, Katas and the global index.

## Manual-content preservation

Generated Markdown/HTML must use explicit managed regions where practical:

```text
<!-- NEUROFORGE:BEGIN section-name -->
...generated content...
<!-- NEUROFORGE:END section-name -->
```

On rerun, update only managed regions. Content outside those markers is human-owned and must not be deleted, reordered or rewritten automatically. If an existing page has no markers, preserve it and insert managed regions conservatively rather than replacing the whole document.

## Git procedure

For each repository: audit → dedicated branch → modifications → tests → HTML/CSS/JS validation → link check → secrets check → diff → commit → push branch → draft PR. Never push directly to `main`.

Recommended branch: `agent/neuroforge-info-v2`.

## Final report

Create `reports/information-pages-rollout.md`:

| Project | Before | After | Page | About | EN/FR | Badges | SEO | Visuals | NF | PR |
|---|---|---|---|---|---|---|---|---|---|---|

Report pages created/updated, dashboards left intact, About/localizations added, pending screenshots/icons, errors and human intervention required. Provide global Neuro Forge page URL, new page URLs, PR URLs and excluded projects with reasons.

## Final objective

Every Neuro Forge product should have its functional tool/dashboard intact, a clear information page, EN/FR About where applicable, its own GitHub identity, a link to Neuro Forge, verified badges, real visuals where available, open-source credits, disclaimer, relevant Topics, Project/Combo/Kata relationships and coherent presence in the global Neuro Forge index.

**Start now with Phase 1 — INVENTORY only. Do not modify repositories before presenting the inventory and receiving the single global selection validation.**
