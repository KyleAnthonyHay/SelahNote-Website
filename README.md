# SelahNote website

Next.js 16 + Tailwind v4 recreation of [selahnote.app](https://selahnote.app) (previously built in Framer).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

| What | Where |
| --- | --- |
| Page order | `src/app/page.tsx` |
| All copy, links, reviews, FAQs, pricing | `src/data/content.ts` |
| Image slots (screenshots, illustrations, icons, avatars) | `src/data/assets.ts` + `ASSETS.md` |
| Sections | `src/components/*.tsx` |
| Buttons, phone mockup, headings, placeholders | `src/components/ui/` |
| SVG icons (feature + pricing glyphs, bubble notches, logo fallback) | `src/components/icons.tsx` |
| Type scale, colors, shadows, animations | `src/app/globals.css` |

## Adding the remaining graphics

Every image on the page is a slot in `src/data/assets.ts`. While a slot is `null` a striped, labelled placeholder is rendered. Drop the file into `public/assets/` and set the slot to its path. `ASSETS.md` lists every slot with the exact size it needs.

## Motion

Animations use [Motion](https://motion.dev) (`motion/react`, loaded lazily through `MotionProvider` in `src/app/layout.tsx`).

- `src/components/motion/Reveal.tsx` has two wrappers: `FadeIn` animates on mount (hero copy and phones), `Reveal` animates the first time an element scrolls into view. Both accept `delay`, `y`, `scale`, `duration`, and skip the animation entirely when the visitor prefers reduced motion.
- The hero phones rise 110px while scaling from 80%, the front phone leading the back one, matching the live site's load animation.
- Cards and FAQ rows stagger by about 0.1s per item. Buttons get a small spring on hover and press (`src/components/ui/Button.tsx`).

## Layout notes

- Desktop layout is pixel-matched to the live site at a 1120px content width (nav 800px, footer 1160px); sections are separated by 120px.
- Breakpoints follow Framer's: phone `< 810px`, tablet `810–1199px`, desktop `>= 1200px` (`tablet:` / `desktop:` and `max-tablet:` / `max-desktop:` variants).
- Fonts: Inter 400/500/600 via `next/font`.
