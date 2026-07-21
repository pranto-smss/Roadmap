# AGENTS.md

## What this repo is

A static HTML roadmap page (`index.html`) and a markdown tracking table (`README.md`) listing 16 builds across 5 legs of a web-dev learning path. No build system, no package manager, no tests.

## Key files

- `index.html` — the rendered roadmap site (pure HTML + CSS + inline JS for card toggle)
- `README.md` — progress tracker with the same 16 builds, linked to individual GitHub repos

## Editing workflow

- The primary editable artifact is `README.md`. When completing a build, update the corresponding row's "Done?" column and link the deployed repo.
- `index.html` and `README.md` now use the **same build numbers and names** (01–16b). Keep them in sync if you change a build's name, description, or tech stack.

## Gotchas

- No linting, typecheck, or test commands exist. Verify changes by opening `index.html` in a browser.
- Deployed via GitHub Pages (each build has its own Pages deployment, plus this repo itself).
