const stats = [
  { value: "69.71%", label: "Forest Cover" },
  { value: "150+", label: "Rangers Expected" },
];

const StatsBar = () => {
  return (
    <dl className="mt-9 grid grid-cols-2 border-t border-border pt-7 sm:mx-auto sm:max-w-2xl sm:divide-x sm:divide-border lg:ml-auto lg:mr-0">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col px-4 text-center sm:px-8"
        >
          <dt className="order-2 mt-2 font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {stat.label}
          </dt>
          <dd className="order-1 font-display text-3xl font-bold leading-none text-primary md:text-4xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default StatsBar;
