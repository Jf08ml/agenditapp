"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import {
  motion,
  easeOut,
  type Variants,
  type Transition,
} from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

export default function Servicios() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.7, ease: easeOut };
  const tInFast: Transition = { duration: 0.55, ease: easeOut };

  // Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: tInFast },
  };

  const leftCol: Variants = {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { ...tIn, when: "beforeChildren" },
    },
  };

  const rightCol: Variants = {
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { ...tIn, when: "beforeChildren" },
    },
  };

  const listContainer: Variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const listItem: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: tInFast },
  };

  const chipsContainer: Variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const chipItem: Variants = {
    initial: { opacity: 0, y: 10, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: tInFast },
  };

  return (
    <section id="servicios" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Encabezado */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Catálogo de servicios
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Muestra tus servicios como un{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            menú profesional
          </span>
        </h2>

        <motion.p
          className="text-lg text-slate-400 mt-3"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          Configura tu catálogo con precios, duración y descripciones claras.
          Tus clientes ven todo desde tu landing de bienvenida y reservan sin
          tener que escribirte para preguntar “¿cuánto vale?”.
        </motion.p>
      </motion.div>

      {/* Layout: texto + mockup */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Lado izquierdo: bullets/beneficios */}
        <motion.div
          variants={leftCol}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.ul
            className="space-y-4 text-sm sm:text-base text-slate-300"
            variants={listContainer}
          >
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Publica cada servicio con{" "}
              <span className="font-semibold text-slate-50">
                precio, duración y detalle
              </span>{" "}
              (ideal para combos, paquetes y promociones).
            </motion.li>
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Organiza tu catálogo por{" "}
              <span className="font-semibold text-slate-50">
                categorías
              </span>{" "}
              (uñas, pestañas, cabello, faciales, masajes…).
            </motion.li>
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Compatible con{" "}
              <span className="font-semibold text-slate-50">SEO local</span>:
              títulos, descripción y datos listos para que Google te entienda.
            </motion.li>
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Vista optimizada para móvil y escritorio: se ve como{" "}
              <span className="font-semibold text-slate-50">
                carta digital
              </span>{" "}
              en el celular de tu cliente.
            </motion.li>
          </motion.ul>

          {/* Chips / highlights */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={chipsContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1.5 text-xs sm:text-sm text-emerald-200"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span>📋</span>
              <span>Catálogo dinámico por categorías</span>
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1.5 text-xs sm:text-sm text-emerald-200"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span>💰</span>
              <span>Precios visibles 24/7</span>
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1.5 text-xs sm:text-sm text-emerald-200"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span>📍</span>
              <span>Listo para SEO y Google Maps</span>
            </motion.span>
          </motion.div>

          {/* Nota pequeña */}
          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-xs sm:text-sm text-slate-500"
          >
            Puedes actualizar precios, tiempos y descripciones cuando quieras;
            tus cambios se reflejan de inmediato en tu landing.
          </motion.p>
        </motion.div>

        {/* Lado derecho: PhoneMockup reutilizable */}
        <motion.div
          className="relative flex justify-center"
          variants={rightCol}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Glow detrás del mockup */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <motion.button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/servicios-precios-mockup.png",
                "Catálogo de servicios y precios"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: catálogo de servicios y precios"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <div className="drop-shadow-[0_25px_60px_rgba(15,23,42,0.9)]">
              <PhoneMockup
                src="/screenshots/servicios-precios-mockup.png"
                alt="Catálogo de servicios y precios"
                priority
              />
            </div>
            <span className="mt-3 block text-center text-xs sm:text-sm text-slate-400">
              Ver pantalla completa
            </span>
          </motion.button>
        </motion.div>
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
