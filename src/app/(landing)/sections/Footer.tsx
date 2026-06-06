"use client";

import Link from "next/link";
import Image from "next/image";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, easeOut, type Variants } from "framer-motion";
import { getWhatsappHref, SIGNUP_HREF } from "../components/constants";
import { CO, MX, CL, AR, ES, CR, EC } from "country-flag-icons/react/3x2";
import { Clock, Lock, ChatCircle, type IconWeight } from "@phosphor-icons/react";

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
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Planes y precios", href: "/precios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
];

const COMPARATIVAS_LINKS = [
  { label: "vs Fresha", href: "/vs/fresha" },
  { label: "vs AgendaPro", href: "/vs/agendapro" },
  { label: "vs Booksy", href: "/vs/booksy" },
  { label: "vs Weibook", href: "/vs/weibook" },
];

const SECTOR_LINKS = [
  { label: "Salones de belleza", href: "/sectores/salones-belleza" },
  { label: "Barberías", href: "/sectores/barberias" },
  { label: "Spas y masajes", href: "/sectores/spas" },
  { label: "Consultorios", href: "/sectores/consultorios" },
  { label: "Psicólogos", href: "/sectores/psicologia" },
  { label: "Odontólogos", href: "/sectores/odontologia" },
];

type FlagComponent = React.ComponentType<{ className?: string; title?: string }>;

const COUNTRY_LINKS: { Flag: FlagComponent; label: string; href: string }[] = [
  { Flag: CO, label: "Colombia",   href: "/" },
  { Flag: MX, label: "México",     href: "/mx" },
  { Flag: CL, label: "Chile",      href: "/cl" },
  { Flag: AR, label: "Argentina",  href: "/ar" },
  { Flag: ES, label: "España",     href: "/es" },
  { Flag: CR, label: "Costa Rica", href: "/cr" },
  { Flag: EC, label: "Ecuador",    href: "/ec" },
];

type TrustIcon = React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>;

const TRUST_ITEMS: { Icon: TrustIcon; color: string; text: string }[] = [
  { Icon: Clock, color: "#1D4ED8", text: "Soporte por WhatsApp · Lun–Sáb" },
  { Icon: Lock,  color: "#059669", text: "Sin permanencia. Cancela cuando quieras." },
];

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.854L0 24l6.336-1.494A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.643-.493-5.17-1.357l-.37-.218-3.762.887.928-3.67-.24-.38A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

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
            background: "linear-gradient(135deg, #1D4ED8 0%, oklch(0.45 0.18 280) 100%)",
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
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
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
              Únete a los negocios en Latinoamérica que ya gestionan
              más de 27.000 citas con AgenditApp.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={SIGNUP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[12px] px-6 py-3.5 text-[15px] font-semibold transition-colors"
                style={{ background: "var(--warm)", color: "white" }}
              >
                Crear cuenta gratis
              </Link>
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

          {/* ── Col 1: Brand ── */}
          <motion.div variants={itemIn} className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/logo-text.png"
                  alt="AgenditApp"
                  width={140}
                  height={36}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-sm text-muted leading-relaxed">
                Sistema de agendamiento online para negocios de belleza, bienestar
                y servicios profesionales en Latinoamérica.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/agenditapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
              >
                <IconInstagram />
              </a>
              <a
                href="https://facebook.com/agenditapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
              >
                <IconFacebook />
              </a>
              <a
                href={getWhatsappHref("footer")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
              >
                <IconWhatsApp />
              </a>
            </div>

            <DemoCtaButton source="footer" className="inline-flex items-center gap-2 rounded-[10px] border border-brand/25 text-brand text-sm font-medium px-4 py-2 hover:bg-brand/6 transition-colors cursor-pointer w-fit">
              <ChatCircle size={16} weight="duotone" />
              Solicitar demo
            </DemoCtaButton>
          </motion.div>

          {/* ── Col 2: Producto ── */}
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

          {/* ── Col 3: Sectores + Países ── */}
          <motion.div variants={itemIn}>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">
              Sectores
            </p>
            <ul className="flex flex-col gap-2.5 mb-7">
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
              <li>
                <Link href="/sectores" className="text-sm hover:text-foreground transition-colors font-medium text-brand/80">
                  Ver todos los sectores →
                </Link>
              </li>
            </ul>

            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-3">
              Disponible en
            </p>
            <ul className="flex flex-col gap-2">
              {COUNTRY_LINKS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand transition-colors"
                  >
                    <c.Flag className="w-5 rounded-[2px] shadow-sm shrink-0" title={c.label} />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Comparativas + Contacto ── */}
          <motion.div variants={itemIn}>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">
              Comparativas
            </p>
            <ul className="flex flex-col gap-2.5 mb-7">
              {COMPARATIVAS_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    AgenditApp {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-3">
              Soporte
            </p>
            <ul className="flex flex-col gap-2.5">
              {TRUST_ITEMS.map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-sm text-muted">
                  <span className="shrink-0 mt-0.5">
                    <item.Icon size={16} weight="duotone" color={item.color} />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          variants={itemIn}
          className="mt-10 pt-6 border-t border-brand/10 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} AgenditApp. Todos los derechos reservados.{" "}
            <span className="text-muted/60">Hecho con ❤️ para negocios que viven de las citas.</span>
          </p>
          <p className="text-xs text-muted/50 text-center sm:text-right">
            Colombia · México · Chile · Argentina · Costa Rica y más
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
