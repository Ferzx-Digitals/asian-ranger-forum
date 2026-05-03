"use client";

import { Car, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const entryPoints = [
  {
    name: "Phuentsholing",
    x: "20%",
    y: "63%",
    distance: "170 km",
    time: "5–6 hrs",
    description: "Main gateway from West Bengal, India.",
  },
  {
    name: "Gelephu",
    x: "45%",
    y: "63%",
    distance: "250 km",
    time: "6–7 hrs",
    description: "Central crossing from Assam, India.",
  },
  {
    name: "Samdrup Jongkhar",
    x: "77%",
    y: "63%",
    distance: "600 km",
    time: "12–14 hrs",
    description: "Eastern gateway from Assam, India.",
  },
];

const thimphu = { name: "Thimphu", x: "34%", y: "40%" };

export function RoadEntryMap() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <div className="mt-8">
      {/* Viewport: Defines the visible area and aspect ratio */}
      <div className="relative -mx-4 sm:-mx-12 md:-mx-20 lg:-mx-28 aspect-[16/7] overflow-hidden md:rounded-2xl group shadow-sm bg-background">

        {/* Map Stage: Maintains the exact 3:2 aspect ratio of the image */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full aspect-[3/2]">
          <Image
            src="/images/road-map.png"
            alt="Artistic map of Bhutan showing road entry points"
            fill
            className="object-contain transition-transform duration-1000 group-hover:scale-105"
            priority
          />

          {/* Thimphu Marker */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: thimphu.x, top: thimphu.y }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-accent/20 rounded-full animate-ping" />
              <div className="relative bg-accent text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <MapPin size={16} fill="currentColor" />
              </div>
              <div className="absolute top-full mt-2 bg-background/95 backdrop-blur-sm border border-border px-2 py-1 rounded shadow-sm">
                <span className="text-[10px] font-display font-bold text-primary whitespace-nowrap">
                  {thimphu.name}
                </span>
              </div>
            </div>
          </div>

          {/* Entry Point Markers */}
          {entryPoints.map((point) => (
            <button
              type="button"
              key={point.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              style={{ left: point.x, top: point.y }}
              onMouseEnter={() => setActivePoint(point.name)}
              onMouseLeave={() => setActivePoint(null)}
              onFocus={() => setActivePoint(point.name)}
              onBlur={() => setActivePoint(null)}
            >
              <div className="relative group/pin cursor-pointer">
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-secondary/30 rounded-full scale-150 animate-pulse" />

                {/* Pin */}
                <div
                  className={cn(
                    "relative bg-secondary text-primary-foreground p-2 rounded-full shadow-xl border-2 border-white transition-transform duration-300",
                    activePoint === point.name
                      ? "scale-125 rotate-12"
                      : "group-hover:scale-110",
                  )}
                >
                  <MapPin size={18} fill="currentColor" />
                </div>

                {/* Tooltip / Info Card */}
                <div
                  className={cn(
                    "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 transition-all duration-300 pointer-events-none text-left",
                    activePoint === point.name
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible",
                  )}
                >
                  <div className="bg-background/95 backdrop-blur-md border border-border rounded-sm shadow-2xl p-3 overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                    <h5 className="font-display text-xs font-bold text-primary mb-2 uppercase tracking-tight">
                      {point.name}
                    </h5>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Ruler size={12} className="text-secondary shrink-0" />
                        <span className="text-[10px] font-body text-foreground/80 font-medium">
                          {point.distance} to Thimphu
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car size={12} className="text-secondary shrink-0" />
                        <span className="text-[10px] font-body text-foreground/80 font-medium">
                          {point.time} travel
                        </span>
                      </div>
                      <p className="text-[9px] font-body text-muted-foreground leading-relaxed pt-1 border-t border-border/50">
                        {point.description}
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 mx-auto -mt-1 shadow-sm" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
