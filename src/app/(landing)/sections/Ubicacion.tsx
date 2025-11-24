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

export default function Ubicacion() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  // TODO: sustituye por tu URL real de Google Maps
  const mapsUrl = "#"; // p. ej. "https://maps.app.goo.gl/xxxxx"

  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.7, ease: easeOut };
  const tOut: Transition = { duration: 0.35, ease: easeIn };

  // Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0, transition: tIn },
    exit: { opacity: 0, x: -20, transition: tOut },
  };

  const fadeInRight: Variants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: tIn },
    exit: { opacity: 0, x: 20, transition: tOut },
  };

  return (
    <section id="ubicación" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Encabezado */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Ubicación
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Que tus clientes lleguen{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            sin tener que preguntar
          </span>
        </h2>

        <p className="text-lg text-slate-400 mt-3">
          Tu landing muestra la <b>dirección exacta</b> de tu negocio, un mapa
          integrado y botones directos para abrir la ruta en Google Maps o Waze.
          Así tus clientes llegan sin perderse y sin tener que escribirte
          “¿dónde queda?”.
        </p>
      </motion.div>

      {/* Layout: texto + mockup */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: texto + CTA */}
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className="mt-2 space-y-3 text-sm sm:text-base text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Muestra la dirección, barrio y ciudad tal como la buscas en Maps.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Botón de <span className="font-semibold text-slate-50">“Cómo llegar”</span>{" "}
              que abre directamente la ruta en la app de mapas del cliente.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Ideal para compartir por WhatsApp, Instagram y Google Business.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/20 transition-colors shadow-[0_0_18px_rgba(16,185,129,0.25)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0, transition: tIn }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 24px rgba(16, 185, 129, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span>📍</span>
              <span>Abrir ruta en Google Maps</span>
            </motion.a>

            <p className="text-xs sm:text-sm text-slate-500">
              Sustituye el enlace por tu URL real de Maps o Waze.
            </p>
          </div>
        </motion.div>

        {/* Columna derecha: mockup */}
        <motion.div
          className="relative flex justify-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Glow detrás del mockup */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <motion.button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/ubicacion-mockup.png",
                "Ubicación del negocio en la landing"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: ubicación del negocio"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <div className="drop-shadow-[0_25px_60px_rgba(15,23,42,0.9)]">
              <PhoneMockup
                src="/screenshots/ubicacion-mockup.png"
                alt="Ubicación del negocio"
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
