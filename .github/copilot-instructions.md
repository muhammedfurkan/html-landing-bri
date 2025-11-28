# Copilot instructions for this repository

Static HTML landing site with dynamic blog and testimonial sections powered by external REST APIs. No Node build; serve statically and enhance with vanilla JS.

## Essentials
- Pages: `index.html`, `blog.html`, `blog-single.html` (+ others)
- CSS: precompiled `css/main.css`; sources in `assets/scss/**` via `assets/scss/main.scss`
- JS entry points:
  - `assets/js/srcipts.js` (UI: menus, sliders, filters, AOS init)
  - `assets/js/form.js` (newsletter/contact/job/signin/signup handlers)
  - `assets/js/blog-loader.js` (fetch + render blog/testimonials)
  - Tests: `blog-api-test.html` + `assets/js/blog-api-test.js`

## Run locally
- Serve statically to avoid file:// issues:
  - `python3 -m http.server 8000` → open http://localhost:8000
- Data is fetched from: Blog `https://api.briportal.com/api/blog`, Testimonial `https://api.briportal.com/api/testimonial`

## Data flow patterns (`blog-loader.js`)
- API bases are constants at top; update there if endpoints change.
- Response normalization: `parseApiResponse(resp) => resp.result || resp` (handles nested `{ result: { data } }`).
- Route gating on DOMContentLoaded via `window.location.pathname`:
  - Home: `initializeHomepageBlogs()`, `initializeTestimonials()`
  - Blog list: `initializeBlogListPage()` (also wires `.ub-latest-posts__filter-btn`)
  - Blog detail: `loadBlogDetail()` (reads `?slug=`)
- After injecting HTML, call `AOS.refresh()` if available.

## Expected hooks/selectors
- Home latest blogs: `.ub-blog__cards`
- Blog list grid: `.ub-latest-posts__grid`; empty-state: `.ub-latest-posts__no-posts`
- Blog detail container: element with id `ub-blog-details__content`
- Testimonial container: `.ub-testimonial__content`
- Category filtering via `data-category`; background images via `data-bg-img`

## Loading order (don’t break)
CDNs first, then local scripts in this order:
1) AOS  2) SweetAlert2  3) Swiper  4) `srcipts.js`  5) `form.js`  6) `blog-loader.js`
Note: file name is intentionally `srcipts.js`. Update HTML if you ever rename.

## SCSS notes
- Author in `assets/scss/**`. If recompile is needed, build `assets/scss/main.scss` → `css/main.css` with any SASS CLI (no config in repo).

## Verify changes quickly
- Open `blog-api-test.html` for API smoke tests; or use functions in `assets/js/blog-api-test.js` via console.
- Visual checks: Home shows 3 posts; list filters by category; detail renders by `?slug=...`.

## Gotchas
- CORS/network failures return empty arrays; check console.
- Changing section markup/class names requires updating selectors in JS.
- Always refresh AOS after DOM injections to keep animations active.
