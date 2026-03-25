"use client";

import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Why parents leave their first visit feeling certain."
          description="Families consistently describe Nexus as a place that feels aspirational, deeply caring, and unmistakably world-class from the moment they walk in."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
              Parent Satisfaction
            </p>
            <div className="mt-6 flex items-center gap-2 text-[#D4AF37]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-4xl font-semibold text-[#0B1D3A]">4.9/5</p>
            <p className="mt-4 text-sm leading-7 text-[#0B1D3A]/75">
              Parents value our culture of care, academic standards, transparent
              communication, and the confidence their children develop every day.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#0B1D3A]/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="rounded-[1.75rem] border border-white bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1D3A] text-sm font-semibold text-white">
                    {testimonials[activeIndex].name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#0B1D3A]">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-[#0B1D3A]/65">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-[#D4AF37]/55" />
              </div>
              <p className="mt-8 text-xl leading-9 text-[#0B1D3A]/90">
                {testimonials[activeIndex].quote}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "w-10 bg-[#D4AF37]"
                      : "w-2.5 bg-[#0B1D3A]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
