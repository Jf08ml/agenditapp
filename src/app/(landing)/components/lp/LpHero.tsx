"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PhoneMockup } from "../ui/PhoneMockup";
import { LeadCtas, type CtaVariant } from "./cta";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* Hero compartido por las landings de campaña. Texto a la izquierda
   (badge, titular, subtítulo, CTAs, microcopy) y captura a la derecha.
   En móvil la captura desktop es ilegible, así que ahí se muestra un
   mockup de teléfono con el flujo de reserva (coincide con lo que el
   visitante acaba de ver en el anuncio). */
export default function LpHero({
  variant,
  source,
  badge,
  title,
  subtitle,
  microcopy = "Sin tarjeta · Listo en 10 min · Cancela cuando quieras",
  image = "/screenshots/agenda-virtual-desktop-1.png",
  imageAlt = "Agenda virtual de AgenditApp",
  phoneImage = "/screenshots/reserva-paso-1-mockup.png",
  phoneImageAlt = "Cliente reservando una cita desde el celular con AgenditApp",
  whatsappLabel,
  signupLabel,
  showCta = true,
}: {
  variant: CtaVariant;
  source: string;
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  microcopy?: string;
  image?: string;
  imageAlt?: string;
  phoneImage?: string;
  phoneImageAlt?: string;
  whatsappLabel?: string;
  signupLabel?: string;
  /** Oculta el CTA del Hero (queda solo la línea de confianza). Usado en
   * /oferta para no ofrecer el botón de WhatsApp antes de que la persona
   * lea beneficios y oferta. */
  showCta?: boolean;
}) {
  return (
    <section className="relative overflow-x-hidden pt-28 sm:pt-32 pb-14 md:pb-20">
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 55% 35%, black 25%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 55% 35%, black 25%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(29,78,216,0.09) 0%, transparent 65%)",
          filter: "blur(24px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* ── Texto ── */}
          <motion.div
            className="text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase"
                style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--warm)" }}
                />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="leading-[1.04] tracking-[-0.035em] font-extrabold text-balance m-0"
              style={{ fontSize: "clamp(34px, 5vw, 60px)", color: "#0F172A" }}
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 text-[17px] sm:text-[18px] text-[#334155] leading-[1.6] max-w-[520px] mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>

            {showCta && (
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8">
                <LeadCtas
                  variant={variant}
                  source={source}
                  className="justify-center lg:justify-start"
                  whatsappLabel={whatsappLabel}
                  signupLabel={signupLabel}
                />
              </motion.div>
            )}

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-[13px] text-[#64748B] flex items-center gap-1.5 justify-center lg:justify-start"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7l3 3 5-6"
                  stroke="var(--wa-deep)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {microcopy}
            </motion.p>
          </motion.div>

          {/* ── Imagen ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
            }}
          >
            {/* Móvil / tablet: mockup de teléfono legible */}
            <div className="lg:hidden flex justify-center">
              <PhoneMockup src={phoneImage} alt={phoneImageAlt} priority />
            </div>

            {/* Desktop: captura del panel en chrome de navegador */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="hidden lg:block rounded-[20px] overflow-hidden bg-white border border-[#0F172A]/8 shadow-[0_4px_40px_rgba(29,78,216,0.14),0_24px_80px_rgba(15,23,42,0.16)]"
              style={{
                transform: "perspective(1400px) rotateY(-4deg) rotateX(2deg)",
                transformOrigin: "center center",
              }}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F1F5F9] border-b border-[#0F172A]/6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#64748B] border border-[#0F172A]/8 max-w-xs">
                  app.agenditapp.com
                </div>
              </div>
              <Image
                src={image}
                alt={imageAlt}
                width={1280}
                height={720}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
