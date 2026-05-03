interface VenuePhotoProps {
  src?: string;
}

export function VenuePhoto({
  src = "/images/rim-campus.png",
}: VenuePhotoProps) {
  return (
    <figure className="w-full aspect-[16/6] overflow-hidden mx-auto">
      <img
        src={src}
        alt="Royal Institute of Management (RIM) campus, Simtokha, Thimphu"
        className="w-full h-full object-cover object-center scale-110"
        loading="lazy"
      />
    </figure>
  );
}
