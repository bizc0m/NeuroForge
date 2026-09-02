#!/usr/bin/env bash
set -euo pipefail

name="${1:-}"
if [[ -z "$name" ]]; then
  echo "usage: scripts/init-project.sh <name>" >&2
  exit 1
fi

mkdir -p "$name"
cp templates/README.template.md "$name/README.md"
cp templates/ABOUT.template.md "$name/ABOUT.md"
cp templates/neuroforge.yml.template "$name/neuroforge.yml"

echo "created: $name"
echo "next: edit $name/neuroforge.yml, then replace pending values with verified data"
