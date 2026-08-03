#!/usr/bin/env bash
set -euo pipefail

target="${1:-}"
if [[ -z "$target" ]]; then
  echo "usage: scripts/sync-assets.sh <target-dir>" >&2
  exit 1
fi

mkdir -p "$target/brand/logo"
cp -R brand/logo/exports "$target/brand/logo/"
cp brand/identity.md brand/style-guide.md "$target/brand/"

