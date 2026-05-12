"use client";

import { motion } from "framer-motion";

const COLS = [
  {
    title: "Sin AgenditApp",
    tone: "bad" as const,
    items: [
      { t: '"¿A qué hora era mi cita?"',      s: "Respondes los mismos chats todos los días." },
      { t: "Cliente que no llega",             s: "Pierdes el cupo y a otro cliente que sí quería." },
      { t: "Agenda en libreta",                s: "Cruces de horario, errores y caos los sábados." },
      { t: "Trabajas hasta tarde",             s: "Contestando mensajes en vez de descansar." },
      { t: "No sabes cuánto generas",          s: "Sin reportes, sin claridad, sin control." },
    ],
  },
  {
    title: "Con AgenditApp",
    tone: "good" as const,
    items: [
      { t: "Reservan solas, 24/7",             s: "Tu enlace trabaja mientras duermes." },
      { t: "Recordatorios automáticos",        s: "Hasta 70% menos ausencias comprobado." },
      { t: "Agenda visual en la nube",         s: "Sin cruces. Desde cualquier dispositivo." },
      { t: "WhatsApp en piloto automático",    s: "El sistema confirma, tú atiendes." },
      { t: "Reportes claros",                  s: "Sabes qué servicio, día y empleado generan más." },
    ],
  },
];

function XIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Problem() {
  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            El verdadero costo del WhatsApp manual
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-[17px] text-[#64748B] leading-relaxed">
            Cada uno de estos momentos te cuesta tiempo, ingresos y energía.
            AgenditApp los resuelve antes de que sucedan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLS.map((col, ci) => {
            const isBad = col.tone === "bad";
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: ci * 0.1 }}
                className="rounded-[20px] p-8 relative"
                style={{
                  background: isBad
                    ? "white"
                    : "linear-gradient(160deg, white 0%, rgba(29,78,216,0.04) 100%)",
                  border: isBad
                    ? "1px solid rgba(15,23,42,0.08)"
                    : "1px solid rgba(29,78,216,0.25)",
                  boxShadow: isBad
                    ? "0 4px 16px rgba(0,0,0,0.04)"
                    : "0 8px 32px rgba(29,78,216,0.1)",
                }}
              >
                {/* Column header */}
                <div className="flex items-center gap-3 mb-7">
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isBad ? "#FEE4E4" : "#1D4ED8",
                      color: isBad ? "#DC2626" : "white",
                    }}
                  >
                    {isBad ? (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0F172A] m-0">{col.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-5 m-0 p-0 list-none">
                  {col.items.map((item, i) => (
                    <li key={i} className="grid gap-3" style={{ gridTemplateColumns: "20px 1fr" }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                        style={{
                          background: isBad
                            ? "#FEE4E4"
                            : "rgba(37,211,102,0.15)",
                          color: isBad ? "#DC2626" : "var(--wa-deep)",
                        }}
                      >
                        {isBad ? <XIcon /> : <CheckIcon />}
                      </span>
                      <div>
                        <p
                          className="text-[15px] font-semibold m-0 leading-snug"
                          style={{ color: isBad ? "#475569" : "#0F172A" }}
                        >
                          {item.t}
                        </p>
                        <p className="text-[13px] text-[#64748B] mt-1 m-0">{item.s}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
