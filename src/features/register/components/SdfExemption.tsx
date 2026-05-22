export function SdfExemption() {
  return (
    <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-6">
      <div className="flex gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
          <span className="text-secondary font-body text-sm font-bold">
            SDF
          </span>
        </div>
        <div>
          <h3 className="font-body text-sm font-semibold text-primary mb-1">
            Sustainable Development Fee (SDF) Exemption
          </h3>
          <p className="font-body text-sm text-foreground/70 leading-relaxed mb-2">
            Confirmed registered participants will benefit from an exemption from
            Bhutan's Sustainable Development Fee (SDF), which the Organising
            Committee is arranging in collaboration with the Royal Government of
            Bhutan. This exemption is strictly for confirmed registered
            participants and applies exclusively for the duration of the Congress
            (2–4 December 2026).
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            If you wish to extend your stay in Bhutan beyond the official
            Congress dates, the SDF (USD 100 per day) will apply and
            participants will be responsible for making their own arrangements.
            The Organising Committee will not be able to provide any support for
            extended stays.
          </p>
        </div>
      </div>
    </div>
  );
}
