import { useEffect, useRef, useState } from "react";
import mountainBack from "@/assets/mountain-back.png";
import mountainMid from "@/assets/mountain-mid.png";
import mountainFront from "@/assets/mountain-front.png";

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative h-[120vh] overflow-hidden bg-gradient-to-b from-[hsl(35,40%,85%)] via-[hsl(40,50%,90%)] to-background">
      {/* Prayer flag decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-60 z-50" />

      {/* Back mountains - slowest */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <img
          src={mountainBack}
          alt=""
          className="w-full h-auto object-cover object-bottom opacity-50"
          style={{ filter: "hue-rotate(10deg) brightness(0.7)" }}
        />
      </div>

      {/* Title - sits between mountain layers */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <p className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-secondary mb-4 font-semibold">
          Thimphu, Bhutan
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-primary text-center leading-tight">
          2<sup className="text-[0.6em]">nd</sup> Asian Ranger
          <br />
          Congress 2026
        </h1>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-px bg-secondary" />
          <p className="font-display text-xl md:text-3xl text-secondary font-semibold tracking-wide">
            1 — 5 December
          </p>
          <div className="w-12 h-px bg-secondary" />
        </div>
        <p className="mt-4 font-body text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
          Land of the Thunder Dragon
        </p>
      </div>

      {/* Mid mountains */}
      <div
        className="absolute bottom-0 left-0 w-full z-20"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <img
          src={mountainMid}
          alt=""
          className="w-full h-auto object-cover object-bottom"
          style={{ filter: "brightness(0.85) saturate(0.8)" }}
        />
      </div>

      {/* Front mountains - fastest */}
      <div
        className="absolute bottom-0 left-0 w-full z-30"
        style={{ transform: `translateY(${scrollY * 0.55}px)` }}
      >
        <img
          src={mountainFront}
          alt=""
          className="w-full h-auto object-cover object-bottom"
          style={{ filter: "brightness(0.6) saturate(0.7)" }}
        />
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-40" />
    </div>
  );
};

export default ParallaxHero;
