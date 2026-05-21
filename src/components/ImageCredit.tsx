import { cn } from "@/lib/utils";

type ImageCreditProps = {
  credit: string;
  className?: string;
};

export function ImageCredit({ credit, className }: ImageCreditProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute bottom-2 left-2 z-20 max-w-[calc(100%-1rem)] rounded-sm bg-primary/85 px-2.5 py-1 font-body text-[0.65rem] font-medium leading-snug text-primary-foreground shadow-sm backdrop-blur-sm transition-all duration-200 motion-reduce:transition-none",
        "[@media(hover:hover)]:translate-y-1 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-focus-within:opacity-100",
        className,
      )}
    >
      {credit}
    </span>
  );
}
