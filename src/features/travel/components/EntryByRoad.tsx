import { RoadEntryMap } from "./RoadEntryMap";

const entryPoints = [
  {
    name: "Phuentsholing",
    country: "West Bengal, India",
    distance: "~170 km from Thimphu",
    time: "~5–6 hrs",
    nearestHub: "Siliguri / NJP Railway Station (60 km)",
    notes:
      "Most commonly used land crossing. Well-connected to Kolkata and Northeast India.",
  },
  {
    name: "Gelephu",
    country: "Assam, India",
    distance: "~250 km from Thimphu",
    time: "~6–7 hrs",
    nearestHub: "Guwahati (Kamrup) Airport (~150 km)",
    notes:
      "Convenient for travellers from northeast India. Good road conditions.",
  },
  {
    name: "Samdrup Jongkhar",
    country: "Assam, India",
    distance: "~600 km from Thimphu",
    time: "~12–14 hrs",
    nearestHub: "Guwahati Airport (~150 km)",
    notes:
      "Southernmost crossing. Suitable for travellers from Assam and further east.",
  },
];

export function EntryByRoad() {
  return (
    <div className="space-y-2">
      <RoadEntryMap />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {entryPoints.map((ep) => (
          <div key={ep.name} className="flex flex-col space-y-4">
            <div>
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                {ep.country}
              </p>
              <h3 className="font-display text-xl font-bold text-primary mt-1">
                {ep.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
                    Distance
                  </p>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {ep.distance}
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
                    Travel Time
                  </p>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {ep.time}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
                  Nearest Hub
                </p>
                <p className="font-body text-sm text-foreground/80 leading-snug">
                  {ep.nearestHub}
                </p>
              </div>

              <p className="font-body text-xs text-muted-foreground italic leading-relaxed pt-2">
                {ep.notes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
