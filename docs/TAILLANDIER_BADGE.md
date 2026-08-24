# Taillandier Badge Standard

**Taillandier** is a uniquely French word with no exact equivalent in English. A taillandier is a craftsman who forges purpose-built edged tools: precise tools made for a specific task.

The **Taillandier ✓** badge applies that principle to Neuro Forge software.

## Required criteria

A project may display `Taillandier ✓` when all mandatory checks pass:

- a clear primary function is defined;
- README is present;
- About information is present;
- license is declared;
- version is defined;
- documentation is accessible;
- build/validation passes;
- tests pass when the project contains executable code;
- no unresolved template placeholders remain;
- AI-assisted development is disclosed when applicable;
- contribution information is available;
- Neuro Forge principles are referenced.

The badge is a conformity mark, not a claim that software is defect-free.

## Standard README cartouche

Use a maximum of 6–8 primary badges: Taillandier, release, validation/build, license, AI-assisted, open source, platform when relevant, and support.

## About integration

Do not load Shields.io badges inside native applications. The About screen should render native equivalents from `.neuroforge.yml`:

`Taillandier ✓ · vX.Y.Z · Tested ✓ · MIT`

Then display:

- application name;
- function;
- version;
- author/publisher;
- repository;
- documentation;
- releases;
- license;
- AI-assisted development notice;
- contribution link;
- support link.

Include this short definition:

> **Taillandier** is a uniquely French word with no exact equivalent in English. A taillandier is a craftsman who forges purpose-built edged tools. Neuro Forge applies the same philosophy to dedicated software.

## Source of truth

Each project contains a `.neuroforge.yml`. Generated README badges and About metadata must derive from that file or from verifiable GitHub repository state.
