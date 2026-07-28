"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FieldVisitImage } from "../data";

interface FieldVisitGalleryProps {
  images: FieldVisitImage[];
  siteName: string;
  activeIndex: number | null;
  onActiveIndexChange: (index: number | null) => void;
}

export function FieldVisitGallery({
  images,
  siteName,
  activeIndex,
  onActiveIndexChange,
}: FieldVisitGalleryProps) {
  if (!images.length) return null;

  const activeImage = activeIndex !== null ? images[activeIndex] : undefined;

  return (
    <Dialog
      open={activeIndex !== null}
      onOpenChange={(open) => !open && onActiveIndexChange(null)}
    >
      <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none [&>button]:right-3 [&>button]:top-3 [&>button]:rounded-full [&>button]:bg-background/90 [&>button]:p-2 [&>button]:opacity-100 [&>button]:shadow-md">
        <DialogTitle className="sr-only">
          {activeImage ? activeImage.alt : `Photo from ${siteName}`}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Enlarged field-visit photograph with its source caption and credit.
        </DialogDescription>
        {activeImage ? (
          <div className="relative w-full overflow-hidden rounded-sm bg-background">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="100vw"
              className="h-auto max-h-[85vh] w-full object-contain"
            />
            <div className="border-t border-border bg-card px-4 py-3">
              <p className="font-body text-sm font-semibold text-primary">
                {activeImage.caption}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                {activeImage.credit}
              </p>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
