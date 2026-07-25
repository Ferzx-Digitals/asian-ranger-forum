create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  submitted_at timestamptz not null default now(),
  email text not null unique,
  full_name text not null,
  preferred_name text,
  organisation text not null,
  job_title text not null,
  participant_type text not null check (
    participant_type in (
      'ranger',
      'ranger-leader',
      'conservation-practitioner',
      'partner-guest',
      'other'
    )
  ),
  country text not null,
  phone text not null,
  emergency_contact_name text not null,
  emergency_contact_phone text not null,
  dietary_requirements text,
  accessibility_requirements text,
  consent boolean not null check (consent),
  receipt_bucket text not null default 'payment-receipts',
  receipt_path text not null unique,
  receipt_original_name text not null,
  receipt_content_type text not null,
  receipt_size_bytes bigint not null check (
    receipt_size_bytes > 0
    and receipt_size_bytes <= 4194304
  ),
  status text not null default 'submitted' check (
    status in ('submitted', 'under_review', 'approved', 'rejected')
  )
);

alter table public.registrations enable row level security;

revoke all on table public.registrations from anon, authenticated;
grant all on table public.registrations to service_role;
