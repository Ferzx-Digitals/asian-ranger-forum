import { Facebook, Instagram, Linkedin } from "lucide-react";
import { RFA_SOCIAL_LINKS } from "@/lib/contact";
import { cn } from "@/lib/utils";

const socialIconMap = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
} as const;

interface RfaSocialLinksProps {
  className?: string;
  showLabels?: boolean;
  tone?: "default" | "footer";
}

export function RfaSocialLinks({
  className,
  showLabels,
  tone = "default",
}: RfaSocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {RFA_SOCIAL_LINKS.map((link) => {
        const Icon = socialIconMap[link.label];

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open Ranger Federation of Asia on ${link.label}`}
            className={cn(
              "inline-flex h-10 items-center justify-center gap-2 rounded-sm border px-3 font-body text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              tone === "footer"
                ? "border-primary-foreground/15 text-primary-foreground/70 hover:border-secondary/50 hover:text-secondary"
                : "border-border bg-background text-primary hover:border-secondary/50 hover:bg-secondary/10",
              !showLabels && "w-10 px-0",
            )}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
            {showLabels && <span>{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
