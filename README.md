# Srinithi Anand — Official Artist Portfolio

Official portfolio website for **Srinithi Anand** (Singer | Performer | Artist), built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages & Features

- **Home (`/`)**: Hero spotlight with portrait, stats bar, Featured Moments lightbox gallery, and Awards / Portfolio quick links.
- **About (`/about`)**: Biography, *My Journey* showcase with stage & TV reel lightbox, *Musical Journey* timeline, and *My Interests*.
- **Portfolio (`/portfolio`)**: Separate curated galleries for *With Celebrities*, *Live Performances*, *Stage Performances*, *Special Events*, *Musical Moments*, *Tour Diaries* (Kashmir, Malaysia, Sri Lanka, Vietnam), and *Awards & Recognitions* (`#awards`), complete with View All toggles, category filters, and a full-featured keyboard/touch/fullscreen Lightbox.
- **Contact (`/contact`)**: Artist contact details, social channels, and enquiry form.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- `next/image` WebP optimization & `next/font/google` (`Playfair Display`, `Inter`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production & Deployment (Vercel)

```bash
npm run build
npm start
```

### Vercel Readiness
- `vercel.json` configures Next.js framework preset, security headers, and immutable CDN caching for `/images/*`.
- `next.config.ts` enables AVIF/WebP image optimization and long-lived cache TTLs.
- Dynamic `robots.txt` (`src/app/robots.ts`) and `sitemap.xml` (`src/app/sitemap.ts`) resolve automatically via `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` (or optional `NEXT_PUBLIC_SITE_URL`).
- Optional Contact Email Delivery (`POST /api/contact`): set `RESEND_API_KEY` (and optional `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`) in Vercel Environment Variables. Without it, the contact form validates submissions and returns a safe acknowledgment.
