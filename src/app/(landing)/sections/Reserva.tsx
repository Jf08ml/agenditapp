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
    caption: "El cliente elige uno o varios servicios y su profesional favorito.",
  },
  {
    src: "/screenshots/reserva-paso-2-mockup.png",
    alt: "Paso 2: Seleccionar fecha y hora (mismo día o diferentes días)",
    caption:
      "Ve horarios disponibles por persona o de todo el equipo, incluso en días distintos.",
  },
  {
    src: "/screenshots/reserva-paso-3-mockup.png",
    alt: "Paso 3: Ve el resumen de la reserva",
    caption: "Revisa el resumen de la cita antes de confirmar en un solo vistazo.",
  },
  {
    src: "/screenshots/reserva-paso-4-mockup.png",
    alt: "Paso 4: Confirmación automática o por aprobación según configuración del negocio",
    caption:
      "La reserva queda confirmada al instante o pasa a aprobación, según tu configuración.",
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

  const container: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
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
    <section id="reserva" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header de sección */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Reserva en línea
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Tus clientes reservan en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            4 pasos simples
          </span>
        </h2>

        <motion.p
          className="text-lg text-slate-400 mt-3"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          Envías tu enlace de reserva por WhatsApp, Instagram o página web. El
          cliente elige servicios, horario y trabajador, y en cuestión de
          segundos su cita queda registrada en tu agenda, con opción de
          confirmación automática o manual.
        </motion.p>
      </motion.div>

      {/* Bullets de beneficios */}
      <motion.ul
        className="mt-5 grid gap-2 text-sm sm:text-base text-slate-300"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <li>• Varias prestaciones en una sola reserva, sin chats eternos.</li>
        <li>
          • Preferencia por <b>trabajador específico</b> o “cualquiera disponible”.
        </li>
        <li>• Disponibilidad en tiempo real por trabajador o general.</li>
        <li>• Agenda para el mismo día o en diferentes fechas sin complicaciones.</li>
        <li>• Confirmación automática o por aprobación, según cómo trabajes.</li>
        <li>• Sin apps adicionales: todo desde un enlace que puedes compartir.</li>
      </motion.ul>

      {/* Grid de pasos visuales */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        {items.map((item, idx) => (
          <motion.figure
            key={item.src}
            className="relative flex flex-col items-center rounded-2xl border border-slate-800/80 bg-slate-900/40 px-4 pt-7 pb-4 hover:border-sky-500/40 hover:bg-slate-900/70 transition-colors backdrop-blur-sm shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
            variants={cardItem}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            {/* Badge del paso */}
            <motion.span
              className="absolute left-1 top-1 inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 uppercase tracking-wide"
              initial={{ opacity: 0, y: -6 }}
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
              <PhoneMockup
                src={item.src}
                alt={item.alt}
                priority={idx === 0}
              />
            </motion.button>

            {/* Caption */}
            <motion.figcaption
              className="mt-3 text-xs sm:text-sm text-slate-200 text-center leading-snug"
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
