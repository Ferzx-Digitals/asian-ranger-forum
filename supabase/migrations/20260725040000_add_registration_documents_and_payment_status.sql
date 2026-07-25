begin;

truncate table public.registrations;

alter table public.registrations
  add column if not exists passport_file_path text,
  add column if not exists passport_file_original_name text,
  add column if not exists passport_file_content_type text,
  add column if not exists passport_file_size_bytes bigint,
  add column if not exists payment_status text;

alter table public.registrations
  alter column gender set not null,
  alter column passport_number set not null,
  alter column passport_issue_date set not null,
  alter column passport_expiry_date set not null,
  alter column whatsapp_number set not null,
  alter column passport_file_path set not null,
  alter column passport_file_original_name set not null,
  alter column passport_file_content_type set not null,
  alter column passport_file_size_bytes set not null,
  alter column payment_status set not null,
  alter column receipt_bucket drop default,
  alter column receipt_bucket drop not null,
  alter column receipt_path drop not null,
  alter column receipt_original_name drop not null,
  alter column receipt_content_type drop not null,
  alter column receipt_size_bytes drop not null;

alter table public.registrations
  drop constraint if exists registrations_gender_check,
  drop constraint if exists registrations_passport_dates_check,
  drop constraint if exists registrations_passport_file_path_key,
  drop constraint if exists registrations_passport_file_size_bytes_check,
  drop constraint if exists registrations_payment_status_check,
  drop constraint if exists registrations_payment_receipt_check;

alter table public.registrations
  add constraint registrations_gender_check check (
    gender in ('male', 'female', 'non-binary')
  ),
  add constraint registrations_passport_dates_check check (
    passport_expiry_date > passport_issue_date
  ),
  add constraint registrations_passport_file_path_key unique (
    passport_file_path
  ),
  add constraint registrations_passport_file_size_bytes_check check (
    passport_file_size_bytes > 0
    and passport_file_size_bytes <= 4194304
  ),
  add constraint registrations_payment_status_check check (
    payment_status in ('paid', 'sponsored')
  ),
  add constraint registrations_payment_receipt_check check (
    (
      payment_status = 'paid'
      and receipt_bucket is not null
      and receipt_path is not null
      and receipt_original_name is not null
      and receipt_content_type is not null
      and receipt_size_bytes is not null
    )
    or (
      payment_status = 'sponsored'
      and receipt_bucket is null
      and receipt_path is null
      and receipt_original_name is null
      and receipt_content_type is null
      and receipt_size_bytes is null
    )
  );

commit;
