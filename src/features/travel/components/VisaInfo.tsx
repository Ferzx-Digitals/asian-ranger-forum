export function VisaInfo() {
  const fees = [
    { category: "Visa Fee", amount: "USD 40", note: "Per person, per entry" },
    {
      category: "Sustainable Development Fee (SDF)",
      amount: "USD 100/night",
      note: "Exempted for confirmed congress participants",
    },
  ];

  return (
    <div className="space-y-6">
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        All foreign nationals (except Indian, Bangladeshi, and Maldivian
        citizens) require a visa to enter Bhutan. Visas must be arranged in
        advance through a licensed Bhutanese tour operator or directly via the
        Bhutan Tourism portal.
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
