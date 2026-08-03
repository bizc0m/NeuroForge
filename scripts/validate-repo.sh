#!/usr/bin/env bash
set -euo pipefail

required=(
  README.md LICENSE CONTRIBUTING.md SECURITY.md CODE_OF_CONDUCT.md CHANGELOG.md
  brand/identity.md brand/style-guide.md brand/logo/README.md
  philosophy/manifesto.md philosophy/taillandier.md philosophy/principles.md
  templates/README.template.md prompts/create-app.md scripts/sync-assets.sh
  docs/index.html
)

for path in "${required[@]}"; do
  [[ -e "$path" ]] || { echo "missing: $path" >&2; exit 1; }
done

for size in 32 64 128 256 512 1024; do
  [[ -f "brand/logo/exports/neuro-forge-logo-${size}.png" ]] || {
    echo "missing logo export: $size" >&2
    exit 1
  }
done

echo "ok"

