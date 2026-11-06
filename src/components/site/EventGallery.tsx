"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type EventPhoto = {
  src: string;
  alt: string;
};

export function EventGallery({
  photos,
  label,
}: {
  photos: EventPhoto[];
  label: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[5/4] cursor-pointer overflow-hidden rounded-2xl border border-spruce/10 bg-bone"
            aria-label={`${label}: open photo ${index + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-spruce/0 transition-colors group-hover:bg-spruce/20" aria-hidden />
            <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-cream/85 text-spruce opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <Expand className="size-3.5" aria-hidden />
            </span>
          </button>
        ))}
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl bg-spruce/95 p-2 sm:p-3">
          {active ? (
            <figure>
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 96vw, 900px"
                  className="object-contain"
                />
              </div>
              <DialogTitle className="sr-only">{active.alt}</DialogTitle>
              <figcaption className="px-2 py-3 text-center text-[0.78rem] text-cream/70">
                {active.alt}
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
