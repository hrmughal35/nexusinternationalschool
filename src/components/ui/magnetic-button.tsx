import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-200 hover:-translate-y-0.5",
        variant === "primary"
          ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B1D3A] shadow-[0_10px_30px_rgba(212,175,55,0.22)]"
          : "border-[#0B1D3A]/20 bg-white text-[#0B1D3A] shadow-[0_8px_24px_rgba(11,29,58,0.10)]",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
