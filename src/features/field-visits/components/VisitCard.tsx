interface VisitCardProps {
  number: number;
  name: string;
  description: string;
}

export function VisitCard({ number, name, description }: VisitCardProps) {
  return (
    <div className="rounded-sm border border-border bg-card overflow-hidden">
      {/* Placeholder image */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-border">
        <div className="text-center">
          <p className="font-display text-4xl text-primary/20 font-bold">0{number}</p>
          <p className="font-body text-xs text-muted-foreground mt-1">Photo coming soon</p>
        </div>
      </div>
      <div className="p-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
          Field Visit {number}
        </p>
        <h3 className="font-display text-xl font-bold text-primary mb-3">{name}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        <p className="mt-4 font-body text-xs text-muted-foreground italic">
          Location details and GPS coordinates coming soon
        </p>
      </div>
    </div>
  );
}
