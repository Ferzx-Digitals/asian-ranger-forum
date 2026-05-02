import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2nd Asian Ranger Congress 2026",
  description:
    "A landmark gathering of Asia's rangers and conservationists — Thimphu, Bhutan, 2–4 December 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
