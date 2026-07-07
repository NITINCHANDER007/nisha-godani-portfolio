# Deployment Guide — Dr. Nisha Godani Website

## Pre-Deployment Checklist

### 1. Image Assets (Required)
Place these files before deploying:

**`public/images/portrait.jpg`** ← CRITICAL
- The professional portrait photograph
- Minimum 800×800px, JPEG format
- Used in: Hero, About, Gallery, Open Graph

**`public/images/og-image.jpg`** ← CRITICAL  
- Open Graph / Social sharing preview image
- Exactly 1200×630px, JPEG format
- Content: Name, title, portrait on navy/gold background

**`public/icons/favicon.ico`** ← Required
**`public/icons/favicon-16x16.png`** ← Required
**`public/icons/favicon-32x32.png`** ← Required
**`public/icons/apple-touch-icon.png`** (180×180) ← Required

### 2. Environment Variables
Set in Vercel Dashboard → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://nishagodani.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919039006536
```

### 3. Domain Configuration
- Primary domain: `nishagodani.com` (recommended) or `drnishagodani.com`
- Add domain in Vercel Dashboard → Project → Settings → Domains
- SSL is automatic via Vercel

## Deployment Steps

### Option A: GitHub Integration (Recommended)
1. Push repository to GitHub
2. Connect GitHub repo to Vercel
3. Vercel auto-detects Next.js — no build configuration needed
4. Set environment variables (above)
5. Deploy

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Build Command
```
next build
```

## Output Directory
```
.next
```

## Node.js Version
18.x or 20.x (LTS recommended)

## Region
`bom1` (Mumbai) — configured in `vercel.json` for optimal India latency

## Post-Deployment
1. Submit sitemap to Google Search Console: `https://nishagodani.com/sitemap.xml`
2. Verify JSON-LD schemas at: https://search.google.com/test/rich-results
3. Test Open Graph previews at: https://www.opengraph.xyz
4. Verify WhatsApp link opens correctly on mobile
5. Test all 4 theme switches
6. Test on mobile (iOS Safari + Android Chrome)

## Data Updates
All content is in `data/` TypeScript files.
To add a new publication: edit `data/publications.ts`
To add a new award: edit `data/awards.ts`
No code changes needed — rebuild automatically picks up changes.

## Performance Targets
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- LCP: < 1.5s (with portrait image loaded)
- CLS: < 0.05
