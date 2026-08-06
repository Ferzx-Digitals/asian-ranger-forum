import { AlertTriangle } from "lucide-react";
import { connection } from "next/server";
import {
  isAdminAccessConfigured,
  isAdminAuthenticated,
} from "../admin-session";
import { AdminDataError, getRegistrationDashboard } from "../registration-data";
import type { AdminSearchParams } from "../types";
import { AdminDashboard } from "./AdminDashboard";
import { AdminLogin } from "./AdminLogin";

function AdminConfigurationError() {
  return (
    <section className="min-h-[calc(100svh-4rem)] bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl rounded-2xl border bg-card p-7 shadow-sm sm:p-9">
        <span className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
          <AlertTriangle aria-hidden="true" className="size-5" />
        </span>
        <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.18em] text-destructive">
          Configuration required
        </p>
        <h1 className="mt-2 text-3xl font-semibold">
          Admin access is not ready
        </h1>
        <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">
          Set <code>ADMIN_PASSWORD</code> to at least 12 characters and
          <code> ADMIN_SESSION_SECRET</code> to a random value of at least 32
          characters, then restart or redeploy the site.
        </p>
      </div>
    </section>
  );
}

function AdminDataLoadError() {
  return (
    <section className="min-h-[calc(100svh-4rem)] bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl rounded-2xl border bg-card p-7 shadow-sm sm:p-9">
        <span className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
          <AlertTriangle aria-hidden="true" className="size-5" />
        </span>
        <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.18em] text-destructive">
          Data unavailable
        </p>
        <h1 className="mt-2 text-3xl font-semibold">
          Registrations could not be loaded
        </h1>
        <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">
          Check the Supabase server credentials and registration schema, then
          refresh this page.
        </p>
      </div>
    </section>
  );
}

export async function AdminPageContent({
  searchParams,
}: {
  searchParams: Promise<AdminSearchParams>;
}) {
  await connection();

  if (!isAdminAccessConfigured()) return <AdminConfigurationError />;
  if (!(await isAdminAuthenticated())) return <AdminLogin />;

  try {
    const data = await getRegistrationDashboard(await searchParams);
    return <AdminDashboard data={data} />;
  } catch (error) {
    if (error instanceof AdminDataError) return <AdminDataLoadError />;
    throw error;
  }
}
