/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Badge from "../components/ui/Badge";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { WHATSAPP_HREF } from "../components/constants";

// Framer Motion
import {
  motion,
  AnimatePresence,
  easeOut,
  type Variants,
  type Transition,
  easeInOut,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false },
);

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // ====== Premium Motion: Parallax 3D + Glow + Orbits ======
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Suaviza el movimiento para que se sienta "premium"
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.25 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.25 });

  const rotateX = useTransform(sy, [-160, 160], [8, -8]);
  const rotateY = useTransform(sx, [-160, 160], [-10, 10]);
  const glowX = useTransform(sx, [-160, 160], ["30%", "70%"]);
  const glowY = useTransform(sy, [-160, 160], ["30%", "70%"]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // En touch no vale la pena parallax (se siente raro)
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x);
    my.set(y);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const glowPulse: Variants = {
    animate: {
      opacity: [0.35, 0.75, 0.35],
      scale: [1, 1.06, 1],
      transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const orbit: Variants = {
    animate: {
      rotate: 360,
      transition: { duration: 18, repeat: Infinity, ease: "linear" },
    },
  };

  const floatA: Variants = {
    animate: {
      y: [0, -16, 0],
      rotate: [-0.5, 0.5, -0.5],
      transition: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatB: Variants = {
    animate: {
      y: [0, 14, 0],
      rotate: [0.4, -0.4, 0.4],
      transition: { duration: 7.1, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const premiumReveal: Transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
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
          <div className="max-w-7xl mx-auto rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Barra principal */}
            <div className="flex items-center justify-between p-3 sm:px-6 sm:py-4">
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
                {/* Oculto en móviles, visible en tablet/desktop */}
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
                <Link
                  href="/sectores"
                  className="hover:text-white transition-colors"
                >
                  Sectores
                </Link>
                <Link
                  href="/funcionalidades"
                  className="hover:text-white transition-colors"
                >
                  Funcionalidades
                </Link>
                <Link
                  href="/precios"
                  className="hover:text-white transition-colors"
                >
                  Precios
                </Link>
                <a href="#demo" className="hover:text-white transition-colors">
                  Demo
                </a>
                {/* Secundario: registro */}
                <a
                  href="https://app.agenditapp.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Registrarse
                </a>
                {/* Primario: WhatsApp */}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:scale-105"
                >
                  Contactar ventas
                </a>
              </nav>

              {/* Mobile: CTA único + Hamburger */}
              <div className="flex items-center gap-2 lg:hidden">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-400 text-slate-950 text-xs font-bold hover:bg-sky-300 transition-colors"
                >
                  💬 Demo gratis
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu desplegable */}
            {mobileMenuOpen && (
              <nav className="lg:hidden border-t border-white/10 px-3 pb-4 pt-2 flex flex-col gap-1">
                <Link
                  href="/sectores"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💼 <span>Sectores</span>
                </Link>
                <Link
                  href="/funcionalidades"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ⚡ <span>Funcionalidades</span>
                </Link>
                <Link
                  href="/precios"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💰 <span>Precios</span>
                </Link>
                <a
                  href="#demo"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📅 <span>Ver demo</span>
                </a>
                <a
                  href="https://app.agenditapp.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  👤 <span>Registrarse</span>
                </a>
                {/* CTA prominente al fondo del menú */}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:bg-sky-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💬 Contactar ventas por WhatsApp
                </a>
              </nav>
            )}
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

              {/* Botones CTA */}
              <motion.div
                variants={fadeInUp}
                className="relative mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
              style={{ perspective: 1200 }}
            >
              <motion.div
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
                className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] h-[440px] sm:h-[540px] lg:h-[640px]"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={premiumReveal}
                viewport={{ once: true }}
                style={{
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                }}
              >
                {/* Glow inteligente (se mueve con el mouse) */}
                <motion.div
                  className="absolute -inset-10 -z-20 rounded-full blur-[120px]"
                  variants={glowPulse}
                  animate="animate"
                  style={{
                    background:
                      "radial-gradient(circle at var(--gx) var(--gy), rgba(56,189,248,.55), rgba(2,132,199,.18), transparent 60%)",
                    ["--gx" as any]: glowX,
                    ["--gy" as any]: glowY,
                  }}
                />

                {/* Orbits / Rings (muy sutiles) */}
                <div className="absolute inset-0 -z-10">
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10"
                    variants={orbit}
                    animate="animate"
                    style={{ opacity: 0.35 }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10"
                    variants={orbit}
                    animate="animate"
                    style={{ opacity: 0.35 }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 opacity-25" />
                </div>

                {/* Backplate glass */}
                <div className="absolute inset-0 rounded-[2.8rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]" />
                <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-tr from-sky-500/5 via-transparent to-transparent pointer-events-none" />

                {/* Chips flotantes (proof/benefits) */}
                <motion.div
                  variants={floatA}
                  animate="animate"
                  className="absolute -left-2 sm:-left-6 top-10 z-30"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-950/70 border border-white/10 px-3 py-2 shadow-lg">
                    <span className="text-[11px] text-slate-200 font-semibold">
                      ✅ Reservas 24/7
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatB}
                  animate="animate"
                  className="absolute -right-2 sm:-right-6 top-28 z-30"
                  style={{ transform: "translateZ(42px)" }}
                >
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-950/70 border border-white/10 px-3 py-2 shadow-lg">
                    <span className="text-[11px] text-slate-200 font-semibold">
                      ⚡ Recordatorios WhatsApp
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatA}
                  animate="animate"
                  className="absolute left-6 bottom-14 z-30 hidden sm:block"
                  style={{ transform: "translateZ(46px)" }}
                >
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-950/70 border border-white/10 px-3 py-2 shadow-lg">
                    <span className="text-[11px] text-slate-200 font-semibold">
                      📈 Control de horas pico
                    </span>
                  </div>
                </motion.div>

                {/* === Phones stack === */}
                <div className="absolute inset-0">
                  {/* Phone 1 (front) */}
                  <motion.div
                    className="absolute z-20 left-5 sm:left-12 top-7 w-[68%] sm:w-[62%]"
                    variants={floatA}
                    animate="animate"
                    style={{ transform: "translateZ(70px)" }}
                  >
                    <button
                      onClick={() =>
                        openLightbox(
                          "/screenshots/home-mockup-v2.jpeg",
                          "Vista Cliente",
                        )
                      }
                      className="group w-full focus:outline-none hover:cursor-zoom-in active:scale-95 transition-transform"
                    >
                      <div className="relative rotate-[-7deg] group-hover:rotate-[-2deg] transition-transform duration-500 drop-shadow-2xl">
                        <div className="relative rotate-[-7deg] group-hover:rotate-[-2deg] transition-transform duration-500 drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                          <PhoneMockup
                            src="/screenshots/home-mockup-v2.jpeg"
                            alt="App Screenshot"
                          />
                        </div>
                      </div>
                    </button>
                  </motion.div>

                  {/* Phone 2 (back) */}
                  <motion.div
                    className="absolute z-10 right-5 sm:right-1 bottom-10 w-[68%] sm:w-[62%]"
                    variants={floatB}
                    animate="animate"
                    style={{ transform: "translateZ(45px)" }}
                  >
                    <button
                      onClick={() =>
                        openLightbox(
                          "/screenshots/calendario-mockup-v2.jpeg",
                          "Vista Calendario",
                        )
                      }
                      className="group w-full focus:outline-none hover:cursor-zoom-in active:scale-95 transition-transform"
                    >
                      <div className="relative rotate-[7deg] group-hover:rotate-[2deg] transition-transform duration-500 drop-shadow-2xl opacity-90 group-hover:opacity-100">
                        <div className="relative rotate-[-7deg] group-hover:rotate-[-2deg] transition-transform duration-500 drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                          <PhoneMockup
                            src="/screenshots/home-mockup-v2.jpeg"
                            alt="App Screenshot"
                          />
                        </div>
                      </div>
                    </button>
                  </motion.div>
                </div>

                {/* Tiny caption (premium) */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="rounded-2xl bg-slate-950/70 border border-white/10 px-4 py-2 backdrop-blur-md shadow-lg">
                    <span className="text-[11px] text-slate-300">
                      Así se ve tu negocio en{" "}
                      <span className="text-sky-300 font-semibold">
                        menos de 10 minutos
                      </span>
                    </span>
                  </div>
                </div>
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
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl shadow-lg whitespace-nowrap"
              >
                Solicitar Demo
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
