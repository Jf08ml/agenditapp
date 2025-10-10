"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup"; // ajusta la ruta si aplica
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
    <section id="ubicacion" className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Ubicación
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: texto + CTA */}
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-lg text-slate-400">
            La página incluye la <b>dirección y ubicación exacta del negocio</b>
            , para que tus clientes puedan encontrarlo fácilmente. Además,
            pueden <b>abrirla directamente en Google Maps</b> para obtener
            indicaciones.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-emerald-500/30 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0, transition: tIn }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 18px rgba(16, 185, 129, 0.35)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Abrir en Google Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Columna derecha: mockup (reutilizable) */}
        <motion.div
          className="flex justify-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/ubicacion.png",
                "Ubicación del negocio"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: ubicación del negocio"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <PhoneMockup
              src="/screenshots/ubicacion.png"
              alt="Ubicación del negocio"
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
