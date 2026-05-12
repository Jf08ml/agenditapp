"use client";

import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

const steps = [
  {
    src: "/screenshots/reserva-paso-1-mockup.png",
    alt: "Paso 1: Selecciona servicios y trabajador",
    title: "Elige servicio y profesional",
    desc: "El cliente selecciona uno o varios servicios y su profesional favorito, o deja que el sistema asigne el disponible.",
  },
  {
    src: "/screenshots/reserva-paso-2-mockup.png",
    alt: "Paso 2: Selecciona fecha y hora",
    title: "Escoge fecha y horario",
    desc: "Ve horarios disponibles en tiempo real por trabajador o de todo el equipo, incluso en días distintos si tiene varios servicios.",
  },
  {
    src: "/screenshots/reserva-paso-3-mockup.png",
    alt: "Paso 3: Resumen de la reserva",
    title: "Confirma el resumen",
    desc: "El cliente revisa servicios, profesional, fecha, hora y precio antes de confirmar. Todo en un solo vistazo.",
  },
  {
    src: "/screenshots/reserva-paso-4-mockup.png",
    alt: "Paso 4: Confirmación automática o manual",
    title: "Cita confirmada al instante",
    desc: "La reserva se confirma automáticamente o pasa a aprobación según tu configuración. WhatsApp notifica al cliente.",
  },
];

const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: "24/7 disponible",
    sub: "Reservas sin horario de atención",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="7" cy="13" r="1" fill="currentColor"/>
        <circle cx="11" cy="13" r="1" fill="currentColor"/>
      </svg>
    ),
    label: "Sin apps adicionales",
    sub: "Solo un enlace que puedes compartir",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 20l3.5-3.5M13 3l6 6-10 10L3 13l10-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: "Confirmación automática",
    sub: "O por aprobación manual, tú eliges",
  },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const mockupVariants = {
  enter: { opacity: 0, x: 18, scale: 0.97 },
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: easeOut } },
  exit: { opacity: 0, x: -18, scale: 0.97, transition: { duration: 0.25 } },
};

export default function Reserva() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const AUTOPLAY_MS = 3500;

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActive((a) => (a + 1) % steps.length);
    }, AUTOPLAY_MS);
  };

  const pick = (i: number) => {
    setActive(i);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active]);

  const [open, setOpen] = useState(false);
  const [lightSrc, setLightSrc] = useState<string | null>(null);
  const [lightAlt, setLightAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setLightSrc(s);
    setLightAlt(a);
    setOpen(true);
  };

  return (
    <section id="reserva" className="py-24 sm:py-28 border-t border-b border-[#0F172A]/6 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            Así de simple
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            Tus clientes reservan en{" "}
            <span style={{ color: "#1D4ED8" }}>4 pasos.</span>
          </h2>
          <p className="mt-4 text-[17px] text-[#64748B] leading-relaxed">
            Sin descargar apps. Sin formularios largos. Solo un enlace que compartes
            por WhatsApp, Instagram o Google.
          </p>
        </motion.div>

        {/* ── Main layout: stepper + mockup ── */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Left: step list */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute left-[19px] top-10 bottom-10 w-px hidden sm:block"
                style={{ background: "linear-gradient(to bottom, var(--brand), color-mix(in srgb, var(--brand) 15%, transparent))" }}
              />

              <div className="flex flex-col gap-0">
                {steps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      className="group relative flex gap-5 text-left py-5 pr-4 transition-all duration-200 focus:outline-none"
                    >
                      {/* Step circle */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 z-10"
                        style={{
                          background: isActive ? "var(--brand)" : "var(--bg-card)",
                          borderColor: isActive ? "var(--brand)" : "color-mix(in srgb, var(--brand) 25%, transparent)",
                          color: isActive ? "#fff" : "var(--brand)",
                          boxShadow: isActive ? "0 0 0 4px color-mix(in srgb, var(--brand) 15%, transparent)" : "none",
                        }}
                      >
                        {isActive ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l4 4 6-6" />
                          </svg>
                        ) : (
                          i + 1
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex-1 pt-1.5">
                        <p
                          className="text-sm font-semibold transition-colors duration-200 leading-tight mb-1"
                          style={{ color: isActive ? "var(--text-heading)" : "var(--text-muted)" }}
                        >
                          {step.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed transition-all duration-300"
                          style={{
                            color: isActive ? "var(--text-body)" : "transparent",
                            maxHeight: isActive ? "120px" : "0px",
                            overflow: "hidden",
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile: dots */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-brand" : "w-2 h-2 bg-brand/25"}`}
                />
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[240px] sm:w-[270px]">
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 -z-10 scale-110"
                style={{ background: "var(--brand)" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={mockupVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.button
                    onClick={() => openLightbox(steps[active].src, steps[active].alt)}
                    className="w-full text-left"
                    aria-label={`Ampliar: ${steps[active].alt}`}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    <PhoneMockup
                      src={steps[active].src}
                      alt={steps[active].alt}
                      priority={active === 0}
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Step pill overlay */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand text-white text-[11px] font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  Paso {active + 1} de {steps.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Highlights row ── */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-bg-card rounded-[16px] px-5 py-5 border border-brand/10"
              style={{ boxShadow: "var(--shadow-card)" }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center text-brand"
                style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
              >
                {h.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">{h.label}</p>
                <p className="text-xs text-muted mt-0.5 leading-snug">{h.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ImageLightbox
        src={lightSrc}
        alt={lightAlt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
