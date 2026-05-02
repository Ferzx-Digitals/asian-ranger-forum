interface MessageCardProps {
  name: string;
  title: string;
  message?: string;
  placeholder?: boolean;
}

export function MessageCard({ name, title, message, placeholder }: MessageCardProps) {
  return (
    <div className="relative rounded-sm border border-border bg-card p-8">
      <div className="absolute top-6 left-6 font-display text-6xl text-secondary/20 leading-none select-none">
        &ldquo;
      </div>
      <div className="relative z-10">
        {placeholder ? (
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/5" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <p className="mt-4 font-body text-xs text-muted-foreground italic">
              Message to be confirmed
            </p>
          </div>
        ) : (
          <p className="font-body text-base text-foreground/80 leading-relaxed whitespace-pre-line">
            {message}
          </p>
        )}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="font-body text-sm font-semibold text-primary">{name}</p>
          <p className="font-body text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
}
