"use client";

import { motion, easeOut, type Variants, type Transition } from "framer-motion";

export default function Sectores() {
  const tIn: Transition = { duration: 0.8, ease: easeOut };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  const container: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const sectores = [
    { icon: "💅", label: "Salones de belleza y uñas" },
    { icon: "💈", label: "Barberías y barber shops" },
    { icon: "💆‍♀️", label: "Spas, cabinas y masajes" },
    { icon: "🧴", label: "Lash & brow studios" },
    { icon: "🏋️‍♀️", label: "Entrenadores y estudios fitness" },
    { icon: "🩺", label: "Consultorios y estética médica" },
    { icon: "📚", label: "Academias y escuelas de formación" },
    { icon: "🧘‍♀️", label: "Terapeutas y bienestar integral" },
  ];

  return (
    <section
      id="sectores"
      className="px-6 py-16 max-w-6xl mx-auto"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Sectores
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Ideal para negocios que viven de las citas
        </h2>
        <p className="text-lg text-slate-400 mt-3">
          AgenditApp se adapta a cualquier negocio de servicios que necesite
          organizar reservas, recordatorios y clientes sin complicarse con
          sistemas complejos.
        </p>
      </motion.div>

      {/* Grid de sectores */}
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {sectores.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 backdrop-blur-sm hover:border-sky-400/50 hover:bg-slate-900/70 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-lg">
              {s.icon}
            </span>
            <span className="text-sm md:text-base text-slate-100">
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
