export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl animate-blob"
           style={{ background: "radial-gradient(circle at 30% 30%, #2563EB, transparent 60%)" }} />
      <div className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl animate-blob"
           style={{ background: "radial-gradient(circle at 70% 30%, #06B6D4, transparent 60%)", animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl animate-blob"
           style={{ background: "radial-gradient(circle at 50% 50%, #8B5CF6, transparent 60%)", animationDelay: "-12s" }} />
    </div>
  );
}

export function GridBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10"
         style={{
           backgroundImage:
             "linear-gradient(to right, color-mix(in oklab, #2563EB 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, #2563EB 8%, transparent) 1px, transparent 1px)",
           backgroundSize: "56px 56px",
           maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
         }} />
  );
}