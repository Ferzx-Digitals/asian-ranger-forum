"use client";

export function VenueMap() {
  return (
    <div className="rounded-sm border border-border overflow-hidden">
      <div className="bg-muted/40 px-4 py-3 border-b border-border">
        <p className="font-body text-sm font-semibold text-primary">
          Royal Institute of Management (RIM)
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Simtokha, Thimphu, Bhutan · 27.4305° N, 89.6780° E
        </p>
      </div>
      <div className="h-80">
        <iframe
          src="https://www.google.com/maps?q=Royal+Institute+of+Management,+Simtokha,+Thimphu,+Bhutan&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal Institute of Management, Simtokha, Thimphu"
        />
      </div>
    </div>
  );
}
