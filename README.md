# Dr. Nisha Godani — Academic Portfolio & Make Maths Easy

A production-ready Next.js 15 website for Dr. Nisha Godani, Assistant Professor of Mathematics at Medi-Caps University, Indore.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS custom properties (4-theme system)
- **Animation**: Framer Motion 11 with LazyMotion
- **Icons**: Phosphor Icons
- **UI Primitives**: Radix UI (Dialog, Popover, Tabs, Tooltip)
- **Deployment**: Vercel (Mumbai region — `bom1`)

## Features

- Premium animated hero with mathematical mesh background
- Four themes: Academic Ivory, Deep Navy, Dark Research, Elegant Light
- Complete publication archive — 52 papers with search, filters, citation export
- Interactive research timeline and collaboration network
- Full awards page with Stanford Top 2% badge
- Complete Make Maths Easy Classes brand section
- WhatsApp integration for class enquiries
- Fully accessible (WCAG AA), mobile-first, SEO-optimised

## Quick Start

```bash
npm install
npm run dev
```

## Before Deploying

1. Add `public/images/portrait.jpg` (min 800×800px)
2. Add `public/images/og-image.jpg` (1200×630px)
3. Add favicon set to `public/icons/`
4. Set environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://nishagodani.com
   ```

See `DEPLOYMENT.md` for the complete deployment guide.

## Project Structure

```
app/              → Next.js App Router pages (9 routes)
components/       → React components (cards, layout, sections, UI, interactive)
data/             → All site content as TypeScript files
hooks/            → Custom React hooks
lib/              → Utilities, animations, metadata, schema generators
types/            → TypeScript type definitions
styles/           → CSS tokens (4 themes) and keyframe animations
public/           → Static assets
```

## Data Updates

All content lives in `data/` TypeScript files. To update:
- New publication → edit `data/publications.ts`
- New award → edit `data/awards.ts`  
- Contact details → edit `data/personal.ts`
- MME details → edit `data/mme.ts`

No component changes needed — rebuild picks up changes automatically.
