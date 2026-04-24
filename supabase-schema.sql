-- Run this in the Supabase SQL Editor after creating a new project.

create extension if not exists "pgcrypto";

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  confirmation_token text unique not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'unsubscribed')),
  source text,
  created_at timestamptz not null default now(),
  confirmed_at timestamptz
);

create index if not exists signups_email_idx on public.signups (email);
create index if not exists signups_token_idx on public.signups (confirmation_token);
create index if not exists signups_status_idx on public.signups (status);

-- Lock the table down. All access goes through the service role from the server.
alter table public.signups enable row level security;

-- No policies = no access from the anon/public key. Good.
