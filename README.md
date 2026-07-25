# Asian Ranger Congress 2026

## Registration storage

Registration details are stored in the private `registrations` table and
payment receipts are stored in the private `payment-receipts` Supabase Storage
bucket.

1. Rotate any Supabase secret that has been shared outside a secure password
   manager.
2. Run
   [`supabase/migrations/20260725000000_create_registrations.sql`](supabase/migrations/20260725000000_create_registrations.sql)
   in the Supabase SQL Editor.
3. Copy `.env.example` to `.env.local`, then set `SUPABASE_URL` and the rotated
   `SUPABASE_SECRET_KEY`. Never use this server key in a `NEXT_PUBLIC_`
   variable.
4. Run `bun run verify:registration-storage` to verify both the table and
   receipt bucket.

The table has Row Level Security enabled with no public policies. Organisers can
view and export registrations from the Supabase dashboard and open receipts
from Storage.
