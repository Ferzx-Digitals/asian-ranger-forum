"use client";

export function VenueMap() {
  return (
    <div className="rounded-sm border border-border overflow-hidden">
      <div className="bg-muted/40 px-4 py-3 border-b border-border">
        <p className="font-body text-sm font-semibold text-primary">
          Royal University of Bhutan Convention Center
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Lower Motithang, Thimphu, Bhutan · 27.4785° N, 89.6285° E
        </p>
      </div>
      <div className="h-80">
        <iframe
          src="https://www.google.com/maps?q=Royal+University+of+Bhutan+Convention+Center,+Lower+Motithang,+Thimphu,+Bhutan&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal University of Bhutan Convention Center, Lower Motithang, Thimphu"
        />
      </div>
    </div>
  );
}
