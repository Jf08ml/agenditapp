"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { WHATSAPP_HREF } from "../components/constants";

import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";
import { DesktopArrow } from "../components/ui/DesktopArrow";
import { MobileArrow } from "../components/ui/MobileArrow";
import Navbar from "../components/ui/Navbar";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false },
);

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <motion.section
        key="hero"
        className="relative flex flex-col overflow-hidden pb-24 md:pb-0 pt-24 sm:pt-28"
        initial="initial"
        animate="animate"
      >
        {/* ── HERO BODY ── */}
        <div className="w-full px-4 sm:px-6 pt-6 sm:pt-8">
          {/* Centered text */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className="mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-[#1D4ED8]/8 border border-[#1D4ED8]/18
                text-[#1D4ED8] text-[11px] font-semibold tracking-wider uppercase"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(29,78,216,0.4)",
                    "0 0 0 10px rgba(29,78,216,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                Plataforma de agendamiento
              </motion.span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeIn}
              initial={{ opacity: 0, y: 22, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-[3.2rem] font-semibold text-[#0F172A]
                leading-[1.1] tracking-tight text-balance"
              viewport={{ once: true }}
            >
              Tu Agenda Virtual para Gestión y Reservas 24/7
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeIn}
              className="mt-5 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl mx-auto"
            >
              Simplifica el control de tu negocio y la experiencia de tus
              clientes. AgenditApp organiza tus turnos online de forma
              automática y envía recordatorios por WhatsApp para asegurar que
              nunca más pierdas una cita.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeIn}
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              <motion.a
                href="https://app.agenditapp.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.06,
                  y: -2,
                  boxShadow: "0 12px 40px rgba(29,78,216,0.4)",
                }}
                whileTap={{ scale: 0.94 }}
                className="px-8 py-3.5 rounded-[14px] bg-[#1D4ED8] text-white text-sm font-medium
                  shadow-[0_8px_24px_rgba(29,78,216,0.28)]
                  hover:bg-[#2563EB] transition-all cursor-pointer"
              >
                Crea tu demo gratis
              </motion.a>

              <motion.a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  borderColor: "rgba(29,78,216,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 rounded-[14px] border border-[#0F172A]/12 text-[#0F172A]
                  text-sm font-medium bg-white/70 backdrop-blur-sm
                  hover:bg-white/90 transition-all cursor-pointer"
              >
                Contactar a un asesor
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── PRODUCT IMAGE + ARROW ── */}
          <div className="mt-10 pb-5">
            {/* ── BROWSER CHROME + SCREENSHOT ── */}
            {/* La flecha está dentro de este container, posicionada con top negativo
                para que suba desde el lateral de la imagen hasta los CTAs */}
            <motion.div
              className="max-w-5xl xl:max-w-6xl mx-auto relative"
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: { duration: 4, ease: "easeInOut" },
                default: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              }}
              viewport={{ once: true }}
            >
              {/* ── SEMICIRCLE ARROW ──
                  Sale del lateral DERECHO de la imagen (detrás del borde),
                  hace un gran semicírculo hacia arriba y apunta al botón
                  "Empieza gratis". Solo visible en lg+.
              */}

              {/* Desktop Arrow */}
              <div
                className="hidden lg:block absolute z-20 pointer-events-none"
                style={{ left: "-14%", top: "-190px" }}
              >
                <DesktopArrow />
              </div>

              {/* Mobile Arrow */}
              <div
                className="block lg:hidden absolute z-20 pointer-events-none"
                style={{ left: "-40%", top: "-290px" }}
              >
                <MobileArrow />
              </div>

              <div
                className="rounded-t-[20px] sm:rounded-t-[24px] overflow-hidden
                  bg-white border border-[#0F172A]/8
                  shadow-[0_-4px_40px_rgba(29,78,216,0.12),0_24px_80px_rgba(15,23,42,0.14)]"
              >
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F1F5F9] border-b border-[#0F172A]/6 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                  <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#64748B] border border-[#0F172A]/8 max-w-xs">
                    minegocio.com
                  </div>
                </div>

                {/* Screenshot */}
                <button
                  onClick={() =>
                    openLightbox(
                      "/screenshots/agenda-virtual-desktop.png",
                      "Agenda virtual — AgenditApp",
                    )
                  }
                  className="block w-full focus:outline-none group cursor-zoom-in"
                >
                  <Image
                    src="/screenshots/agenda-virtual-desktop.png"
                    alt="Vista semanal de citas con columnas por profesional — AgenditApp"
                    width={1280}
                    height={720}
                    className="w-full h-auto object-cover object-top
                      group-hover:brightness-[0.97] transition-all duration-300"
                    priority
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <ImageLightbox
          src={src}
          alt={alt}
          open={open}
          onClose={() => setOpen(false)}
        />
      </motion.section>
    </AnimatePresence>
    </>
  );
}
