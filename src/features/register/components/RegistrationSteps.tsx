export function RegistrationSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Step 1 */}
      <div className="rounded-sm border border-border bg-card p-8 relative">
        <div className="absolute -top-3 left-6 bg-muted text-muted-foreground font-body text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-sm">
          Step 1 - Closed
        </div>
        <h3 className="font-display text-xl font-bold text-primary mt-2 mb-3">
          Expression of Interest
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          Expression of Interest (EOI) submissions are now closed. The form is
          no longer accepting new submissions at this stage.
        </p>
        <div className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          <strong>EOIs were open to:</strong>
          <ul>
            <li>Frontline rangers,</li>
            <li>Conservation professionals and practitioners,</li>
            <li>Ranger associations and federations,</li>
            <li>Conservation organisations supporting rangers,</li>
            <li>Researchers and academics working on ranger-related issues</li>
          </ul>
        </div>
        <div className="rounded-sm bg-muted/40 px-4 py-3 mb-6">
          <p className="font-body text-xs font-semibold text-primary mb-2">
            To ensure the Congress remains true to its mission, participation
            will be allocated as follows:
          </p>
          <ul className="space-y-0.5 font-body text-xs text-muted-foreground">
            <li>80% — Rangers from Asia</li>
            <li>10% — Rangers from other continents</li>
            <li>10% — Ranger supporters and conservation organisations</li>
          </ul>
        </div>
        <button
          type="button"
          disabled
          className="inline-flex cursor-not-allowed items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold tracking-wide uppercase"
        >
          Expression of Interest Closed
        </button>
      </div>

      {/* Step 2 */}
      <div className="rounded-sm border-2 border-secondary bg-card p-8 relative">
        <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground font-body text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-sm">
          Step 2 - Coming Soon
        </div>
        <h3 className="font-display text-xl font-bold text-primary mt-2 mb-3">
          Confirmation & Payment
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
          Coming soon. Following the review of submitted Expressions of
          Interest, selected participants will be notified and invited to
          complete the formal registration process. Only people who already
          submitted an EOI will receive the confirmation and payment link.
          <br />
          Selected participants will receive a confirmation letter with
          instructions to complete their registration and payment. The
          registration fee of USD 450 per participant covers accommodation, all
          meals, transportation, and a welcome kit for the full duration of the
          Congress.
        </p>
        <p className="font-body text-xs text-muted-foreground italic mb-3">
          Please note: a bank transaction fee will apply on top of the
          registration fee and is the responsibility of the participant.
        </p>
        <p className="font-body text-xs text-muted-foreground italic">
          Registration and payment links will be shared directly with confirmed
          participants only. Contact: asianrangercongress@gmail.com
        </p>
      </div>
    </div>
  );
}
