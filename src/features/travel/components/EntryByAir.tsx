export function EntryByAir() {
  const airlines = [
    { name: "Druk Air", routes: "Delhi, Kolkata, Kathmandu, Bangkok, Singapore, Dhaka, Mumbai, Paro" },
    { name: "Bhutan Airlines", routes: "Delhi, Kolkata, Kathmandu, Bangkok, Bagdogra" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-border bg-card p-6">
        <h3 className="font-body text-sm font-semibold text-primary mb-1">Paro International Airport</h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Paro Airport (PBH) is Bhutan&apos;s only international airport. It is approximately 1.5 hours by road from Thimphu. Transfer is typically included in the congress registration fee.
        </p>
        <div className="space-y-3">
          {airlines.map((a) => (
            <div key={a.name} className="rounded-sm bg-muted/40 p-4">
              <p className="font-body text-sm font-semibold text-primary mb-1">{a.name}</p>
              <p className="font-body text-xs text-muted-foreground">Routes: {a.routes}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-body text-xs text-muted-foreground italic">
          Most international travellers connect through Delhi (DEL), Kolkata (CCU), Kathmandu (KTM), or Bangkok (BKK).
        </p>
      </div>
    </div>
  );
}
