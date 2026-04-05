"use client";

import { useState } from "react";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";

const FAQS = [
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. La membresía es mes a mes. Si decides cancelar, no hay cláusulas de permanencia ni cobros ocultos: simplemente dejas de renovar el siguiente mes.",
  },
  {
    q: "¿Cuál es la diferencia entre subdominio y dominio propio?",
    a: "Con subdominio, tu página queda como tu-salon.agenditapp.com (incluido en los planes Básico y Esencial). Con dominio propio, queda como tusalon.com o tusalon.com.co (plan Marca Propia), lo que da más posicionamiento de marca y confianza al cliente.",
  },
  {
    q: "¿Los recordatorios salen desde mi número?",
    a: "Sí. Configuramos los recordatorios para que salgan desde tu línea de WhatsApp Business, de manera que tus clientes reconozcan tu negocio y puedan responderte directamente.",
  },
  {
    q: "¿Necesito instalar algo o comprar equipos?",
    a: "No. AgenditApp funciona 100% en la web. Puedes usarlo desde tu celular, tablet o computador con conexión a internet, sin instalaciones ni equipos adicionales.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Claro. Si empiezas con el plan Básico o Esencial y luego quieres dominio propio, te migramos al plan Marca Propia y te acompañamos con la configuración técnica.",
  },
  {
    q: "¿Incluye soporte para configurarlo?",
    a: "Sí. Te acompañamos en la configuración inicial de tu landing, servicios y agenda, y tienes soporte por WhatsApp para dudas del día a día.",
  },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemIn: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Resolvemos tus dudas{" "}
            <span className="text-brand">antes de empezar</span>
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            Respuestas rápidas sobre la membresía, los planes y cómo funciona
            AgenditApp en el día a día de tu negocio.
          </p>
        </motion.div>

        {/* ── FAQ grid ── */}
        <motion.div
          className="grid gap-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FAQS.map((f) => (
            <motion.div key={f.q} variants={itemIn}>
              <FaqItem question={f.q} answer={f.a} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-[16px] border border-brand/12 bg-bg-card px-6 py-5"
          style={{ boxShadow: "var(--shadow-card)" }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm text-body text-center sm:text-left">
            ¿Tienes alguna pregunta específica sobre tu negocio?
          </p>
          <DemoCtaButton className="flex-shrink-0 inline-flex items-center gap-2 rounded-[10px] bg-brand text-white font-semibold px-4 py-2.5 text-sm hover:bg-brand-hover transition-colors cursor-pointer shadow-sm">
            💬 Preguntar por WhatsApp
          </DemoCtaButton>
        </motion.div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className={`w-full text-left rounded-[14px] border bg-bg-card transition-all duration-200 ${
        open
          ? "border-brand/30 shadow-[0_0_0_1px_color-mix(in_srgb,var(--brand)_15%,transparent)]"
          : "border-brand/12 hover:border-brand/25"
      }`}
      style={{ boxShadow: open ? undefined : "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between gap-4 px-5 py-4">
        <span className={`text-sm font-semibold leading-snug transition-colors ${open ? "text-brand" : "text-heading"}`}>
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
            open ? "bg-brand text-white rotate-45" : "bg-brand/8 text-brand"
          }`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={2.5} d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: easeOut } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-5 pb-4 text-sm text-body leading-relaxed border-t border-brand/8 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
