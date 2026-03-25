import { MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1D3A] shadow-[0_12px_30px_rgba(212,175,55,0.28)] transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
