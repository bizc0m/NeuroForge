#!/usr/bin/env bash
set -euo pipefail

bash scripts/validate-repo.sh
git status --short

