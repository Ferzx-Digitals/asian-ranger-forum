begin;

alter table public.registrations
  drop constraint if exists registrations_receipt_size_bytes_check;

alter table public.registrations
  add constraint registrations_receipt_size_bytes_check check (
    receipt_size_bytes > 0
    and receipt_size_bytes <= 4194304
  );

commit;
