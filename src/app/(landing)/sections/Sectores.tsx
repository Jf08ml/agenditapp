"use client";

import Link from "next/link";
import { motion, type Variants, easeOut } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const container: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06 } },
};

const cardIn: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

const sectores = [
  { emoji: "💅", name: "Salones y uñas",         link: "/sectores/salones-belleza" },
  { emoji: "💈", name: "Barberías",               link: "/sectores/barberias" },
  { emoji: "🧖", name: "Spas y masajes",          link: "/sectores/spas" },
  { emoji: "👁️", name: "Lashes y cejas",          link: "/sectores/lash-brow" },
  { emoji: "🩺", name: "Consultorios médicos",    link: "/sectores/consultorios" },
  { emoji: "🦷", name: "Odontología",             link: "/sectores/odontologia" },
  { emoji: "🧠", name: "Psicología",              link: "/sectores/psicologia" },
  { emoji: "🏋️", name: "Entrenadores",            link: "/sectores/gimnasios" },
  { emoji: "🎨", name: "Academias y clases",      link: "/sectores" },
  { emoji: "✨", name: "Estética médica",         link: "/sectores" },
];

export default function Sectores() {
  return (
    <section
      id="sectores"
      className="py-24 border-t border-b border-[#0F172A]/6"
      style={{ background: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Sectores
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Hecho para cualquier negocio de citas.
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            Desde una barbería con un solo asiento hasta un consultorio con 8 profesionales.
            AgenditApp se adapta.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5"
        >
          {sectores.map((s) => (
            <motion.div key={s.name} variants={cardIn}>
              <Link
                href={s.link}
                className="group flex flex-col items-center gap-2.5 rounded-[14px] border
                  border-[#0F172A]/8 bg-[#F8FAFC] px-4 py-5 text-center
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
              >
                <span className="text-[32px] leading-none select-none">{s.emoji}</span>
                <span className="text-[13px] font-semibold text-body group-hover:text-brand transition-colors leading-tight">
                  {s.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA ver todos */}
        <div className="mt-10 text-center">
          <Link
            href="/sectores"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-medium text-sm transition-colors duration-200"
          >
            Ver todos los sectores
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Disponible en */}
        <div className="mt-8 pt-8 border-t border-[#0F172A]/6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-xs text-muted font-medium uppercase tracking-wider">Disponible en</span>
          {[
            { flag: "🇨🇴", label: "Colombia", href: "/" },
            { flag: "🇲🇽", label: "México", href: "/mx" },
            { flag: "🇨🇱", label: "Chile", href: "/cl" },
            { flag: "🇦🇷", label: "Argentina", href: "/ar" },
          ].map(({ flag, label, href }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 text-sm text-body hover:text-brand transition-colors"
            >
              <span className="text-base">{flag}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
