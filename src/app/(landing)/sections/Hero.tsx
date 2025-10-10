"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import ExternalLink from "../components/ui/ExternalLink";
import Badge from "../components/ui/Badge";
import { WHATSAPP_HREF } from "../components/constants";
import { PhoneMockup } from "../components/ui/PhoneMockup"; // <- usamos tu componente

// Framer Motion con tipos y easings
import {
  motion,
  AnimatePresence,
  easeOut,
  easeIn,
  type Variants,
  type Transition,
  easeInOut,
} from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
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

  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.8, ease: easeOut };
  const tInFast: Transition = { duration: 0.7, ease: easeOut };
  const tOut: Transition = { duration: 0.4, ease: easeIn };
  const tOutFast: Transition = { duration: 0.35, ease: easeIn };

  // Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: tIn },
    exit: { opacity: 0, y: 20, transition: tOut },
  };

  const fadeInDown: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0, transition: tInFast },
    exit: { opacity: 0, y: -20, transition: tOutFast },
  };

  const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: tIn },
    exit: { opacity: 0, x: -20, transition: tOut },
  };

  const fadeInRight: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: tIn },
    exit: { opacity: 0, x: 20, transition: tOut },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="hero"
        className="relative"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0, y: 20, transition: tOutFast }}
      >
        {/* Fondo con zoom de entrada al cargar */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1.1, ease: easeOut },
          }}
          exit={{ scale: 1.02, opacity: 0, transition: tOutFast }}
        >
          <Image
            src="/fondo.png"
            alt="Fondo de AgenditApp"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </motion.div>

        {/* Header: entra on-scroll (por si hay contenido arriba) */}
        <motion.header
          className="px-6 pt-6 max-w-6xl mx-auto flex items-center justify-between"
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/logo_dorado.png"
              alt="AgenditApp"
              width={250}
              height={250}
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <ExternalLink href="#reserva" className="hover:underline">
              Reserva en línea
            </ExternalLink>
            <ExternalLink href="#servicios" className="hover:underline">
              Servicios
            </ExternalLink>
            <ExternalLink href="#ubicacion" className="hover:underline">
              Ubicación
            </ExternalLink>
            <ExternalLink href="#precio" className="hover:underline">
              Membresía
            </ExternalLink>
            <ExternalLink href="#faq" className="hover:underline">
              FAQ
            </ExternalLink>
            <ExternalLink
              href={WHATSAPP_HREF}
              className="px-3 py-2 rounded-xl bg-sky-400 text-black font-bold"
            >
              Contactar ventas
            </ExternalLink>
          </nav>
        </motion.header>

        {/* Contenido */}
        <div className="px-6 py-20 max-w-6xl mx-auto">
          {/* Badge + H1: on-scroll */}
          <motion.div
            className="max-w-3xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Badge>
              Reserva en línea 24/7 · Landing de bienvenida incluida
            </Badge>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Software de agendamiento con recordatorios desde tu WhatsApp
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Columna IZQ: texto + CTAs — on-scroll */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mt-4 text-xl text-slate-200/90">
                Recibe reservas online 24/7 en tu <b>landing de bienvenida</b>,
                organiza tu agenda y evita ausencias con recordatorios enviados
                desde tu número. Sin instalaciones ni permanencias.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a
                  href={WHATSAPP_HREF}
                  className="px-5 py-3 text-lg rounded-xl bg-sky-400 text-black font-bold inline-block shadow-lg"
                  animate={{
                    scale: [1, 1.05, 1], // pulso suave
                  }}
                  transition={{
                    duration: 2,
                    ease: easeInOut,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactar ventas
                </motion.a>
                <a
                  href="#precio"
                  className="px-5 py-3 text-lg rounded-xl border border-slate-300/50 text-white"
                >
                  Ver membresía
                </a>
              </div>

              <ul className="mt-6 grid gap-2 text-md text-slate-200/90">
                <li>
                  • Página personalizada (marca blanca) + landing de bienvenida
                </li>
                <li>• Agenda visual y simple</li>
                <li>• Recordatorios automáticos por WhatsApp</li>
                <li>• Clientes, empleados, servicios y caja</li>
                <li>• Analíticas: horas pico y servicios top</li>
                <li>• Planes de fidelidad y referidos</li>
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-slate-300/90">Síguenos:</span>
                <a
                  href="https://www.instagram.com/zybizobazar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/zybizo.bazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
                >
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@zybizobazar?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
                >
                  TikTok
                </a>
              </div>
            </motion.div>

            {/* Columna DER: mockups + lightbox — on-scroll */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-6"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                onClick={() =>
                  openLightbox(
                    "/screenshots/home.png",
                    "Inicio de bienvenida con botón de reserva"
                  )
                }
                className="block focus:outline-none"
                aria-label="Ampliar: inicio de bienvenida"
                whileHover={{ scale: 1.04, rotate: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="md:rotate-[-3deg]">
                  <PhoneMockup
                    src="/screenshots/home-mockup.png"
                    alt="Inicio de bienvenida con botón de reserva"
                    priority
                  />
                </div>
              </motion.button>

              <motion.button
                onClick={() =>
                  openLightbox(
                    "/screenshots/calendario-mockup.png",
                    "Calendario de citas de AgenditApp mostrando citas agendadas"
                  )
                }
                className="block focus:outline-none"
                aria-label="Ampliar: calendario de citas"
                whileHover={{ scale: 1.04, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="md:translate-y-2 md:rotate-2">
                  <PhoneMockup
                    src="/screenshots/calendario-mockup.png"
                    alt="Panel de AgenditApp mostrando una agenda y recordatorios"
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* CTA móvil fija — entra on-scroll si el usuario llega al final en mobile */}
        <motion.div
          className="md:hidden sticky bottom-3 z-50 mx-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2, ease: easeOut },
          }}
          viewport={{ once: true, amount: 0.5 }}
          exit={{ opacity: 0, y: 20, transition: tOut }}
        >
          <div className="rounded-2xl bg-sky-400 text-black shadow-lg flex items-center justify-between px-4 py-3">
            <span className="font-semibold">Pide tu demo</span>
            <a
              href={WHATSAPP_HREF}
              className="px-3 py-2 rounded-xl bg-black/10 font-bold"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Lightbox */}
        <ImageLightbox
          src={src}
          alt={alt}
          open={open}
          onClose={() => setOpen(false)}
        />
      </motion.section>
    </AnimatePresence>
  );
}
