# Uddy Skincare — Project Handoff

**Last updated:** 2026-05-10
**Repo:** github.com/ptaylor126/uddy
**Live:** uddyskin.com
**Status:** Pre-launch mode (collecting email signups)

---

## Quick Start

```bash
git clone https://github.com/ptaylor126/uddy.git
cd uddy
cp .env.example .env.local   # fill in real values (see Environment Variables below)
npm install
npm run dev                   # http://localhost:3000
```

With `NEXT_PUBLIC_PRELAUNCH_MODE=true` the homepage at `/` shows the prelaunch landing.

---

## Current State

The site is in **pre-launch mode**. All traffic is redirected to `/prelaunch` via middleware. The full e-commerce site (products, cart, checkout via Stripe, Sanity CMS) exists behind this gate and goes live when the flag is flipped to `false`.

### What's live

| Screen | Route | File | Purpose |
|--------|-------|------|---------|
| Landing page | `/` (rewrites to `/prelaunch`) | `app/prelaunch/page.tsx` | Email capture with signup form |
| Confirmation page | `/confirmed?status=...` | `app/confirmed/page.tsx` | Post-email-confirmation landing |
| Confirmation email | (sent via Resend) | `lib/email.ts` | Double opt-in email with confirm link |

### Signup Flow

1. User enters email on `/prelaunch` → `POST /api/signup`
2. API validates email, upserts row in Supabase `signups` table (status: `pending`), generates a `confirmation_token`
3. Sends confirmation email via Resend with a link to `/api/confirm?token=xxx`
4. User clicks link → `GET /api/confirm` validates token, updates status to `confirmed`, redirects to `/confirmed?status=success`
5. Other statuses: `already` (re-click), `invalid` (bad/expired token), `error` (DB failure)

---

## Brand & Visual System

### Colour Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Cream | `#edece7` | Page backgrounds, email card bg |
| Teal | `#009e8c` | CTA buttons, accent text, section headings |
| Pink | `#d877b0` | Accent wedges, email heading colour |
| Yellow | `#f9d867` | Yellow info box on landing, coming soon badge |
| Black | `#000` | Borders, text, shadows |
| Off-white | `#f9f5f0` | Button text on teal backgrounds |

### Design Rules

- **Sharp corners everywhere** — no `border-radius`
- **3px solid black borders** on cards, inputs, buttons
- **Hard offset shadows** — `4px 4px 0 #000` on web; thick right+bottom borders in email (see Email section)
- **Chunky sans-serif type** — Inter on the landing page, Arial/Helvetica in emails
- **No cursive/script** on the landing page. Italic Georgia serif for "— Jack & Hollie" signature in email and confirmed page only
- **Scribble bullet markers** — hand-drawn asterisk SVG (`public/scribble-bullet.svg`), used as CSS pseudo-element on landing and as hosted `<img>` in email

### Key Assets in `/public`

| File | Usage |
|------|-------|
| `uddy-wordmark.svg` | Main logo (bold "uddy." with cow silhouette) |
| `cow.svg` | Standalone cow silhouette (email footer) |
| `scribble-bullet.svg` | Hand-drawn asterisk bullet marker |
| `prelaunch-hero.png` | Product stack photo for landing hero |

---

## Architecture

### Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS 4 + styled-jsx (`<style jsx>` on prelaunch page)
- **Database:** Supabase (signups table, service-role access only)
- **Email:** Resend
- **Payments:** Stripe (not active in prelaunch)
- **CMS:** Sanity (product content, studio at `/studio`, not active in prelaunch)
- **Hosting:** Vercel (auto-deploys from `main` branch)

### Key Files

```
middleware.ts              — Pre-launch gate, path rewriting, x-pathname header
app/layout.tsx             — Root layout, chromeless mode for prelaunch/confirmed
app/prelaunch/page.tsx     — Landing page (all styles inline via styled-jsx)
app/confirmed/page.tsx     — Post-confirmation page (teal/pink wedges, sharp card)
lib/email.ts               — Confirmation email HTML template (table-based, inline styles)
lib/supabase.ts            — Server-only Supabase client (service role)
app/api/signup/route.ts    — Email signup POST endpoint
app/api/confirm/route.ts   — Email confirmation GET endpoint
```

### Middleware Behaviour

- `NEXT_PUBLIC_PRELAUNCH_MODE=true`: redirects everything to `/prelaunch` except allowed paths
- Allowed paths: `/prelaunch`, `/prelaunch-v1` to `-v5`, `/confirmed`, `/api/signup`, `/api/confirm`, `/v1`, `/v2`, `/v3`
- Root `/` is rewritten (not redirected) to `/prelaunch` so URL stays clean
- Sets `x-pathname` header so `layout.tsx` can hide header/footer on chromeless routes
- `NEXT_PUBLIC_PRELAUNCH_MODE=false`: full site accessible, middleware passes through

### Layout Chrome Gating

`CHROMELESS_PATHS` in `app/layout.tsx` hides the global Header/Footer for prelaunch and confirmed pages. Layout reads `x-pathname` from middleware headers.

**Note:** Reading `headers()` makes the root layout dynamic (no static prerender). Acceptable for prelaunch; consider route-group split (`(main)` vs `(prelaunch)`) if perf matters later.

### Prelaunch Variants

Multiple iterations at `/prelaunch-v1` through `/prelaunch-v5`. The canonical live version is `/prelaunch`. Variants kept for reference, not linked anywhere. Can be deleted once design is locked.

---

## Email Template — Gmail/Mobile Compatibility

The confirmation email (`lib/email.ts`) uses table-based HTML with inline styles. Key learnings from cross-client testing:

| Issue | Solution |
|-------|----------|
| Gmail strips `box-shadow` | Fake shadow with thick borders: `border-right: 7px solid #000; border-bottom: 7px solid #000` vs `3px` on top/left |
| Gmail strips data URI images | Host SVGs as actual files (`/scribble-bullet.svg`, `/cow.svg`) and reference via `${baseUrl}/filename.svg` |
| Unicode arrows (↩) render as emoji on mobile | Append variation selector `&#xFE0E;` to force text rendering |
| Emoji bullets render inconsistently across clients | Use hosted SVG images instead |
| `border-radius` varies by client | Avoided entirely (matches brand anyway) |
| `margin` on tables unreliable in Gmail | Use `padding` on parent `<td>` instead |

The email references `${baseUrl}` for all hosted images — this resolves to `NEXT_PUBLIC_BASE_URL` (e.g. `https://uddyskin.com`). Images won't render in local preview unless you point to localhost.

---

## Environment Variables

Source of truth for prod values: **Vercel → Project → Settings → Environment Variables**

```
# Pre-launch toggle
NEXT_PUBLIC_PRELAUNCH_MODE    — "true" to gate the site, "false" for full site

# Site
NEXT_PUBLIC_BASE_URL          — "https://uddyskin.com" in prod, "http://localhost:3000" locally

# Supabase (signup table)
NEXT_PUBLIC_SUPABASE_URL      — Supabase project REST URL
SUPABASE_SERVICE_ROLE_KEY     — Service role key (NOT the anon key)

# Email (Resend)
RESEND_API_KEY                — Resend API key
EMAIL_FROM                    — "Uddy <hello@uddyskin.com>"
EMAIL_REPLY_TO                — hello@uddyskin.com

# Stripe (post-launch)
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET

# Sanity (post-launch)
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
```

---

## Landing Page Structure (`app/prelaunch/page.tsx`)

The page is a `'use client'` component using styled-jsx for all styling (no external CSS classes).

### Desktop Layout (>900px)
- Left 52% = copy panel (cream `#edece7` bg): wordmark → "NO NASTIES. JUST NATURE" tagline → yellow info box → "JOIN THE HERD" heading → scribble bullet list → email input → CTA button
- Right = hero panel: product photo with teal/pink background shapes, "COMING SOON" badge
- Left edge: teal/pink vertical strips
- Background shapes: teal wedge top-right, pink trapezoid mid-left

### Mobile Layout (≤900px)
- Stacks vertically: copy panel then hero panel
- Green bar (10px) + pink bar (6px) at top
- "Nothing fake." breaks to its own line via `<span className="nothing-fake">` with `display:block` on mobile
- Hero section has its own teal wedge and pink triangle shapes

### Email Validation
Button is disabled until email matches `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (computed as `isValidEmail` on every render).

### Success State
After successful signup, the form is replaced with a success card ("You're on the list.").

---

## Confirmed Page (`app/confirmed/page.tsx`)

- Cream `#edece7` background with teal wedge (top-left, 30vw × 55vh) and pink wedge (bottom-right, 35vw × 60vh)
- White card: 3px black border, 4px hard offset shadow, no border-radius
- Full-width uddy wordmark SVG (max-width 600px)
- Teal uppercase heading, bold subtitle, grey body text
- Italic serif "— Jack & Hollie" signature
- Handles 4 statuses: `success`, `already`, `invalid`, `error`

---

## Open / Known Issues

- [ ] **Mobile right-edge clipping** — at ~390px width, the wordmark and yellow box text get cut on the right edge. Pre-existing layout issue in the prelaunch page. Not a blocker but worth fixing.
- [ ] **Outlook email testing** — SVG support varies in Outlook. The scribble bullets and cow icon may need PNG fallbacks for Outlook.
- [ ] **Clean up old variants** — `/prelaunch-v1` through `-v5` and `/v1` through `/v3` can be removed once final design is locked.
- [ ] **Signup debug logging** — `app/api/signup/route.ts` has diagnostic `console.log` calls (Supabase URL + key fingerprint). Remove once signup is confirmed working.
- [ ] **Static rendering** — root layout is dynamically rendered due to `headers()` call. Refactor to route groups if perf becomes a priority.

---

## Going Live

1. Set `NEXT_PUBLIC_PRELAUNCH_MODE=false` in Vercel (Production env)
2. Trigger a redeploy (push any commit, or "Redeploy" in Vercel UI)
3. `/` will now serve the main homepage. `/prelaunch` and `/confirmed` continue to work as direct routes (chromeless)
4. The `/api/signup` endpoint stays live — disable the form on the page if signups should stop
5. Clean up: remove debug logging in signup route, delete old variant pages

---

## Recent Changes (May 2026)

1. Fixed missing assets (`uddy-wordmark.svg`, `prelaunch-hero.png`, `cow.svg`) — weren't committed to git
2. Updated landing copy: "NO NASTIES. JUST NATURE" tagline, "JOIN THE HERD" signup heading, yellow box with new paragraph, centred bullet list with scribble markers
3. Added email validation on signup button (regex-based)
4. Added pink stripe under green bar on mobile
5. "Nothing fake." on its own line on mobile
6. Redesigned confirmation email to match brand — cream card on white bg, pink heading, teal CTA, scribble bullets, cow SVG, hard shadow via thick borders
7. Redesigned confirmed page — full-width SVG wordmark, sharp card with shadow, teal/pink accent wedges (enlarged)
8. Multiple rounds of Gmail/Android/iOS compatibility fixes for email template (shadow, bullets, arrow emoji)

---

## Useful Commands

```bash
npm run dev                    # dev server on :3000
npm run build                  # production build
npm run lint                   # ESLint

# Check deploy status
git log --oneline -5           # recent commits
git status                     # working tree

# Debug signup failures (production)
# 1. Trigger the form on uddyskin.com
# 2. Vercel → Deployments → [current] → Runtime Logs
# 3. Filter: source=Functions, path=/api/signup
# 4. Look for [signup] DEBUG and [signup] error lines
```
