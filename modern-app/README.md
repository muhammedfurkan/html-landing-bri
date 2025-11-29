# Modern App Migration

This project is a React migration of the original HTML design using:
- Next.js 15 (React 19 RC)
- Tailwind CSS v4
- HeroUI (NextUI)
- HeadlessUI
- Framer Motion

## Setup

1. `npm install`
2. `npm run dev` for development
3. `npm run build` for static HTML export (output in `out/`)

## Structure

- `app/`: Next.js App Router pages
- `components/`: Reusable components
  - `layout/`: Header, Footer
  - `sections/`: Page sections (Hero, Brands, Pricing, etc.)
  - `ui/`: Atomic UI components (if any)
