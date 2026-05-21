import { OFFICIAL_CONGRESS_MAILTO } from "@/lib/contact";

const tiers = [
  {
    name: "Platinum",
    price: "USD 15,000 / organisation",
    description:
      "Premier partnership with the highest visibility across all congress touchpoints.",
    color: "border-primary/50",
    badge: "bg-primary/10 text-primary",
    brandingVisibility: [
      "Logo on all congress materials, banners & website (prominent placement)",
      "Full-page ad in the congress programme booklet",
      "Named recognition in opening & closing ceremonies",
      "Social media spotlights (3 dedicated posts)",
    ],
    engagement: [
      "5 complimentary delegate registrations",
      "Exhibition booth (prime location)",
      "10-minute address during plenary session",
      "Option to host a side event or workshop",
    ],
  },
  {
    name: "Gold",
    price: "USD 8,000 / organisation",
    description:
      "Significant presence and meaningful engagement with the ranger community.",
    color: "border-secondary",
    badge: "bg-secondary/20 text-secondary",
    featured: true,
    brandingVisibility: [
      "Logo on congress materials, banners & website",
      "Half-page ad in the congress programme booklet",
      "Named in opening ceremony",
      "Social media spotlights (2 dedicated posts)",
    ],
    engagement: [
      "3 complimentary delegate registrations",
      "Exhibition booth (standard location)",
      "Option to host a side event or workshop",
      "Plenary address",
    ],
  },
  {
    name: "Silver",
    price: "USD 5,000 / organisation",
    description:
      "Valuable recognition and connection with Asia's conservation leaders.",
    color: "border-border",
    badge: "bg-muted text-foreground/70",
    brandingVisibility: [
      "Logo on website and programme booklet",
      "Quarter-page ad in the congress programme booklet",
      "Social media acknowledgement (1 post)",
      "Banner placement",
    ],
    engagement: [
      "1 complimentary delegate registration",
      "Exhibition booth",
      "Side event or workshop",
      "Plenary address",
    ],
  },
];

function BenefitGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 font-body text-sm leading-relaxed text-foreground/75"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SponsorshipTiers() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-sm border-2 ${tier.color} bg-card p-6 flex flex-col ${tier.featured ? "shadow-md" : ""}`}
        >
          <div
            className={`self-start px-3 py-0.5 rounded-sm font-body text-xs font-semibold uppercase tracking-widest mb-4 ${tier.badge}`}
          >
            {tier.name}
          </div>
          <h3 className="font-display text-xl font-bold text-primary mb-2">
            {tier.name} Sponsor
          </h3>
          <p className="font-body text-sm font-semibold text-secondary mb-3">
            {tier.price}
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground/75 mb-6">
            {tier.description}
          </p>

          <div className="flex-1 space-y-6 rounded-sm border border-border/60 bg-muted/20 p-4 mb-6">
            <BenefitGroup
              title="Branding & visibility"
              items={tier.brandingVisibility}
            />
            <BenefitGroup title="Engagement" items={tier.engagement} />
          </div>
          <a
            href={OFFICIAL_CONGRESS_MAILTO}
            className="font-body text-sm text-secondary hover:underline text-center"
          >
            Enquire about {tier.name} sponsorship →
          </a>
        </div>
      ))}
    </div>
  );
}
