"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import ExternalLink from "../components/ui/ExternalLink";
import Badge from "../components/ui/Badge";
import { WHATSAPP_HREF } from "../components/constants";
import { PhoneMockup } from "../components/ui/PhoneMockup";

// Framer Motion
import {
  motion,
  AnimatePresence,
  easeOut,
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

  // Transiciones
  const tIn: Transition = { duration: 0.8, ease: easeOut };

  // Variantes de animación
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const fadeInDown: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  // Animación continua de flotación para los teléfonos
  const floatingAnimation: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="hero"
        // pb-24 en mobile para que el contenido no quede tapado por la CTA fija
        className="relative min-h-screen flex flex-col pb-24 md:pb-0 overflow-hidden"
        initial="initial"
        animate="animate"
      >
        {/* --- FONDO --- */}
        <div className="absolute inset-0 -z-10 select-none">
          <motion.div
            className="relative h-full w-full"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1.2 } }}
          >
            {/* Desktop/Tablet fondo */}
            <Image
              src="/fondo-agenditapp.png"
              alt="Fondo de AgenditApp"
              fill
              priority
              className="object-cover opacity-90 hidden md:block"
            />
            {/* Mobile fondo */}
            <Image
              src="/fondo-agenditapp-mobile.png"
              alt="Fondo de AgenditApp Mobile"
              fill
              priority
              className="object-cover opacity-90 block md:hidden"
            />
            {/* Capa oscura general */}
            <div className="absolute inset-0 bg-slate-950/80" />
            {/* Gradiente azul superior para dar profundidad */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/20 via-slate-950/0 to-slate-950/0" />
          </motion.div>
        </div>

        {/* --- HEADER --- */}
        <motion.header
          className="w-full px-4 pt-4 sm:pt-6 z-40"
          variants={fadeInDown}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between p-3 sm:px-6 sm:py-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl">
            {/* Logo y Tagline */}
            <div className="flex items-center gap-4">
              <div className="relative h-8 w-auto sm:h-10">
                <Image
                  src="/logo_dorado.png"
                  alt="AgenditApp Logo"
                  width={180}
                  height={60}
                  priority
                  className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                />
              </div>
              {/* Oculto en móviles muy pequeños, visible en tablet/desktop */}
              <div className="hidden md:flex flex-col border-l border-white/10 pl-4">
                <span className="text-[10px] uppercase tracking-widest text-sky-400 font-bold">
                  Software de agendamiento
                </span>
                <span className="text-xs text-slate-300">
                  Agenda · Recordatorios · Página propia
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              {["Reserva", "Servicios", "Ubicación", "Membresía"].map(
                (item) => (
                  <ExternalLink
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </ExternalLink>
                )
              )}
              <ExternalLink
                href={WHATSAPP_HREF}
                className="ml-2 px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:scale-105"
              >
                Contactar ventas
              </ExternalLink>
            </nav>

            {/* Mobile CTA (Small) */}
            <a
              href={WHATSAPP_HREF}
              className="lg:hidden px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </motion.header>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* COLUMNA IZQUIERDA */}
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeInUp}>
                <Badge>✨ Landing de bienvenida incluida</Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-xl text-balance"
              >
                Tu agenda llena, <br className="hidden lg:block" />
                sin perder tiempo en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">
                  WhatsApp
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-xl text-balance leading-relaxed"
              >
                Automatiza tu negocio con un software de agendamiento completo.
                Reservas 24/7, recordatorios por WhatsApp y tu propia página
                personalizada.
              </motion.p>

              {/* --- BLOQUE BLACK FRIDAY + BOTONES --- */}
              <motion.div
                variants={fadeInUp}
                className="relative mt-10 flex flex-col items-center lg:items-start gap-6"
              >
                {/* Banner de oferta Black Friday */}
                <div className="relative overflow-hidden rounded-2xl border border-yellow-400/50 bg-gradient-to-r from-black via-slate-900 to-black px-6 py-3 shadow-[0_0_35px_rgba(250,204,21,0.35)] max-w-xl">
                  {/* Brillo animado en el fondo con Framer */}
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(120deg,rgba(250,204,21,0)_0%,rgba(250,204,21,0.3)_50%,rgba(250,204,21,0)_100%)] bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% center", "200% center"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                    <span className="text-yellow-400 font-extrabold text-lg sm:text-xl tracking-wide uppercase">
                      🎉 Descuento imperdible de Black Friday
                    </span>
                    <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-md animate-pulse">
                      -50% por tiempo limitado
                    </span>
                  </div>
                </div>

                {/* Botones debajo */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold 
                      shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] 
                      transition-all flex items-center gap-2 relative overflow-hidden"
                  >
                    🚀 Solicitar Demo Gratis
                  </motion.a>

                  <a
                    href="#membresía"
                    className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white 
                      hover:bg-white/10 backdrop-blur-sm font-medium transition-colors"
                  >
                    Ver planes
                  </a>
                </div>
              </motion.div>

              {/* Bullets / Features */}
              <motion.ul
                variants={fadeInUp}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-400 text-left"
              >
                {[
                  "Agenda visual simple",
                  "Recordatorios automáticos",
                  "Gestión de caja y empleados",
                  "Página web personalizada",
                  "Analíticas de horas pico y servicios top",
                  "Mensajes de WhatsApp desde tu número",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,1)]" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* COLUMNA DERECHA: Mockups */}
            <div className="relative flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
              {/* Glow detrás de los teléfonos */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-500/20 blur-[100px] rounded-full -z-10" />

              <motion.div
                className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-[400px] sm:h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: easeOut }}
                viewport={{ once: true }}
              >
                {/* Teléfono Principal */}
                <motion.div
                  className="absolute z-20 left-4 sm:left-10 top-0 w-[65%] sm:w-[60%]"
                  variants={floatingAnimation}
                  animate="animate"
                >
                  <button
                    onClick={() =>
                      openLightbox(
                        "/screenshots/home-mockup.png",
                        "Vista Cliente"
                      )
                    }
                    className="w-full focus:outline-none hover:cursor-zoom-in transition-transform active:scale-95"
                  >
                    <div className="rotate-[-6deg] hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
                      <PhoneMockup
                        src="/screenshots/home-mockup.png"
                        alt="App Screenshot"
                      />
                    </div>
                  </button>
                </motion.div>

                {/* Teléfono Secundario */}
                <motion.div
                  className="absolute z-10 right-4 sm:right-0 bottom-8 sm:bottom-12 w-[65%] sm:w-[60%]"
                  variants={floatingAnimation}
                  animate="animate"
                  transition={{ delay: 1 }}
                >
                  <button
                    onClick={() =>
                      openLightbox(
                        "/screenshots/calendario-mockup.png",
                        "Vista Calendario"
                      )
                    }
                    className="w-full focus:outline-none hover:cursor-zoom-in transition-transform active:scale-95"
                  >
                    <div className="rotate-[6deg] hover:rotate-0 transition-transform duration-500 drop-shadow-2xl opacity-90 hover:opacity-100">
                      <PhoneMockup
                        src="/screenshots/calendario-mockup.png"
                        alt="Calendar Screenshot"
                      />
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- STICKY MOBILE CTA --- */}
        <AnimatePresence>
          <motion.div
            className="md:hidden fixed bottom-4 left-4 right-4 z-50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">
                  ¿Listo para organizar tu salón?
                </span>
                <span className="text-sky-400 text-xs">
                  Prueba gratis hoy mismo
                </span>
              </div>
              <a
                href={WHATSAPP_HREF}
                className="bg-sky-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl shadow-lg whitespace-nowrap"
              >
                Demo en WhatsApp
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

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
