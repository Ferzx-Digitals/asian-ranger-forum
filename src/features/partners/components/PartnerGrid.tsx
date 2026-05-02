const partners = [
  "Ranger Federation of Asia (RFA)",
  "International Rangers Federation (IRF)",
  "Society of Bhutanese Foresters (SBF)",
  "WWF Bhutan",
  "IUCN Asia",
  "Wildlife Conservation Society (WCS)",
  "Royal Government of Bhutan",
  "Department of Forests & Park Services, Bhutan",
  "Global Wildlife Conservation",
  "Asian Development Bank (ADB)",
];

export function PartnerGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {partners.map((partner) => (
        <div
          key={partner}
          className="rounded-sm border border-border bg-card p-4 flex flex-col items-center justify-center gap-2 min-h-[100px] text-center"
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <span className="font-body text-lg text-muted-foreground">🌿</span>
          </div>
          <p className="font-body text-xs text-foreground/70 leading-tight">{partner}</p>
        </div>
      ))}
    </div>
  );
}
