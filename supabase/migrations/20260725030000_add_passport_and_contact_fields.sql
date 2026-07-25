begin;

truncate table public.registrations;

alter table public.registrations
  add column if not exists gender text,
  add column if not exists date_of_birth date,
  add column if not exists passport_number text,
  add column if not exists passport_issue_date date,
  add column if not exists passport_expiry_date date,
  add column if not exists passport_place_of_issue text,
  add column if not exists whatsapp_number text;

alter table public.registrations
  drop constraint if exists registrations_gender_check,
  drop constraint if exists registrations_passport_dates_check;

alter table public.registrations
  add constraint registrations_gender_check check (
    gender is null
    or gender in ('male', 'female', 'non-binary')
  ),
  add constraint registrations_passport_dates_check check (
    passport_issue_date is null
    or passport_expiry_date is null
    or passport_expiry_date > passport_issue_date
  );

commit;
