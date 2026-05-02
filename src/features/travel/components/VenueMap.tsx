"use client";

export function VenueMap() {
  return (
    <div className="rounded-sm border border-border overflow-hidden">
      <div className="bg-muted/40 px-4 py-3 border-b border-border">
        <p className="font-body text-sm font-semibold text-primary">
          Royal Institute of Management (RIM)
        </p>
        <p className="font-body text-xs text-muted-foreground">Simtokha, Thimphu, Bhutan · 27.4305° N, 89.6780° E</p>
      </div>
      <div className="h-80">
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
      </div>
    </div>
  );
}
