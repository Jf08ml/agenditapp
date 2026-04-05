# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server with Turbopack (http://localhost:3000)
npm run build    # production build with Turbopack
npm run lint     # ESLint check
```

No test suite is configured.

## Architecture

This is a **Next.js 15 marketing/landing site** for AgenditApp, a Colombian SaaS scheduling platform. It is entirely a public-facing landing — no auth, no dashboard.

### Route structure

- `/` — main landing page (`src/app/page.tsx`), composed of sections in `src/app/(landing)/sections/`
- `/funcionalidades`, `/precios`, `/sectores` — standalone marketing pages
- `/sectores/[sector]` — individual sector landing pages (barberías, salones, spas, etc.)
- `/privacidad`, `/terminos` — legal pages
- `/api/leads` — single POST endpoint that saves leads to Firestore and triggers email notification
- `/og` — dynamic OG image route
- `/robots`, `/sitemap` — SEO routes

### Landing page sections (in order)

`Hero → Sectores → Reserva → Servicios → Ubicacion → Precio → DemoLead → FAQ → Footer`

The `Hero` section contains the navbar (not a separate layout component).

### Key shared files

- `src/app/(landing)/components/constants.ts` — `WHATSAPP_HREF` and all JSON-LD schema objects (`JSONLD_ORGANIZATION`, `JSONLD_SOFTWARE`, `JSONLD_FAQ`, etc.)
- `src/app/(landing)/components/constants/paises.ts` — country list with dial codes for the lead form
- `src/lib/firebaseAdmin.ts` — Firebase Admin SDK singleton (Firestore only)

### Animations

Framer Motion is used throughout. Common pattern: `motion` variants (`fadeIn`, `fadeInUp`, `cardIn`) with `whileInView` + `viewport={{ once: true }}`. Sections are client components (`"use client"`) when they use motion or state.

### Styling system

- Tailwind v4 with PostCSS
- Design tokens defined as CSS variables in `src/app/globals.css` and exposed as Tailwind utilities via `@theme inline`
- Font: Poppins (400/500/600 only), loaded via `next/font/google`, variable `--font-poppins`
- Two utility classes: `.btn-primary` and `.card`

| Token | Value | Tailwind class |
|---|---|---|
| Brand | `#1D4ED8` | `bg-brand` / `text-brand` |
| Brand hover | `#2563EB` | `bg-brand-hover` |
| Background | `#F8FAFC` | `bg-bg-main` |
| Card bg | `#FFFFFF` | `bg-bg-card` |
| Heading text | `#0F172A` | `text-heading` |
| Body text | `#334155` | `text-body` |
| Muted text | `#64748B` | `text-muted` |

Radius tokens: `--radius-sm` (10px), `--radius-md` (12px), `--radius-lg` (14px).

**Never use** Poppins 300 (Light) or 900 (Black).

### Backend / integrations

- **Firebase Admin** (Firestore): leads collection. Requires env vars `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`.
- **Email notifications**: POST to `MAILER_URL` env var (defaults to `https://api-email-sending.vercel.app`). Recipient configured via `LEADS_NOTIFY_EMAIL`.
- **Analytics**: Vercel Analytics (`@vercel/analytics`) + Google Analytics (`G-ERKL5G7HS8`) loaded in `layout.tsx`.
- **Google Ads conversion**: fired from `DemoLead.tsx` on form submit via `window.gtag`.

### Sector pages pattern

Each sector page under `src/app/sectores/[sector]/page.tsx` follows the same structure: Next.js `Metadata` export + reuses shared UI components (`PageHeader`, `PageFooter`) from `src/app/(landing)/components/ui/`.
