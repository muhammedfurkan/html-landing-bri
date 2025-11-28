# Repository Guidelines

## Project Structure & Module Organization
HTML entry points live at the repository root (`index.html`, `pricing.html`, etc.) and load shared assets from `assets/` and `css/`. Styles are authored in modular SCSS under `assets/scss/` (split into `layout/`, `components/`, and utility partials) and compiled into distributable CSS in `css/`. Client-side behaviour sits in `assets/js/`; keep feature-specific scripts (e.g., `pricing-loader.js`, `blog-loader.js`) focused on one page. Images, icons, and fonts reside in `assets/img/`, `assets/icons/`, and `assets/fonts/`.

## Build, Test, and Development Commands
- `python3 -m http.server 8000` → serve the site locally from the repository root for quick manual testing.
- `sass assets/scss/main.scss css/main.css --style expanded --source-map` → rebuild readable CSS with up-to-date source maps.
- `sass assets/scss/main.scss css/main.min.css --style compressed --no-source-map` → refresh the minified bundle for production handoff.

## Coding Style & Naming Conventions
Follow the existing BEM-inspired class naming (`ub-hero__content`) and keep new selectors within the relevant SCSS partial. Use 4-space indentation inside SCSS blocks and 2 spaces in JavaScript for consistency with current files. JavaScript modules should export plain functions, avoid global variables where possible, and organize helpers above usage. Keep filenames in lowercase kebab-case and mirror the directory structure (e.g., `layout/header/_header.scss` for header-specific styles).

## Testing Guidelines
No automated test harness is bundled; rely on targeted manual checks. After each SCSS change, rebuild CSS and inspect the affected page via the local server in both desktop and mobile breakpoints. For API-driven pages (`blog.html`, `pricing.html`), use the dedicated fixtures (`blog-api-test.html`, `pricing-details.html`) to validate responses against live endpoints and watch for console errors.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (`feat:`, `fix:`, `chore:`) so changesets remain skimmable. Each commit should isolate one logical update—style tweaks, script fixes, or content edits should not mix. Pull requests must outline the affected pages, steps to reproduce or verify, and note any API or asset additions. Include before/after screenshots for visual changes and link related tracking tickets where applicable.

## Security & Configuration Tips
Public API URLs are hard-coded in `assets/js/blog-loader.js` and similar files; update them via environment-specific constants before deploying elsewhere. Never embed secrets or credentials in the repository—prefer runtime configuration or server-side proxies when integrating new services.
