import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="group relative block rounded-[1.85rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
      {/* Outer ambient glow (sutil) */}
      <motion.div
        aria-hidden
        className="absolute -inset-3 rounded-[2.2rem] blur-2xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 40% 20%, rgba(56,189,248,.38), rgba(2,132,199,.12), transparent 60%)",
        }}
        animate={{
          opacity: [0.25, 0.55, 0.25],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Device frame */}
      <div
        className="
          relative mx-auto w-[200px] md:w-[220px] aspect-[9/19]
          rounded-[1.85rem]
          overflow-hidden
          shadow-[0_30px_90px_rgba(0,0,0,0.55)]
        "
      >
        {/* Metal body */}
        <div className="absolute inset-0 rounded-[1.85rem] bg-gradient-to-b from-slate-700/50 via-slate-900 to-black" />

        {/* Premium edge highlight */}
        <div className="absolute inset-0 rounded-[1.85rem] ring-1 ring-white/12" />
        <div className="absolute inset-[1px] rounded-[1.78rem] ring-1 ring-sky-300/10" />

        {/* Soft vignette / depth */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.55),_transparent_55%)]" />

        {/* Inner bezel */}
        <div className="absolute inset-[6px] rounded-[1.55rem] bg-black overflow-hidden">
          {/* Inner ring + inner shadow */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.55rem] ring-1 ring-white/8" />
          <div className="pointer-events-none absolute inset-0 rounded-[1.55rem] shadow-[inset_0_0_30px_rgba(0,0,0,0.55)]" />

          {/* Dynamic island / notch */}
          <div className="absolute left-1/2 top-1.5 -translate-x-1/2 z-20">
            <div className="h-4 w-24 rounded-full bg-slate-900/95 border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.6)]" />
            {/* Tiny highlight line */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-70" />
          </div>

          {/* Screen */}
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority={priority}
          />

          {/* Screen gloss (static) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-transparent mix-blend-overlay" />

          {/* Moving sheen (premium) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2
                       bg-gradient-to-r from-transparent via-white/18 to-transparent"
            style={{ transform: "skewX(-20deg)" }}
            animate={{ x: ["-30%", "230%"] }}
            transition={{
              duration: 3.0,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2.4,
            }}
          />

          {/* Subtle noise (banding killer) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Outer glass reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] bg-gradient-to-b from-white/6 to-transparent mix-blend-overlay" />
      </div>
    </div>
  );
}