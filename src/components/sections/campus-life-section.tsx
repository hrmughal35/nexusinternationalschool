"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/site";

export function CampusLifeSection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    if (activeImage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <section id="campus-life" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Campus Life"
          title="A living campus culture filled with creativity, sport, discovery, and belonging."
          description="From performance stages to innovation labs and wellness spaces, every corner of Nexus is designed to make learning feel vibrant, social, and emotionally memorable."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-[2rem] border border-[#0B1D3A]/10 bg-white text-left shadow-[0_10px_25px_rgba(11,29,58,0.06)] outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60"
            >
              <div className="relative min-h-[260px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover transition duration-700 will-change-transform group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,29,58,0.55))] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 rounded-full border border-[#0B1D3A]/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#0B1D3A] opacity-0 transition duration-300 group-hover:opacity-100">
                  Campus Moment
                </div>

                <div className="absolute right-4 bottom-4 rounded-full bg-white/90 p-3 text-[#0B1D3A] opacity-0 transition duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0B1D3A]/80 p-4 backdrop-blur-sm">
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-10 rounded-full bg-white p-3 text-[#0B1D3A] shadow-[0_12px_30px_rgba(11,29,58,0.18)]"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#0B1D3A]/10 bg-white shadow-2xl">
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                width={1600}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="100vw"
              />
              <div className="border-t border-[#0B1D3A]/10 bg-white px-6 py-5">
                <p className="text-base font-semibold text-[#0B1D3A]">
                  {galleryImages[activeImage].alt}
                </p>
              </div>
            </div>
        </div>
      ) : null}
    </section>
  );
}
