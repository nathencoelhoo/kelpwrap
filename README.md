# KelpWrap — Ocean Grown Packaging

Marketing site for KelpWrap, a Goa-based startup making seaweed-based,
home-compostable food packaging for cafés, resorts and hotels.

**Live site:** https://kelpwrap.vercel.app

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deployed
on Vercel, auto-redeploying on every push to `main`.

## What's on the site

- **Hero** — headline, intro, and the KelpWrap medallion logo
- **Why Seaweed** — compostability, moisture resistance, fast carbon
  absorption, local sourcing
- **Use Cases** — street food, sauces & chutneys, bakery, takeaway liners
- **Product Range** — Compostable Food Wraps, Sauce & Chutney Sachets,
  Plastic-Free Liners, each with real product photography
- **How It's Made** — the 4-step manufacturing process
- **Target Market** — B2B model, initial launch locations, working
  capital cycle
- **Plastic Footprint Calculator** — interactive tool estimating plastic
  avoided per month/year, with café/restaurant/resort presets
- **Vision & SDG alignment**
- **Footer** — contact CTA

## Project structure
pp/
layout.tsx → fonts, page metadata
page.tsx → assembles all sections
globals.css → design tokens, animations
components/
Hero.tsx
Nav.tsx
WhySeaweed.tsx
UseCases.tsx
ProductRange.tsx
HowWeManufacture.tsx
TargetMarket.tsx
FootprintCalculator.tsx
Impact.tsx
Footer.tsx
public/
logo.png → brand medallion (transparent background)
sachets.jpg → product photo, Sauce & Chutney Sachets
wrap-box.jpg → product photo, Compostable Food Wraps
liner-bag.jpg → product photo, Plastic-Free Liners


## Run locally

```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Deploy to Vercel

Already connected: pushing to `main` on GitHub auto-deploys to
`kelpwrap.vercel.app` via Vercel's GitHub integration. No manual deploy
step needed.

To deploy a fresh copy elsewhere:
1. Push this repo to GitHub
2. vercel.com → **Add New → Project** → import the repo
3. Framework preset **Next.js** is auto-detected → **Deploy**

## Editing content or images

Everything here is edited directly on GitHub (no local dev environment
required):
1. Open the file in `components/` or `public/`
2. Click the pencil (edit) icon
3. Make the change → **Commit changes**
4. Vercel redeploys automatically within ~60 seconds

To replace a product photo, keep the exact filename (e.g. `sachets.jpg`)
so the code doesn't need to change — just delete the old file and
upload the new one with the same name, into `public/`.

## Still open / nice-to-haves

- [ ] Custom domain (e.g. `kelpwrap.in`) instead of `kelpwrap.vercel.app`
- [ ] Real contact form instead of a `mailto:` link
- [ ] Favicon + social share preview image
- [ ] Confirm `hello@kelpwrap.in` in `Footer.tsx` is a real, monitored inbox
