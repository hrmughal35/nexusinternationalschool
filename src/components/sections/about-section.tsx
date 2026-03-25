import Image from "next/image";
import { Compass, Lightbulb, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { visionMission } from "@/data/site";

const icons = [Compass, Lightbulb, ShieldCheck];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Nexus"
          title="A school story built around aspiration, belonging, and global excellence."
          description="Nexus International School was envisioned as a learning environment where design, technology, and human connection work together to unlock the highest potential in every child."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[#D4AF37]">
              Our Story
            </p>
            <h3 className="mt-5 text-3xl font-semibold text-[#0B1D3A]">
              Crafted for families seeking more than an ordinary school.
            </h3>
            <p className="mt-5 text-base leading-8 text-[#0B1D3A]/75">
              Every detail at Nexus is intentionally designed to elevate the
              student journey, from serene early years spaces to advanced
              science labs and future-facing secondary pathways. Families feel a
              sense of confidence the moment they arrive because the campus
              reflects ambition, warmth, and possibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {visionMission.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="inline-flex rounded-2xl bg-[#0B1D3A] p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-[#0B1D3A]">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#0B1D3A]/75">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <div className="relative h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="Principal at Nexus International School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                  Principal&apos;s Message
                </p>
                <p className="mt-4 text-xl font-semibold text-[#0B1D3A]">
                  &quot;We nurture children who are intellectually alive, emotionally grounded, and ready to lead with purpose.&quot;
                </p>
                <p className="mt-4 text-sm leading-7 text-[#0B1D3A]/75">
                  At Nexus, achievement is not measured by grades alone. It is
                  seen in confidence, empathy, curiosity, and the courage to
                  contribute meaningfully to the world.
                </p>
                <p className="mt-5 text-sm font-semibold text-[#0B1D3A]">
                  Ms. Sana Ahmed
                </p>
                <p className="text-sm text-[#0B1D3A]/65">Founding Principal</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
