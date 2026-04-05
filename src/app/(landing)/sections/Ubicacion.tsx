"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { motion, easeOut, type Variants } from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    title: "Dirección exacta siempre visible",
    desc: "Muestra barrio, ciudad y referencia tal como aparece en Google Maps.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h14M10 3l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Botón &ldquo;Cómo llegar&rdquo; directo",
    desc: "Un tap abre la ruta en Google Maps o Waze desde el celular del cliente.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M2 8h16" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M6 12h2M10 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fácil de compartir",
    desc: "Comparte el enlace por WhatsApp, Instagram o Google Business y tus clientes llegan sin preguntar.",
  },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const slideLeft: Variants = {
  initial: { opacity: 0, x: -36 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const slideRight: Variants = {
  initial: { opacity: 0, x: 36 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const featureItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function Ubicacion() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  return (
    <section id="ubicacion" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Que tus clientes lleguen{" "}
            <span className="text-brand">sin tener que preguntar</span>
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            Tu página de reservas muestra la dirección exacta, mapa integrado y
            acceso directo a la ruta. Sin el clásico &ldquo;¿dónde queda?&rdquo; por WhatsApp.
          </p>
        </motion.div>

        {/* ── Split layout: text left · mockup right ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: features */}
          <div className="flex-1 w-full">
            <motion.div
              className="flex flex-col gap-6"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  variants={featureItem}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center text-brand"
                    style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-heading"
                      dangerouslySetInnerHTML={{ __html: f.title }}
                    />
                    <p className="text-sm text-body mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map card */}
            <motion.div
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 rounded-[16px] border border-brand/10 overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Mock map header */}
              <div className="bg-bg-card px-4 py-3 flex items-center gap-2 border-b border-brand/8">
                <div className="w-2 h-2 rounded-full bg-brand/30" />
                <div className="w-2 h-2 rounded-full bg-brand/20" />
                <div className="w-2 h-2 rounded-full bg-brand/10" />
                <span className="ml-2 text-[11px] text-muted font-medium">Tu ubicación en la landing</span>
              </div>
              <div
                className="relative h-28 flex items-center justify-center overflow-hidden"
                style={{ background: "color-mix(in srgb, var(--brand) 5%, var(--bg-main))" }}
              >
                {/* Grid lines decorativas */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--brand)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: "var(--brand)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" fill="white"/>
                      <circle cx="10" cy="8" r="2.2" fill="var(--brand)"/>
                    </svg>
                  </div>
                  <div
                    className="mt-1.5 px-3 py-1 rounded-full text-[10px] font-semibold text-white shadow"
                    style={{ background: "var(--brand)" }}
                  >
                    Tu negocio aquí
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: mockup */}
          <motion.div
            className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0"
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative w-[240px] sm:w-[270px]">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 -z-10 scale-110"
                style={{ background: "var(--brand)" }}
              />

              <motion.button
                type="button"
                onClick={() => {
                  setSrc("/screenshots/ubicacion-mockup.png");
                  setAlt("Ubicación del negocio en la landing");
                  setOpen(true);
                }}
                className="block focus:outline-none w-full"
                aria-label="Ampliar imagen: ubicación del negocio"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <PhoneMockup
                  src="/screenshots/ubicacion-mockup.png"
                  alt="Ubicación del negocio"
                  priority
                />
              </motion.button>

              {/* Floating badge */}
              <div
                className="absolute -left-6 bottom-16 rounded-2xl px-3.5 py-2.5 shadow-lg border border-brand/10"
                style={{ background: "var(--bg-card)", boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">📍</span>
                  <div>
                    <p className="text-[10px] text-muted font-medium">Dirección</p>
                    <p className="text-xs font-semibold text-heading">Abierto en Maps</p>
                  </div>
                </div>
              </div>
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
    </section>
  );
}
