"use client";
import { useState } from "react";
import {
  motion,
  easeOut,
  type Variants,
  type Transition,
} from "framer-motion";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí, es mes a mes." },
  {
    q: "¿Los recordatorios salen desde mi número?",
    a: "Sí, configuramos el envío con tu línea.",
  },
  { q: "¿Necesito instalar algo?", a: "No. Todo funciona en la web." },
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
    <section id="faq" className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        variants={titleIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Preguntas frecuentes
      </motion.h2>

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
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <details
      className="group p-4 rounded-2xl border border-slate-800 bg-slate-900/30 transition-colors hover:border-slate-700 hover:bg-slate-900/50"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
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
          className="ml-3 opacity-80"
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
        <p className="mt-2 text-slate-300">{answer}</p>
      </motion.div>
    </details>
  );
}
