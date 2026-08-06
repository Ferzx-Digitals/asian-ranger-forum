"use client";

import { LockKeyhole, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAdmin } from "../actions/auth";
import { initialAdminLoginState } from "../login-state";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [state, formAction, pending] = useActionState(
    loginAdmin,
    initialAdminLoginState,
  );

  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--secondary)/0.26),transparent_34%),radial-gradient(circle_at_bottom_left,hsl(var(--background)/0.12),transparent_42%)]"
      />
      <div className="mx-auto flex max-w-md flex-col items-center">
        <div className="mb-8 flex items-center gap-4 self-start">
          <div className="flex size-16 items-center justify-center rounded-full bg-background p-2 shadow-lg">
            <Image
              alt="Asian Ranger Congress"
              className="h-full w-auto"
              height={56}
              priority
              src="/logo.svg"
              width={56}
            />
          </div>
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Protected area
            </p>
            <p className="mt-1 font-body text-sm text-primary-foreground/70">
              2nd Asian Ranger Congress
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-primary-foreground/15 bg-background p-6 text-foreground shadow-2xl sm:p-8">
          <div className="mb-7 flex size-12 items-center justify-center rounded-xl bg-muted text-primary">
            <LockKeyhole aria-hidden="true" className="size-5" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Registration admin
          </h1>
          <p className="mt-3 max-w-sm font-body text-sm leading-6 text-muted-foreground">
            Enter the administrator password to review registrations and
            download uploaded documents.
          </p>

          <form action={formAction} className="mt-8 space-y-5">
            <div>
              <label
                className="mb-2 block font-body text-sm font-semibold"
                htmlFor="admin-password"
              >
                Password
              </label>
              <Input
                aria-describedby={
                  state.status === "error" ? "admin-login-error" : undefined
                }
                aria-invalid={state.status === "error"}
                autoComplete="current-password"
                className="h-12"
                disabled={pending}
                id="admin-password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
              {state.status === "error" ? (
                <p
                  className="mt-2 font-body text-sm text-destructive"
                  id="admin-login-error"
                  role="alert"
                >
                  {state.message}
                </p>
              ) : null}
            </div>

            <Button
              className="h-12 w-full text-base"
              disabled={pending || password.length === 0}
              type="submit"
            >
              {pending ? "Checking access…" : "Open dashboard"}
            </Button>
          </form>

          <div className="mt-7 flex gap-3 border-t pt-5 font-body text-xs leading-5 text-muted-foreground">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <p>
              Your session is stored in a secure, HTTP-only cookie and expires
              after eight hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
