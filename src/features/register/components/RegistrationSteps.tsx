import Link from "next/link";

export function RegistrationSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Step 1 */}
      <div className="rounded-sm border-2 border-secondary bg-card p-8 relative">
        <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground font-body text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-sm">
          Step 1
        </div>
        <h3 className="font-display text-xl font-bold text-primary mt-2 mb-3">
          Expression of Interest
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          We invite rangers, conservation professionals, and organisations from
          across Asia to begin by submitting an Expression of Interest (EOI).
          This is not a registration form — it is an opportunity for you to tell
          us about yourself, your work, and why you would like to attend the 2nd
          Asian Ranger Congress.
        </p>
        <div className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          <strong>EOIs are welcome from:</strong>
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
        <Link
          href="https://forms.office.com/e/pxaqynXnht"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
        >
          Submit Expression of Interest →
        </Link>
      </div>

      {/* Step 2 */}
      <div className="rounded-sm border border-border bg-card p-8 relative opacity-60">
        <div className="absolute -top-3 left-6 bg-muted text-muted-foreground font-body text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-sm">
          Step 2
        </div>
        <h3 className="font-display text-xl font-bold text-primary mt-2 mb-3">
          Confirmation & Payment
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
          Following the review of all Expressions of Interest, selected
          participants will be notified and invited to complete the formal
          registration process. Priority will be given to ensuring maximum
          participation of Asian rangers, in keeping with the spirit and purpose
          of the Congress.
          <br />
          Selected participants will receive a confirmation letter along with
          instructions to complete their registration and payment. The
          registration fee of USD 400 per participant covers accommodation, all
          meals, transportation, and a welcome kit for the full duration of the
          Congress.
        </p>
        <p className="font-body text-xs text-muted-foreground italic mb-3">
          Please note: a bank transaction fee will apply on top of the
          registration fee and is the responsibility of the participant.
        </p>
        <p className="font-body text-xs text-muted-foreground italic">
          Registration form and payment link to be activated for confirmed
          participants only. Contact: asianrangercongress@gmail.com
        </p>
      </div>
    </div>
  );
}
