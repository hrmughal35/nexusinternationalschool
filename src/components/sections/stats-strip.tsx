import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/data/site";

export function StatsStrip() {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
          >
            <p className="text-3xl font-semibold text-slate-900">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
