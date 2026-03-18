import { useEffect, useRef, useState } from "react";
import mountainBack from "@/assets/mountain-back.png";
import mountainMid from "@/assets/mountain-mid.png";
import mountainFront from "@/assets/mountain-front.png";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const ParallaxHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollRange = Math.max(rect.height - viewportHeight, 1);
      setProgress(clamp(-rect.top / scrollRange, 0, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Title moves DOWN as you scroll (gets swallowed by rising mountains)
  const titleY = 160 * progress;
  const titleOpacity = clamp(1 - progress * 1.2, 0, 1);

  // Mountains rise UP as you scroll (negative = upward). Back moves least, front moves most.
  const backY = -120 * progress;
  const midY = -220 * progress;
  const frontY = -320 * progress;

  return (
    <section
      ref={heroRef}
      className="relative h-[200vh] bg-gradient-to-b from-[hsl(34,52%,82%)] via-[hsl(41,48%,90%)] to-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Warm sky gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(43_72%_52%_/_0.22),transparent_50%)]" />

        {/* Prayer flag accent line */}
        <div className="absolute inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70" />

        {/* TITLE — starts close to the ridge line */}
        <div
          className="absolute inset-x-0 top-[20vh] z-[14] flex flex-col items-center px-4 text-center will-change-transform"
          style={{
            transform: `translate3d(0, ${titleY}px, 0)`,
            opacity: titleOpacity,
          }}
        >
          <p className="font-body mb-3 text-sm font-semibold uppercase tracking-[0.38em] text-secondary md:text-base">
            Thimphu, Bhutan
          </p>
          <h1 className="font-display text-primary text-3xl font-bold leading-[0.95] md:text-5xl lg:text-6xl">
            2<sup className="text-[0.55em]">nd</sup> Asian Ranger
            <br />
            Congress 2026
          </h1>
          <div className="mt-4 flex items-center gap-3 md:mt-5">
            <div className="h-px w-10 bg-secondary md:w-14" />
            <p className="font-display text-secondary text-lg font-semibold tracking-wide md:text-2xl">
              1 — 5 December
            </p>
            <div className="h-px w-10 bg-secondary md:w-14" />
          </div>
          <p className="font-body mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground md:text-sm">
            Land of the Thunder Dragon
          </p>
        </div>

        {/* BACK mountains — visible on load, right below title */}
        <div
          className="pointer-events-none absolute inset-x-0 z-[8] will-change-transform"
          style={{
            bottom: "18vh",
            height: "40vh",
            transform: `translate3d(0, ${backY}px, 0)`,
          }}
        >
          <img
            src={mountainBack}
            alt=""
            className="h-full w-full object-cover object-top opacity-50"
            style={{ transform: "scale(1.15)" }}
          />
        </div>

        {/* MID mountains — partially visible on load */}
        <div
          className="pointer-events-none absolute inset-x-0 z-[18] will-change-transform"
          style={{
            bottom: "4vh",
            height: "48vh",
            transform: `translate3d(0, ${midY}px, 0)`,
          }}
        >
          <img
            src={mountainMid}
            alt=""
            className="h-full w-full object-cover object-top will-change-transform"
            style={{
              transform: "scale(1.18)",
              filter: "brightness(0.9) saturate(0.85)",
            }}
          />
        </div>

        {/* FRONT mountains — peeks at bottom on load */}
        <div
          className="pointer-events-none absolute inset-x-0 z-[28] will-change-transform"
          style={{
            bottom: "-12vh",
            height: "58vh",
            transform: `translate3d(0, ${frontY}px, 0)`,
          }}
        >
          <img
            src={mountainFront}
            alt=""
            className="h-full w-full object-cover object-top will-change-transform"
            style={{
              transform: "scale(1.2)",
              filter: "brightness(0.72) saturate(0.82)",
            }}
          />
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 z-40 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default ParallaxHero;
