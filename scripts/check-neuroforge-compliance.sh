#!/usr/bin/env bash
set -euo pipefail

target="${1:-.}"
cd "$target"

missing=()
pending=()

require_file() {
  local path="$1"
  [[ -f "$path" ]] || missing+=("$path")
}

require_any_file() {
  local label="$1"
  shift
  local path
  for path in "$@"; do
    [[ -f "$path" ]] && return 0
  done
  missing+=("$label")
}

has_text() {
  local path="$1"
  local pattern="$2"
  [[ -f "$path" ]] && grep -Eiq "$pattern" "$path"
}

require_file neuroforge.yml
require_file README.md
require_any_file license LICENSE LICENSE.md COPYING
require_any_file disclaimer DISCLAIMER.md docs/DISCLAIMER.md
require_any_file acknowledgements ACKNOWLEDGEMENTS.md ACKNOWLEDGMENTS.md docs/ACKNOWLEDGEMENTS.md

if [[ -f neuroforge.yml ]]; then
  grep -Eq '^standard:[[:space:]]*v2\.0[[:space:]]*$' neuroforge.yml || missing+=("standard:v2.0")
  grep -Eq 'buy_me_a_coffee:[[:space:]]*https://buymeacoffee.com/bizcom' neuroforge.yml || missing+=("support.buy_me_a_coffee")
  grep -Eq 'neuro-forge|taillandier|0sec-workr' neuroforge.yml || missing+=("topics")
  grep -Eq '^[[:space:]]*(version|status):[[:space:]]*pending[[:space:]]*$' neuroforge.yml && pending+=("pending metadata")
else
  missing+=("support")
  missing+=("topics")
fi

if [[ -f README.md ]]; then
  has_text README.md 'Neuro Forge|NeuroForge' || missing+=("README Neuro Forge section")
  has_text README.md 'buymeacoffee\.com/bizcom' || missing+=("README support")
fi

if [[ ! -d docs && ! -d Documentation && ! -d documentation ]]; then
  pending+=("docs")
fi

if [[ -d .github/workflows ]]; then
  find .github/workflows -type f \( -name '*.yml' -o -name '*.yaml' \) | grep -q . || pending+=("workflows")
else
  pending+=("workflows")
fi

if find . -maxdepth 3 -type f \( -name '*test*' -o -name '*spec*' -o -name 'Makefile' -o -name 'package.json' \) | grep -q .; then
  :
elif has_text neuroforge.yml 'tests.*justification|test_justification|tests:[[:space:]]*pending'; then
  pending+=("tests justified or pending")
else
  missing+=("tests or justification")
fi

if find . -maxdepth 4 -type f \( -name '*.swift' -o -name '*.tsx' -o -name '*.jsx' -o -name '*.html' -o -name '*.app' \) | grep -q .; then
  require_any_file about ABOUT.md docs/ABOUT.md About.md
fi

if rg -n --hidden --glob '!build/**' --glob '!.git/**' --glob '!node_modules/**' '(AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9_-]{20,}|-----BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY-----)' . >/dev/null 2>&1; then
  missing+=("possible secret")
fi

mkdir -p build

status="compliant"
if ((${#missing[@]} > 0)); then
  status="failed"
elif ((${#pending[@]} > 0)); then
  status="pending"
fi

{
  printf '{\n'
  printf '  "status": "%s",\n' "$status"
  printf '  "missing": ['
  for i in "${!missing[@]}"; do
    [[ "$i" == 0 ]] || printf ', '
    printf '"%s"' "${missing[$i]}"
  done
  printf '],\n'
  printf '  "pending": ['
  for i in "${!pending[@]}"; do
    [[ "$i" == 0 ]] || printf ', '
    printf '"%s"' "${pending[$i]}"
  done
  printf ']\n'
  printf '}\n'
} > build/neuroforge-compliance.json

printf '%s\n' "$status"
