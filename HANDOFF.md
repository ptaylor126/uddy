# Uddy Site — Handoff

Snapshot of the project state and the prelaunch work done in this session, written so a fresh laptop can pick up where this one left off.

## Quick start on a new machine

```bash
git clone https://github.com/ptaylor126/uddy.git
cd uddy/uddy-site
cp .env.example .env.local
# fill in the real values — see "Environment variables" below
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. With `NEXT_PUBLIC_PRELAUNCH_MODE=true` the homepage at `/` will show the prelaunch landing.

## Repository

- **Remote**: `https://github.com/ptaylor126/uddy.git`
- **Production branch**: `main` — Vercel auto-deploys to `uddyskin.com`
- **`prelaunch` branch**: still on the remote but no longer maintained; was merged into `main` earlier
- **Project root in git**: `uddy-site/` (the parent `uddy/` directory is not a git repo)

## Live URLs

| URL | What renders | Site chrome |
|---|---|---|
| `uddyskin.com/` | Prelaunch landing (when prelaunch mode on) | No |
| `uddyskin.com/v1` | V1 homepage (frozen copy of original `/`) | Yes |
| `uddyskin.com/v2` | V2 zine-style variant | Yes |
| `uddyskin.com/v3` | V3 editorial cover variant | Yes |
| `uddyskin.com/prelaunch` | Prelaunch landing (direct route) | No |
| `uddyskin.com/confirmed` | Email confirmation result | No |
| `uddyskin.com/api/signup` | POST endpoint (form submit) | n/a |
| `uddyskin.com/api/confirm` | GET endpoint (email link target) | n/a |

When `NEXT_PUBLIC_PRELAUNCH_MODE=false`, `/` reverts to the original V1 homepage and middleware stops redirecting other routes.

## Architecture of the prelaunch system

### Toggle
`NEXT_PUBLIC_PRELAUNCH_MODE` env var (`"true"` / `"false"`). Set in Vercel and `.env.local`.

### Middleware (`middleware.ts`)
- When prelaunch is on, redirects everything to `/` except a short allowlist
- Rewrites `/` → `/prelaunch` (URL stays `/`)
- Allowlist: `/prelaunch`, `/confirmed`, `/api/signup`, `/api/confirm`, `/v1`, `/v2`, `/v3`
- Sets an `x-pathname` header on every request so the root layout can read the post-rewrite path

### Layout (`app/layout.tsx`)
- Reads `x-pathname` from headers
- Hides `<Header />` and `<Footer />` for `/prelaunch` and `/confirmed` only (`CHROMELESS_PATHS`)
- All other routes (including `/v1`, `/v2`, `/v3`) render with full chrome
- Note: this makes the root layout dynamically rendered (no static prerender) — fine for a low-traffic prelaunch site, revisit if perf matters later

### Signup flow
1. User submits email at `/prelaunch` → `POST /api/signup`
2. Route validates email, generates a token, inserts/updates row in Supabase `signups` table (status `pending`)
3. Sends confirmation email via Resend with link to `/api/confirm?token=...`
4. Click → `GET /api/confirm` → marks row `confirmed`, redirects to `/confirmed?status=success`
5. Other statuses: `already`, `invalid`, `error`

### Files
| Path | Purpose |
|---|---|
| `middleware.ts` | Prelaunch redirect + pathname header |
| `app/layout.tsx` | Chrome gating |
| `app/prelaunch/page.tsx` | Landing page |
| `app/confirmed/page.tsx` | Confirmation result page |
| `app/api/signup/route.ts` | Signup POST handler |
| `app/api/confirm/route.ts` | Confirm GET handler |
| `lib/supabase.ts` | Server-only Supabase client (service role) |
| `lib/email.ts` | Resend email template |
| `supabase-schema.sql` | DB schema (run once in Supabase SQL Editor) |
| `app/v1/page.tsx` | Frozen copy of V1 homepage |
| `app/v2/page.tsx`, `app/v3/page.tsx` | Variants from earlier commit `6e1652e` |

## Environment variables

`.env.example` is committed and lists all keys with placeholder values. `.env.local` is gitignored and must be recreated on each machine. Source of truth for live values: **Vercel → Project → Settings → Environment Variables**.

Required keys:
- **Stripe**: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
- **Sanity**: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- **Resend**: `RESEND_API_KEY`, `ADMIN_EMAIL`
- **Site**: `NEXT_PUBLIC_BASE_URL` (used by signup confirm flow — `https://uddyskin.com` in prod)
- **Prelaunch toggle**: `NEXT_PUBLIC_PRELAUNCH_MODE` (`true` / `false`)
- **Supabase (signup table)**: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- **Email (signup confirmation)**: `EMAIL_FROM`, `EMAIL_REPLY_TO`

## Tech stack

- Next.js 16.1.3, React 19.2.3, App Router
- TypeScript (strict)
- Tailwind v4
- Sanity (CMS, embedded studio at `/studio`)
- Stripe (checkout)
- Resend (transactional email)
- Supabase (signup table only — single table `signups`, RLS on, service-role-only access)
- framer-motion (V2/V3 animations)
- styled-components in deps (legacy?), `<style jsx>` used in prelaunch page

## Open / known issues

- **Signup endpoint returns "Something went wrong"** in production — diagnostic logging added in commits `cbd9c94` and `775f935` (logs Supabase URL + key fingerprint + every error object). Last known step: trigger the form on the live site and read Vercel runtime logs at `Deployments → [latest] → Runtime Logs`, filter source=Functions, path=`/api/signup`. Most likely cause: `SUPABASE_SERVICE_ROLE_KEY` mis-configured (anon key pasted by mistake, trailing whitespace, etc.). The DEBUG log in `app/api/signup/route.ts` will reveal it.
- **`signups` table is empty** in Supabase as of last check — confirms no successful signups have landed yet.
- **Three homepage variants** (`/v1`, `/v2`, `/v3`) live in parallel for Jack to compare. `/v1` is a byte-for-byte copy of `app/page.tsx` at the time of commit `44e262a` — divergence allowed if `/` is later updated.
- **Domain config** (per Vercel screenshot from 2026-04-27): `uddyskin.com` valid, `www.uddyskin.com` valid (DNS Change Recommended notice — cosmetic), `uddyskin.co.uk` 307s to `www.uddyskin.co.uk`, `uddy-site.vercel.app` valid.
- **Email template** in `lib/email.ts` uses Georgia/serif fallback intentionally — emails can't reference `next/font` CSS variables.
- **Static rendering hit**: making the root layout async + reading `headers()` opts the whole tree out of static generation. Acceptable for now; if SEO/perf becomes a priority, refactor to a route-group split (`app/(main)/...` vs `app/(prelaunch)/...`).

## Useful commands

```bash
# dev
npm run dev                # starts on :3000
npm run build              # production build
npm run lint

# git sync check (run on the laptop after cloning)
git status                 # should show clean
git fetch && git status -sb # confirm tracking origin/main

# debugging signup failures
# 1. Trigger the form on the live site
# 2. Vercel → Deployments → [current] → Runtime Logs
# 3. Filter: source=Functions, path=/api/signup
# 4. Look for [signup] DEBUG and [signup] error lines
```

## Recent commit history (main)

```
44e262a Add /v1 variant route and chrome-aware layout routing
775f935 Log Supabase URL + key fingerprint for prod debug
cbd9c94 Surface signup route errors in logs
e26270f trigger vercel
6c77682 trigger vercel deploy
d083d41 Add prelaunch landing page with email signup
528bb8f Update logos and add logo variants
6e1652e Add V2 and V3 homepage variants with animations and layout improvements
```

## Going live (when ready to launch)

1. Set `NEXT_PUBLIC_PRELAUNCH_MODE=false` in Vercel (Production env)
2. Trigger a redeploy (push any commit, or "Redeploy" in Vercel UI)
3. `/` will now serve the V1 homepage. `/prelaunch` and `/confirmed` continue to work as direct routes (chromeless). The `/api/signup` endpoint stays live, so the Supabase row will keep working — disable the form on the page if signups should stop.
4. Optional cleanup: remove the diagnostic `console.log` block in `app/api/signup/route.ts` lines that log the Supabase URL/key fingerprint, once the signup issue is resolved.
