import { RoadEntryMap } from "./RoadEntryMap";

const entryPoints = [
  {
    name: "Phuentsholing",
    country: "West Bengal, India",
    distance: "~164 km from Thimphu",
    time: "~4–5 hrs",
    nearestHub:
      "Hasimara (~20 km from border); New Jalpaiguri (NJP) / Siliguri (~150 km from border)",
    notes:
      "The most popular and well-connected land entry point. Located adjacent to the Indian town of Jaigaon in West Bengal — the recommended route for most road travellers.",
  },
  {
    name: "Gelephu",
    country: "Assam, India",
    distance: "~230 km from Guwahati",
    time: "~5–6 hrs from Guwahati",
    nearestHub: "Guwahati (well-connected international airport)",
    notes:
      "A convenient entry point for participants travelling from Guwahati or northeast India. Well-suited for participants arriving via Guwahati.",
  },
  {
    name: "Samdrup Jongkhar",
    country: "Assam, India",
    distance: "~150 km from Guwahati",
    time: "~4–5 hrs from Guwahati",
    nearestHub: "Guwahati Airport (~150 km)",
    notes:
      "An eastern entry point approximately 150 km from Guwahati. This route passes through eastern Bhutan and involves a longer onward drive to Thimphu.",
  },
];

export function EntryByRoad() {
  return (
    <div className="space-y-2">
      <RoadEntryMap />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 pb-6">
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

      <div className="rounded-sm border border-border bg-muted/20 p-4 mt-2">
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground/80">Please note:</strong> Entry
          permits are required at all land border crossings and must be arranged
          in advance. Indian nationals may enter with a valid passport or Voter
          ID card. All other nationalities require a Bhutan visa, which must be
          processed in advance through the Organising Committee. The Organising
          Committee will provide guidance on permit and visa arrangements for
          all registered participants.
        </p>
      </div>
    </div>
  );
}
