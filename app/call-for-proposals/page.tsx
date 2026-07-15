import type { Metadata } from "next";
import { CallForProposalsPageContent } from "@/features/call-for-proposals";

export const metadata: Metadata = {
  title: "Call for Proposals | 2nd Asian Ranger Congress 2026",
  description:
    "Confirmed Congress participants can submit a poster or ranger-led workshop proposal from 1 August 2026.",
};

export default function CallForProposalsPage() {
  return <CallForProposalsPageContent />;
}
