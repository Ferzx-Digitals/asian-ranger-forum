import { defaultMetadata, fontVariables } from "@/brand";
import { PageLayout } from "@/components/layout/PageLayout";
import "./globals.css";

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
