"use client";

import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdYueasnaY3GP5Dj5o3Ra6zvAlusU80bEzFtQ1qsHn1KeAOQg/formResponse";

const FIELDS = {
  fullName: "entry.1592266382",
  email: "entry.339402091",
  organisation: "entry.1553477029",
  message: "entry.817004728",
} as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    organisation: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const body = new FormData();
    body.append(FIELDS.fullName, values.fullName);
    body.append(FIELDS.email, values.email);
    body.append(FIELDS.organisation, values.organisation);
    body.append(FIELDS.message, values.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8 text-center">
        <p className="font-display text-2xl font-bold text-primary mb-2">
          Thank you!
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Your message has been received. We will get back to you within 5
          working days.
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

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
            value={values.fullName}
            onChange={(e) =>
              setValues((v) => ({ ...v, fullName: e.target.value }))
            }
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
            value={values.email}
            onChange={(e) =>
              setValues((v) => ({ ...v, email: e.target.value }))
            }
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
          value={values.organisation}
          onChange={(e) =>
            setValues((v) => ({ ...v, organisation: e.target.value }))
          }
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
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-6 py-2.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="font-body text-xs text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <p className="font-body text-xs text-muted-foreground">
        Or email us directly at{" "}
        <a
          href="mailto:asianrangercongress@gmail.com"
          className="text-secondary hover:underline"
        >
          asianrangercongress@gmail.com
        </a>
      </p>
    </form>
  );
}
