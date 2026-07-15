import { CountdownTimer } from "@/components/CountdownTimer";

export function CountdownSection() {
  return (
    <section className="relative z-50 py-10 md:py-14 px-4 bg-background text-center">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary mb-4">
        Counting Down to
      </p>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8">
        2–4 December 2026
      </h2>
      <CountdownTimer size="lg" />
    </section>
  );
}
