# Neuro Forge Project Update Procedure

Use this procedure before publishing or pushing a Neuro Forge project.

## Scope

This procedure covers three surfaces:

- app/code repository;
- project page in `bizc0m/NeuroForge`;
- GitHub repository metadata and Pages.

Do not treat a local HTML update as a GitHub repository update. GitHub topics, About text and Pages settings are separate remote metadata.

## 1. Preflight

Run from the project repository:

```sh
pwd
hostname
git rev-parse --show-toplevel
git status --short --branch
git remote -v
git branch --show-current
git log -5 --oneline --decorate
git tag --list --sort=-creatordate | head -20
```

Stop before destructive operations. Never reset, clean, merge, rebase, commit or push without explicit approval.

## 2. App And Code

Update the app before publishing its page.

Required checks:

- identify the real app entry point and active build target;
- update user-facing About content;
- update Preferences when the app has settings;
- verify supported languages;
- verify icon and screenshots;
- run available tests/builds;
- launch and test the app when runtime behavior changed.

Unknown values must stay `pending`.

## 3. Neuro Forge Files

Each compliant project should contain:

- `neuroforge.yml`;
- `README.md` with Neuro Forge badge markers;
- `ABOUT.md` or a clear About section;
- `PREFERENCES.md` when relevant;
- `ACKNOWLEDGEMENTS.md` when dependencies are verified;
- `DISCLAIMER.md` when no equivalent disclaimer exists.

Generate badges with:

```sh
scripts/generate-badges.sh path/to/project
```

Validate compliance with:

```sh
scripts/check-neuroforge-compliance.sh path/to/project
```

## 4. Project Page

Create or update the project page from `templates/PROJECT_PAGE.html.template`.

Required page elements:

- English default language;
- language switcher after `NEXT`;
- badges under the intro;
- `GITHUB`, `APP` when available, and Buy Me a Coffee actions;
- project screenshot with full-size lightbox;
- GitHub topic links using `https://github.com/topics/<topic>`;
- no duplicate panels that repeat header actions.

Verify locally:

```sh
python3 -m http.server 8792 --bind 127.0.0.1
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8792/projects/<slug>.html
```

Browser checks:

- page opens;
- default language is English;
- language links work;
- badges render;
- action buttons are aligned;
- screenshot opens full size;
- desktop and mobile do not overflow.

## 5. GitHub Metadata

Update GitHub repository metadata separately from HTML.

Required remote metadata:

- description;
- homepage URL;
- topics;
- visibility/status when relevant;
- Pages URL when enabled.

Check existing topics:

```sh
gh api -H "Accept: application/vnd.github+json" /repos/OWNER/REPO/topics
```

Update topics only with verified names:

```sh
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/OWNER/REPO/topics \
  -f names[]=neuro-forge \
  -f names[]=taillandier \
  -f names[]=atypical-thinkr \
  -f names[]=0sec-workr \
  -f names[]=cognitive-tools \
  -f names[]=local-first
```

Do not invent release, workflow, platform, language or license values.

## 6. GitHub Pages

For each project that has a public page:

- verify Pages is enabled;
- verify the published URL with HTTP `200`;
- verify screenshots and badge assets load;
- verify project page links back to the repository;
- verify repository About links to the correct page.

## 7. Commit And Push

Before commit:

```sh
git diff --check
git diff --stat
git status --short
```

Run repository validation:

```sh
bash scripts/validate-repo.sh
```

Commit explicit files only. Do not use `git add .`.

Recommended central repo commit:

```sh
git add docs/PROJECT_UPDATE_PROCEDURE.md
git add docs/projects/<slug>.html docs/style.css docs/project-i18n.js
git add templates/PROJECT_PAGE.html.template templates/README.template.md templates/neuroforge.yml.template
git add badges scripts/check-neuroforge-compliance.sh scripts/generate-badges.sh
git commit -m "docs: add Neuro Forge project rollout procedure"
git push -u origin codex/neuroforge-v2-local-test
```

## 8. Final Report

Report:

```text
MACHINE:
PROJECT:
BRANCH:
FILES MODIFIED:
TESTS:
LOCAL PAGE:
GITHUB METADATA:
COMMIT:
PUSH:
BLOCKERS:
NEXT ACTION:
```
