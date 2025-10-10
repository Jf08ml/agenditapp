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
      <div className="flex items-center justify-between border-t border-slate-800 pt-6 gap-4 flex-wrap">
        {/* Año con ligera entrada */}
        <motion.span variants={itemIn}>
          © {new Date().getFullYear()} AgenditApp
        </motion.span>

        {/* Nav con stagger y micro-interacciones */}
        <motion.nav className="flex gap-4" variants={itemIn}>
          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <ExternalLink href="/terminos">Términos</ExternalLink>
          </motion.span>

          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={underlineStyle}
          >
            <ExternalLink href="/privacidad">Privacidad</ExternalLink>
          </motion.span>

          {/* Pulso infinito sutil en WhatsApp + hover más notorio */}
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
              textShadow: "0 0 14px rgba(56, 189, 248, 0.45)", // brillo suave
            }}
            whileTap={{ scale: 0.97 }}
            className={underlineStyle}
          >
            <ExternalLink href={WHATSAPP_HREF}>WhatsApp</ExternalLink>
          </motion.span>
        </motion.nav>
      </div>

      {/* Créditos con entrada sutil */}
      <motion.p className="mt-4 text-xs text-slate-500" variants={itemIn}>
        Software fabricado por{" "}
        <span className="inline-block">
          <ExternalLink
            href="https://zybizobazar.com"
            className="underline decoration-slate-600 hover:decoration-slate-300"
          >
            zybizobazar.com
          </ExternalLink>
        </span>
        .
      </motion.p>
    </motion.footer>
  );
}
