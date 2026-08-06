import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileKey2,
  LogOut,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logoutAdmin } from "../actions/auth";
import type {
  AdminRegistration,
  RegistrationDashboardData,
  RegistrationDocumentKind,
} from "../types";

const submittedAtFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Thimphu",
});

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeZone: "UTC",
});

const searchFieldLabels = {
  country: "Country",
  email: "Email",
  full_name: "Full name",
  organisation: "Organisation",
  reference: "Reference",
} as const;

const participantTypeLabels = {
  "conservation-practitioner": "Conservation practitioner",
  other: "Other",
  "partner-guest": "Partner / guest",
  ranger: "Ranger",
  "ranger-leader": "Ranger leader",
} as const;

function formatSubmittedAt(value: string) {
  return submittedAtFormatter.format(new Date(value));
}

function formatDate(value: string | null) {
  return value ? dateFormatter.format(new Date(`${value}T00:00:00Z`)) : "—";
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function PaymentBadge({
  status,
}: {
  status: AdminRegistration["paymentStatus"];
}) {
  return status === "paid" ? (
    <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-primary">
      <CheckCircle2 aria-hidden="true" className="size-3.5" />
      Paid
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-foreground/70">
      <ShieldCheck aria-hidden="true" className="size-3.5" />
      Sponsored
    </span>
  );
}

function DownloadLink({
  id,
  kind,
  label,
}: {
  id: string;
  kind: RegistrationDocumentKind;
  label: string;
}) {
  return (
    <a
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-input bg-background px-3 py-2 font-body text-xs font-semibold text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      href={`/admin/files/${id}/${kind}`}
    >
      <Download aria-hidden="true" className="size-3.5" />
      {label}
    </a>
  );
}

function RegistrationDocuments({
  registration,
}: {
  registration: AdminRegistration;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <DownloadLink
        id={registration.id}
        kind={registration.passportFile.kind}
        label={`Passport · ${formatFileSize(registration.passportFile.sizeBytes)}`}
      />
      {registration.receiptFile ? (
        <DownloadLink
          id={registration.id}
          kind={registration.receiptFile.kind}
          label={`Receipt · ${formatFileSize(registration.receiptFile.sizeBytes)}`}
        />
      ) : null}
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <dt className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 break-words font-body text-sm text-foreground">
        {value || "—"}
      </dd>
    </div>
  );
}

function RegistrationDetails({
  registration,
}: {
  registration: AdminRegistration;
}) {
  return (
    <details className="group mt-4 border-t pt-4">
      <summary className="flex min-h-11 cursor-pointer list-none items-center font-body text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">View full registration</span>
        <span className="hidden group-open:inline">Hide full registration</span>
      </summary>
      <dl className="grid gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        <DetailItem label="Preferred name" value={registration.preferredName} />
        <DetailItem label="Gender" value={registration.gender} />
        <DetailItem
          label="Date of birth"
          value={formatDate(registration.dateOfBirth)}
        />
        <DetailItem
          label="Participant type"
          value={participantTypeLabels[registration.participantType]}
        />
        <DetailItem label="Phone" value={registration.phone} />
        <DetailItem label="WhatsApp" value={registration.whatsappNumber} />
        <DetailItem
          label="Emergency contact"
          value={`${registration.emergencyContactName} · ${registration.emergencyContactPhone}`}
        />
        <DetailItem
          label="Passport number"
          value={registration.passportNumber}
        />
        <DetailItem
          label="Passport issued"
          value={formatDate(registration.passportIssueDate)}
        />
        <DetailItem
          label="Passport expires"
          value={formatDate(registration.passportExpiryDate)}
        />
        <DetailItem
          label="Place of issue"
          value={registration.passportPlaceOfIssue}
        />
        <DetailItem
          label="Dietary requirements"
          value={registration.dietaryRequirements}
        />
        <DetailItem
          label="Accessibility requirements"
          value={registration.accessibilityRequirements}
        />
      </dl>
    </details>
  );
}

function StatsGrid({ stats }: { stats: RegistrationDashboardData["stats"] }) {
  const items = [
    { icon: Users, label: "Total registrations", value: stats.total },
    { icon: WalletCards, label: "Paid", value: stats.paid },
    { icon: ShieldCheck, label: "Sponsored", value: stats.sponsored },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            className="rounded-xl border bg-card p-5 shadow-sm"
            key={item.label}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-body text-sm font-medium text-muted-foreground">
                {item.label}
              </p>
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-primary">
                <Icon aria-hidden="true" className="size-4" />
              </span>
            </div>
            <p className="mt-4 font-body text-3xl font-semibold tabular-nums text-foreground">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function FilterBar({
  filters,
}: {
  filters: RegistrationDashboardData["filters"];
}) {
  return (
    <form
      action="/admin"
      className="grid gap-3 rounded-xl border bg-card p-4 shadow-sm lg:grid-cols-[minmax(13rem,1fr)_10rem_auto]"
      method="get"
    >
      <div className="grid gap-2 sm:grid-cols-[9rem_1fr]">
        <label className="sr-only" htmlFor="search-field">
          Search field
        </label>
        <select
          className="h-11 rounded-md border border-input bg-background px-3 font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue={filters.searchField}
          id="search-field"
          name="searchField"
        >
          {Object.entries(searchFieldLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <label className="sr-only" htmlFor="registration-search">
            Search registrations
          </label>
          <input
            className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-3 font-body text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
            defaultValue={filters.query}
            id="registration-search"
            maxLength={100}
            name="query"
            placeholder="Search registrations"
            type="search"
          />
        </div>
      </div>

      <label className="sr-only" htmlFor="payment-filter">
        Payment filter
      </label>
      <select
        className="h-11 rounded-md border border-input bg-background px-3 font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        defaultValue={filters.payment}
        id="payment-filter"
        name="payment"
      >
        <option value="all">All payments</option>
        <option value="paid">Paid</option>
        <option value="sponsored">Sponsored</option>
      </select>

      <Button className="h-11" type="submit">
        Apply filters
      </Button>
    </form>
  );
}

function MobileRegistrationCard({
  registration,
}: {
  registration: AdminRegistration;
}) {
  return (
    <article className="rounded-xl border bg-card p-5 shadow-sm">
      <div>
        <div className="min-w-0">
          <p className="font-body text-xs font-bold uppercase tracking-wide text-primary">
            {registration.reference}
          </p>
          <h3 className="mt-1 truncate text-2xl font-semibold">
            {registration.fullName}
          </h3>
          <p className="mt-1 truncate font-body text-sm text-muted-foreground">
            {registration.email}
          </p>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 border-y py-4 sm:grid-cols-2">
        <DetailItem
          label="Organisation"
          value={`${registration.organisation} · ${registration.country}`}
        />
        <DetailItem label="Role" value={registration.jobTitle} />
        <DetailItem
          label="Registered"
          value={`${formatSubmittedAt(registration.submittedAt)} BTT`}
        />
        <DetailItem
          label="Payment"
          value={<PaymentBadge status={registration.paymentStatus} />}
        />
      </dl>

      <div className="mt-4">
        <RegistrationDocuments registration={registration} />
      </div>
      <RegistrationDetails registration={registration} />
    </article>
  );
}

function DesktopRegistrationTable({
  registrations,
}: {
  registrations: AdminRegistration[];
}) {
  return (
    <div className="hidden overflow-hidden rounded-xl border bg-card shadow-sm md:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1120px] border-collapse text-left font-body text-sm">
          <caption className="sr-only">Congress registration entries</caption>
          <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-5 py-4 font-semibold" scope="col">
                Participant
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Organisation
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Registered
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Payment
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Documents
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {registrations.map((registration) => (
              <tr className="align-top hover:bg-muted/30" key={registration.id}>
                <td className="px-5 py-5">
                  <p className="font-semibold text-foreground">
                    {registration.fullName}
                  </p>
                  <a
                    className="mt-1 block text-xs text-primary underline-offset-2 hover:underline"
                    href={`mailto:${registration.email}`}
                  >
                    {registration.email}
                  </a>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {registration.reference}
                  </p>
                </td>
                <td className="max-w-64 px-5 py-5">
                  <p className="font-medium text-foreground">
                    {registration.organisation}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {registration.jobTitle} · {registration.country}
                  </p>
                </td>
                <td className="whitespace-nowrap px-5 py-5 text-xs text-muted-foreground">
                  {formatSubmittedAt(registration.submittedAt)}
                  <span className="mt-1 block">BTT</span>
                </td>
                <td className="px-5 py-5">
                  <PaymentBadge status={registration.paymentStatus} />
                </td>
                <td className="px-5 py-5">
                  <RegistrationDocuments registration={registration} />
                  <details className="group mt-2">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center text-xs font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">
                        Participant details
                      </span>
                      <span className="hidden group-open:inline">
                        Close details
                      </span>
                    </summary>
                    <div className="w-72 rounded-lg border bg-background p-4 shadow-sm">
                      <dl className="grid gap-4">
                        <DetailItem label="Phone" value={registration.phone} />
                        <DetailItem
                          label="WhatsApp"
                          value={registration.whatsappNumber}
                        />
                        <DetailItem
                          label="Passport number"
                          value={registration.passportNumber}
                        />
                        <DetailItem
                          label="Passport expiry"
                          value={formatDate(registration.passportExpiryDate)}
                        />
                        <DetailItem
                          label="Emergency contact"
                          value={`${registration.emergencyContactName} · ${registration.emergencyContactPhone}`}
                        />
                        <DetailItem
                          label="Dietary requirements"
                          value={registration.dietaryRequirements}
                        />
                        <DetailItem
                          label="Accessibility requirements"
                          value={registration.accessibilityRequirements}
                        />
                      </dl>
                    </div>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function createPageHref(
  filters: RegistrationDashboardData["filters"],
  page: number,
) {
  const params = new URLSearchParams();
  if (filters.query) params.set("query", filters.query);
  if (filters.searchField !== "full_name") {
    params.set("searchField", filters.searchField);
  }
  if (filters.payment !== "all") params.set("payment", filters.payment);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/admin?${query}` : "/admin";
}

function Pagination({ data }: { data: RegistrationDashboardData }) {
  if (data.pageCount <= 1) return null;

  const previousPage = Math.max(1, data.filters.page - 1);
  const nextPage = Math.min(data.pageCount, data.filters.page + 1);

  return (
    <nav
      aria-label="Registration pages"
      className="flex items-center justify-between gap-4 border-t pt-5"
    >
      <p className="font-body text-sm text-muted-foreground">
        Page {data.filters.page} of {data.pageCount}
      </p>
      <div className="flex gap-2">
        <Link
          aria-disabled={data.filters.page === 1}
          className={cn(
            "inline-flex min-h-11 items-center gap-1 rounded-md border border-input px-3 font-body text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            data.filters.page === 1 && "pointer-events-none opacity-40",
          )}
          href={createPageHref(data.filters, previousPage)}
        >
          <ChevronLeft aria-hidden="true" className="size-4" />
          Previous
        </Link>
        <Link
          aria-disabled={data.filters.page === data.pageCount}
          className={cn(
            "inline-flex min-h-11 items-center gap-1 rounded-md border border-input px-3 font-body text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            data.filters.page === data.pageCount &&
              "pointer-events-none opacity-40",
          )}
          href={createPageHref(data.filters, nextPage)}
        >
          Next
          <ChevronRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </nav>
  );
}

export function AdminDashboard({ data }: { data: RegistrationDashboardData }) {
  return (
    <section className="min-h-[calc(100svh-4rem)] bg-muted/35 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <FileKey2 aria-hidden="true" className="size-4" />
              Private administration
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Registration entries
            </h1>
            <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-muted-foreground sm:text-base">
              Review participant information and securely download passport
              copies and payment receipts.
            </p>
          </div>
          <form action={logoutAdmin}>
            <Button className="min-h-11" type="submit" variant="outline">
              <LogOut aria-hidden="true" />
              Sign out
            </Button>
          </form>
        </header>

        <StatsGrid stats={data.stats} />

        <div className="mt-8 space-y-5">
          <FilterBar filters={data.filters} />

          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-2xl font-semibold">Registrations</h2>
            <p className="font-body text-sm text-muted-foreground">
              {data.filteredCount}{" "}
              {data.filteredCount === 1 ? "entry" : "entries"}
            </p>
          </div>

          {data.entries.length > 0 ? (
            <>
              <div className="space-y-4 md:hidden">
                {data.entries.map((registration) => (
                  <MobileRegistrationCard
                    key={registration.id}
                    registration={registration}
                  />
                ))}
              </div>
              <DesktopRegistrationTable registrations={data.entries} />
              <Pagination data={data} />
            </>
          ) : (
            <div className="rounded-xl border border-dashed bg-card px-6 py-16 text-center">
              <Search
                aria-hidden="true"
                className="mx-auto size-8 text-muted-foreground"
              />
              <h3 className="mt-4 text-2xl font-semibold">No entries found</h3>
              <p className="mx-auto mt-2 max-w-md font-body text-sm leading-6 text-muted-foreground">
                Try another search field or clear the payment filter.
              </p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center font-body text-sm font-semibold text-primary underline underline-offset-4"
                href="/admin"
              >
                Clear all filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
