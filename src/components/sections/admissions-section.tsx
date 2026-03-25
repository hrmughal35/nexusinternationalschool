import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { admissionsSteps, feeHighlights } from "@/data/site";

export function AdmissionsSection() {
  return (
    <section id="admissions" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Admissions"
          title="An elevated admissions journey that feels warm, personal, and beautifully guided."
          description="We make the path from first enquiry to enrollment seamless for families, with attentive support and transparent communication at every stage."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="absolute top-10 bottom-10 left-[1.45rem] w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.2),rgba(11,29,58,0.35),rgba(11,29,58,0.12))] sm:left-[1.7rem]" />

            <div className="space-y-6">
              {admissionsSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-[1.75rem] border border-slate-100 bg-slate-50 p-5 pl-14"
                >
                  <span className="absolute top-6 left-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#0B1D3A]">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0B1D3A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#0B1D3A]/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Fee Structure
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#0B1D3A]">
                Flexible, transparent, and premium by design.
              </h3>
              <div className="mt-6 space-y-4">
                {feeHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[#0B1D3A]/10 bg-white px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-[#0B1D3A]/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#0B1D3A]/10 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <p className="text-sm leading-8 text-[#0B1D3A]/75">
                Schedule your personalized visit to explore classrooms, speak
                with advisors, and see how Nexus can shape your child&apos;s future.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <MagneticButton href="/contact">Apply Now</MagneticButton>
                <MagneticButton href="/contact" variant="secondary">
                  Speak to Admissions
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
