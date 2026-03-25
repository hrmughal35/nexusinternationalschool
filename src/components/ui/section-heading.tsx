type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <span className="inline-flex items-center rounded-full border border-[#D4AF37]/45 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1D3A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#0B1D3A]/75 sm:text-lg">{description}</p>
    </div>
  );
}
