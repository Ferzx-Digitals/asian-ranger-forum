import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "2nd Asian Ranger Congress 2026",
    template: "%s | Asian Ranger Congress",
  },
  description:
    "A landmark gathering of Asia's rangers and conservationists — Thimphu, Bhutan, 2–4 December 2026.",
  metadataBase: new URL("https://asianrangercongress.org"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  manifest: "/site.webmanifest",
};
