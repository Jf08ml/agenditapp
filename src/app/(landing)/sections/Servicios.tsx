"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup"; // ajusta la ruta si es distinta
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
    <section id="servicios" className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-3xl font-bold"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Servicios y precios
      </motion.h2>

      <motion.p
        className="text-lg text-slate-400 mt-2"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Configura tu catálogo y muéstralo en tu landing de bienvenida.
      </motion.p>

      {/* Layout: texto + mockup */}
      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Lado izquierdo: bullets/beneficios */}
        <motion.div
          variants={leftCol}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.ul
            className="space-y-4 text-lg text-slate-300"
            variants={listContainer}
          >
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Publica tu catálogo con precios, duración y descripción.
            </motion.li>
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Compatible con SEO (títulos, meta y datos estructurados).
            </motion.li>
            <motion.li className="flex gap-3" variants={listItem}>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Vista optimizada para móvil y escritorio.
            </motion.li>
          </motion.ul>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={chipsContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span
              className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              Catálogo dinámico
            </motion.span>
            <motion.span
              className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              Precios visibles
            </motion.span>
            <motion.span
              className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300"
              variants={chipItem}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              Preparado para SEO
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Lado derecho: PhoneMockup reutilizable */}
        <motion.div
          className="flex justify-center"
          variants={rightCol}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/servicios-precios.png",
                "Catálogo de servicios y precios"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: catálogo de servicios y precios"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <PhoneMockup
              src="/screenshots/servicios-precios.png"
              alt="Catálogo de servicios y precios"
              priority
            />
            <span className="mt-3 block text-center text-sm text-slate-400">
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
