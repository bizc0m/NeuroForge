# NEUROFORGE — ROLLOUT RUNBOOK V2

Date: 2026-09-02
Status: STABLE-INTERNE

Operational procedure:

- `docs/PROJECT_UPDATE_PROCEDURE.md`

## Preflight

Verified in this Codex session:

- current working directory: `/Users/JOB/Documents/Codex/2026-09-02/neuroforge-talendyer-chatgpt-conversation-6a6dd746-b45c`
- host: `Mac-001.lan`
- Git root from current directory: `/Users/JOB`
- current branch at Git root: `main`
- current remote at Git root: `https://github.com/yourusername/viz-by-claude.git`
- central repository exists: `bizc0m/NeuroForge`
- central repository default branch: `main`
- central repository public URL: `https://github.com/bizc0m/NeuroForge`
- central repository has Pages enabled
- central repository top-level folders include `brand/`, `docs/`, `project-configs/`, `prompts/`, `scripts/`, `templates/`

Limit:

- The current local folder is not a clean clone of `bizc0m/NeuroForge`.
- The local Git root is `/Users/JOB`, which includes many personal untracked paths.
- No Git commit, push, branch creation, PR, or remote write was performed.

## Required Safe Start

Do not run rollout from `/Users/JOB`.

Use a clean clone or verified project folder:

```sh
mkdir -p /Users/JOB/Documents/Codex/neuroforge-rollout
cd /Users/JOB/Documents/Codex/neuroforge-rollout
git clone git@github.com:bizc0m/NeuroForge.git
cd NeuroForge
```

Then verify:

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

Expected:

- Git root is the `NeuroForge` clone, not `/Users/JOB`.
- Remote is `bizc0m/NeuroForge`.
- Working tree is clean before rollout work starts.

## Pilot Selection Rules

Select exactly 3 repositories first:

1. macOS/native app;
2. web/lightweight app;
3. CLI/tool/technical project.

Exclude:

- archived repos;
- forks;
- empty repos;
- sensitive/private repos unless explicitly approved;
- repos with unclear canonical name;
- repos with dirty local state that cannot be safely isolated.

Before editing, print:

```text
PILOT REPOS:
1. owner/repo — reason
2. owner/repo — reason
3. owner/repo — reason
```

## Per-Repo Branch

Branch naming:

```text
codex/neuroforge-v2-<repo-name>
```

Allowed sequence:

```sh
git checkout -b codex/neuroforge-v2-<repo-name>
```

Do not change branch if there are unrelated uncommitted changes.

## Per-Repo Files

Minimum target files:

- `neuroforge.yml`
- `README.md` using `<!-- NEUROFORGE:BEGIN -->` and `<!-- NEUROFORGE:END -->`
- `docs/index.html` only if GitHub Pages is appropriate
- `ACKNOWLEDGEMENTS.md` only if dependencies or libraries are verified
- `DISCLAIMER.md` only if no equivalent disclaimer exists

Do not overwrite manual sections.

## Verification

Run only tests that exist and match the stack.

Examples:

```sh
npm test
npm run build
swift test
swift build
pytest
python -m pytest
```

For web/dashboard:

- start local server;
- verify HTTP GET 200;
- verify rendered page in browser if UI changed;
- verify mobile and desktop layout if public page changed.

For macOS app:

- build;
- launch exact bundle;
- verify exact process;
- verify visible window;
- test real button/action when changed.

## Commit and Push Gate

Before commit:

```sh
git diff --stat
git diff -- README.md neuroforge.yml docs/index.html ACKNOWLEDGEMENTS.md DISCLAIMER.md
git status --short
```

Commit only explicit files:

```sh
git add README.md neuroforge.yml
git add docs/index.html ACKNOWLEDGEMENTS.md DISCLAIMER.md  # only if created/modified
git commit -m "docs: apply Neuro Forge standard v2"
```

Push only pilot branch:

```sh
git push -u origin codex/neuroforge-v2-<repo-name>
```

Create draft PR.

Never merge automatically.

## Pilot Stop

After 3 pilot repos:

```text
PILOT COMPLETE:
REPOS:
MODIFICATIONS:
TESTS:
LINKS:
RISKS:
APPROVAL NEEDED FOR FULL ROLLOUT:
```

Stop until explicit approval.
