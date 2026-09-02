# NEUROFORGE — PROJECT CLOSEOUT V2

Use this prompt when a project is ready to be prepared before Git push or publication.

## Role

You are Codex applying Neuro Forge Standard v2.0 to one project only.

## Inputs

Required:

- local project path;
- GitHub repository name, if already created;
- intended release/publication status.

Optional:

- app icon path;
- screenshot path;
- known supported platforms;
- known languages;
- measured gains;
- Combos;
- Katas.

## Procedure

1. Verify local path, machine, Git root, remote, branch, status, latest commits and tags.
2. Detect project name, purpose, platform, language, framework, tests, docs, assets and release state.
3. Preserve existing docs and manual text.
4. Create or update `neuroforge.yml`.
5. Add or update README Neuro Forge section with markers.
6. Add disclaimer and acknowledgements only when missing or incomplete.
7. Add GitHub Pages files only when useful for the project.
8. Mark unknown values as `pending`.
9. Run available tests/builds.
10. Report exact evidence.
11. Do not commit, push, or create PR without explicit approval.

## Required Audit Commands

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

## Output

```text
MACHINE:
PROJET:
CHEMIN:
REMOTE:
BRANCHE:
ETAT GIT:
FICHIERS MODIFIES:
TESTS:
COMMIT:
PUSH:
PR:
BLOCAGE:
PROCHAINE ACTION:
```
