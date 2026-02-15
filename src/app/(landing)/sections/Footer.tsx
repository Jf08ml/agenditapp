"use client";
import Link from "next/link";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import {
  motion,
  easeOut,
  easeIn,
  type Variants,
  type Transition,
} from "framer-motion";

export default function Footer() {
  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.6, ease: easeOut };
  const tOut: Transition = { duration: 0.3, ease: easeIn };

  // Variants
  const containerIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...tIn, when: "beforeChildren", staggerChildren: 0.08 },
    },
    exit: { opacity: 0, y: 10, transition: tOut },
  };

  const itemIn: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: tIn },
  };

  // Subrayado animado por hover (sin tocar el componente interno)
  const underlineStyle =
    "relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.footer
      className="px-6 py-12 max-w-6xl mx-auto text-sm text-slate-400"
      variants={containerIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="border-t border-slate-800 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Año + texto */}
        <motion.div
          variants={itemIn}
          className="flex flex-col gap-1 text-xs sm:text-sm"
        >
          <span>
            © {new Date().getFullYear()} AgenditApp. Todos los derechos
            reservados.
          </span>
          <span className="text-slate-500 text-[11px] sm:text-xs">
            Hecho con ❤️ para salones, barberías, spas y negocios que viven de
            las citas.
          </span>
        </motion.div>

        {/* Nav con stagger y micro-interacciones */}
        <motion.nav
          className="flex flex-wrap items-center gap-4 justify-start sm:justify-end"
          variants={itemIn}
        >
          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <Link href="/sectores" className="text-xs sm:text-sm">
              Sectores
            </Link>
          </motion.span>

          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <Link href="/funcionalidades" className="text-xs sm:text-sm">
              Funcionalidades
            </Link>
          </motion.span>

          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <Link href="/precios" className="text-xs sm:text-sm">
              Precios
            </Link>
          </motion.span>

          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <Link href="/terminos" className="text-xs sm:text-sm">
              Términos
            </Link>
          </motion.span>

          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <Link href="/privacidad" className="text-xs sm:text-sm">
              Privacidad
            </Link>
          </motion.span>

          {/* WhatsApp como pill CTA sutil */}
          <motion.span
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2,
              ease: easeIn,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{
              scale: 1.07,
              y: -1,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <DemoCtaButton
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/60 px-3 py-1.5 text-xs sm:text-sm text-sky-300 font-semibold shadow-[0_0_14px_rgba(56,189,248,0.35)] hover:bg-sky-400 hover:text-slate-950 hover:shadow-[0_0_22px_rgba(56,189,248,0.6)] transition-colors cursor-pointer"
            >
              <span>💬</span>
              <span>Solicitar Demo</span>
            </DemoCtaButton>
          </motion.span>
        </motion.nav>
      </div>

      {/* Créditos con entrada sutil */}
      <motion.p
        className="mt-4 text-xs text-slate-500"
        variants={itemIn}
      >
        Software fabricado por{" "}
        <span className="inline-block">
          <a
            href="https://zybizobazar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-slate-600 hover:decoration-slate-300"
          >
            zybizobazar.com
          </a>
        </span>
        .
      </motion.p>
    </motion.footer>
  );
}
