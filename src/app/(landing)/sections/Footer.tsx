"use client";

import Link from "next/link";
import Image from "next/image";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, easeOut, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemIn: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const NAV_LINKS = [
  { label: "Sectores", href: "/sectores" },
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Precios", href: "/precios" },
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
];

const SECTOR_LINKS = [
  { label: "Salones de belleza", href: "/sectores/salones-belleza" },
  { label: "Barberías", href: "/sectores/barberias" },
  { label: "Spas y masajes", href: "/sectores/spas" },
  { label: "Consultorios", href: "/sectores/consultorios" },
  { label: "Psicólogos", href: "/sectores/psicologia" },
  { label: "Odontólogos", href: "/sectores/odontologia" },
];

export default function Footer() {
  return (
    <motion.footer
      className="rounded-t-[28px] overflow-hidden mt-8"
      style={{ boxShadow: "0 -4px 32px rgba(15,23,42,0.06)" }}
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* ── CTA band ── */}
      <div className="py-20 px-6 sm:px-8">
        <motion.div
          variants={fadeInUp}
          className="max-w-6xl mx-auto relative rounded-[28px] px-6 py-12 sm:px-16 sm:py-16 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1D4ED8 0%, oklch(0.45 0.18 280) 100%)",
            color: "white",
          }}
        >
          {/* Radial overlays */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(37,211,102,0.18), transparent 50%)",
              opacity: 0.5,
            }}
          />

          <div className="relative">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: "rgba(37,211,102,0.2)", color: "#86efac" }}
            >
              ¿Listo?
            </span>

            <h2
              className="text-[clamp(26px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-balance m-0 mx-auto"
              style={{ maxWidth: 680, color: "white" }}
            >
              Tu próxima cita podría reservarse{" "}
              <span
                style={{
                  fontFamily:
                    "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                mientras lees esto.
              </span>
            </h2>

            <p
              className="mt-4 text-[16px] leading-relaxed mx-auto"
              style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}
            >
              Únete a más de 200 negocios en Latinoamérica que ya reciben
              reservas 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <DemoCtaButton
                className="inline-flex items-center justify-center rounded-[12px] px-6 py-3.5 text-[15px] font-semibold cursor-pointer transition-colors"
                style={{ background: "var(--warm)", color: "white" }}
              >
                Crear mi demo gratis
              </DemoCtaButton>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center rounded-[12px] px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-white/15"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                }}
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <motion.div variants={itemIn} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-text.png"
                alt="AgenditApp"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Sistema de agendamiento online para negocios de belleza, bienestar
              y servicios profesionales en Latinoamérica.
            </p>
            <DemoCtaButton className="inline-flex items-center gap-2 rounded-[10px] border border-brand/25 text-brand text-sm font-medium px-4 py-2 hover:bg-brand/6 transition-colors cursor-pointer">
              💬 Solicitar demo
            </DemoCtaButton>
          </motion.div>

          {/* Product links */}
          <motion.div variants={itemIn}>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">
              Producto
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sectors */}
          <motion.div variants={itemIn}>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">
              Sectores
            </p>
            <ul className="flex flex-col gap-2.5">
              {SECTOR_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact / trust */}
          <motion.div variants={itemIn}>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">🌎</span>
                <span>Colombia, México, Costa Rica, Chile y más</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">⏰</span>
                <span>Soporte por WhatsApp · Lun–Sáb</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">🔒</span>
                <span>Sin permanencia. Cancela cuando quieras.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          variants={itemIn}
          className="mt-10 pt-6 border-t border-brand/10 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} AgenditApp. Todos los derechos
            reservados.{" "}
            <span className="text-muted/60">
              Hecho con ❤️ para negocios que viven de las citas.
            </span>
          </p>
          <p className="text-xs text-muted/60">
            Software por{" "}
            <a
              href="https://zybizobazar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted/30 hover:text-muted hover:decoration-muted transition-colors"
            >
              zybizobazar.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
