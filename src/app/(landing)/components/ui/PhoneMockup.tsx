import Image from "next/image";
export function PhoneMockup({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative block rounded-[1.6rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70">
      {/* Glow */}
      <div className="absolute -inset-2 rounded-[2rem] bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Teléfono */}
      <div className="relative mx-auto w-[200px] md:w-[220px] aspect-[9/19] rounded-[1.6rem] border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl overflow-hidden">
        {/* Bisel */}
        <div className="absolute inset-[5px] rounded-[1.3rem] border border-slate-800/70 overflow-hidden bg-black">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-24 rounded-b-2xl bg-slate-900/90 border-x border-b border-slate-800/80 z-10" />
          {/* Pantalla */}
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 220px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.012]"
            priority={priority}
          />
        </div>
        {/* Reflejo */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay" />
      </div>
    </div>
  );
}
