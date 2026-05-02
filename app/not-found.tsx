import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-primary">404</h1>
        <p className="font-body mt-2 text-muted-foreground">Page not found</p>
        <Link
          href="/"
          className="font-body mt-4 inline-block text-secondary hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
