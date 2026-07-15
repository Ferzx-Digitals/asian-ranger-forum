import type { Metadata } from "next";
import { RegisterPageContent } from "@/features/register";

export const metadata: Metadata = {
  title: "Registration | 2nd Asian Ranger Congress 2026",
  description:
    "Invited participants can complete registration for the 2nd Asian Ranger Congress and review fees, inclusions, and participant guidance.",
};

export default function RegisterPage() {
  return <RegisterPageContent />;
}
