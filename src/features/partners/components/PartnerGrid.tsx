type Partner = {
  name: string;
  logo?: string;
  url?: string;
};

const partners: Partner[] = [
  { name: "Ranger Federation of Asia (RFA)" },
  { name: "International Rangers Federation (IRF)" },
  { name: "Society of Bhutanese Foresters (SBF)" },
  { name: "Department of Forests and Park Services, MoENR, Bhutan" },
  { name: "Department of Tourism, MoICE, Bhutan" },
  { name: "Bhutan Ecological Society (BES)" },
  { name: "Hotel & Restaurant Association of Bhutan (HRAB)" },
  { name: "Universal Ranger Support Alliance" },
  { name: "WildCan Nepal" },
  { name: "WWF" },
];

export function PartnerGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="rounded-sm border border-border bg-card p-4 flex flex-col items-center justify-between gap-3 min-h-[140px] text-center"
        >
          <div className="w-16 h-16 rounded-sm bg-muted flex items-center justify-center overflow-hidden">
            {partner.logo ? (
              <img
                src={`/logos/${partner.logo}`}
                alt={partner.name}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <span className="font-body text-2xl text-muted-foreground">
                🌿
              </span>
            )}
          </div>

          <p className="font-body text-xs text-foreground/70 leading-tight">
            {partner.name}
          </p>

          {partner.url ? (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
            >
              Know More →
            </a>
          ) : (
            <span className="font-body text-xs text-muted-foreground/40 cursor-not-allowed">
              Know More →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
