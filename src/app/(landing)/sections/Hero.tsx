"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { WHATSAPP_HREF, SIGNUP_HREF } from "../components/constants";
import { HeroSideArrow } from "../components/ui/HeroSideArrow";
import { MobileArrow } from "../components/ui/MobileArrow";
import Navbar from "../components/ui/Navbar";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false },
);

function LiveBookingBadge() {
  const [secs, setSecs] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s + 1) % 90), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-3.5 py-2.5
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#0F172A]/8
        flex items-center gap-2.5 z-10"
    >
      <div className="relative w-2.5 h-2.5 flex-shrink-0">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]" />
      </div>
      <div>
        <div className="text-[11px] text-[#64748B] leading-tight">
          reserva confirmada hace {secs}s
        </div>
        <div className="text-[13px] font-semibold text-[#0F172A] leading-tight">
          Cata → Galaxia Glamour
        </div>
      </div>
    </motion.div>
  );
}

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  return (
    <>
      <Navbar />

      <section className="relative overflow-x-hidden pt-24 sm:pt-28 pb-16 md:pb-24">
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

        {/* Blobs */}
        <div
          aria-hidden
          className="absolute -top-24 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(29,78,216,0.09) 0%, transparent 65%)",
            filter: "blur(24px)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-40 -left-48 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.74 0.16 50 / 0.14) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-4 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 xl:gap-14 items-center">

            {/* ── LEFT: texto ── */}
            <motion.div
              className="text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Pill warm */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mb-5"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    text-[11px] font-semibold tracking-widest uppercase"
                  style={{
                    background: "var(--warm-soft)",
                    color: "var(--warm-deep)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--warm)" }}
                  />
                  Nuevo · Empieza gratis — sin tarjeta
                </span>
              </motion.div>

              {/* H1 — 3 líneas */}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="leading-[1.02] tracking-[-0.035em] font-extrabold text-balance m-0"
                style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
              >
                <span className="text-[#0F172A]">Deja de perseguir citas</span>
                <br className="hidden lg:block" />
                {" "}
                <span
                  style={{
                    background:
                      "linear-gradient(95deg, #1D4ED8 0%, oklch(0.62 0.2 260) 50%, var(--warm-deep) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  por WhatsApp.
                </span>
                <br className="hidden lg:block" />
                {" "}
                <span
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif), 'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "#0F172A",
                  }}
                >
                  Que tu agenda lo haga sola.
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-6 text-[17px] sm:text-[18px] text-[#334155] leading-[1.6] max-w-[520px] mx-auto lg:mx-0"
              >
                AgenditApp recibe reservas 24/7, confirma con tus clientes por
                WhatsApp y reduce las inasistencias hasta un 70% — sin que
                tengas que mover un dedo.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href={SIGNUP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0 14px 40px rgba(29,78,216,0.42)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px]
                    bg-[#1D4ED8] text-white text-[15px] font-semibold
                    shadow-[0_6px_22px_rgba(29,78,216,0.35)] transition-colors
                    hover:bg-[#2563EB]"
                >
                  Crear cuenta gratis
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>

                <motion.a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px]
                    border border-[#0F172A]/12 text-[#0F172A] text-[15px] font-semibold
                    bg-white/70 backdrop-blur-sm transition-all hover:bg-white/90"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M5 3v10l8-5-8-5z" fill="currentColor" />
                  </svg>
                  Ver cómo funciona
                </motion.a>
              </motion.div>

              {/* Microcopy */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-4 text-[13px] text-[#64748B] flex items-center gap-1.5 justify-center lg:justify-start"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 7l3 3 5-6"
                    stroke="var(--wa-deep)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sin tarjeta · Listo en 10 min · Cancela cuando quieras
              </motion.p>
            </motion.div>

            {/* ── RIGHT: screenshot ── */}
            <motion.div
              className="relative"
              style={{ overflow: "visible" }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                },
              }}
            >
              {/*
                Desktop Arrow — parte desde el borde izq del screenshot
                y apunta al botón "Crear mi demo gratis" en la col izquierda.
                left: -75% desplaza el container 75% del ancho de la col derecha
                hacia la izquierda, poniendo el inicio del path sobre el screenshot
                y la punta sobre el área del botón.
              */}
              <div
                className="hidden lg:block absolute z-20 pointer-events-none"
                style={{ left: "-75%", top: "40%" }}
              >
                <HeroSideArrow />
              </div>

              {/* Mobile Arrow — layout columna simple, apunta arriba hacia los CTAs */}
              <div
                className="block lg:hidden absolute z-20 pointer-events-none"
                style={{ left: "-38%", top: "-270px" }}
              >
                <MobileArrow />
              </div>

              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative"
              >
                {/* Browser chrome + screenshot */}
                <div
                  className="rounded-[20px] overflow-hidden bg-white
                    border border-[#0F172A]/8
                    shadow-[0_4px_40px_rgba(29,78,216,0.14),0_24px_80px_rgba(15,23,42,0.16)]"
                  style={{
                    transform:
                      "perspective(1400px) rotateY(-4deg) rotateX(2deg)",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F1F5F9] border-b border-[#0F172A]/6 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                    <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#64748B] border border-[#0F172A]/8 max-w-xs">
                      app.agenditapp.com
                    </div>
                  </div>

                  {/* Screenshot clickable */}
                  <button
                    onClick={() =>
                      openLightbox(
                        "/screenshots/agenda-virtual-desktop-1.png",
                        "Agenda virtual — AgenditApp",
                      )
                    }
                    className="block w-full focus:outline-none cursor-zoom-in group"
                  >
                    <Image
                      src="/screenshots/agenda-virtual-desktop-1.png"
                      alt="Vista semanal de citas con columnas por profesional — AgenditApp"
                      width={1280}
                      height={720}
                      className="w-full h-auto object-cover object-top
                        group-hover:brightness-[0.97] transition-all duration-300"
                      priority
                    />
                  </button>
                </div>

                {/* Live booking badge */}
                <LiveBookingBadge />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <ImageLightbox
            src={src}
            alt={alt}
            open={open}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
