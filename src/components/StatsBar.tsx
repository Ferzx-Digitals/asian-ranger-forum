const stats = [
  { value: "70%", label: "Forest Cover" },
  { value: "10+", label: "Protected Areas" },
  { value: "200+", label: "Rangers Expected" },
  { value: "20+", label: "Asian Nations" },
];

const StatsBar = () => {
  return (
    <section className="relative z-50 -mt-16 py-6 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-secondary">
              {stat.value}
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
