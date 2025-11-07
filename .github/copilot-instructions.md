## Purpose
Short, actionable guidance for AI coding agents working in this repository so contributions are safe, focused, and aligned with project conventions.

## Big picture (what this repo is)
- Static site generator for a DORA-focused book-club site. Source content lives under `content/` and `meetings/`; the generated site is placed in `docs/`.
- Build and dev entrypoints: `build.js` (production build) and `dev.js` (dev server with live reload).
- Frontend assets (generated) live in `docs/` — do not treat `docs/` as source. Edit markdown in `content/` and `meetings/`, then run the build.

## Most important files to read first
- `README.md` — high-level workflow and conventions (already contains build/dev commands).
- `package.json` — scripts: `npm run build` -> `node build.js`, `npm run dev` -> `node dev.js`, `npm run lint`, `npm run format`.
- `build.js` / `dev.js` — primary orchestration for markdown → HTML conversion and dev serving (use these when changing content pipeline).
- `content/*.md`, `meetings/*.md` — source documents you should edit or transform.
- `docs/index.html`, `docs/main.js`, `docs/style.css` — examples of generated output and UI patterns (tabbed interface, small JS enhancements).

## How to run locally (exact commands)
- Install deps: `npm install`
- Dev (live reload): `npm run dev`  (binds BrowserSync; dev server at http://localhost:3000)
- Build (generate static site): `npm run build`
- Lint all generated files: `npm run lint` (runs html-validate, stylelint, eslint on `docs/**`)
- Format generated files: `npm run format` (Prettier on `docs/**/*.{html,css,js}`)

Note: The repo uses ESM (`"type": "module"` in `package.json`). When editing `build.js`/`dev.js`, follow ESM import/export style.

## Project-specific conventions and patterns
- Authoritative source: markdown under `content/` and `meetings/`. Never edit `docs/` directly except to commit a built artifact during deployment.
- CSS follows BEM-style naming (read `docs/style.css` for examples).
- Markdown is converted with `markdown-it` inside `build.js` — any change to markdown rendering should be implemented by editing `build.js`.
- The dev server is BrowserSync-driven (live reload). `dev.js` orchestrates nodemon/browser-sync; prefer using `npm run dev` rather than launching BrowserSync separately.
- No automated tests are present (see `package.json` test placeholder). Use linting commands (`npm run lint`) as the main validation step.

## Where content and artifacts flow
1. Author edits `content/*.md` or `meetings/*.md`.
2. `npm run build` (node `build.js`) converts markdown → HTML and writes to `docs/`.
3. `npm run dev` runs a watcher and BrowserSync to auto-build and reload in a browser.
4. For deployment, commit the generated `docs/` directory and push (this repo uses GitHub Pages serving `docs/`).

## Linting / quality checks
- HTML: `npm run lint:html` (runs `html-validate` against `docs/**/*.html`)
- CSS: `npm run lint:css` (`stylelint` against `docs/**/*.css`)
- JS: `npm run lint:js` (`eslint` against `docs/**/*.js`)
- Combined: `npm run lint`

If you change output markup or CSS, run the appropriate linter(s) to ensure generated output meets standards.

## Integration points & external dependencies
- AWS S3 bucket `dora-ai-paradox-bookclub-2024` is used for hosting media; local staging is `media/` (media is excluded from git). Do not attempt to access S3 credentials from the repo — they are not stored here.
- Dev dependencies include `markdown-it`, `browser-sync`, `nodemon`, `html-validate`, `stylelint`, `eslint`, and `prettier` (see `package.json`).

## Safe edit checklist for agents (small actionable rules)
1. Prefer editing `content/*.md` or `meetings/*.md` — those are the canonical sources.
2. If you modify markdown rendering or add a new transformer, update `build.js` and `dev.js` accordingly and keep ESM syntax.
3. Run `npm run build` and then `npm run lint` locally to validate output before proposing changes.
4. Do not add secrets, keys, or S3 credentials to the repo.
5. Because there are no automated unit tests, include a short manual validation checklist in PR descriptions when changing rendering or layout (e.g., pages A/B, mobile view, link sanity).

## Examples (useful quick refs)
- Edit meeting content: `meetings/meeting2.md` → then `npm run build` to regenerate `docs/meeting2.html`.
- Change visual summary: `content/The_AI_Paradox_Visual_Summary.md` → `npm run build` → verify `docs/The_AI_Paradox_Visual_Summary.html`.
- Run linters after build: `npm run lint`

## When to open a PR vs edit directly
- Make code changes (scripts or build pipeline): open a PR with a description of the change, include local verification steps and linter output.
- Content edits (text/typos) may be small; still prefer PRs so maintainers can review content changes before a site rebuild.

---
If anything in this file is unclear or you'd like more detail (for example, a quick summary of `build.js` internals or the `dev.js` watcher logic), tell me which area and I'll expand this file with concrete examples from those scripts.
