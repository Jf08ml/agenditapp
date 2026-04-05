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
        <path d="M3 5h14M3 10h14M3 15h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Precio, duración y detalle",
    desc: "Configura cada servicio con toda la información. Ideal para combos, paquetes y promociones.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M6 3v14M2 8h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Organizado por categorías",
    desc: "Agrupa tus servicios por tipo: uñas, cabello, faciales, masajes… fácil de navegar.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Actualización en tiempo real",
    desc: "Cambia precios o tiempos cuando quieras. Se refleja al instante en tu página de reservas.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M6.5 10.5L9 13l4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Listo para SEO y Google Maps",
    desc: "Títulos, descripciones y datos estructurados listos para que Google te encuentre.",
  },
];

const chips = [
  { emoji: "📋", label: "Catálogo por categorías" },
  { emoji: "💰", label: "Precios visibles 24/7" },
  { emoji: "📱", label: "Vista optimizada mobile" },
  { emoji: "📍", label: "SEO local incluido" },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const slideLeft: Variants = {
  initial: { opacity: 0, x: -36 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const featureItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function Servicios() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  return (
    <section id="servicios" className="py-20">
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
            Catálogo de servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Muestra tus servicios como un{" "}
            <span className="text-brand">menú profesional</span>
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            Tus clientes ven precios, duración y descripción antes de reservar.
            Sin mensajes de &ldquo;¿cuánto vale?&rdquo; ni llamadas innecesarias.
          </p>
        </motion.div>

        {/* ── Split layout ── */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: mockup */}
          <motion.div
            className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0"
            variants={slideLeft}
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
                  setSrc("/screenshots/servicios-precios-mockup.png");
                  setAlt("Catálogo de servicios y precios");
                  setOpen(true);
                }}
                className="block focus:outline-none w-full"
                aria-label="Ampliar imagen: catálogo de servicios y precios"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <PhoneMockup
                  src="/screenshots/servicios-precios-mockup.png"
                  alt="Catálogo de servicios y precios"
                  priority
                />
              </motion.button>

              {/* Floating badge */}
              <div
                className="absolute -right-4 top-10 rounded-2xl px-3.5 py-2.5 shadow-lg border border-brand/10"
                style={{ background: "var(--bg-card)", boxShadow: "var(--shadow-card)" }}
              >
                <p className="text-[10px] text-muted font-medium uppercase tracking-wide">Precio</p>
                <p className="text-sm font-bold text-heading mt-0.5">$45.000</p>
                <p className="text-[10px] text-muted">45 min · Manicure gel</p>
              </div>
            </div>
          </motion.div>

          {/* Right: features */}
          <div className="flex-1 w-full">
            <motion.div
              className="flex flex-col gap-5"
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
                    <p className="text-sm font-semibold text-heading">{f.title}</p>
                    <p className="text-sm text-body mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Chips */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2.5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {chips.map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/6 px-3.5 py-1.5 text-xs font-medium text-brand"
                  variants={featureItem}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <span>{c.emoji}</span>
                  {c.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
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
