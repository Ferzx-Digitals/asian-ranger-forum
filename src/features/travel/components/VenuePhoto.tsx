import Image from "next/image";

interface VenuePhotoProps {
  src?: string;
}

export function VenuePhoto({
  src = "/images/rim-campus.png",
}: VenuePhotoProps) {
  return (
    <figure className="relative w-full aspect-[16/6] overflow-hidden mx-auto">
      <Image
        src={src}
        alt="Royal University of Bhutan Convention Center in Lower Motithang, Thimphu"
        fill
        sizes="(max-width: 896px) 100vw, 896px"
        className="w-full h-full object-cover object-center scale-110"
      />
    </figure>
  );
}
