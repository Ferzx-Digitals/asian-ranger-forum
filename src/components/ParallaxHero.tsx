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
      const nextProgress = clamp(-rect.top / scrollRange, 0, 1);

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const backShift = -70 * progress;
  const midShift = -140 * progress;
  const frontShift = -210 * progress;
  const titleShift = 115 * progress;
  const titleOpacity = clamp(1 - progress * 0.95, 0, 1);

  return (
    <section
      ref={heroRef}
      className="relative h-[180vh] bg-gradient-to-b from-[hsl(34,52%,82%)] via-[hsl(41,48%,90%)] to-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(43_72%_52%_/_0.26),transparent_28%),linear-gradient(to_bottom,hsl(35_55%_78%_/_0.88),transparent_58%)]" />

        <div
          className="absolute inset-x-0 top-[28vh] z-[14] flex flex-col items-center px-4 text-center will-change-transform"
          style={{
            transform: `translate3d(0, ${titleShift}px, 0)`,
            opacity: titleOpacity,
          }}
        >
          <p className="font-body mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-secondary md:text-base">
            Thimphu, Bhutan
          </p>
          <h1 className="font-display text-primary text-5xl font-bold leading-[0.95] md:text-7xl lg:text-[7rem]">
            2<sup className="text-[0.55em]">nd</sup> Asian Ranger
            <br />
            Congress 2026
          </h1>
          <div className="mt-5 flex items-center gap-3 md:mt-6">
            <div className="h-px w-10 bg-secondary md:w-14" />
            <p className="font-display text-secondary text-xl font-semibold tracking-wide md:text-3xl">
              1 — 5 December
            </p>
            <div className="h-px w-10 bg-secondary md:w-14" />
          </div>
          <p className="font-body mt-4 text-xs uppercase tracking-[0.35em] text-muted-foreground md:text-sm">
            Land of the Thunder Dragon
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[26vh] z-[8] h-[38vh] overflow-hidden md:h-[42vh]">
          <img
            src={mountainBack}
            alt=""
            className="h-full w-full object-cover object-bottom opacity-55 will-change-transform"
            style={{ transform: `translate3d(0, ${backShift}px, 0) scale(1.1)` }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[10vh] z-[18] h-[54vh] overflow-hidden md:h-[58vh]">
          <img
            src={mountainMid}
            alt=""
            className="h-full w-full object-cover object-bottom will-change-transform"
            style={{
              transform: `translate3d(0, ${midShift}px, 0) scale(1.14)`,
              filter: "brightness(0.9) saturate(0.85)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-6vh] z-[28] h-[72vh] overflow-hidden md:h-[78vh]">
          <img
            src={mountainFront}
            alt=""
            className="h-full w-full object-cover object-bottom will-change-transform"
            style={{
              transform: `translate3d(0, ${frontShift}px, 0) scale(1.18)`,
              filter: "brightness(0.72) saturate(0.82)",
            }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-t from-background via-background/85 to-transparent" />
      </div>
    </section>
  );
};

export default ParallaxHero;
