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
        <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
          Submit your expression of interest to indicate you would like to
          attend the 2nd Asian Ranger Congress. You will be contacted with
          further details once your interest is received.
        </p>
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
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          After your expression of interest is reviewed, you will receive a
          formal invitation with payment instructions and a confirmation link to
          complete your registration.
        </p>
        <p className="font-body text-xs text-muted-foreground italic">
          Available after EOI review — opens closer to the congress date
        </p>
      </div>
    </div>
  );
}
