import Link from "next/link";

const quickLinks = [
  { label: "About the Congress", href: "/about" },
  { label: "Theme & Objectives", href: "/theme" },
  { label: "Register", href: "/register" },
  { label: "Call for Proposals", href: "/call-for-proposals" },
  { label: "Training Sessions", href: "/training" },
  { label: "Plan Your Travel", href: "/travel" },
  { label: "Field Visits", href: "/field-visits" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const organisers = [
  "Ranger Federation of Asia (RFA)",
  "International Rangers Federation (IRF)",
  "Society of Bhutanese Foresters (SBF)",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick links */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Quick Links
            </p>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organised by */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Organised By
            </p>
            <ul className="space-y-2">
              {organisers.map((org) => (
                <li key={org} className="font-body text-sm text-primary-foreground/70">
                  {org}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-xs text-primary-foreground/50">
              In collaboration with partner agencies and the Royal Government of Bhutan
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Contact
            </p>
            <p className="font-body text-sm text-primary-foreground/70 mb-2">
              2nd Asian Ranger Congress 2026
            </p>
            <p className="font-body text-sm text-primary-foreground/70 mb-1">
              Royal Institute of Management (RIM)
            </p>
            <p className="font-body text-sm text-primary-foreground/70 mb-4">
              Simtokha, Thimphu, Bhutan
            </p>
            <a
              href="mailto:asianrangercongress@gmail.com"
              className="font-body text-sm text-secondary hover:underline"
            >
              asianrangercongress@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Asian Ranger Congress · Society of Bhutanese Foresters · Ranger Federation of
            Asia · International Rangers Federation
          </p>
        </div>
      </div>
    </footer>
  );
}
