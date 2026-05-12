"use client";

import { motion } from "framer-motion";

const STATS = [
  { n: "200+", l: "negocios activos" },
  { n: "60%",  l: "menos inasistencias" },
  { n: "24/7", l: "reservas online" },
  { n: "4.9★", l: "satisfacción" },
];

const LOGOS = [
  "Estudio Rosa",
  "Barbería El Don",
  "Spa Lumen",
  "Lashes by Vale",
  "Studio Pilates",
  "Dr. Marín",
  "Alpha Man Atelier",
  "CAPI Apoyo Infantil",
];

export default function ProofBar() {
  return (
    <section className="border-t border-b border-[#0F172A]/8 bg-white py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* ── Stats: 2×2 en mobile, fila en lg ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-10 lg:gap-x-14">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Número */}
              <span
                className="text-[32px] sm:text-[36px] font-extrabold leading-none tracking-tight"
                style={{ color: "#1e3a8a" }}
              >
                {s.n}
              </span>
              {/* Label */}
              <span className="mt-1.5 text-[11px] sm:text-[12px] text-[#64748B] uppercase tracking-widest font-semibold leading-tight">
                {s.l}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mt-8 sm:mt-10 border-t border-[#0F172A]/6" />

        {/* ── Ticker de logos ── */}
        <div className="mt-6 sm:mt-8">
          <p className="text-center text-[10px] sm:text-[11px] text-[#94A3B8] uppercase tracking-widest font-semibold mb-4">
            Confían en AgenditApp
          </p>
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="flex gap-10 sm:gap-14 whitespace-nowrap"
              style={{ animation: "ticker 28s linear infinite" }}
            >
              {[...LOGOS, ...LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="text-[15px] sm:text-[17px] font-semibold text-[#94A3B8] select-none"
                  style={
                    i % 2 === 1
                      ? {
                          fontFamily:
                            "var(--font-instrument-serif), 'Georgia', serif",
                          fontStyle: "italic",
                        }
                      : undefined
                  }
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
