import { Baby, BookOpenText, GraduationCap, Sparkle } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/data/site";

const icons = [Baby, BookOpenText, Sparkle, GraduationCap];

export function ProgramsSection() {
  const techFeaturesByIndex = [
    [
      "Interactive phonics + early numeracy",
      "Play-based STEM discovery",
      "Digital storytelling for confident expression",
    ],
    [
      "AI-supported practice & personalized revision",
      "Robotics + maker-labs for real-world problem solving",
      "Project-based learning with creative presentations",
    ],
    [
      "Coding, design thinking, and simulation projects",
      "Collaborative innovation studios",
      "Global competency through media & language exchange",
    ],
    [
      "O-Level / Matric coaching with mentorship",
      "Academic analytics to target growth areas",
      "University readiness: research, writing, and leadership",
    ],
  ];

  return (
    <section id="programs" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Academics"
          title="Progressive pathways from pre-school discovery to O-Level and Matric excellence."
          description="Our academic framework grows with the child, combining strong fundamentals, creative confidence, and future-facing skills in beautifully structured stages."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = icons[index];
            const features = techFeaturesByIndex[index] ?? [];

            return (
              <Reveal key={program.title} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-[#0B1D3A]/10 bg-white p-6 shadow-[0_12px_35px_rgba(11,29,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_18px_50px_rgba(212,175,55,0.10)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-16 left-[-2rem] h-40 w-40 rounded-full bg-[#D4AF37]/20 blur-2xl" />
                    <div className="absolute -bottom-20 right-[-2rem] h-48 w-48 rounded-full bg-[#0B1D3A]/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-[#0B1D3A]/10 bg-[#0B1D3A] px-4 py-3 text-white">
                      <Icon className="h-5 w-5" />
                      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#D4AF37]">
                        Tech-Enabled
                      </span>
                    </div>

                    <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
                      {program.age}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#0B1D3A]">
                      {program.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#0B1D3A]/75">
                      {program.description}
                    </p>

                    {features.length ? (
                      <ul className="mt-5 space-y-2">
                        {features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#0B1D3A]/80">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
