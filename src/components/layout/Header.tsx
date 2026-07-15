"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

type NavLinkItem = {
  type: "link";
  label: string;
  href: string;
  highlight?: boolean;
};

type NavDropdownItem = {
  type: "dropdown";
  label: string;
  items: { label: string; href: string }[];
};

type NavItem = NavLinkItem | NavDropdownItem;

const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Congress Introduction", href: "/about" },
      { label: "Congress Theme", href: "/theme" },
      { label: "Our Partners", href: "/partners" },
    ],
  },
  {
    type: "dropdown",
    label: "Programme",
    items: [
      { label: "Congress Programme", href: "/programme" },
      { label: "Call for Proposals", href: "/call-for-proposals" },
      { label: "Field Visits", href: "/field-visits" },
    ],
  },
  {
    type: "dropdown",
    label: "Plan Travel",
    items: [
      { label: "Logistics", href: "/travel/logistics" },
      { label: "Venue & Accommodation", href: "/travel/venue-accommodation" },
      { label: "Registration & EOI", href: "/travel/registration" },
      { label: "Travel FAQ", href: "/travel/faq" },
    ],
  },
  { type: "link", label: "Sponsorship", href: "/sponsorship" },
  { type: "link", label: "Press", href: "/press" },
  { type: "link", label: "FAQ", href: "/faq" },
  { type: "link", label: "Contact Us", href: "/contact" },
  { type: "link", label: "Register Now", href: "/register", highlight: true },
];

function DropdownGroup({
  group,
  pathname,
  floating,
}: {
  group: NavDropdownItem;
  pathname: string;
  floating?: boolean;
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
          "flex items-center gap-1 font-body font-medium px-1 py-2 transition-colors",
          floating ? "text-base" : "text-sm",
          isActive
            ? "text-primary font-bold"
            : "text-foreground/70 hover:text-primary",
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
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const floating = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        floating
          ? "bg-transparent"
          : "border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
      )}
    >
      {/* Prayer flag accent */}
      {!floating && (
        <div className="h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary opacity-80" />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 shrink-0 transition-all duration-300",
            floating && "absolute left-4 top-2 sm:left-6 z-50",
          )}
        >
          <Image
            src="/logo.svg"
            alt="Asian Ranger Congress 2026"
            width={96}
            height={96}
            className={cn(
              "w-auto transition-all duration-300",
              floating ? "h-28 sm:h-36 drop-shadow-md" : "h-10",
            )}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className={cn(
            "hidden lg:flex items-center gap-4 pt-2 transition-all duration-300 ml-auto",
            floating && "px-3",
          )}
        >
          {navItems.map((item) => {
            if (item.type === "dropdown") {
              return (
                <DropdownGroup
                  key={item.label}
                  group={item}
                  pathname={pathname}
                  floating={floating}
                />
              );
            }

            return item.highlight ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "ml-2 inline-flex items-center px-4 py-1.5 rounded-sm bg-accent text-accent-foreground font-body font-semibold tracking-wide uppercase transition-opacity hover:opacity-90",
                  floating ? "text-base" : "text-sm",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-1 py-2 font-body font-medium transition-colors",
                  floating ? "text-base" : "text-sm",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-foreground/70 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden ml-auto", floating && "shadow-sm")}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full pt-16 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  if (item.type === "dropdown") {
                    return (
                      <div key={item.label} className="mt-2">
                        <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block font-body text-sm py-1.5 pl-2 border-l-2 transition-colors",
                              pathname === subItem.href
                                ? "border-secondary text-primary font-semibold"
                                : "border-transparent text-foreground/70 hover:text-primary",
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "font-body text-sm py-2 font-medium",
                        item.highlight
                          ? "text-accent font-semibold"
                          : pathname === item.href
                            ? "text-primary font-semibold"
                            : "text-foreground/70",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
