const inclusions = [
  {
    icon: "🏨",
    label: "Accommodation",
    detail: "Selected hotels in Thimphu for the full congress duration",
  },
  {
    icon: "🍽️",
    label: "Working Lunches & Dinners",
    detail: "All working meals throughout the event",
  },
  {
    icon: "☕",
    label: "Tea & Snack Breaks",
    detail: "Two tea/snack breaks daily",
  },
  {
    icon: "🚌",
    label: "Transportation",
    detail: "Transfers to and from the venue",
  },
  {
    icon: "🎁",
    label: "Welcome Kit",
    detail: "Congress materials and welcome pack",
  },
  {
    icon: "🎫",
    label: "All Sessions & Field Visits",
    detail: "Access to all congress sessions, field visits, and social events",
  },
  {
    icon: "🏥",
    label: "On-site Medical Team",
    detail: "Dedicated medical support throughout the congress",
  },
];

export function WhatsIncluded() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {inclusions.map(({ icon, label, detail }) => (
        <div
          key={label}
          className="flex gap-3 rounded-sm border border-border bg-card p-4"
        >
          <span className="text-2xl leading-none mt-0.5">{icon}</span>
          <div>
            <p className="font-body text-sm font-semibold text-primary">
              {label}
            </p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              {detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
