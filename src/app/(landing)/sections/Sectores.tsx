"use client";
import { motion, easeOut, type Variants, type Transition } from "framer-motion";

export default function Sectores() {
  const tIn: Transition = { duration: 0.8, ease: easeOut };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  return (
    <section id="sectores" className="px-6 py-12 max-w-6xl mx-auto">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-3xl font-bold">Ideal para</h2>
        <p className="text-lg text-slate-400 mt-2">
          Salones de belleza, barberías, spas, terapeutas, entrenadores,
          consultorios y academias.
        </p>
      </motion.div>
    </section>
  );
}
