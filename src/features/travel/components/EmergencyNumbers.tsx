const emergencyNumbers = [
  { number: "110", label: "Police" },
  { number: "111", label: "Fire" },
  { number: "112", label: "Emergency (National)" },
  { number: "113", label: "Ambulance" },
  { number: "999", label: "General Emergency" },
];

export function EmergencyNumbers() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {emergencyNumbers.map(({ number, label }) => (
        <div
          key={number}
          className="rounded-sm border border-border bg-card p-4 text-center"
        >
          <p className="font-display text-3xl font-bold text-accent">{number}</p>
          <p className="mt-1 font-body text-xs text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}
