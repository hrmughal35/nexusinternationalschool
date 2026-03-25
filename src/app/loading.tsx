export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        <div className="absolute h-28 w-28 rounded-full border border-[#D4AF37]/25 animate-ping" />
        <div className="absolute h-20 w-20 rounded-full border border-[#D4AF37]/45" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-semibold tracking-[0.32em] text-[#0B1D3A] shadow-[0_0_40px_rgba(212,175,55,0.25)]">
          NX
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.35em] text-[#0B1D3A]/60">
          Loading the Nexus experience
        </p>
      </div>
    </div>
  );
}
