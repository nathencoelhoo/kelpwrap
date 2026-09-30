# KelpWrap — Ocean Grown Packaging

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for KelpWrap,
built from the pitch deck content, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset "Next.js" is auto-detected. Click Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel
```

## What's included

- `app/` — root layout (fonts, metadata) and the homepage
- `components/` — Hero, Why Seaweed, Use Cases, Product Range, How It's
  Made, Target Market, the interactive **Plastic Footprint Calculator**,
  Impact/SDG section, and Footer
- Design tokens (colors, fonts) live in `tailwind.config.ts`
- Hero and section imagery is hotlinked from Unsplash (free license);
  swap the URLs in `Hero.tsx`, `UseCases.tsx`, and `TargetMarket.tsx` for
  your own product photography whenever you have it.

## Next steps worth doing before launch

- Swap in real product photography (the deck mentions you have some).
- Replace `hello@kelpwrap.in` in `Footer.tsx` with a real contact address.
- Add a real domain in Vercel's project settings once you have one.
