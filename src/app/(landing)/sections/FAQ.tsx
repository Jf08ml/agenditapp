"use client";
import { useState } from "react";
import ExternalLink from "../components/ui/ExternalLink";
import { WHATSAPP_HREF } from "../components/constants";
import {
  motion,
  easeOut,
  type Variants,
  type Transition,
} from "framer-motion";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. La membresía es mes a mes. Si decides cancelar, no hay cláusulas de permanencia ni cobros ocultos: simplemente dejas de renovar el siguiente mes.",
  },
  {
    q: "¿Cuál es la diferencia entre subdominio y dominio propio?",
    a: "Con subdominio, tu página queda por ejemplo como tu-salon.agenditapp.com (incluido en el plan de $20 USD). Con dominio propio, tu página queda como tusalon.com o tusalon.com.co (plan de $30 USD), lo que da más posicionamiento de marca y confianza al cliente.",
  },
  {
    q: "¿Los recordatorios salen desde mi número?",
    a: "Sí. Configuramos los recordatorios para que salgan desde tu línea de WhatsApp, de manera que tus clientes reconozcan tu negocio y puedan responderte directamente.",
  },
  {
    q: "¿Necesito instalar algo o comprar equipos?",
    a: "No. AgenditApp funciona 100% en la web. Puedes usarlo desde tu celular, tablet o computador con conexión a internet, sin instalaciones complicadas.",
  },
  {
    q: "¿Puedo cambiar de plan después (de subdominio a dominio)?",
    a: "Claro. Si empiezas con el plan de subdominio y luego quieres usar dominio propio, podemos migrarte al plan de $30 USD/mes y ayudarte con la configuración técnica.",
  },
  {
    q: "¿Incluye soporte y ayuda para configurarlo?",
    a: "Sí. Te acompañamos en la configuración inicial de tu landing, servicios y agenda, y tienes soporte por WhatsApp para dudas del día a día.",
  },
];

export default function FAQ() {
  // Transiciones / variantes
  const tIn: Transition = { duration: 0.6, ease: easeOut };

  const titleIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const listIn: Variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemIn: Variants = {
    initial: { opacity: 0, y: 14, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1, transition: tIn },
  };

  return (
    <section id="faq" className="px-6 py-16 max-w-6xl mx-auto">
      <motion.div
        variants={titleIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Preguntas frecuentes
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Resolvemos tus dudas antes de empezar
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Aquí tienes respuestas rápidas sobre la membresía, la promo de Black
          Friday y cómo funciona AgenditApp en el día a día.
        </p>
      </motion.div>

      <motion.div
        className="mt-6 grid gap-4"
        variants={listIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        {FAQS.map((f) => (
          <motion.div key={f.q} variants={itemIn}>
            <FaqItem question={f.q} answer={f.a} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA de contacto al final */}
      <motion.div
        className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-xs sm:text-sm text-slate-300"
        variants={titleIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>¿Tienes otra pregunta específica sobre tu negocio?</span>
        <ExternalLink
          href={WHATSAPP_HREF}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-400 text-slate-950 font-semibold px-3 py-1.5 text-xs sm:text-sm shadow-md hover:bg-sky-300 transition-colors"
        >
          💬 Preguntar por WhatsApp
        </ExternalLink>
      </motion.div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <details
      className="group p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/30 transition-colors hover:border-sky-500/40 hover:bg-slate-900/60"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100">
        <span>{question}</span>

        {/* Chevron animado */}
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: easeOut }}
          className="ml-1 opacity-80 group-hover:opacity-100"
        >
          <path
            d="M5 7l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </summary>

      {/* Contenido con height:auto animado */}
      <motion.div
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: easeOut }}
        style={{ overflow: "hidden" }}
      >
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </details>
  );
}
