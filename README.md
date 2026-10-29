# Las Vegas Multi-Generational Homes

Next.js 15 marketing site for **www.lasvegasmultigenhomes.com** — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.

## Stack

- Next.js 15 App Router · React 19 · TypeScript
- Tailwind CSS 4
- Vercel deployment
- RealScout MLS listings widget
- JSON-LD LocalBusiness / RealEstateAgent schema on every page

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Vercel)

```bash
vercel build
```

Or locally: `npm run build && npm start`

## Project structure

```
src/
├── app/              # Routes (replaces legacy .html URLs)
├── components/       # Layout, sections, RealScout
├── config/site.config.ts  # NAP, GBP-aligned business data
└── lib/              # Schema, metadata helpers
legacy/               # Original static HTML backup
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed.

## Legacy URLs

Old `.html` paths redirect to clean routes (e.g. `/tour.html` → `/tour`).

## Domains (Vercel)

- Production: `www.lasvegasmultigenhomes.com`
- Apex `lasvegasmultigenhomes.com` → 308 to www (configured in Vercel dashboard)
