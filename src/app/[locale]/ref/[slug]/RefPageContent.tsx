"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { ReferralSource } from "../sources";

/* ─── Helpers de animación ──────────────────────────────── */

const ease = [0.22, 0.61, 0.36, 1] as const;

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

/* ─── Sub-componentes ───────────────────────────────────── */

function CuposBar({ total, remaining }: { total: number; remaining: number }) {
  const claimedPct = ((total - remaining) / total) * 100;
  return (
    <div
      className="h-[7px] rounded-full overflow-hidden mt-[10px]"
      style={{ background: "#ffe7c2" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, #f5a623, #f97316)" }}
        initial={{ width: "0%" }}
        animate={{ width: `${claimedPct}%` }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </div>
  );
}

function ReferrerAvatar({
  name,
  photoUrl,
}: {
  name: string;
  photoUrl?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={name}
        width={96}
        height={96}
        className="w-24 h-24 shrink-0 object-cover"
        style={{
          borderRadius: "22px",
          boxShadow: "0 12px 26px -14px rgba(28,45,120,0.6)",
        }}
      />
    );
  }

  return (
    <div
      className="w-24 h-24 shrink-0 flex items-center justify-center font-semibold text-2xl text-brand select-none"
      style={{
        borderRadius: "22px",
        background: "color-mix(in srgb, var(--brand) 10%, white)",
        border: "1px solid color-mix(in srgb, var(--brand) 20%, transparent)",
        boxShadow: "0 12px 26px -14px rgba(28,45,120,0.6)",
      }}
    >
      {initials}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 1.98c-3.15 0-3.52.01-4.76.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.2-1.39-.32-1.71a2.86 2.86 0 00-.69-1.06 2.86 2.86 0 00-1.06-.69c-.32-.12-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.76-.07zm0 3.38a4.44 4.44 0 110 8.88 4.44 4.44 0 010-8.88zm0 7.32a2.88 2.88 0 100-5.76 2.88 2.88 0 000 5.76zm5.65-7.5a1.04 1.04 0 11-2.08 0 1.04 1.04 0 012.08 0z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16" rx="3" stroke="#2347e6" strokeWidth="1.7" />
      <path d="M3 9h18M8 3v3M16 3v3" stroke="#2347e6" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Features de AgenditApp ────────────────────────────── */

const FEATURES = [
  {
    icon: "📅",
    title: "Agenda en un solo lugar",
    desc: "Organiza todas tus citas sin enredos ni cuadernos.",
  },
  {
    icon: "💬",
    title: "Recordatorios por WhatsApp",
    desc: "Enviados desde tu propio número, automáticos.",
  },
  {
    icon: "🔔",
    title: "Clientes siempre informados",
    desc: "Confirmaciones y avisos que reducen las ausencias.",
  },
];

/* ─── Componente principal ──────────────────────────────── */

interface Props {
  source: ReferralSource;
  badge: string;
}

export default function RefPageContent({ source, badge }: Props) {
  const firstName = source.name.split(" ")[0];
  const isInfluencer = source.type === "influencer";
  const headlinePrefix = isInfluencer
    ? `${firstName} te invitó. Reclama tu`
    : `Llegaste por ${source.name}. Reclama tu`;

  const offerRef = useRef<HTMLElement>(null);
  const [isOfferVisible, setIsOfferVisible] = useState(false);
  // Delay showing the FAB so it doesn't flash immediately on desktop
  const [fabReady, setFabReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFabReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = offerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOfferVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showFab = fabReady && !isOfferVisible;

  return (
    <main className="min-h-screen pt-28">
      <section className="px-4 sm:px-7 pt-10 pb-[90px]">
        <div className="max-w-[1200px] mx-auto">

          {/* ── Intro ── */}
          <div className="max-w-[760px]">
            <motion.div {...rise(0)}>
              <span
                className="inline-flex items-center gap-[9px] font-bold text-[12.5px] tracking-[0.08em] uppercase text-brand px-4 py-[9px] rounded-full"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid #d7defb",
                  boxShadow: "0 8px 22px -16px rgba(35,71,230,0.6)",
                }}
              >
                <span
                  className="w-[7px] h-[7px] rounded-full bg-brand shrink-0"
                  style={{ boxShadow: "0 0 0 4px rgba(35,71,230,0.16)" }}
                />
                Invitación personal · Beneficio exclusivo
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.09)}
              className="text-heading font-semibold mt-[22px]"
              style={{
                fontSize: "clamp(34px, 5.4vw, 58px)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                textWrap: "balance",
              } as React.CSSProperties}
            >
              {headlinePrefix}{" "}
              <em className="text-brand not-italic">{source.offerBase.toLowerCase()}</em>
            </motion.h1>

            <motion.p
              {...rise(0.14)}
              className="text-body mt-[18px] max-w-[600px]"
              style={{ fontSize: "clamp(17px, 1.9vw, 19px)" } as React.CSSProperties}
            >
              Llegaste por la recomendación de{" "}
              <strong className="text-heading">{source.name}</strong>. Por eso
              tienes un beneficio que no está disponible en la página normal de
              AgenditApp.
            </motion.p>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[34px] mt-[46px] items-start">

            {/* ── Columna izquierda ── */}
            <motion.div {...rise(0.14)}>

              {/* Tarjeta del referidor */}
              <div
                className="relative overflow-hidden flex gap-5 items-center p-[26px]"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid #e6e9f5",
                  borderRadius: "26px",
                  boxShadow: "0 18px 50px -24px rgba(28,45,120,0.35)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(59,91,245,0.06), rgba(59,91,245,0) 45%)",
                  }}
                />

                <ReferrerAvatar name={source.name} photoUrl={source.photoUrl} />

                <div className="relative min-w-0">
                  <div
                    className="text-[12px] font-bold tracking-[0.09em] uppercase text-brand"
                  >
                    {badge}
                  </div>
                  <div className="font-semibold text-[22px] text-heading mt-[3px] leading-tight">
                    {source.name}
                  </div>

                  {source.handle && (
                    <a
                      href={`https://instagram.com/${source.handle.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[6px] text-muted font-semibold text-[14px] no-underline mt-1 hover:text-brand transition-colors duration-150"
                    >
                      <InstagramIcon />
                      {source.handle}
                    </a>
                  )}

                  {source.website && !source.handle && (
                    <a
                      href={source.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted font-semibold text-[14px] no-underline mt-1 hover:text-brand transition-colors duration-150 truncate"
                    >
                      {source.website.replace(/^https?:\/\//, "")}
                    </a>
                  )}

                  {source.quote && (
                    <p
                      className="mt-[14px] text-body text-[15px] italic leading-[1.55]"
                      style={{ paddingLeft: "14px", borderLeft: "3px solid #dbe2fb" }}
                    >
                      &ldquo;{source.quote}&rdquo;
                    </p>
                  )}
                </div>
              </div>

              {/* ¿Qué es AgenditApp? */}
              <div className="mt-[26px]">
                <h3 className="font-semibold text-[18px] text-heading flex items-center gap-[10px]">
                  <span
                    className="w-[30px] h-[30px] shrink-0 flex items-center justify-center"
                    style={{ borderRadius: "9px", background: "rgba(35,71,230,0.1)" }}
                  >
                    <CalendarIcon />
                  </span>
                  ¿Qué es AgenditApp?
                </h3>
                <p className="text-body text-[15.5px] mt-[12px] max-w-[540px] leading-relaxed">
                  {source.customIntro ??
                    "La app para organizar las citas de tu negocio, enviar recordatorios por WhatsApp desde tu propio número y mantener a tus clientes siempre informados."}
                </p>

                <ul className="mt-5 grid gap-3">
                  {FEATURES.map((f) => (
                    <li
                      key={f.icon}
                      className="flex gap-[14px] items-center px-4 py-[14px] transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-24px_rgba(28,45,120,0.35)] hover:border-[#d3dbfa]"
                      style={{
                        background: "rgba(255,255,255,0.66)",
                        border: "1px solid #e6e9f5",
                        borderRadius: "16px",
                      }}
                    >
                      <span
                        className="w-[42px] h-[42px] shrink-0 flex items-center justify-center text-xl"
                        style={{
                          borderRadius: "12px",
                          background: "linear-gradient(150deg, #eaf0ff, #f2eeff)",
                          border: "1px solid #e0e7ff",
                        }}
                      >
                        {f.icon}
                      </span>
                      <span>
                        <strong className="block font-bold text-[15px] text-heading">
                          {f.title}
                        </strong>
                        <span className="text-[13.5px] text-muted">{f.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ── Columna derecha: oferta ── */}
            <motion.aside
              ref={offerRef}
              {...rise(0.23)}
              className="sticky top-7"
              style={{
                background: "var(--bg-card)",
                border: "1px solid #e6e9f5",
                borderRadius: "28px",
                boxShadow: "0 30px 70px -28px rgba(28,45,120,0.45)",
                overflow: "hidden",
              }}
            >
              {/* Header azul */}
              <div
                className="relative overflow-hidden px-7 pt-[26px] pb-[24px]"
                style={{
                  background: "linear-gradient(155deg, #2a4ef2 0%, #1a37c4 100%)",
                }}
              >
                <div
                  className="absolute -right-10 -top-12 w-[180px] h-[180px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0))",
                  }}
                />
                {/* Emoji con rebote de atención */}
                <motion.div
                  className="text-[30px] leading-none relative"
                  animate={{ rotate: [0, -12, 12, -8, 8, 0], scale: [1, 1.15, 1.15, 1.1, 1.1, 1] }}
                  transition={{ duration: 0.7, delay: 1.6, ease: "easeInOut" }}
                >
                  🎁
                </motion.div>
                <div
                  className="font-semibold text-[23px] text-white mt-[10px] relative"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  Oferta exclusiva por invitación
                </div>
                <div
                  className="text-[14px] mt-1 relative"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  Solo válida con el enlace de {source.name}
                </div>
              </div>

              {/* Cupos */}
              {source.slotsTotal != null && source.slotsRemaining != null && (
                <div
                  className="mx-7 mt-[18px] px-[15px] py-[13px]"
                  style={{
                    background: "#fff7ec",
                    border: "1px solid #ffe1b0",
                    borderRadius: "14px",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[13.5px] font-semibold flex items-center gap-[7px]"
                      style={{ color: "#8a5a12" }}
                    >
                      ⚡ Cupos del bono de 2 meses gratis
                    </span>
                    <span
                      className="font-semibold text-[14px]"
                      style={{ color: "#b9700f" }}
                    >
                      Quedan{" "}
                      <b style={{ color: "#d97706" }}>{source.slotsRemaining}</b>{" "}
                      de {source.slotsTotal}
                    </span>
                  </div>
                  <CuposBar
                    total={source.slotsTotal}
                    remaining={source.slotsRemaining}
                  />
                </div>
              )}

              {/* Beneficios */}
              <ul className="px-7 pt-5 pb-[6px] grid gap-4">
                <li className="flex gap-[13px] items-start">
                  <span
                    className="w-[26px] h-[26px] shrink-0 flex items-center justify-center text-[14px] text-white mt-[1px]"
                    style={{
                      borderRadius: "8px",
                      background: "var(--success)",
                      boxShadow: "0 6px 14px -6px rgba(24,165,88,0.7)",
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-[15px] text-body leading-[1.45]">
                    <b className="text-heading font-bold">
                      {source.offerBase}
                    </b>{" "}
                    — al crear tu cuenta con este enlace de invitación.
                  </span>
                </li>

                {source.offerBonus && (
                  <li className="flex gap-[13px] items-start">
                    <span
                      className="w-[26px] h-[26px] shrink-0 flex items-center justify-center text-[14px] text-white font-bold mt-[1px]"
                      style={{
                        borderRadius: "8px",
                        background: "var(--brand)",
                        boxShadow: "0 6px 14px -6px rgba(35,71,230,0.7)",
                      }}
                    >
                      ★
                    </span>
                    <span className="text-[15px] text-body leading-[1.45]">
                      <b className="text-heading font-bold">
                        2 meses gratis
                      </b>{" "}
                      — para los primeros 5 en registrarse.
                    </span>
                  </li>
                )}
              </ul>

              {/* CTA */}
              <div className="mx-7 mt-4">
                <a
                  href={source.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-[10px] text-white font-semibold text-[17px] py-[17px] px-[22px] rounded-[15px] transition-all duration-[160ms] hover:-translate-y-0.5 group"
                  style={{
                    background: "var(--brand)",
                    boxShadow: "0 16px 30px -12px rgba(35,71,230,0.85)",
                  }}
                >
                  Crear cuenta y reclamar{" "}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Microcopia */}
              <div className="flex items-center justify-center gap-2 text-[13px] text-muted py-[14px] pb-[26px]">
                Sin tarjeta de crédito
                <span
                  className="w-[4px] h-[4px] rounded-full shrink-0"
                  style={{ background: "#c4cbe2" }}
                />
                Cancela cuando quieras
              </div>
            </motion.aside>

          </div>
        </div>
      </section>

      {/* ── Botón flotante ── */}
      <AnimatePresence>
        {showFab && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-50"
            style={{ x: "-50%" }}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <button
              onClick={scrollToOffer}
              className="flex items-center gap-[10px] text-white font-semibold text-[15px] px-9 py-[30px] rounded-full cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #2a4ef2, #1a37c4)",
                boxShadow: "0 12px 32px -8px rgba(35,71,230,0.75), 0 0 0 1px rgba(255,255,255,0.12) inset",
                minWidth: "220px",
                justifyContent: "center",
              }}
            >
              <span>🎁</span>
              Ver mi beneficio
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDownIcon />
              </motion.span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
