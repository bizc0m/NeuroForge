#!/usr/bin/env bash
set -euo pipefail

required=(
  README.md LICENSE CONTRIBUTING.md SECURITY.md CODE_OF_CONDUCT.md CHANGELOG.md
  brand/identity.md brand/style-guide.md brand/logo/README.md
  philosophy/manifesto.md philosophy/taillandier.md philosophy/principles.md
  templates/README.template.md templates/neuroforge.yml.template
  templates/PROJECT_PAGE.html.template
  badges/README.md badges/definitions.yml badges/templates/badge-template.svg
  badges/generated/neuroforge.svg badges/generated/ai-assisted.svg badges/generated/0sec-workr.svg
  docs/assets/badges/neuroforge.svg docs/assets/badges/ai-assisted.svg docs/assets/badges/0sec-workr.svg
  prompts/create-app.md prompts/NEUROFORGE_PILOT_STANDARDIZATION_ROLLOUT_V2.md
  scripts/sync-assets.sh scripts/generate-badges.sh scripts/check-neuroforge-compliance.sh
  docs/index.html
  docs/assets/logo/neuro-forge-logo-512.png
)

for path in "${required[@]}"; do
  [[ -e "$path" ]] || { echo "missing: $path" >&2; exit 1; }
done

grep -q 'buy_me_a_coffee: https://buymeacoffee.com/bizcom' templates/neuroforge.yml.template || {
  echo "missing Buy Me a Coffee in neuroforge.yml template" >&2
  exit 1
}

grep -q 'neuro-forge' templates/neuroforge.yml.template || {
  echo "missing Neuro Forge topics in neuroforge.yml template" >&2
  exit 1
}

grep -q 'NEUROFORGE_BADGES:BEGIN' templates/README.template.md || {
  echo "missing generated badges in README template" >&2
  exit 1
}

grep -q 'dynamic:' badges/definitions.yml || {
  echo "missing dynamic badge definitions" >&2
  exit 1
}

grep -q 'custom:' badges/definitions.yml || {
  echo "missing custom badge definitions" >&2
  exit 1
}

grep -q 'Neuro Forge ✓' badges/generated/neuroforge.svg || {
  echo "missing Neuro Forge custom badge text" >&2
  exit 1
}

grep -q 'AI-assisted' badges/generated/ai-assisted.svg || {
  echo "missing AI-assisted custom badge text" >&2
  exit 1
}

grep -q 'Atypical ThinkR / 0SEC WorkR' badges/generated/0sec-workr.svg || {
  echo "missing 0SEC WorkR custom badge text" >&2
  exit 1
}

grep -q 'Neuro Forge pending' badges/README.md || {
  echo "missing pending variant rule in badges README" >&2
  exit 1
}

grep -q 'build/neuroforge-badges.json' badges/README.md || {
  echo "missing GitHub Pages badge JSON rule" >&2
  exit 1
}

grep -q 'NEUROFORGE_BADGES:BEGIN' templates/README.template.md || {
  echo "missing generated badge marker in README template" >&2
  exit 1
}

if find badges/generated -type f ! \( -name 'neuroforge.svg' -o -name 'ai-assisted.svg' -o -name '0sec-workr.svg' \) | grep -q .; then
  echo "unexpected generated badge file" >&2
  exit 1
fi

grep -q 'buymeacoffee.com/bizcom' templates/README.template.md || {
  echo "missing Buy Me a Coffee in README template" >&2
  exit 1
}

grep -q 'show_all_languages: true' templates/neuroforge.yml.template || {
  echo "missing all-language navigation in neuroforge.yml template" >&2
  exit 1
}

grep -q 'navigation:' templates/neuroforge.yml.template || {
  echo "missing navigation block in neuroforge.yml template" >&2
  exit 1
}

grep -q 'nfo-filebar' templates/PROJECT_PAGE.html.template || {
  echo "missing file breadcrumb menu in project page template" >&2
  exit 1
}

grep -q 'nfo-langbar' templates/PROJECT_PAGE.html.template || {
  echo "missing language menu in project page template" >&2
  exit 1
}

grep -q 'project-i18n.js' templates/PROJECT_PAGE.html.template || {
  echo "missing language switch script in project page template" >&2
  exit 1
}

grep -q 'BADGES_HTML' templates/PROJECT_PAGE.html.template || {
  echo "missing generated badge slot in project page template" >&2
  exit 1
}

grep -q 'badges/generated/neuroforge.svg' templates/README.template.md || {
  echo "missing custom Neuro Forge badge in README template" >&2
  exit 1
}

grep -q 'dictionaries' docs/project-i18n.js || {
  echo "missing project i18n dictionaries" >&2
  exit 1
}

for size in 32 64 128 256 512 1024; do
  [[ -f "brand/logo/exports/neuro-forge-logo-${size}.png" ]] || {
    echo "missing logo export: $size" >&2
    exit 1
  }
  [[ -f "docs/assets/logo/neuro-forge-logo-${size}.png" ]] || {
    echo "missing docs logo asset: $size" >&2
    exit 1
  }
done

echo "ok"
