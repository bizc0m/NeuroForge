# NEUROFORGE — PILOT STANDARDIZATION + ROLLOUT V2

You are Codex applying Neuro Forge Standard v2.0 across existing GitHub projects.

## Objective

1. Select exactly 3 representative pilot repositories.
2. Apply the complete Neuro Forge Standard v2.0 to those pilots only.
3. Update the app itself before GitHub publication when a repository contains an app.
4. Generate or update README, badges, About, Preferences, Help, disclaimers, GitHub Pages, SEO, support, acknowledgements and compliance metadata.
5. Update the central `bizc0m/NeuroForge` repository with project status, links, Pages, badges, screenshots/icons and real project relationships.
6. Produce a comparative audit of the 3 pilots.
7. Stop and request validation before touching any remaining repositories.
8. Keep `prompts/NEUROFORGE_PROJECT_CLOSEOUT_V2.md` as the reusable closeout prompt for future projects.

## Source Of Truth

Central repository:

```text
bizc0m/NeuroForge
```

The central repository owns:

- identity;
- manifesto;
- taillandier definition;
- logo/glyph;
- templates;
- badges;
- disclaimers;
- languages;
- shared GitHub Pages CSS;
- scripts;
- workflows;
- versioned standard.

Every compliant project must declare:

```yaml
standard: v2.0
```

in:

```text
neuroforge.yml
```

## Git Rules

Never push directly to `main`.

For each pilot repository:

1. audit;
2. dedicated branch;
3. local changes;
4. tests;
5. GitHub metadata preparation;
6. diff review;
7. commit only after local verification;
8. push branch only after commit verification;
9. open draft PR;
10. never merge.

Branch pattern:

```text
codex/neuroforge-v2-pilot
```

If the repository already has that branch, create a collision-free branch:

```text
codex/neuroforge-v2-pilot-YYYYMMDD
```

## Pilot Selection

Select exactly 3 different repositories:

1. one macOS/native app;
2. one web/lightweight app;
3. one CLI/tool/technical project.

Exclude:

- archived repositories;
- forks;
- repositories without code;
- abandoned projects;
- sensitive repositories;
- repositories with unclear ownership or canonical name.

Before editing, print:

```text
PILOT REPOS:
1. owner/repo — reason
2. owner/repo — reason
3. owner/repo — reason
```

Then continue automatically unless a repository has conflicting names or unsafe state.

## Required Audit Per Repository

Detect:

- canonical name;
- purpose;
- version;
- primary language;
- framework;
- project type;
- platforms;
- dependencies;
- license;
- test state;
- existing workflows;
- README state;
- screenshots;
- icon;
- docs;
- releases;
- About;
- Preferences/Settings;
- Help;
- disclaimer;
- support;
- languages;
- GitHub Pages;
- SEO metadata.

If multiple contradictory names exist, stop for that repository only and ask for the canonical name.

## App Changes Before GitHub

If the repository contains an app with an interface, create or update useful in-app surfaces only.

### About

Include:

- icon;
- name;
- purpose;
- version;
- author;
- publisher: `Neuro Forge`;
- GitHub repository;
- documentation;
- releases;
- license;
- support.

Include the taillandier text:

```text
Taillandier is a uniquely French word with no exact equivalent in English.

A taillandier is a craftsman who forges purpose-built edged tools. Neuro Forge applies the same philosophy to software: dedicated tools designed for precision and purpose.
```

Include:

```text
Atypical ThinkR / 0SEC WorkR
```

Add links to Manifesto, GitHub, Documentation and Buy Me a Coffee.

### Preferences / Settings

Create only useful sections among:

- General;
- Appearance;
- Language;
- Behavior;
- Updates;
- Advanced.

Do not add empty panels.

### Help

Add useful entries:

- Documentation;
- Report a Bug;
- Request a Feature;
- GitHub;
- About;
- Support Neuro Forge.

### Short Disclaimer

Show in the app:

```text
AI-Assisted Development Notice

This software is developed with substantial AI-assisted coding, with human direction, review and testing. It is provided as-is, without warranty. Use it at your own risk and verify that it is appropriate for your environment, data and intended use.
```

Link to the long disclaimer.

### Acknowledgements

List only libraries actually used by the project.

For each library:

- name;
- role;
- project/author;
- license;
- official link.

Include:

```text
Neuro Forge stands on the work of the open-source community. Thank you.
```

## Languages

Canonical language: EN.

Required languages:

- EN;
- FR.

Optional standard languages:

- DE;
- ES;
- IT;
- KO;
- JA;
- ZH.

For apps:

- use native localization;
- detect system language when appropriate;
- fallback to EN.

Translate:

- About;
- Preferences;
- Help;
- short disclaimer;
- essential user-facing text.

Technical README, CONTRIBUTING and SECURITY remain canonically English.

Display only languages that really exist. Do not claim unsupported translations.

## Badges

Generate badges before README and Pages.

Use the central badge system:

```text
badges/definitions.yml
badges/generated/
badges/templates/badge-template.svg
```

Custom badges stored locally:

- `badges/generated/neuroforge.svg`;
- `badges/generated/ai-assisted.svg`;
- `badges/generated/0sec-workr.svg`.

Dynamic badges must not be stored locally.

Generate dynamic Markdown URLs from verified data only:

- release;
- build;
- tests;
- platform;
- language;
- license;
- maintained.

The `Neuro Forge ✓` badge is compliant only if required criteria pass.

If not compliant, generate `Neuro Forge pending` from the template. Do not create a separate pending SVG unless the central standard later requires it.

Never falsify a badge.

## Buy Me A Coffee

URL:

```text
https://buymeacoffee.com/bizcom
```

Add it:

1. near the top of README/Page after badges and intro;
2. near the bottom in Support;
3. in About/Help when the app supports it.

Do not mix financial support with technical badges.

## Icons And Screenshots

If an icon exists:

- preserve it;
- generate required sizes;
- integrate README/Page/About.

If missing:

```yaml
icon: pending
```

If screenshots can be captured automatically:

- use `screenshots.yml` when present;
- store real captures in `docs/assets/screenshots/`.

If not:

```yaml
screenshots: pending
```

Never invent a screenshot.

## README Order

1. project icon/logo;
2. project name;
3. one-sentence purpose;
4. badges;
5. Buy Me a Coffee;
6. main screenshot;
7. What it does;
8. Why it exists;
9. Installation;
10. Usage;
11. Features;
12. Limits / known issues;
13. Languages;
14. About Neuro Forge;
15. Taillandier;
16. AI-Assisted Development Notice;
17. Acknowledgements;
18. Contribution;
19. Support;
20. License.

## Long Disclaimer

Create or update:

```text
DISCLAIMER.md
```

Cover:

- AI-assisted development;
- tests;
- no warranty;
- user responsibility;
- data;
- security;
- production usage;
- indirect losses;
- backups;
- caution;
- contributions.

The site and app must link to this file.

## GitHub Pages

For each pilot project, create or update a project page with:

- app/project name;
- function;
- screenshot when real;
- benefits;
- download/release;
- documentation;
- About;
- Taillandier;
- Manifesto;
- languages;
- acknowledgements;
- disclaimer;
- support;
- related Neuro Forge projects;
- footer.

Use the central Neuro Forge page skin and shared CSS.

## SEO

For each pilot:

- title;
- meta description;
- canonical;
- OpenGraph;
- Twitter/X card;
- schema.org `SoftwareApplication` when appropriate;
- sitemap entry;
- robots rule if needed.

Interconnect projects only when the relationship is real.

## Central NeuroForge Update

After the 3 pilots are treated, update `bizc0m/NeuroForge` with:

- project list;
- status;
- version;
- platform;
- languages;
- Neuro Forge badge;
- icon;
- screenshot;
- GitHub URL;
- Page URL;
- Release URL;
- support URL;
- related projects.

Detect combos only from real complementarity.

Candidate combo names:

- Knowledge Stack;
- Local AI Stack;
- Productivity Stack;
- NotePlan Stack;
- Automation Stack;
- Developer Stack;
- Research Stack;
- File Tools Stack.

Do not invent a combo.

## Compliance Label

Minimum criteria:

- canonical name;
- valid `neuroforge.yml`;
- license;
- README;
- About or documented non-app equivalent;
- disclaimer;
- acknowledgements;
- executable tests or justification;
- no secrets;
- docs;
- support;
- version;
- valid links;
- valid Pages if enabled.

Icons and screenshots may be `pending`.

## Tests

For each pilot:

- existing tests;
- build;
- lint;
- syntax;
- internal links;
- placeholders;
- missing files;
- secrets scan;
- Pages;
- localization;
- README;
- `neuroforge.yml`.

Report exact evidence.

## Draft PR

Create one draft PR per pilot.

Title:

```text
Apply Neuro Forge Standard v2.0
```

Body must include:

- files changed;
- app changes;
- docs changes;
- Page;
- badges;
- languages;
- tests;
- pending items;
- compliance result.

Never merge.

## Pilot Report

Create in NeuroForge:

```text
reports/pilot-v2.md
```

Include:

| Criteria | Repo 1 | Repo 2 | Repo 3 |
|---|---|---|---|
| App updated | | | |
| About | | | |
| Preferences | | | |
| EN/FR | | | |
| Badges | | | |
| Icon | | | |
| Screenshots | | | |
| Page | | | |
| SEO | | | |
| Disclaimer | | | |
| Acknowledgements | | | |
| NF compliant | | | |
| Pending | | | |

Then provide:

- URLs of the 3 draft PRs;
- URLs of the 3 Pages or previews;
- central NeuroForge page URL;
- anomalies;
- standard improvements.

Stop here.

Ask explicitly:

```text
Valider le déploiement du standard Neuro Forge v2.0 sur les autres repos GitHub ?
```

Do not touch any other repository without this validation.
