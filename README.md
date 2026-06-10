# VASP Digital — Digital Marketing Agency Website

Production-ready Next.js 15 website built from Figma design.

## Tech Stack
- **Next.js 15** (App Router, Turbopack)
- **TypeScript** — strict typing throughout
- **Tailwind CSS** — brand tokens configured
- **Framer Motion** — premium animations
- **Payload CMS** — headless CMS (separate instance)
- **Supabase** — form submissions, media storage
- **Vercel** — deployment

---

## Quick Start

```bash
# Clone and install
git clone https://github.com/your-org/vasp-digital.git
cd vasp-digital
npm install

# Configure environment
cp .env.local.example .env.local
# Fill in your values (see Environment Variables below)

# Run development server
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `PAYLOAD_SECRET` | Random secret string (min 32 chars) |
| `DATABASE_URI` | PostgreSQL connection string (for Payload) |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `NEXT_PUBLIC_SITE_URL` | Production URL (https://vaspdigital.com) |
| `NEXT_PUBLIC_PAYLOAD_URL` | Payload CMS URL |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── api/                # API routes
│   │   ├── contact/        # Form submission endpoint
│   │   └── og/             # Dynamic OG image generation
│   ├── services/           # Service pages (9 pages)
│   ├── industries/         # Industry pages (dynamic)
│   ├── locations/          # Location pages (dynamic)
│   ├── blog/               # Blog listing + dynamic posts
│   ├── case-studies/       # Case studies listing + dynamic
│   ├── about/              # About page
│   ├── team/               # Team page
│   ├── contact/            # Contact page
│   ├── thank-you/          # Post-form redirect
│   ├── sitemap.ts          # Dynamic XML sitemap
│   └── robots.ts           # robots.txt
│
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Button, SectionLabel, Breadcrumb, ScrollProgress
│   └── seo/                # StructuredData (JSON-LD)
│
├── sections/               # Page-specific sections
│   ├── home/               # Hero, Services, About, Results, Industries, etc.
│   ├── contact/            # Hero, Info, Form, ThankYou
│   ├── services/           # ServiceHero, ServiceFeatures, ServiceGrid
│   ├── about/              # Hero, Values, TeamPreview
│   ├── team/               # Hero, Grid
│   ├── blog/               # Hero, Grid, PostContent
│   ├── case-studies/       # Hero, Grid, CaseStudyContent
│   ├── industries/         # Hero, Grid
│   ├── locations/          # Hero, Grid
│   └── shared/             # CTASection
│
├── payload/                # Payload CMS config
│   ├── payload.config.ts   # Main config
│   └── collections/        # 9 collections
│
├── lib/
│   ├── utils.ts            # cn() helper
│   └── supabase/           # client.ts, server.ts, schema.sql
│
├── services/
│   └── payload.ts          # Typed Payload API layer
│
├── animations/
│   └── variants.ts         # Shared Framer Motion variants
│
├── hooks/
│   ├── useScrollProgress.ts
│   └── useInView.ts
│
├── types/
│   └── index.ts            # Full TypeScript interfaces
│
└── utils/
    └── index.ts            # formatDate, slugify, canonicalUrl, etc.
```

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Purple | `#623ccc` | Hero sections, buttons, accents |
| Coral | `#fd7056` | Industries section, CTA variant |
| Lavender | `#e3dbff` | Card backgrounds |
| Lavender Light | `#f0ecff` | Section backgrounds |
| Grey | `#f1f1f1` | Neutral card backgrounds |

---

## Supabase Setup

1. Create a new Supabase project at supabase.com
2. Go to **SQL Editor** and run the contents of `src/lib/supabase/schema.sql`
3. Create a storage bucket named `media` (set to public)
4. Copy your project URL and keys to `.env.local`

---

## Payload CMS Setup

Payload CMS runs as a **separate service** alongside the Next.js frontend.

```bash
# In a separate directory:
npx create-payload-app@latest vasp-payload
# Choose: blank template, PostgreSQL

# Copy collections from src/payload/collections/ into the Payload project
# Run migrations:
npx payload migrate:create
npx payload migrate
```

Then set `NEXT_PUBLIC_PAYLOAD_URL=https://your-payload-url.com` in Vercel env vars.

---

## Deploying to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-org/vasp-digital.git
git push -u origin main
```

### 2. Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Add all environment variables from `.env.local`
5. Click **Deploy**

### 3. Custom Domain
1. In Vercel → Project → Settings → Domains
2. Add `vaspdigital.com` and `www.vaspdigital.com`
3. Update DNS records as instructed
4. SSL is provisioned automatically

### 4. Environment Variables in Vercel
All variables from `.env.local` must be added in:
Vercel → Project → Settings → Environment Variables

---

## Page List (All Routes)

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage |
| `/services` | Static | Services overview |
| `/services/seo` | Static | SEO services |
| `/services/local-seo` | Static | Local SEO |
| `/services/paid-ads` | Static | Paid ads |
| `/services/google-ads` | Static | Google Ads |
| `/services/meta-ads` | Static | Meta Ads |
| `/services/web-design` | Static | Web design |
| `/services/gbp-optimisation` | Static | GBP optimisation |
| `/services/local-citations` | Static | Local citations |
| `/services/brand-visibility` | Static | Brand visibility |
| `/services/lead-generation-ads` | Static | Lead gen ads |
| `/services/wordpress-development` | Static | WordPress dev |
| `/industries` | Static | Industries overview |
| `/industries/[slug]` | Dynamic | Industry template |
| `/locations` | Static | Locations overview |
| `/locations/[slug]` | Dynamic | City template |
| `/about` | Static | About page |
| `/team` | Static | Team page |
| `/blog` | Static | Blog listing |
| `/blog/[slug]` | Dynamic | Single post |
| `/case-studies` | Static | Case studies listing |
| `/case-studies/[slug]` | Dynamic | Single case study |
| `/contact` | Static | Contact page |
| `/thank-you` | Static | Post-submission |
| `/sitemap.xml` | Generated | XML sitemap |
| `/robots.txt` | Generated | robots.txt |
| `/api/contact` | API | Form submission |
| `/api/og` | API (Edge) | OG image generation |

---

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 90+
- Core Web Vitals: Pass

---

## Adding New Pages

1. Create `src/app/new-page/page.tsx`
2. Add metadata export
3. Import and compose sections
4. Add to `src/app/sitemap.ts`
5. Add nav link if needed in `src/constants/index.ts`

---

## License

Private — VASP Digital. All rights reserved.
