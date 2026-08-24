# Neuro Forge Documentation Standard

## Reference languages

Every Neuro Forge project maintains two human-reference documentation sets:

- `docs/fr/` — French reference
- `docs/en/` — English reference

Both are first-class documentation. Changes to product behavior must update both before a stable release.

## Generated languages

GitHub may automatically generate documentation for:

- `docs/it/` — Italian
- `docs/es/` — Spanish
- `docs/de/` — German
- `docs/pt/` — Portuguese
- `docs/ja/` — Japanese
- `docs/ko/` — Korean

Generated translations must carry the notice: `Automatically translated from the validated reference documentation — review welcome.`

## Translation rules

1. Never translate from another generated translation.
2. Generated languages derive only from validated `fr` or `en` source documents.
3. FR and EN are never overwritten by automation.
4. Translation runs only when reference documentation changes.
5. Automation opens or updates a pull request; it never silently commits generated translations to `main`.
6. Human corrections to generated languages are welcome and take precedence until the corresponding source paragraph changes.
7. A generated document must record its source language, source file and source revision/commit.
8. Code, commands, filenames, URLs, API names and product names are not translated unless explicitly mapped.
9. `Taillandier` remains `Taillandier`; explanatory text may be translated.
10. Failed or incomplete translations are marked stale rather than presented as current.

## Recommended structure

```text
docs/
├── fr/
│   ├── README.md
│   ├── getting-started.md
│   ├── usage.md
│   └── troubleshooting.md
├── en/
│   ├── README.md
│   ├── getting-started.md
│   ├── usage.md
│   └── troubleshooting.md
├── it/
├── es/
├── de/
├── pt/
├── ja/
├── ko/
└── translations.json
```

## Application documentation links

The application About/Help menus expose FR and EN directly. Other languages link to the corresponding GitHub documentation directory.

## Automation contract

Each project declares:

```yaml
documentation:
  reference_languages: [fr, en]
  generated_languages: [it, es, de, pt, ja, ko]
  generated_translation_review_required: true
```

A translation workflow may use an approved translation provider configured by repository secrets. NeuroForge defines the contract and validation; individual projects provide the provider credentials. No secret or provider key is stored in the repository.
