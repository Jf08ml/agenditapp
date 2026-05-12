"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const cardVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: easeOut } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.97,
    transition: { duration: 0.3 },
  }),
};

const casos = [
  {
    nombre: "Estudio Rosa",
    categoria: "Salón de belleza",
    web: "estudiorosa.com.co",
    ceo: "Luisa Fernanda",
    ubicacion: "Neiva, Huila · Colombia",
    emoji: "💅",
    testimonio:
      "Desde que usamos AgenditApp, las ausencias bajaron un 60%. Mis clientes agendan solas a cualquier hora y yo puedo concentrarme en el trabajo que me apasiona. ¡Es un cambio total!",
    stat: { valor: "60%", label: "menos ausencias" },
  },
  {
    nombre: "Galaxia Glamour",
    categoria: "Beauty Salon",
    web: "galaxiaglamour.com",
    ceo: "Nataly Martinez",
    ubicacion: "Neiva, Huila · Colombia",
    emoji: "✨",
    testimonio:
      "La plataforma es súper fácil de usar y los recordatorios automáticos por WhatsApp son un hit con mis clientas. Ahora tenemos agenda llena toda la semana sin tanto esfuerzo.",
    stat: { valor: "3×", label: "más reservas online" },
  },
  {
    nombre: "Bastidas Barber Studio",
    categoria: "Barbero profesional",
    web: "bastidasbarberstudio.com",
    ceo: "Cristian Bastidas",
    ubicacion: "Pereira · Colombia",
    emoji: "💈",
    testimonio:
      "Controlo la agenda de todo el equipo desde el celular. Los clientes reservan solos, reciben confirmación y llegan puntuales. AgenditApp nos dio una imagen mucho más profesional.",
    stat: { valor: "100%", label: "de citas confirmadas" },
  },
  {
    nombre: "CAPI Apoyo Infantil",
    categoria: "Centro de apoyo terapéutico",
    web: "agenda.capiapoyoinfantil.com",
    ceo: "Dirección CAPI",
    ubicacion: "General Escobedo · México",
    emoji: "🧠",
    testimonio:
      "Manejar las sesiones de varios terapeutas era caótico. Con AgenditApp todo se organiza solo. Los padres agendan fácilmente y nosotros tenemos control total de los horarios.",
    stat: { valor: "40%", label: "menos tiempo en admin" },
  },
  {
    nombre: "Alpha Man Atelier",
    categoria: "Barbería & Grooming",
    web: "alphamanatelier.com",
    ceo: "Dirección Alpha Man",
    ubicacion: "Ciudad Quesada · Costa Rica",
    emoji: "🪒",
    testimonio:
      "Nuestros clientes valoran poder reservar desde Instagram sin llamar. La agenda siempre está actualizada y el panel nos da visibilidad de todo el negocio en tiempo real.",
    stat: { valor: "2×", label: "en clientes nuevos" },
  },
  {
    nombre: "Espacio Mosaico",
    categoria: "Centro de movimiento y bienestar",
    web: "espaciomosaico.agenditapp.com",
    ceo: "Dirección Mosaico",
    ubicacion: "Quilpué · Chile",
    emoji: "🏋️‍♀️",
    testimonio:
      "Organizar clases grupales e individuales nunca fue tan simple. AgenditApp se adapta perfecto a nuestros servicios de yoga, pilates y danza. Muy recomendado para centros de bienestar.",
    stat: { valor: "90%", label: "de satisfacción" },
  },
];

const AUTOPLAY_MS = 5000;

export default function CasosDeExito() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDir(1);
      setActive((a) => (a + 1) % casos.length);
    }, AUTOPLAY_MS);
  };

  const prev = () => {
    go((active - 1 + casos.length) % casos.length);
    resetTimer();
  };
  const next = () => {
    go((active + 1) % casos.length);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, resetTimer]);

  const caso = casos[active];

  return (
    <section id="casos-de-exito" className="py-24 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            Casos reales
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            No nos creas a nosotros.{" "}
            <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
              Escúchalos a ellas.
            </span>
          </h2>
          <p className="mt-4 text-[17px] text-[#64748B] leading-relaxed">
            Desde Colombia hasta Chile y Costa Rica, más de 200 negocios confían
            en AgenditApp para gestionar su agenda y crecer sin límites.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-bg-card hover:bg-brand hover:text-white hover:border-brand text-brand transition-all duration-200 shadow-sm -translate-x-1 md:-translate-x-5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Card */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="rounded-[24px] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)",
              boxShadow: "0 24px 64px color-mix(in srgb, var(--brand) 30%, transparent)",
            }}
          >
            {/* Top: quote */}
            <div className="px-8 pt-10 pb-6 sm:px-12 sm:pt-12">
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-white/30 mb-5"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.333 8C5.274 8 2 11.274 2 15.333v1.334C2 20.726 5.274 24 9.333 24h.334a6.667 6.667 0 000-13.333H9.333V8zm13.334 0c-4.06 0-7.334 3.274-7.334 7.333v1.334C15.333 20.726 18.607 24 22.667 24H23a6.667 6.667 0 000-13.333h-.333V8z" />
              </svg>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light italic mb-8">
                &ldquo;{caso.testimonio}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-white/15 mb-6" />

              {/* Author info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    {caso.emoji}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{caso.ceo}</p>
                    <p className="text-white/60 text-xs">{caso.nombre} · {caso.categoria}</p>
                    <p className="text-white/45 text-[11px] mt-0.5">{caso.ubicacion}</p>
                  </div>
                </div>

                {/* Stat */}
                <div
                  className="flex-shrink-0 rounded-2xl px-5 py-3 text-center sm:text-right"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <p className="text-white font-bold text-2xl leading-none">{caso.stat.valor}</p>
                  <p className="text-white/60 text-[11px] mt-1 leading-tight">{caso.stat.label}</p>
                </div>
              </div>
            </div>

            {/* Bottom bar: website */}
            <div
              className="flex items-center justify-between px-8 sm:px-12 py-4 border-t border-white/10"
              style={{ background: "rgba(0,0,0,0.10)" }}
            >
              <span className="text-white/40 text-[11px] font-medium uppercase tracking-wider">
                Cliente verificado
              </span>
              <a
                href={`https://${caso.web}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                {caso.web}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-bg-card hover:bg-brand hover:text-white hover:border-brand text-brand transition-all duration-200 shadow-sm translate-x-1 md:translate-x-5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {casos.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir a ${casos[i].nombre}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-brand" : "w-2 h-2 bg-brand/25 hover:bg-brand/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom trust line */}
      <div className="mt-10 text-center">
        <p className="text-muted text-sm">
          Más de{" "}
          <span className="text-brand font-semibold">200 negocios</span>{" "}
          en Latinoamérica ya usan AgenditApp
        </p>
      </div>
    </section>
  );
}
