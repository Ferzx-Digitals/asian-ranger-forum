const inclusions = [
  { icon: "🏨", label: "Accommodation", detail: "3 nights (1–4 December 2026)" },
  { icon: "🍽️", label: "All Meals", detail: "Breakfast, lunch, and dinner throughout the congress" },
  { icon: "🚌", label: "Local Transport", detail: "Airport transfers and congress field visits" },
  { icon: "📋", label: "Congress Materials", detail: "Programme booklet, name badge, and resource pack" },
  { icon: "🎫", label: "All Sessions", detail: "Plenary sessions, workshops, and side events" },
  { icon: "🌿", label: "Field Visits", detail: "Guided nature and conservation site visits" },
];

export function WhatsIncluded() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {inclusions.map(({ icon, label, detail }) => (
        <div key={label} className="flex gap-3 rounded-sm border border-border bg-card p-4">
          <span className="text-2xl leading-none mt-0.5">{icon}</span>
          <div>
            <p className="font-body text-sm font-semibold text-primary">{label}</p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">{detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
