import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description:
    "Book a personalized campus visit, connect with admissions, and discover the Nexus International School experience.",
};

const contactCards = [
  { icon: PhoneCall, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MapPin, label: "Campus", value: siteConfig.address },
  { icon: CalendarDays, label: "Visits", value: "Mon-Fri, 8:00 AM to 4:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="px-4 pt-32 pb-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact Nexus"
          title="Schedule the visit that makes everything click."
          description="Meet our admissions team, explore the campus in person, and see why families leave Nexus feeling inspired, reassured, and excited for what comes next."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#0B1D3A] p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                    {card.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#0B1D3A]">{card.value}</p>
                </div>
              );
            })}
          </div>

          <div id="apply" className="space-y-6">
            <ContactForm />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <iframe
                title="Nexus International School location"
                src="https://www.google.com/maps?q=Education%20City%20Doha&z=14&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
