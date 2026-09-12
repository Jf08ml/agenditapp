"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants, easeOut } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const AUTOPLAY_MS = 5000;

// Datos estructurales de cada caso (nombre de negocio, iniciales, sitio web,
// estadística); el texto (rol, autor, testimonio, etiqueta de la stat) viene
// de las traducciones y se combina con este array por índice.
const CASOS_DATA = [
  { nombre: "Estudio Rosa", iniciales: "LF", web: "estudiorosa.com.co", stat: "60%" },
  { nombre: "Galaxia Glamour", iniciales: "NM", web: "galaxiaglamour.com", stat: "3×" },
  { nombre: "Bastidas Barber Studio", iniciales: "CB", web: "bastidasbarberstudio.com", stat: "100%" },
  { nombre: "CAPI Apoyo Infantil", iniciales: "CA", web: "agenda.capiapoyoinfantil.com", stat: "40%" },
  { nombre: "Alpha Man Atelier", iniciales: "AM", web: "alphamanatelier.com", stat: "2×" },
  { nombre: "Espacio Mosaico", iniciales: "EM", web: "espaciomosaico.agenditapp.com", stat: "90%" },
];

type CasoItem = {
  nombre: string;
  iniciales: string;
  web: string;
  stat: string;
  role: string;
  author: string;
  quote: string;
  statLabel: string;
};

function TestimonialCard({ caso, verifiedLabel }: { caso: CasoItem; verifiedLabel: string }) {
  return (
    <div
      className="relative flex flex-col rounded-[18px] border border-[#0F172A]/8 bg-white p-7 h-full"
      style={{ boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
    >
      {/* Decorative quote */}
      <span
        aria-hidden
        className="absolute top-4 right-5 text-[64px] leading-none select-none"
        style={{
          fontFamily: "var(--font-instrument-serif), Georgia, serif",
          fontStyle: "italic",
          color: "color-mix(in srgb, var(--brand) 12%, transparent)",
          lineHeight: 1,
        }}
      >
        &ldquo;
      </span>

      {/* Stat */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-[32px] font-extrabold text-brand leading-none tracking-tight">
          {caso.stat}
        </span>
        <span className="text-[12px] font-semibold text-muted">{caso.statLabel}</span>
      </div>

      {/* Quote */}
      <p
        className="flex-1 text-[15.5px] text-body leading-[1.6] mb-6"
        style={{
          fontFamily: "var(--font-instrument-serif), Georgia, serif",
          fontStyle: "italic",
        }}
      >
        &ldquo;{caso.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-[#0F172A]/8 pt-5 flex items-center gap-3">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #1D4ED8, oklch(0.62 0.2 260))" }}
        >
          {caso.iniciales}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-heading leading-none mb-0.5">{caso.author}</p>
          <p className="text-[12px] text-muted leading-tight">{caso.nombre}</p>
          <p className="text-[11px] text-muted/70 mt-0.5 inline-flex items-center gap-1">
            <MapPin size={11} weight="duotone" color="#94A3B8" />
            {caso.role}
          </p>
        </div>
      </div>

      {/* Footer: verificado + web */}
      <div className="mt-5 pt-4 border-t border-[#0F172A]/6 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#10B981]">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {verifiedLabel}
        </span>
        <a
          href={`https://${caso.web}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-muted hover:text-brand transition-colors font-medium"
        >
          {caso.web}
          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function CasosDeExito() {
  const t = useTranslations("CasosDeExito");
  const items = t.raw("items") as {
    role: string;
    author: string;
    quote: string;
    statLabel: string;
  }[];
  const casos: CasoItem[] = CASOS_DATA.map((c, i) => ({ ...c, ...items[i] }));

  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(3);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const perViewRef = useRef(3);

  /* Responsive perView */
  useEffect(() => {
    const update = () => {
      const pv = window.innerWidth >= 1024 ? 3 : 1;
      perViewRef.current = pv;
      setPerView(pv);
      setActive((a) => Math.min(a, casos.length - pv));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxActive = casos.length - perView;

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(index, casos.length - perViewRef.current)));
  };

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const max = casos.length - perViewRef.current;
      setActive((a) => (a >= max ? 0 : a + 1));
    }, AUTOPLAY_MS);
  };

  const prev = () => { goTo(active - 1); resetTimer(); };
  const next = () => { goTo(active + 1); resetTimer(); };

  useEffect(() => {
    resetTimer();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active]);

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
            {t("badge")}
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-heading text-balance m-0">
            {t("heading.prefix")}{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {t("heading.highlight")}
            </span>
          </h2>
          <p className="mt-4 text-[17px] text-muted leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${active * (100 / perView)}%)`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {casos.map((c) => (
              <div
                key={c.nombre}
                className="flex-none px-2.5"
                style={{ width: `${100 / perView}%` }}
              >
                <TestimonialCard caso={c} verifiedLabel={t("verifiedLabel")} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label={t("prevAriaLabel")}
            className="flex h-9 w-9 items-center justify-center rounded-full border
              border-brand/20 bg-bg-card text-brand shadow-sm
              hover:bg-brand hover:text-white hover:border-brand
              disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {casos.map((_, i) => {
              const isActive = i >= active && i < active + perView;
              return (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetTimer(); }}
                  aria-label={t("goToAriaLabel", { name: casos[i].nombre })}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2 h-2 bg-brand scale-110"
                      : "w-2 h-2 bg-brand/25 hover:bg-brand/50"
                  }`}
                />
              );
            })}
          </div>

          <button
            onClick={next}
            disabled={active === maxActive}
            aria-label={t("nextAriaLabel")}
            className="flex h-9 w-9 items-center justify-center rounded-full border
              border-brand/20 bg-bg-card text-brand shadow-sm
              hover:bg-brand hover:text-white hover:border-brand
              disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm">
            {t("trust.prefix")}{" "}
            <span className="text-brand font-semibold">{t("trust.highlight")}</span>{" "}
            {t("trust.suffix")}
          </p>
        </div>
      </div>
    </section>
  );
}
