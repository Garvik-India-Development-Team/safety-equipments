# SafetyPro — Industrial Safety Equipment & PPE Supplier

> Premium e-commerce website for safety equipment built with Next.js 16, Tailwind CSS v4, and MongoDB.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom safety color tokens
- **Database:** MongoDB
- **State:** Zustand
- **UI:** Radix UI primitives + Lucide React icons
- **Font:** Barlow (via `next/font/google`)
- **Hosting:** Netlify

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env and configure
cp .env.example .env.local
# Edit .env.local with your MongoDB URI, email settings, etc.

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Netlify Deployment

This project is configured for Netlify with `netlify.toml` and `@netlify/plugin-nextjs`.

### Setup
1. Push code to GitHub
2. Connect repo in Netlify dashboard
3. Set environment variables in Netlify:
   - `MONGODB_URI` — MongoDB Atlas connection string
   - `MONGODB_DB_NAME` — Database name
   - `ADMIN_SECRET` — Admin panel secret
   - `NEXT_PUBLIC_PHONE_NUMBER` — Displayed phone
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number
   - `NEXT_PUBLIC_CONTACT_EMAIL` — Contact email
   - `NEXT_PUBLIC_BASE_URL` — Your Netlify domain URL
   - SMTP vars for email notifications (optional)
4. Deploy triggers automatically on push to `main`

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── api/          # Backend API (products, categories, hero, brands, inquiries)
│   ├── admin/        # Admin panel
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── category/     # Category listing pages
│   ├── search/       # Search results
│   ├── brands/       # Brand pages
│   ├── bulk-quote/   # Bulk quote form
│   ├── industries/   # Industries page
│   ├── layout.tsx    # Root layout (Header + Footer + QuoteModal)
│   ├── page.tsx      # Homepage
│   └── globals.css   # Design tokens & utilities
├── components/       # React components
│   ├── header.tsx    # 3-tier Gaion-style header
│   ├── footer.tsx    # Newsletter + 4-column footer
│   ├── hero-slider.tsx
│   ├── category-quicklinks.tsx
│   ├── deals-of-the-day.tsx
│   ├── value-props.tsx
│   ├── tabbed-products.tsx
│   ├── product-card.tsx
│   └── ui/           # Radix UI primitives
├── lib/              # DB, email, utils
├── store/            # Zustand stores
└── types/            # TypeScript types
```

## License

Private — All rights reserved.
