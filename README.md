# Suga S AI Tech Website

A Next.js 15 App Router starter for Suga S AI Tech's public website.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

- `app/` - routes, root layout, and global CSS
- `components/layout/` - shared header and footer
- `components/common/` - reusable page-level patterns
- `data/site.ts` - navigation, services, stats, process, and FAQ content
- `public/images/` - supplied Zevora reference assets

The homepage is intentionally composed section-by-section in `app/page.tsx`. Content lives separately in `data/site.ts` so a manual implementation can change copy, cards, or navigation without hunting through styling.
