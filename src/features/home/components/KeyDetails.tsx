export function KeyDetails() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* WHEN */}
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
            When
          </p>
          <p className="font-display text-xl font-bold text-primary leading-tight">
            2–4 December 2026
          </p>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            Three days of sessions, workshops, and field visits
          </p>
        </div>

        {/* WHERE */}
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
            Where
          </p>
          <p className="font-display text-xl font-bold text-primary leading-tight">
            Thimphu, Bhutan
          </p>
          <p className="mt-1 font-body text-sm text-muted-foreground mb-3">
            Royal Institute of Management (RIM), Simtokha
          </p>
          <div className="w-full h-32 rounded-sm overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.123456789!2d89.6780!3d27.4305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e193b5aaaaaaaa%3A0xbbbbbbbbbbbbbbbb!2sThimphu%2C%20Bhutan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thimphu, Bhutan map"
            />
          </div>
        </div>

        {/* ORGANISED BY */}
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
            Organised By
          </p>
          <ul className="space-y-1.5">
            {[
              "Ranger Federation of Asia (RFA)",
              "International Rangers Federation (IRF)",
              "Society of Bhutanese Foresters (SBF)",
            ].map((org) => (
              <li key={org} className="font-body text-sm text-foreground/80">
                {org}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-body text-xs text-muted-foreground">
            In collaboration with the Royal Government of Bhutan
          </p>
        </div>

        {/* REGISTRATION FEE */}
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
            Registration Fee
          </p>
          <p className="font-display text-xl font-bold text-primary leading-tight">
            USD 400
          </p>
          <p className="mt-1 font-body text-sm text-muted-foreground mb-3">
            Includes accommodation, meals, and transport
          </p>
          <p className="font-body text-xs text-muted-foreground italic">
            SDF exemption available for confirmed participants
          </p>
        </div>
      </div>
    </section>
  );
}
