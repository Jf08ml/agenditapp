"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import {
  motion,
  easeOut,
  easeIn,
  type Variants,
  type Transition,
} from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

type Item = {
  src: string;
  alt: string;
  caption: string;
};

const items: Item[] = [
  {
    src: "/screenshots/reserva-paso-1-mockup.png",
    alt: "Paso 1: Selecciona uno o varios servicios y el trabajador",
    caption: "1. Selecciona uno o varios servicios y el trabajador",
  },
  {
    src: "/screenshots/reserva-paso-2-mockup.png",
    alt: "Paso 2: Seleccionar fecha y hora (mismo día o diferentes días)",
    caption: "2. Elige fecha y hora (mismo día o diferentes días)",
  },
  {
    src: "/screenshots/reserva-paso-3-mockup.png",
    alt: "Paso 3: Ve el resumen de la reserva",
    caption: "3. Revisa el resumen antes de confirmar",
  },
  {
    src: "/screenshots/reserva-paso-4-mockup.png",
    alt: "Paso 4: Confirmación automática o por aprobación según configuración del negocio",
    caption: "4. Confirmación automática o por aprobación",
  },
];

export default function Reserva() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  // Transiciones
  const tIn: Transition = { duration: 0.7, ease: easeOut };
  const tInSlow: Transition = { duration: 0.9, ease: easeOut };
  const tOut: Transition = { duration: 0.35, ease: easeIn };

  // Variantes
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: tInSlow },
  };

  const gridContainer: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  const cardItem: Variants = {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: tIn,
    },
    exit: { opacity: 0, y: 12, transition: tOut },
  };

  return (
    <section id="reserva" className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-3xl font-bold"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Reserva en línea
      </motion.h2>

      <motion.p
        className="text-lg text-slate-400 mt-2"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Así funciona la reserva en AgenditApp: el cliente elige servicios, puede
        escoger su <b>trabajador</b>, ve los horarios disponibles por persona o
        de todo el equipo, y agenda para el mismo día o fechas distintas. Del
        lado del negocio, la confirmación puede ser automática o por aprobación
        manual.
      </motion.p>

      <motion.ul
        className="mt-4 grid gap-2 text-lg text-slate-300"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <li>• Varias prestaciones en una sola reserva</li>
        <li>
          • Preferencia por <b>trabajador</b> o “cualquiera”
        </li>
        <li>• Disponibilidad por trabajador o general</li>
        <li>• Agenda para mismo día o en días diferentes</li>
        <li>• Confirmación automática o por aprobación (configurable)</li>
      </motion.ul>

      {/* Grid de pasos visuales */}
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={gridContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        {items.map((item, idx) => (
          <motion.figure
            key={item.src}
            className="relative flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/30 p-4 hover:border-slate-700 hover:bg-slate-900/50 transition-colors"
            variants={cardItem}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            {/* Badge del paso */}
            <motion.span
              className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300"
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { ...tIn, delay: 0.05 },
              }}
            >
              Paso {idx + 1}
            </motion.span>

            {/* Mockup clickable */}
            <motion.button
              onClick={() => openLightbox(item.src, item.alt)}
              className="w-full text-left"
              aria-label={`Ampliar imagen: ${item.alt}`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <PhoneMockup src={item.src} alt={item.alt} priority={idx === 0} />
            </motion.button>

            {/* Caption */}
            <motion.figcaption
              className="mt-3 text-sm text-slate-300 text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: tIn }}
            >
              {item.caption}
            </motion.figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <ImageLightbox
        src={src}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
