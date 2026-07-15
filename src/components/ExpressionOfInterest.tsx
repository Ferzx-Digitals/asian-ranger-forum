const ExpressionOfInterest = () => {
  return (
    <section className="relative z-50 flex items-center justify-center px-4 pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="w-full max-w-lg">
        <div className="relative rounded-sm border border-secondary/30 bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-sm" />

          <p className="font-body text-xs font-semibold uppercase tracking-[0.38em] text-secondary text-center mb-3">
            EOI Closed
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-2">
            Expression of Interest
          </h2>

          <p className="font-body text-sm text-muted-foreground text-center mb-8">
            The Expression of Interest period has closed. Submitted EOIs will be
            reviewed, and selected participants will receive confirmation and a
            payment link directly.
          </p>

          <button
            type="button"
            disabled
            className="flex cursor-not-allowed items-center justify-center gap-3 w-full py-3 border border-border bg-muted text-muted-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-sm"
          >
            Expression of Interest Closed
          </button>

          <p className="mt-6 text-xs font-semibold text-secondary text-center font-body">
            Registration fee: USD 450 per participant
          </p>

          <p className="mt-3 text-xs text-muted-foreground text-center font-body">
            Thimphu, Bhutan · 2–4 December 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpressionOfInterest;
