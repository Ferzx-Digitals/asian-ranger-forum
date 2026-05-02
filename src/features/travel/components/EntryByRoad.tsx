const entryPoints = [
  {
    name: "Phuentsholing",
    country: "West Bengal, India",
    distance: "~170 km from Thimphu (~5–6 hrs)",
    nearestHub: "Siliguri / NJP Railway Station (60 km)",
    notes: "Most commonly used land crossing. Well-connected to Kolkata and Northeast India.",
  },
  {
    name: "Gelephu",
    country: "Assam, India",
    distance: "~250 km from Thimphu (~6–7 hrs)",
    nearestHub: "Guwahati (Kamrup) Airport (~150 km)",
    notes: "Convenient for travellers from northeast India. Good road conditions.",
  },
  {
    name: "Samdrup Jongkhar",
    country: "Assam, India",
    distance: "~600 km from Thimphu (~12–14 hrs)",
    nearestHub: "Guwahati Airport (~150 km)",
    notes: "Southernmost crossing. Suitable for travellers from Assam and further east.",
  },
];

export function EntryByRoad() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {entryPoints.map((ep) => (
        <div key={ep.name} className="rounded-sm border border-border bg-card p-5">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-1">
            {ep.country}
          </p>
          <h3 className="font-display text-lg font-bold text-primary mb-3">{ep.name}</h3>
          <div className="space-y-2">
            <div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Distance to Thimphu</p>
              <p className="font-body text-sm text-foreground/80">{ep.distance}</p>
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Nearest Hub</p>
              <p className="font-body text-sm text-foreground/80">{ep.nearestHub}</p>
            </div>
            <p className="font-body text-xs text-muted-foreground italic border-t border-border pt-2 mt-2">
              {ep.notes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
