import type { Metadata } from "next";
import { AdminPageContent, type AdminSearchParams } from "@/features/admin";

export const metadata: Metadata = {
  description:
    "Private registration administration for the Asian Ranger Congress.",
  robots: {
    follow: false,
    index: false,
  },
  title: "Registration Admin | 2nd Asian Ranger Congress 2026",
};

export default function AdminPage({
  searchParams,
}: {
  searchParams: Promise<AdminSearchParams>;
}) {
  return <AdminPageContent searchParams={searchParams} />;
}
