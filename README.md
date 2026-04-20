# Hema Academy

Marketing site for Hema Academy — an eight-week AI-marketing intensive in Riyadh. Bilingual (EN/AR) with full RTL support.

Built with **Astro 5** + **Tailwind CSS v4** + **TypeScript**. Static output, served via Caddy on Railway.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy (Railway)

Railway builds the `Dockerfile` and runs Caddy on `$PORT`. Push to the connected GitHub repo and Railway redeploys.

## Structure

- `src/data/content.ts` — all copy, courses, cohorts, team (single source of truth, bilingual)
- `src/pages/[lang]/` — dynamic routes generating `/en/*` and `/ar/*`
- `src/components/` — `AscentMark`, `Nav`, `Footer`
- `src/styles/global.css` — Tailwind v4 theme (brand colors, fonts)

## Future integrations

- **Loops.so** email: wire `src/pages/api/register.ts` (switch output to `server` or `hybrid`) and POST from the register form.
- **Stripe**: add when paid tracks launch (2027 per current copy).
