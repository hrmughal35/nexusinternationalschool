"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200/90 overflow-hidden shadow-sm">
            <Image
              src="/nexus-logo-tight.png"
              alt="Nexus International School logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0B1D3A]">
              Nexus
            </p>
            <p className="text-xs text-[#0B1D3A]/65">International School</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === "/contact" && link.href === "/contact";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm text-[#0B1D3A]/75 transition hover:text-[#0B1D3A]",
                  active && "text-[#D4AF37]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/contact">Book a Visit</MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex rounded-full border border-[#0B1D3A]/15 bg-white p-2 text-[#0B1D3A] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[#0B1D3A]/15 bg-white/95 px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#0B1D3A]/80 transition hover:text-[#0B1D3A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <MagneticButton href="/contact" className="mt-5 w-full justify-center">
            Book a Visit
          </MagneticButton>
        </div>
      ) : null}
    </header>
  );
}
