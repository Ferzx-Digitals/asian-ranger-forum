"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

const navGroups = [
  {
    label: "About",
    items: [
      { label: "About the Congress", href: "/about" },
      { label: "Theme & Objectives", href: "/theme" },
    ],
  },
  {
    label: "Congress",
    items: [
      { label: "Call for Proposals", href: "/call-for-proposals" },
      { label: "Training Sessions", href: "/training" },
      { label: "Field Visits", href: "/field-visits" },
    ],
  },
  {
    label: "Get Involved",
    items: [
      { label: "Sponsorship & Partners", href: "/get-involved" },
      { label: "Our Partners", href: "/partners" },
    ],
  },
];

const directLinks = [
  { label: "Register", href: "/register", highlight: true },
  { label: "Travel", href: "/travel" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function DropdownGroup({
  group,
  pathname,
}: {
  group: (typeof navGroups)[0];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = group.items.some((i) => pathname.startsWith(i.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 font-body text-sm font-medium px-1 py-2 transition-colors",
          isActive ? "text-primary" : "text-foreground/70 hover:text-primary",
        )}
      >
        {group.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="bg-card border border-border rounded-sm shadow-lg py-1 min-w-[200px]">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 font-body text-sm transition-colors hover:bg-muted",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Prayer flag accent */}
      <div className="h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary opacity-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-primary leading-tight">
              Asian Ranger Congress
            </span>
            <span className="font-body text-[10px] tracking-[0.22em] uppercase text-secondary font-semibold">
              Thimphu, Bhutan · 2026
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <DropdownGroup key={group.label} group={group} pathname={pathname} />
          ))}
          {directLinks.map((link) =>
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                className="ml-2 inline-flex items-center px-4 py-1.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-1 py-2 font-body text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full pt-16 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-semibold py-2 text-primary"
                >
                  Home
                </Link>
                {navGroups.map((group) => (
                  <div key={group.label} className="mt-2">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      {group.label}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block font-body text-sm py-1.5 pl-2 border-l-2 transition-colors",
                          pathname === item.href
                            ? "border-secondary text-primary font-semibold"
                            : "border-transparent text-foreground/70 hover:text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-1">
                  {directLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "font-body text-sm py-2 font-medium",
                        link.highlight
                          ? "text-accent font-semibold"
                          : "text-foreground/70",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
