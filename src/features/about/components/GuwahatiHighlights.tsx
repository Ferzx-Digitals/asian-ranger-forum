const stats = [
  { value: "146", label: "Participants" },
  { value: "20", label: "Countries represented" },
  { value: "35", label: "Women rangers" },
  { value: "December 2023", label: "Guwahati, India" },
];

export function GuwahatiHighlights() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-sm border border-border bg-muted/30 px-4 py-5 text-center"
        >
          <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
            {stat.value}
          </p>
          <p className="mt-1 font-body text-xs uppercase tracking-wide text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
