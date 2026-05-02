import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
}

const NavLink = ({ className, activeClassName: _activeClassName, ...props }: NavLinkProps) => {
  return <Link className={cn(className)} {...props} />;
};

NavLink.displayName = "NavLink";

export { NavLink };
