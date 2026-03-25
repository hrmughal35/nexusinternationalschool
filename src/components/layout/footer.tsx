import { Globe, Mail, MapPin, Phone, PlayCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Sparkles },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Globe },
  { label: "YouTube", href: "https://youtube.com", icon: PlayCircle },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#0B1D3A]/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-10">
        <div>
          <div className="mb-4">
            <Image
              src="/nexus-logo-tight.png"
              alt="Nexus International School crest logo"
              width={68}
              height={68}
              className="h-17 w-17 rounded-2xl object-cover ring-1 ring-slate-200/80"
            />
          </div>
          <span className="inline-flex rounded-full border border-[#D4AF37]/45 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
            Nexus International School
          </span>
          <h3 className="mt-6 text-2xl font-semibold text-[#0B1D3A]">
            Where future leaders discover who they can become.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#0B1D3A]/75">
            A premium global school experience shaped by immersive learning,
            character development, and beautifully designed spaces that make
            every day feel full of possibility.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0B1D3A]">
            Quick Links
          </h4>
          <div className="mt-5 flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#0B1D3A]/75 transition hover:text-[#0B1D3A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0B1D3A]">
            Contact
          </h4>
          <div className="mt-5 space-y-3 text-sm text-[#0B1D3A]/75">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[#D4AF37]" />
              {siteConfig.address}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#D4AF37]" />
              {siteConfig.email}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1D3A]/15 bg-white text-[#0B1D3A]/75 transition hover:border-[#D4AF37]/55 hover:text-[#0B1D3A]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-[#0B1D3A]/10 px-4 py-5 text-center text-xs text-[#0B1D3A]/60 sm:px-6 lg:px-10">
        © 2026 Nexus International School. Crafted for an immersive admissions experience. Built by{" "}
        <a
          href="https://www.linkedin.com/in/welcometohassanraza/"
          target="_blank"
          rel="noreferrer"
          className="text-[#0B1D3A] underline decoration-[#D4AF37]/60 underline-offset-4 transition hover:decoration-[#D4AF37]"
        >
          Hassan Raza
        </a>
        .
      </div>
    </footer>
  );
}
