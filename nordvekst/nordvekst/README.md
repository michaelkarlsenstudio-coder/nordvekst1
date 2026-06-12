# Nordvekst — one-page launch site

Premium Scandinavian one-pager in Norwegian. Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion. Fully static — verified production build, 144 kB first load JS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (verified passing)
```

## Deploy (15 minutes, free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo. Vercel auto-detects Next.js. Click Deploy.
3. Buy your .no domain at domeneshop.no (requires Norwegian org.nr or personal ID) and point it to Vercel under Project → Settings → Domains.

## Activate the contact form (5 minutes)

The form has two modes:

- **No setup:** shows a direct e-mail button. Works immediately.
- **Form mode:** create a free form at formspree.io, copy the endpoint URL, and set it in Vercel → Settings → Environment Variables as `NEXT_PUBLIC_FORM_ENDPOINT`. Redeploy. Done.

## Before launch — find every TODO

```bash
grep -rn "TODO" app components
```

You must replace:

- Agency name: find-and-replace `Nordvekst` across the project if you choose a different name
- `EMAIL` in `components/Contact.tsx`
- Phone number in `components/Contact.tsx`
- Founder name + photo in `components/About.tsx` (a real photo of you measurably increases conversion — do not skip it)
- Org.nr in `components/Footer.tsx`
- Domain in `app/layout.tsx` (`metadataBase`)

## Design system (for future edits)

All tokens live in `app/globals.css`:

- Colors: `fog` (background), `paper` (cards), `ink` (spruce-green text), `pine`/`moss` (secondary text), `mist` (hairlines), `rav` (amber accent — use sparingly)
- Type: Familjen Grotesk (display + body), IBM Plex Mono (numbers, labels, the § marks)

One rule: the amber accent and the motion are already at maximum. When in doubt, remove — that is what keeps it looking expensive.
