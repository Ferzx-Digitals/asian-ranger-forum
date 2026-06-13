"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FieldVisitImage } from "../data";

interface FieldVisitGalleryProps {
  /** Full set of images for this site, used for lightbox navigation. */
  images: FieldVisitImage[];
  /** Subset of `images` to render as the "More photos" thumbnail strip. */
  thumbnails?: FieldVisitImage[];
  siteName: string;
}

export interface FieldVisitGalleryHandle {
  openAt: (index: number) => void;
}

export const FieldVisitGallery = forwardRef<
  FieldVisitGalleryHandle,
  FieldVisitGalleryProps
>(function FieldVisitGallery({ images, thumbnails, siteName }, ref) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useImperativeHandle(ref, () => ({
    openAt: (index: number) => setActiveIndex(index),
  }));

  if (!images.length) return null;

  const activeImage =
    activeIndex !== null ? images[activeIndex] : undefined;
  const thumbnailImages = thumbnails ?? images;

  return (
    <>
      {thumbnailImages.length > 0 && (
        <div className="mt-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            More photos
          </p>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden">
            {thumbnailImages.map((image) => {
              const index = images.indexOf(image);

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                  className="group relative block h-32 shrink-0 overflow-hidden rounded-sm border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:h-40"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 40vw, 320px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/20">
                    <Expand
                      aria-hidden="true"
                      className="h-5 w-5 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => !open && setActiveIndex(null)}
      >
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {activeImage
              ? activeImage.alt
              : `Photo from ${siteName}`}
          </DialogTitle>
          {activeImage && (
            <div className="relative w-full overflow-hidden rounded-sm bg-background">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                sizes="100vw"
                className="h-auto max-h-[85vh] w-full object-contain"
                priority
              />
              <div className="border-t border-border bg-card px-4 py-3">
                <p className="font-body text-sm text-foreground/75">
                  {activeImage.alt}
                </p>
                {activeImage.credit && (
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {activeImage.credit}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
});
