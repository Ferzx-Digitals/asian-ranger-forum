"use client";

import { ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const levels = [
  { id: "asia", label: "Asia", image: "/images/map-asia.png" },
  { id: "bhutan", label: "Bhutan", image: "/images/map-bhutan.png" },
  { id: "thimphu", label: "Thimphu", image: "/images/map-thimphu.png" },
  { id: "rim", label: "RIM Simtokha", image: null }, // Handled by iframe
];

export function MagnifiableMap() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLevel = (index: number) => {
    if (index === currentLevel || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentLevel(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setLevel(currentLevel + 1);
    }
  };

  const prevLevel = () => {
    if (currentLevel > 0) {
      setLevel(currentLevel - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {levels.map((level, index) => (
          <div key={level.id} className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setLevel(index)}
              className={cn(
                "text-[10px] font-display font-bold uppercase tracking-wider transition-colors",
                currentLevel === index
                  ? "text-primary bg-secondary/20 px-3 py-1 rounded-full"
                  : "text-muted-foreground hover:text-primary px-2",
              )}
            >
              {level.label}
            </button>
            {index < levels.length - 1 && (
              <ChevronRight size={12} className="text-muted-foreground mx-1" />
            )}
          </div>
        ))}
      </div>

      {/* Map Display Viewport */}
      <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border bg-muted/10 group shadow-sm">
        {/* Continuous Zoom Layering */}
        <div className="absolute inset-0 flex items-center justify-center">
          {levels.map((level, index) => {
            const isActive = currentLevel === index;
            const isPrevious = currentLevel > index;
            const isNext = currentLevel < index;

            // Define scale and opacity based on position relative to currentLevel
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;

            if (isActive) {
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isPrevious) {
              scale = 4; // Scaled up (zoomed past)
              opacity = 0;
              zIndex = 10;
            } else if (isNext) {
              scale = 0.25; // Scaled down (waiting to be zoomed into)
              opacity = 0;
              zIndex = 10;
            }

            // Special handling for the Live Map (Level 3)
            if (index === 3) {
              return (
                <div
                  key={level.id}
                  className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {isActive && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d89.6780!3d27.4305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e193!2sRIM+Simtokha+Thimphu!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Royal Institute of Management, Simtokha, Thimphu"
                    />
                  )}
                </div>
              );
            }

            // Artistic Map Images (Levels 0, 1, 2)
            return (
              <div
                key={level.id}
                className="absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center p-8"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                {level.image && (
                  <div className="relative w-full h-full max-w-2xl">
                    <Image
                      src={level.image}
                      alt={level.label}
                      fill
                      className="object-contain"
                      priority={index <= 1}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-30">
          {currentLevel < levels.length - 1 && (
            <button
              type="button"
              onClick={nextLevel}
              disabled={isTransitioning}
              className="bg-primary text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center disabled:opacity-50"
            >
              <ZoomIn size={20} />
            </button>
          )}
          {currentLevel > 0 && (
            <button
              type="button"
              onClick={prevLevel}
              disabled={isTransitioning}
              className="bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-all active:scale-95 border border-border disabled:opacity-50"
            >
              <ZoomOut size={20} />
            </button>
          )}
        </div>

        {/* Label Overlay */}
        <div className="absolute top-6 left-6 z-30 pointer-events-none">
          <div className="bg-background/80 backdrop-blur-md border border-border/50 p-3 rounded-sm shadow-sm min-w-[140px]">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
              {levels[currentLevel].label}
            </p>
            <p className="text-[8px] text-muted-foreground uppercase tracking-tighter mt-1">
              {currentLevel === 0 && "Rangers from across Asia gather"}
              {currentLevel === 1 && "In the majesty of Bhutan"}
              {currentLevel === 2 && "Within the Thimphu valley"}
              {currentLevel === 3 && "At our venue"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
