import Image from "next/image";
import { Sparkles } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28">
      <div className="relative mx-auto grid max-w-7xl items-start gap-8 lg:min-h-[82vh] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="order-2 pt-4 lg:order-1 lg:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles className="h-4 w-4" />
            A modern and welcoming school
          </div>

          <h1 className="mt-6 max-w-4xl text-[3.9rem] leading-[0.88] font-medium text-[#0B1D3A] [font-family:var(--font-cormorant)] sm:text-[5.1rem] lg:text-[6.7rem]">
            Welcome to
            <span className="block">Nexus</span>
            <span className="block">International School</span>
          </h1>

          <div className="mt-5 flex items-start gap-4">
            <div className="pt-1 text-4xl leading-none text-[#D4AF37]">↷</div>
            <p className="max-w-xs text-[1.9rem] leading-8 text-[#0B1D3A]/80 italic [font-family:var(--font-cormorant)]">
              Where future leaders lead the way.
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-[2rem] leading-[1.18] text-[#0B1D3A]/60 [font-family:var(--font-cormorant)] sm:text-[2.4rem]">
            A modern and welcoming school where children grow with confidence,
            curiosity, and global perspective.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact">Book a Visit</MagneticButton>
            <MagneticButton href="/#admissions" variant="secondary">
              Apply Now
            </MagneticButton>
          </div>
        </div>

        <div className="order-1 relative min-h-[20rem] lg:order-2 lg:min-h-[38rem]">
          <div className="relative mt-1 mx-auto h-[24rem] w-full max-w-[26rem] sm:h-[32rem] sm:max-w-[32rem] lg:mt-6 lg:mr-0 lg:h-[40rem] lg:max-w-[46rem]">
            <Image
              src="https://cdn.prod.website-files.com/65b27a2489c688f4cf4d8e5b/65b27a2489c688f4cf4d8e7e_kid-p-800.png"
              alt="Premium illustrated Nexus student"
              fill
              priority
              className="z-20 object-contain object-center drop-shadow-[0_24px_35px_rgba(15,23,42,0.12)]"
              sizes="(max-width: 640px) 24rem, (max-width: 1024px) 32rem, 46rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
