# KelpWrap — Ocean Grown Packaging

Marketing website for **KelpWrap**, a Goa-based startup producing
seaweed-based, home-compostable food packaging for the hospitality
industry — cafés, eco-resorts, restaurants and hotels looking to move
off single-use plastic.

**Live:** https://kelpwrap.vercel.app

---

## Tech stack

| Layer      | Choice                          |
|------------|----------------------------------|
| Framework  | Next.js 14 (App Router)         |
| Language   | TypeScript                      |
| Styling    | Tailwind CSS                    |
| Fonts      | Fraunces (display) · Plus Jakarta Sans (body) |
| Hosting    | Vercel, auto-deploy on push to `main` |
| Images     | `next/image`, served from `/public` |

No external CMS, database, or backend — this is a static marketing site
with one client-side interactive component (the footprint calculator).

---

## Design system

- **Palette** — deep ocean teal, sage kelp-green, warm sand/cream, and a
  muted amber accent, pulled from the brand's own pitch deck rather than
  generic template colors.
- **Type** — Fraunces for headlines (serif, organic character, fits
  "grown not manufactured"), Plus Jakarta Sans for body copy.
- **Layout** — alternating full-bleed color bands between sections, with
  a torn "shoreline" edge (`.shore-edge` in `globals.css`) at select
  section boundaries instead of hard rectangles, echoing the coastline
  story.
- **Signature mark** — the brand's own circular medallion logo
  (`public/logo.png`), background-removed from the original photo,
  used in the nav and as the hero's one bold visual element.

Design tokens (colors, fonts, spacing) live in `tailwind.config.ts`.

---

## Site sections

1. **Hero** — headline, intro copy, medallion logo
2. **Why Seaweed** — compostability, moisture resistance, fast carbon
   absorption, local sourcing (4-point grid)
3. **Use Cases** — street food, sauces & chutneys, bakery, takeaway
   liners
4. **Product Range** — the 3 products (Compostable Food Wraps, Sauce &
   Chutney Sachets, Plastic-Free Liners), each with real product
   photography
5. **How It's Made** — the 4-step manufacturing process (sourcing →
   processing → sheet forming → cutting & packaging)
6. **Target Market** — B2B model, primary customer segments, initial
   launch locations, working capital cycle stat
7. **Plastic Footprint Calculator** — interactive tool (café/restaurant/
   resort presets + a packaging-volume slider) estimating plastic
   avoided per month/year, with a bottle-equivalent comparison
8. **Vision & Impact** — mission statement, SDG alignment (12, 14, 9,
   13, 8)
9. **Footer** — contact CTA

---

## Project structure
app/
layout.tsx fonts, page metadata
page.tsx assembles all sections in order
globals.css design tokens, shoreline-edge divider, animations

components/
Nav.tsx
Hero.tsx
WhySeaweed.tsx
UseCases.tsx
ProductRange.tsx
HowWeManufacture.tsx
TargetMarket.tsx
FootprintCalculator.tsx client component (useState/useMemo)
Impact.tsx
Footer.tsx

public/
logo.png brand medallion, transparent background
sachets.jpg product photo — Sauce & Chutney Sachets
wrap-box.jpg product photo — Compostable Food Wraps
liner-bag.jpg product photo — Plastic-Free Liners


---

## Editing content

All edits are made directly on GitHub — no local environment needed:

1. Open the relevant file in `components/` or `public/`
2. Click the pencil (edit) icon
3. Make the change → **Commit changes**
4. The live site updates automatically within about a minute

**Replacing a product photo:** keep the exact same filename (e.g.
`sachets.jpg`) so no code change is required — delete the old file and
upload the new one under that same name in `public/`.

---

## Known gaps / roadmap

- [ ] Custom domain (currently on the default `vercel.app` subdomain)
- [ ] Real contact form in place of the `mailto:` link in `Footer.tsx`
- [ ] Favicon and social share (OG) preview image
- [ ] Confirm `hello@kelpwrap.in` is a real, monitored inbox

---
## Credits

 Nathen  — *"Seaweed, not plastic."*
