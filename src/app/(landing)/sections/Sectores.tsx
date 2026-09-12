"use client";

import Link from "next/link";
import { Link as IntlLink } from "@/i18n/navigation";
import { motion, type Variants, easeOut } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Sparkle, Scissors, Flower, Eye, Stethoscope, Tooth,
  Brain, Barbell, GraduationCap, Star, type IconWeight,
} from "@phosphor-icons/react";
import { CO, MX, CL, AR, ES, CR, EC } from "country-flag-icons/react/3x2";

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

type PhosphorIcon = React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>;

interface SectorMeta {
  Icon: PhosphorIcon;
  color: string;
  link: string;
}

// Solo lo estructural (ícono, color, ruta) vive en TS. Los nombres de cada
// sector son copy y vienen de los mensajes de next-intl, combinados por
// índice con este array.
const SECTORES_META: SectorMeta[] = [
  { Icon: Sparkle,      color: "#DB2777", link: "/sectores/salones-belleza" },
  { Icon: Scissors,     color: "#1D4ED8", link: "/sectores/barberias" },
  { Icon: Flower,       color: "#059669", link: "/sectores/spas" },
  { Icon: Eye,          color: "#7C3AED", link: "/sectores/lash-brow" },
  { Icon: Stethoscope,  color: "#0D9488", link: "/sectores/consultorios" },
  { Icon: Tooth,        color: "#0EA5E9", link: "/sectores/odontologia" },
  { Icon: Brain,        color: "#4338CA", link: "/sectores/psicologia" },
  { Icon: Barbell,      color: "#EA580C", link: "/sectores/gimnasios" },
  { Icon: GraduationCap,color: "#D97706", link: "/sectores" },
  { Icon: Star,         color: "#E11D48", link: "/sectores" },
];

// Solo el ícono de bandera y el href son estructurales. El nombre del país
// es copy (cambia de forma no trivial entre idiomas, p.ej. "España" ->
// "Spain") y viene de los mensajes de next-intl. El href "/" es la única
// ruta de este array que tiene versión en inglés (ver routing.ts), así que
// se renderiza con el Link de next-intl; el resto usa next/link tal cual.
const PAISES_META = [
  { Flag: CO, href: "/" },
  { Flag: MX, href: "/mx" },
  { Flag: CL, href: "/cl" },
  { Flag: AR, href: "/ar" },
  { Flag: ES, href: "/es" },
  { Flag: CR, href: "/cr" },
  { Flag: EC, href: "/ec" },
];

export default function Sectores() {
  const t = useTranslations("Sectores");
  const sectorNames = t.raw("items") as string[];
  const countryNames = t.raw("countries") as string[];

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
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            {t("subheading")}
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
          {SECTORES_META.map((s, i) => (
            <motion.div key={s.link + i} variants={cardIn}>
              <Link
                href={s.link}
                className="group flex flex-col items-center gap-2.5 rounded-[14px] border
                  border-[#0F172A]/8 bg-[#F8FAFC] px-4 py-5 text-center
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-[10px]"
                  style={{ background: `${s.color}14` }}
                >
                  <s.Icon size={22} weight="duotone" color={s.color} />
                </span>
                <span className="text-[13px] font-semibold text-body group-hover:text-brand transition-colors leading-tight">
                  {sectorNames[i]}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA ver todos */}
        <div className="mt-10 text-center">
          <IntlLink
            href="/sectores"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-medium text-sm transition-colors duration-200"
          >
            {t("viewAll")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </IntlLink>
        </div>

        {/* Disponible en */}
        <div className="mt-8 pt-8 border-t border-[#0F172A]/6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-xs text-muted font-medium uppercase tracking-wider">{t("availableIn")}</span>
          {PAISES_META.map(({ Flag, href }, i) => {
            const label = countryNames[i];
            if (href === "/") {
              return (
                <IntlLink
                  key={href}
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-body hover:text-brand transition-colors"
                >
                  <Flag className="w-5 rounded-[2px] shadow-sm" title={label} />
                  {label}
                </IntlLink>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 text-sm text-body hover:text-brand transition-colors"
              >
                <Flag className="w-5 rounded-[2px] shadow-sm" title={label} />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
