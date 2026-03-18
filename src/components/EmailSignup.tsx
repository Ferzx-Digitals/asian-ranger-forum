import { useState } from "react";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you! We'll keep you updated.");
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="relative z-50 flex items-center justify-center px-4 py-4 md:py-6">
      <div className="w-full max-w-lg">
        {/* Decorative Bhutanese-inspired border card */}
        <div className="relative rounded-sm border border-secondary/30 bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-sm" />

          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-2">
            Stay Informed
          </h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-8">
            Be the first to receive updates on registration, speakers, and the full programme.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-sm transition-all duration-300 hover:opacity-90 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting…" : "Keep Me Updated"}
            </button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground text-center font-body">
            Royal Institute of Management, Simtokha · Thimphu, Bhutan
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
