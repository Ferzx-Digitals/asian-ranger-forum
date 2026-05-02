"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8 text-center">
        <p className="font-display text-2xl font-bold text-primary mb-2">Thank you!</p>
        <p className="font-body text-sm text-muted-foreground">
          Your message has been received. We will get back to you within 5 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-1.5">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-1.5">
          Organisation
        </label>
        <input
          type="text"
          className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="Your organisation (optional)"
        />
      </div>
      <div>
        <label className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          required
          rows={5}
          className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-6 py-2.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
      <p className="font-body text-xs text-muted-foreground">
        Or email us directly at{" "}
        <a href="mailto:asianrangercongress@gmail.com" className="text-secondary hover:underline">
          asianrangercongress@gmail.com
        </a>
      </p>
    </form>
  );
}
