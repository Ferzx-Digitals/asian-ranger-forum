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
      const travel = rect.height - viewportHeight;
      const nextProgress = travel > 0 ? clamp(-rect.top / travel, 0, 1) : 0;

      setProgress(nextProgress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true, capture: true });
    window.addEventListener("resize", updateProgress);
    document.addEventListener("scroll", updateProgress, { passive: true, capture: true });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress, true);
      window.removeEventListener("resize", updateProgress);
      document.removeEventListener("scroll", updateProgress, true);
    };
  }, []);

  const backShift = -28 * progress;
  const titleShift = 90 * progress;
  const midShift = -64 * progress;
  const frontShift = -108 * progress;
  const titleOpacity = 1 - progress * 1.15;

  return (
    <section
      ref={heroRef}
      className="relative h-[140vh] overflow-hidden bg-gradient-to-b from-[hsl(34,52%,82%)] via-[hsl(41,48%,90%)] to-background"
    >
      <div className="absolute inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,hsl(43_72%_52%_/_0.22),transparent_30%),linear-gradient(to_bottom,hsl(35_55%_78%_/_0.85),transparent_55%)]" />

      <div
        className="absolute inset-x-0 top-[13vh] z-10 flex flex-col items-center px-4 text-center will-change-transform"
        style={{ transform: `translate3d(0, ${titleShift}px, 0)`, opacity: clamp(titleOpacity, 0, 1) }}
      >
        <p className="font-body mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-secondary md:text-base">
          Thimphu, Bhutan
        </p>
        <h1 className="font-display text-primary text-4xl font-bold leading-[0.95] md:text-6xl lg:text-8xl">
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

      <div className="absolute inset-x-0 bottom-0 z-[8] h-[48vh] overflow-hidden md:h-[52vh]">
        <img
          src={mountainBack}
          alt="Distant Himalayan mountain silhouettes behind the congress title"
          className="h-full w-full object-cover object-bottom opacity-55 mix-blend-multiply will-change-transform"
          style={{ transform: `translate3d(0, ${backShift}px, 0) scale(1.06)` }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[18] h-[54vh] overflow-hidden md:h-[58vh]">
        <img
          src={mountainMid}
          alt="Forested Himalayan ridgelines layered in mist"
          className="h-full w-full object-cover object-bottom mix-blend-multiply will-change-transform"
          style={{
            transform: `translate3d(0, ${midShift}px, 0) scale(1.08)`,
            filter: "brightness(0.9) saturate(0.85)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-[-2vh] z-[28] h-[64vh] overflow-hidden md:h-[68vh]">
        <img
          src={mountainFront}
          alt="Foreground Bhutanese mountain ridges framing the landing page"
          className="h-full w-full object-cover object-bottom mix-blend-multiply will-change-transform"
          style={{
            transform: `translate3d(0, ${frontShift}px, 0) scale(1.12)`,
            filter: "brightness(0.7) saturate(0.8)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-40 h-28 bg-gradient-to-t from-background via-background/85 to-transparent" />
    </section>
  );
};

export default ParallaxHero;
