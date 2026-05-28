"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { motion, easeOut, type Variants } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false },
);

const FEATURES = [
  { t: "Dirección exacta visible",  d: "Barrio, ciudad y referencia tal como aparece en Google Maps." },
  { t: 'Botón "Cómo llegar"',       d: "Un tap abre la ruta en Google Maps o Waze desde el celular del cliente." },
  { t: "Fácil de compartir",        d: "Enlace por WhatsApp, Instagram o Google Business — llegan sin preguntar." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Ubicacion() {
  const [open, setOpen] = useState(false);

  return (
    <section id="ubicacion" className="py-24 sm:py-28 bg-white border-t border-b border-[#0F172A]/6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: captura real de ubicación ── */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[240px] sm:w-[270px]">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 -z-10 scale-110"
                style={{ background: "#1D4ED8" }}
              />

              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                className="block focus:outline-none w-full cursor-zoom-in"
                aria-label="Ampliar: ubicación del negocio"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <PhoneMockup
                  src="/screenshots/ubicacion-mockup.png"
                  alt="Ubicación del negocio — AgenditApp"
                  priority
                />
              </motion.button>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -right-5 bottom-16 rounded-2xl px-3.5 py-2.5 border border-[#1D4ED8]/10"
                style={{ background: "white", boxShadow: "0 8px 24px rgba(15,23,42,0.10)" }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} weight="duotone" color="#1D4ED8" />
                  <div>
                    <p className="text-[10px] text-[#94A3B8] font-medium">Dirección</p>
                    <p className="text-xs font-semibold text-[#0F172A]">Abierto en Maps</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: texto + features numerados ── */}
          <motion.div
            className="order-1 lg:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ animate: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
            >
              Ubicación
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0"
            >
              Que tus clientes lleguen{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                sin preguntar.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[17px] text-[#64748B] leading-relaxed"
            >
              Tu página de reservas muestra la dirección, mapa integrado y acceso
              directo a Google Maps o Waze. Sin el clásico &ldquo;¿dónde queda?&rdquo;.
            </motion.p>

            <div className="mt-8 flex flex-col gap-5">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="grid gap-3.5 items-start"
                  style={{ gridTemplateColumns: "44px 1fr" }}
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                    style={{ background: "rgba(29,78,216,0.08)", color: "#1D4ED8" }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#0F172A] leading-snug">{f.t}</p>
                    <p className="text-[13.5px] text-[#64748B] mt-1 leading-relaxed">{f.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <ImageLightbox
        src="/screenshots/ubicacion-mockup.png"
        alt="Ubicación del negocio — AgenditApp"
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
