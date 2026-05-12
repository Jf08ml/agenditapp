"use client";

import { useState } from "react";
import { motion, easeOut, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function fmt(n: number) {
  return "$" + n.toLocaleString("es-CO");
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  display,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-[12px] font-semibold uppercase tracking-widest text-[#64748B]">
          {label}
        </span>
        <span className="text-[22px] font-extrabold text-[#0F172A] tracking-tight tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="roi-slider w-full h-2 rounded-full outline-none cursor-pointer appearance-none"
        style={{
          background: `linear-gradient(90deg, #1D4ED8 0%, #1D4ED8 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        }}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [ticket, setTicket] = useState(40000);
  const [noshows, setNoshows] = useState(12);
  const recovered = Math.round(ticket * noshows * 0.7);

  return (
    <section className="py-24 sm:py-28" style={{ background: "linear-gradient(180deg, var(--bg-main) 0%, oklch(0.97 0.04 60) 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            Calcula tu retorno
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            Se paga solo con{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              1 cita recuperada al mes.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-[17px] text-[#64748B] leading-relaxed">
            Promedio: nuestros clientes recuperan entre 8 y 20 citas perdidas al mes
            gracias a recordatorios automáticos.
          </p>
        </motion.div>

        {/* ── Calculator card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="roi-grid rounded-[24px] border border-[#E2E8F0] bg-white p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ boxShadow: "0 4px 32px rgba(15,23,42,0.08)" }}
        >
          {/* Sliders */}
          <div className="flex flex-col gap-8">
            <Slider
              label="Ticket promedio por cita"
              value={ticket}
              setValue={setTicket}
              min={10000}
              max={150000}
              step={5000}
              display={fmt(ticket)}
            />
            <Slider
              label="Inasistencias por mes hoy"
              value={noshows}
              setValue={setNoshows}
              min={1}
              max={40}
              step={1}
              display={String(noshows)}
            />
          </div>

          {/* Result card */}
          <div
            className="relative rounded-[18px] p-6 sm:p-8 overflow-hidden text-white"
            style={{
              background: "linear-gradient(135deg, #1D4ED8 0%, oklch(0.45 0.18 280) 100%)",
            }}
          >
            {/* Decorative circle */}
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />

            <div className="relative">
              <p className="text-[13px] font-semibold uppercase tracking-widest opacity-85">
                Recuperas hasta
              </p>
              <p
                className="text-[clamp(40px,6vw,64px)] font-extrabold tracking-tight leading-none my-2 tabular-nums"
              >
                {fmt(recovered)}
              </p>
              <p className="text-sm opacity-85">al mes</p>

              <div
                className="mt-6 rounded-[10px] px-4 py-3"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <p className="text-[13px] font-bold">Tu inversión se recupera con menos de 1 cita.</p>
                <p className="text-[12px] opacity-80 mt-1">vs $20 USD del plan Esencial</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .roi-slider::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          border: 3px solid #1D4ED8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(29,78,216,0.4);
        }
        .roi-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          border: 3px solid #1D4ED8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(29,78,216,0.4);
        }
      `}</style>
    </section>
  );
}
