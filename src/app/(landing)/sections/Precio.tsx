"use client";
import ExternalLink from "../components/ui/ExternalLink";
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
    <section id="precio" className="px-6 py-12 max-w-6xl mx-auto">
      {/* Título con entrada suave */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Membresía Premium
      </motion.h2>

      {/* Tarjeta principal con elevación */}
      <motion.div
        className="mt-6 p-6 rounded-2xl border border-slate-800 bg-slate-900/30"
        variants={cardIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
        transition={tIn}
      >
        {/* Intro */}
        <motion.p className="text-lg text-slate-300" variants={fadeInUp}>
          Accede a todas las funcionalidades de <b>AgenditApp</b> mediante una
          <b> suscripción mensual</b>. Ideal para negocios que quieren
          digitalizar su agenda, automatizar recordatorios y proyectar una
          imagen profesional.
        </motion.p>

        {/* Lista con stagger */}
        <motion.ul
          className="mt-4 grid gap-2 text-slate-300"
          variants={listContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            "Página personalizada (dominio o subdominio)",
            "Uso completo de la plataforma (reservas ilimitadas)",
            "Panel administrativo",
            "Recordatorios automáticos por WhatsApp",
            "Landing de bienvenida",
            "Soporte básico",
            "Sin cláusulas ni permanencias",
          ].map((txt) => (
            <motion.li
              key={txt}
              variants={listItem}
              className="flex items-start gap-2"
            >
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>{txt}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTAs con micro-interacciones */}
        <div className="mt-6 flex gap-3 flex-wrap">
          {/* Wrapper animado para no tocar el ExternalLink interno */}
          <motion.span
            // Pulso infinito sutil + hover potente
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 1,
              ease: easeIn,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink
              href={WHATSAPP_HREF}
              className="px-5 py-3 rounded-xl bg-sky-400 text-black font-bold inline-block shadow-md"
            >
              Contactar a ventas
            </ExternalLink>
          </motion.span>

          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <ExternalLink
              href="#faq"
              className="px-5 py-3 rounded-xl border border-slate-600 inline-block"
            >
              Preguntas frecuentes
            </ExternalLink>
          </motion.span>
        </div>

        {/* Nota inferior */}
        <motion.p className="mt-4 text-sm text-slate-400" variants={fadeInUp}>
          * Pago mensual — sin cláusulas de permanencia.
        </motion.p>
      </motion.div>
    </section>
  );
}
