"use client";
import { WHATSAPP_HREF } from "../components/constants";
import {
  motion,
  easeOut,
  easeIn,
  type Variants,
  type Transition,
} from "framer-motion";

export default function Precio() {
  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.7, ease: easeOut };
  const tInFast: Transition = { duration: 0.5, ease: easeOut };
  const tOut: Transition = { duration: 0.35, ease: easeIn };

  // Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0, transition: tIn },
    exit: { opacity: 0, y: 12, transition: tOut },
  };

  const cardIn: Variants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ...tIn, when: "beforeChildren" },
    },
  };

  const listContainer: Variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const listItem: Variants = {
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0, transition: tInFast },
  };

  return (
    <section id="membresía" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Título */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Planes y precios
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Membresía simple, con todo incluido
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Elige el plan que mejor se adapte a tu negocio. Desde el plan básico
          hasta marca propia con dominio personalizado.
        </p>
      </motion.div>

      {/* Grid de planes */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Plan 1: Básico $30.000 */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 18px 50px rgba(15,23,42,0.75)" }}
          transition={tIn}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">
                Plan Básico
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Para empezar a digitalizar tu negocio.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
              Inicio
            </span>
          </div>

          {/* Precio */}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">
              $10 USD
            </span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Sin cláusulas ni permanencias.
          </p>

          {/* Explicación subdominio */}
          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-700/70 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye un <b>subdominio</b>, por ejemplo:{" "}
              <span className="font-mono text-sky-300">
                tu-salon.agenditapp.com
              </span>
              . Perfecto para comenzar sin complicaciones técnicas.
            </p>
          </div>

          {/* Beneficios */}
          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Reservas ilimitadas y panel administrativo.",
              "Landing de bienvenida + catálogo de servicios.",
              "Gestión de clientes, agenda y caja.",
              "Soporte básico por WhatsApp.",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold inline-block shadow-md text-sm"
              >
                Quiero el plan de $10 USD
              </a>
            </motion.span>
          </div>
        </motion.div>

        {/* Plan 2: Esencial (Subdominio) $50.000 */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 18px 50px rgba(15,23,42,0.75)" }}
          transition={tIn}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">
                Plan Esencial
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Ideal si quieres automatizar y ahorrar tiempo.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-200">
              Popular
            </span>
          </div>

          {/* Precio */}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">
              $15 USD
            </span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Sin cláusulas ni permanencias.
          </p>

          {/* Explicación subdominio */}
          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-700/70 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye un <b>subdominio</b>, por ejemplo:{" "}
              <span className="font-mono text-sky-300">
                tu-salon.agenditapp.com
              </span>
              , más recordatorios automáticos para reducir ausencias.
            </p>
          </div>

          {/* Beneficios */}
          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Todas las funcionalidades de AgenditApp.",
              "Reservas ilimitadas y panel administrativo.",
              "Landing de bienvenida + catálogo de servicios.",
              "✨ Recordatorios automáticos por WhatsApp.",
              "✨ Confirmaciones automáticas de reserva.",
              "Gestión de clientes, agenda y caja.",
              "Soporte básico por WhatsApp.",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-sky-400 text-black font-bold inline-block shadow-md text-sm"
              >
                Quiero el plan de $15 USD
              </a>
            </motion.span>
          </div>
        </motion.div>

        {/* Plan 3: Dominio propio */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm relative overflow-hidden"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 20px 55px rgba(15,23,42,0.85)" }}
          transition={tIn}
        >
          {/* Glow decorativo */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="flex items-start justify-between gap-3 relative">
            <div>
              <h3 className="text-xl font-bold text-white">
                Plan Marca Propia (Dominio)
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Para negocios que quieren reforzar su marca y presencia digital.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
              Más profesional
            </span>
          </div>

          {/* Precio */}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">
              $30 USD
            </span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Sin cláusulas ni permanencias.
          </p>

          {/* Explicación dominio */}
          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-600/80 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye tu <b>propio dominio</b>, por ejemplo:{" "}
              <span className="font-mono text-sky-300">tusalon.com</span> o{" "}
              <span className="font-mono text-sky-300">tusalon.com.co</span>.
              Esto te ayuda a:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm">
              <li>Refuerzar tu marca y que te recuerden más fácil.</li>
              <li>Dar más confianza al cliente al reservar.</li>
              <li>Mejorar tu presencia en Google y redes.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Todas las funcionalidades de AgenditApp.",
              "Reservas ilimitadas y panel administrativo.",
              "Landing de bienvenida con tu dominio propio.",
              "✨ Recordatorios automáticos por WhatsApp.",
              "✨ Confirmaciones automáticas de reserva.",
              "Configuración y soporte para el dominio.",
              "Soporte prioritario por WhatsApp.",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3 relative">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-bold inline-block shadow-md text-sm"
              >
                Quiero el plan de $30 USD
              </a>
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Nota inferior general */}
      <motion.p
        className="mt-6 text-sm text-slate-400"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Todos los planes incluyen acceso completo a la plataforma. Puedes cambiar de
        plan más adelante según las necesidades de tu negocio.
      </motion.p>
    </section>
  );
}
