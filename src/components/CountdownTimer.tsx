"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// 2 December 2026, 00:00 Bhutan Time (UTC+6)
const TARGET_DATE = new Date("2026-12-02T00:00:00+06:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(TARGET_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  if (size === "lg") {
    return (
      <div
        className={cn(
          "grid w-full grid-cols-4 gap-2 sm:flex sm:w-auto sm:items-stretch sm:justify-center sm:gap-5 md:gap-7",
          className,
        )}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex min-w-0 flex-col items-center justify-center rounded-sm border border-secondary/25 bg-background/80 px-2 py-4 shadow-sm sm:min-w-24 sm:px-7 sm:py-6 md:min-w-30 md:px-9 md:py-7"
          >
            <span className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-secondary leading-none">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-2 font-body text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-xs sm:tracking-[0.25em] md:text-sm">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 md:gap-4",
        className,
      )}
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="font-display text-2xl md:text-4xl font-bold text-primary leading-none drop-shadow-sm">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="font-body text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-xl md:text-3xl text-secondary/60 self-start">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
