export function VisaInfo() {
  const fees = [
    {
      category: "Visa Fee",
      amount: "USD 40",
      note: "One-time payment",
    },
    {
      category: "SDF Processing Fee",
      amount: "approx. USD 20–30",
      note: "Applies only to days outside the official Congress period",
    },
    {
      category: "Monument Fee",
      amount: "USD 50–100",
      note: "One-time payment, depending on monuments visited (outside Congress period)",
    },
    {
      category: "Sustainable Development Fee (SDF)",
      amount: "USD 100/night",
      note: "Exempted for confirmed registered participants during the Congress",
    },
  ];

  return (
    <div className="space-y-6">
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Most international visitors to Bhutan require a visa. Visa processing
        will be facilitated by the Department of Forests and Park Services,
        Ministry of Energy and Natural Resources, in collaboration with the
        Organising Committee. The Organising Committee will assist with
        efficient visa processing for all Congress participants. Further details
        and a link for visa applications will be provided upon registration.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-muted/60">
              <th className="text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-3">
                Category
              </th>
              <th className="text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-3">
                Amount
              </th>
              <th className="text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-3">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {fees.map((row) => (
              <tr key={row.category} className="border-t border-border">
                <td className="font-body text-sm text-foreground/80 px-4 py-3">
                  {row.category}
                </td>
                <td className="font-body text-sm font-semibold text-primary px-4 py-3">
                  {row.amount}
                </td>
                <td className="font-body text-xs text-muted-foreground px-4 py-3">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-sm border border-border bg-muted/20 p-4">
        <p className="font-body text-xs text-muted-foreground">
          <strong className="text-foreground/80">Visa application link:</strong>{" "}
          <span className="italic">
            Coming soon — will be provided upon confirmation of registration
          </span>
        </p>
      </div>
    </div>
  );
}
