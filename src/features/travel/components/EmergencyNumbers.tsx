const emergencyNumbers = [
  { number: "110", label: "Fire & Rescue Services" },
  { number: "111", label: "Traffic Police" },
  { number: "112", label: "Ambulance & Medical Emergencies" },
  { number: "113", label: "Royal Bhutan Police" },
  { number: "999", label: "Disaster Helpline" },
];

export function EmergencyNumbers() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {emergencyNumbers.map(({ number, label }) => (
        <div
          key={number}
          className="rounded-sm border border-border bg-card p-4 text-center"
        >
          <p className="font-display text-3xl font-bold text-accent">
            {number}
          </p>
          <p className="mt-1 font-body text-xs text-muted-foreground">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
