import Link from "next/link";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";
import { RfaSocialLinks } from "./RfaSocialLinks";

const linkGroups = [
  {
    heading: "Congress",
    links: [
      { label: "About", href: "/about" },
      { label: "Theme & Objectives", href: "/theme" },
      { label: "Programme", href: "/programme" },
      { label: "Partners", href: "/partners" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Participate",
    links: [
      { label: "Register", href: "/register" },
      { label: "Call for Proposals", href: "/call-for-proposals" },
      { label: "Sponsorship", href: "/sponsorship" },
    ],
  },
  {
    heading: "Plan Your Visit",
    links: [
      { label: "Travel", href: "/travel" },
      { label: "Field Visits", href: "/field-visits" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display text-base font-bold mb-2">
              2nd Asian Ranger Congress
            </p>
            <p className="font-body text-sm text-primary-foreground/70">
              2–4 December 2026
            </p>
            <p className="font-body text-sm text-primary-foreground/70 mb-4">
              Thimphu, Bhutan
            </p>
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="font-body text-sm text-secondary hover:underline break-all"
            >
              {OFFICIAL_CONGRESS_EMAIL}
            </a>
            <RfaSocialLinks className="mt-5" tone="footer" />
          </div>

          {/* Grouped links */}
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
                {group.heading}
              </p>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
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
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Asian Ranger Congress
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Organised by RFA · SBF
          </p>
        </div>
      </div>
    </footer>
  );
}
