"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const sectores = [
  {
    emoji: "💅",
    name: "Salones de belleza y uñas",
    description:
      "Gestiona citas de corte, color, tratamiento y manicure. Recordatorios automáticos para reducir ausencias y fidelizar a tus clientes.",
    link: "/sectores/salones-belleza",
  },
  {
    emoji: "💈",
    name: "Barberías y barber shops",
    description:
      "Controla la agenda de tus barberos, acepta reservas en línea y envía confirmaciones automáticas por WhatsApp sin esfuerzo.",
    link: "/sectores/barberias",
  },
  {
    emoji: "💆‍♀️",
    name: "Spas, cabinas y masajes",
    description:
      "Organiza servicios de relajación y tratamientos. Tus clientes reservan desde su celular sin necesidad de llamar.",
    link: "/sectores/spas",
  },
  {
    emoji: "🩺",
    name: "Consultorios y clínicas",
    description:
      "Agenda citas médicas con confirmación automática, historial de pacientes y recordatorios 24 horas antes de cada cita.",
    link: "/sectores/consultorios",
  },
  {
    emoji: "🧴",
    name: "Lash & brow studios",
    description:
      "Administra tu agenda de extensiones, lifting y diseño de cejas con duración exacta por servicio y gestión de estilistas.",
    link: "/sectores/lash-brow",
  },
  {
    emoji: "🏋️‍♀️",
    name: "Entrenadores y gimnasios",
    description:
      "Organiza sesiones personales, clases grupales y seguimiento de clientes. Control de asistencias y pagos desde un solo panel.",
    link: "/sectores/gimnasios",
  },
  {
    emoji: "🦷",
    name: "Odontólogos y dentistas",
    description:
      "Gestiona citas dentales, tratamientos y seguimientos. Reduce el ausentismo con recordatorios automáticos por WhatsApp.",
    link: "/sectores/odontologia",
  },
  {
    emoji: "🧠",
    name: "Psicólogos y terapeutas",
    description:
      "Agenda sesiones de terapia con total privacidad, confirmaciones automáticas y gestión de horarios completamente flexible.",
    link: "/sectores/psicologia",
  },
];

const features = [
  { emoji: "📅", label: "Agenda personalizada por servicio" },
  { emoji: "💬", label: "Recordatorios automáticos" },
  { emoji: "👥", label: "Gestión de equipo" },
  { emoji: "🛍️", label: "Catálogo de servicios" },
  { emoji: "🌐", label: "Página web incluida" },
  { emoji: "💳", label: "Control de pagos" },
];

const cardVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: easeOut } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.96, transition: { duration: 0.3 } }),
};

const AUTOPLAY_MS = 4000;

export default function Sectores() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };
  const prev = () => { go((active - 1 + sectores.length) % sectores.length); resetTimer(); };
  const next = () => { go((active + 1) % sectores.length); resetTimer(); };

  // Autoplay — se pausa al interactuar y se reanuda
  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDir(1);
      setActive((a) => (a + 1) % sectores.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active]);

  const prevIdx = (active - 1 + sectores.length) % sectores.length;
  const nextIdx = (active + 1) % sectores.length;

  return (
    <section id="sectores" className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Sectores
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            La agenda digital que se adapta al ritmo de tu industria
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            No importa si tienes una barbería, un consultorio médico o clases
            particulares. AgenditApp se moldea a tu negocio para ayudarte a
            escalar tus ingresos sin límites.
          </p>
        </motion.div>
      </div>

      {/* ── Carousel ── */}
      <div className="relative flex items-stretch justify-center gap-4 px-4">

        {/* Card izquierda — solo desktop */}
        <div
          className="hidden lg:block w-[260px] xl:w-[300px] flex-shrink-0 cursor-pointer"
          onClick={prev}
        >
          <div className="h-full rounded-[20px] bg-brand/70 opacity-50 hover:opacity-60 transition-opacity overflow-hidden flex items-center justify-center">
            <span className="text-7xl select-none">{sectores[prevIdx].emoji}</span>
          </div>
        </div>

        {/* Card activa — centro */}
        <div className="w-full max-w-[700px] flex-shrink-0 min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)",
                boxShadow: "0 24px 64px color-mix(in srgb, var(--brand) 35%, transparent)",
              }}
            >
              {/* Card principal */}
              <div className="flex flex-col sm:flex-row">
                {/* Zona icono */}
                <div className="flex items-center justify-center sm:w-[220px] flex-shrink-0 bg-white/8 py-10 sm:py-0">
                  <span className="text-[90px] sm:text-[100px] leading-none select-none drop-shadow-lg">
                    {sectores[active].emoji}
                  </span>
                </div>

                {/* Zona texto */}
                <div className="flex flex-col justify-center px-8 py-8 sm:py-10 flex-1">
                  <p className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.2em] mb-2">
                    Sector
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4">
                    {sectores[active].name}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    {sectores[active].description}
                  </p>
                  <Link
                    href={sectores[active].link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all w-fit"
                  >
                    Ver más detalles
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-white/10">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-5 py-3.5 border-r border-b border-white/10 last:border-r-0"
                  >
                    <span className="text-base flex-shrink-0">{f.emoji}</span>
                    <span className="text-[11px] text-white/70 leading-tight">{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card derecha — solo desktop */}
        <div
          className="hidden lg:block w-[260px] xl:w-[300px] flex-shrink-0 cursor-pointer"
          onClick={next}
        >
          <div className="h-full rounded-[20px] bg-brand/70 opacity-50 hover:opacity-60 transition-opacity overflow-hidden flex items-center justify-center">
            <span className="text-7xl select-none">{sectores[nextIdx].emoji}</span>
          </div>
        </div>
      </div>

      {/* ── Navegación ── */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Prev */}
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-bg-card hover:bg-brand hover:text-white hover:border-brand text-brand transition-all duration-200 shadow-sm"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {sectores.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir a ${sectores[i].name}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-brand"
                  : "w-2 h-2 bg-brand/25 hover:bg-brand/50"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-bg-card hover:bg-brand hover:text-white hover:border-brand text-brand transition-all duration-200 shadow-sm"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── CTA ver todos ── */}
      <div className="mt-8 text-center">
        <Link
          href="/sectores"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-medium text-sm transition-colors duration-200 mt-2"
        >
          Ver todos los sectores
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
