const tiers = [
  {
    name: "Platinum",
    color: "border-[#b5b5b5]",
    badge: "bg-[#e8e8e8] text-[#555]",
  },
  {
    name: "Gold",
    color: "border-secondary",
    badge: "bg-secondary/20 text-secondary",
    featured: true,
  },
  {
    name: "Silver",
    color: "border-[#a0a0a0]",
    badge: "bg-[#f0f0f0] text-[#666]",
  },
];

export function SponsorshipTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-sm border-2 ${tier.color} bg-card p-8 flex flex-col ${tier.featured ? "shadow-md" : ""}`}
        >
          <div
            className={`self-start px-3 py-0.5 rounded-sm font-body text-xs font-semibold uppercase tracking-widest mb-4 ${tier.badge}`}
          >
            {tier.name}
          </div>
          <h3 className="font-display text-xl font-bold text-primary mb-4">
            {tier.name} Sponsor
          </h3>
          <div className="flex-1 rounded-sm border border-border/60 bg-muted/20 p-4 mb-6">
            <p className="font-body text-sm text-muted-foreground italic text-center">
              Sponsorship benefits and investment details coming soon
            </p>
          </div>
          <a
            href="mailto:asianrangercongress@gmail.com"
            className="font-body text-sm text-secondary hover:underline text-center"
          >
            Enquire about {tier.name} sponsorship →
          </a>
        </div>
      ))}
    </div>
  );
}
