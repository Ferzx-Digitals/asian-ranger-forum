interface VisitCardProps {
  number: number;
  name: string;
  description: string;
  coordinates?: { lat: number; lng: number };
  mapsUrl?: string;
}

export function VisitCard({
  number,
  name,
  description,
  coordinates,
  mapsUrl,
}: VisitCardProps) {
  return (
    <div className="rounded-sm border border-border bg-card overflow-hidden flex flex-col">
      {/* Placeholder image */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-border">
        <div className="text-center">
          <p className="font-display text-4xl text-primary/20 font-bold">
            0{number}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            Photo coming soon
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
          Field Visit {number}
        </p>
        <h3 className="font-display text-xl font-bold text-primary mb-3">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {coordinates && (
          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-3 whitespace-nowrap">
            <p className="font-body text-xs text-muted-foreground">
              {coordinates.lat.toFixed(4)}° N, {coordinates.lng.toFixed(4)}° E
            </p>
            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
              >
                View on Map →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
