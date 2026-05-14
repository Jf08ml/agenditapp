"use client";

import { useState } from "react";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";

// ─── Icons ───────────────────────────────────────────────────────────────────
const IconCheck = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 16 16" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l4 4 6-6" />
  </svg>
);

const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none" viewBox="0 0 16 16" stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 4 4-4" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────
type PlanKey = "basico" | "esencial" | "marca";

const PLANS: Array<{
  key: PlanKey;
  name: string;
  monthlyPrice: number;
  badge: string;
  badgeStyle: React.CSSProperties;
  tagline: string;
  highlights: string[];
  ctaLabel: string;
  featured?: boolean;
}> = [
  {
    key: "basico",
    name: "Básico",
    monthlyPrice: 10,
    badge: "Starter",
    badgeStyle: {
      background: "color-mix(in srgb, var(--brand) 10%, transparent)",
      color: "var(--brand)",
      border: "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
    },
    tagline: "Para organizar tu agenda y empezar a recibir reservas online.",
    highlights: [
      "Reservas y citas ilimitadas 24/7",
      "Panel administrativo completo",
      "Gestión de servicios, empleados y clientes",
      "Subdominio tu-negocio.agenditapp.com",
    ],
    ctaLabel: "Empezar con el Básico",
  },
  {
    key: "esencial",
    name: "Esencial",
    monthlyPrice: 20,
    badge: "Más elegido",
    badgeStyle: { background: "var(--warm-deep)", color: "#fff", border: "none" },
    tagline: "Automatiza WhatsApp y reduce ausencias con recordatorios.",
    highlights: [
      "Todo lo del plan Básico",
      "WhatsApp desde tu número Business",
      "1 recordatorio automático configurable",
      "Enlace para confirmar o cancelar citas",
    ],
    ctaLabel: "Empezar con el Esencial",
    featured: true,
  },
  {
    key: "marca",
    name: "Marca Propia",
    monthlyPrice: 30,
    badge: "Pro",
    badgeStyle: {
      background: "color-mix(in srgb, #F59E0B 12%, transparent)",
      color: "#B45309",
      border: "1px solid color-mix(in srgb, #F59E0B 30%, transparent)",
    },
    tagline: "Dominio propio y campañas masivas de WhatsApp para crecer.",
    highlights: [
      "Todo lo del plan Esencial",
      "Dominio propio (tumarca.com)",
      "2 recordatorios automáticos",
      "Campañas de WhatsApp (envío masivo)",
    ],
    ctaLabel: "Empezar con Marca Propia",
  },
];

const EXTRA_FEATURES: Record<PlanKey, string[]> = {
  basico: [
    "Analíticas de negocio + comisiones / nómina por empleado",
    "Sistema de fidelidad para retener clientes",
    "Branding personalizado (logo, nombre y colores)",
    "Horarios por empleado y bloqueo de disponibilidad",
    "Landing de bienvenida sencilla",
  ],
  esencial: [
    "Analíticas de negocio + comisiones / nómina por empleado",
    "Sistema de fidelidad para retener clientes",
    "Branding personalizado (logo, nombre y colores)",
    "Mensaje de agendamiento configurable",
    "Mensajes de WhatsApp editables a tu gusto",
    "Landing de bienvenida sencilla",
  ],
  marca: [
    "Analíticas de negocio + comisiones / nómina por empleado",
    "Sistema de fidelidad para retener clientes",
    "Branding personalizado (logo, nombre y colores)",
    "Mensaje de agendamiento configurable",
    "Mensajes de WhatsApp editables a tu gusto",
    "Landing de bienvenida profesional",
    "Soporte prioritario + acompañamiento para dominio",
  ],
};

type CompRow = { label: string; hint?: string; values: Record<PlanKey, boolean | string> };

const COMPARISON_GROUPS: Array<{ group: string; rows: CompRow[] }> = [
  {
    group: "Base — incluido en todos",
    rows: [
      { label: "Reservas y citas ilimitadas (24/7)", values: { basico: true, esencial: true, marca: true } },
      { label: "Panel administrativo y agenda visual", values: { basico: true, esencial: true, marca: true } },
      { label: "Servicios, empleados y clientes", values: { basico: true, esencial: true, marca: true } },
      { label: "Analíticas + comisiones / nómina", values: { basico: true, esencial: true, marca: true } },
      { label: "Fidelidad + branding personalizado", values: { basico: true, esencial: true, marca: true } },
    ],
  },
  {
    group: "Presencia web",
    rows: [
      { label: "Landing de bienvenida", values: { basico: "Sencilla", esencial: "Sencilla", marca: "Profesional" } },
      { label: "Subdominio (tu-negocio.agenditapp.com)", values: { basico: true, esencial: true, marca: false } },
      { label: "Dominio propio (tumarca.com)", values: { basico: false, esencial: false, marca: true } },
    ],
  },
  {
    group: "Automatización WhatsApp",
    rows: [
      { label: "WhatsApp desde tu número Business", hint: "Mensajes enviados desde tu propio número", values: { basico: false, esencial: true, marca: true } },
      { label: "Mensaje de agendamiento configurable", values: { basico: false, esencial: true, marca: true } },
      { label: "Recordatorios automáticos", values: { basico: false, esencial: "1 recordatorio", marca: "2 recordatorios" } },
      { label: "Mensajes editables", values: { basico: false, esencial: true, marca: true } },
      { label: "Enlace para confirmar / cancelar citas", hint: "El cliente confirma o cancela desde WhatsApp", values: { basico: false, esencial: true, marca: true } },
      { label: "Campañas masivas de WhatsApp", values: { basico: false, esencial: false, marca: true } },
    ],
  },
];

// ─── Animations ──────────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardIn: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeOut } },
};
const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.35, ease: easeOut } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function ValueCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ background: "rgba(37,211,102,0.15)", color: "#128C7E" }}>
        <IconCheck />
      </span>
    ) : (
      <span className="text-xl font-light select-none" style={{ color: "#C7CCD6" }}>—</span>
    );
  }
  return (
    <span className="text-xs font-semibold whitespace-nowrap text-brand">
      {value}
    </span>
  );
}

function PlanCard({ plan, yearly }: { plan: typeof PLANS[number]; yearly: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const extras = EXTRA_FEATURES[plan.key];
  const price = yearly ? plan.monthlyPrice * 10 : plan.monthlyPrice;
  const priceUnit = yearly ? "/ año" : "/ mes";
  const priceNote = yearly
    ? "2 meses gratis · facturación anual"
    : "Sin permanencia · Cancela cuando quieras";

  if (plan.featured) {
    return (
      <motion.div variants={cardIn} className="relative flex flex-col" style={{ zIndex: 1 }}>
        {/* Floating badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase text-white shadow-md"
            style={{ background: "var(--warm-deep)" }}
          >
            {plan.badge}
          </span>
        </div>

        <div
          className="flex flex-col rounded-[20px] overflow-hidden flex-1"
          style={{
            background: "linear-gradient(180deg, #1a3a8f 0%, #0A2A6B 100%)",
            boxShadow: "0 24px 64px rgba(29,78,216,0.35), 0 4px 16px rgba(10,42,107,0.25)",
            transform: "scale(1.02)",
          }}
        >
          <div className="p-6 flex flex-col flex-1">
            {/* Header */}
            <div className="mb-4 pt-2">
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-extrabold text-white leading-none" style={{ fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.03em" }}>
                ${price}
              </span>
              <span className="text-sm text-white/60">USD {priceUnit}</span>
            </div>
            <p className="text-xs text-white/50 mb-5">{priceNote}</p>

            {/* Tagline */}
            <p className="text-sm text-white/75 mb-5 leading-relaxed">{plan.tagline}</p>

            {/* Key highlights */}
            <ul className="flex flex-col gap-2.5 mb-5">
              {plan.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(37,211,102,0.25)", color: "#25D366" }}>
                    <IconCheck className="w-2.5 h-2.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Expand toggle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white/90 transition-colors mb-4 w-fit"
            >
              <IconChevron open={expanded} />
              {expanded ? "Ocultar características" : "Ver más características"}
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="extras"
                  variants={expandVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-2 mb-5 pt-1 border-t border-white/10">
                    {extras.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-sm text-white/60 pt-2">
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(37,211,102,0.15)", color: "#25D366" }}>
                          <IconCheck className="w-2.5 h-2.5" />
                        </span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1" />

            {/* CTA — white on featured */}
            <DemoCtaButton
              className="w-full px-5 py-3 rounded-[12px] text-sm font-bold text-center cursor-pointer
                bg-white text-[#0A2A6B] hover:bg-white/90 transition-all duration-200 shadow-md"
            >
              {plan.ctaLabel}
            </DemoCtaButton>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardIn}
      className="relative flex flex-col rounded-[20px] border bg-bg-card overflow-hidden h-full
        transition-shadow duration-300 border-brand/12 shadow-[var(--shadow-card)]"
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg font-semibold text-heading">{plan.name}</h3>
          <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={plan.badgeStyle}>
            {plan.badge}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="font-extrabold text-heading leading-none" style={{ fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.03em" }}>
            ${price}
          </span>
          <span className="text-sm text-muted">USD {priceUnit}</span>
        </div>
        <p className="text-xs text-muted mb-5">{priceNote}</p>

        {/* Tagline */}
        <p className="text-sm text-body mb-5 leading-relaxed">{plan.tagline}</p>

        {/* Key highlights */}
        <ul className="flex flex-col gap-2.5 mb-5">
          {plan.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-body">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-brand"
                style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}>
                <IconCheck className="w-2.5 h-2.5" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-brand hover:text-brand-hover transition-colors mb-4 w-fit"
        >
          <IconChevron open={expanded} />
          {expanded ? "Ocultar características" : "Ver más características"}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="extras"
              variants={expandVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2 mb-5 pt-1 border-t border-brand/10">
                {extras.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm text-muted pt-2">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-brand/60"
                      style={{ background: "color-mix(in srgb, var(--brand) 7%, transparent)" }}>
                      <IconCheck className="w-2.5 h-2.5" />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1" />

        <DemoCtaButton
          className="w-full px-5 py-3 rounded-[12px] text-sm font-semibold text-center cursor-pointer
            transition-all duration-200 border border-brand/25 text-brand hover:bg-brand/6"
        >
          {plan.ctaLabel}
        </DemoCtaButton>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Precio() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="membresia" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Planes y precios
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Planes simples. Sin permanencia.{" "}
            <span className="text-brand">Sin sorpresas.</span>
          </h2>
          <p className="mt-4 text-base text-body leading-relaxed">
            Empieza por $10 USD/mes. Cambia de plan cuando quieras. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* ── Toggle mensual / anual ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-white border border-[#0F172A]/10 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                !yearly
                  ? "bg-heading text-white shadow-sm"
                  : "text-muted hover:text-body"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 flex items-center gap-2 ${
                yearly
                  ? "bg-heading text-white shadow-sm"
                  : "text-muted hover:text-body"
              }`}
            >
              Anual
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#25D366] text-white leading-none">
                −17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── Plan cards ── */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch pt-4"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.key} plan={plan} yearly={yearly} />
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-center text-sm text-muted"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Todos los planes incluyen acceso completo a la plataforma desde el primer día.
        </motion.p>

        {/* ── Comparison table ── */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-heading">Comparar planes</h3>
              <p className="text-body mt-1 text-sm">Revisa en detalle qué incluye cada plan.</p>
            </div>
            <DemoCtaButton className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] border border-brand/25 text-brand text-sm font-medium hover:bg-brand/6 transition-colors cursor-pointer">
              Ayúdame a elegir
            </DemoCtaButton>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block rounded-[20px] border border-brand/12 overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}>

            {/* Header row */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-bg-card">
              <div className="px-6 py-5 border-b border-brand/10">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">Funcionalidad</p>
              </div>
              {PLANS.map((p) => (
                p.featured ? (
                  <div key={p.key}
                    className="px-4 pt-5 pb-6 border-l border-transparent"
                    style={{ background: "linear-gradient(180deg, #1a3a8f 0%, #0A2A6B 100%)" }}
                  >
                    <p className="text-[10px] font-bold text-white/55 uppercase tracking-widest mb-1.5">{p.badge}</p>
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <p className="text-lg font-bold text-white mt-0.5">
                      ${yearly ? p.monthlyPrice * 10 : p.monthlyPrice} USD
                    </p>
                    <p className="text-[11px] text-white/50">{yearly ? "/ año" : "/ mes"}</p>
                  </div>
                ) : (
                  <div key={p.key} className="px-4 py-5 border-l border-brand/10 border-b border-brand/10">
                    <p className="text-[10px] font-bold text-muted/60 uppercase tracking-widest mb-1.5">{p.badge}</p>
                    <p className="text-sm font-semibold text-heading">{p.name}</p>
                    <p className="text-lg font-bold text-brand mt-0.5">
                      ${yearly ? p.monthlyPrice * 10 : p.monthlyPrice} USD
                    </p>
                    <p className="text-[11px] text-muted">{yearly ? "/ año" : "/ mes"}</p>
                  </div>
                )
              ))}
            </div>

            {/* Groups */}
            {COMPARISON_GROUPS.map((group, gi) => (
              <div key={gi}>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr]"
                  style={{ background: "color-mix(in srgb, var(--brand) 4%, var(--bg-main))" }}>
                  <div className="col-span-4 px-6 py-2.5 border-t border-brand/10">
                    <p className="text-[11px] font-bold text-body/70 uppercase tracking-[0.08em]">{group.group}</p>
                  </div>
                </div>
                {group.rows.map((row, ri) => (
                  <div key={ri}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-brand/8 hover:bg-brand/2 transition-colors">
                    <div className="px-6 py-3.5">
                      <p className="text-sm text-heading">{row.label}</p>
                      {row.hint && <p className="text-xs text-muted mt-0.5">{row.hint}</p>}
                    </div>
                    {PLANS.map((p) => (
                      <div key={p.key}
                        className={`px-4 py-3.5 border-l border-brand/8 flex items-center justify-center ${
                          p.featured ? "bg-[rgba(232,240,255,0.4)]" : ""
                        }`}>
                        <ValueCell value={row.values[p.key]} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-brand/10 bg-bg-card">
              <div className="px-6 py-5" />
              {PLANS.map((p) => (
                <div key={p.key}
                  className={`px-4 py-5 border-l border-brand/10 ${p.featured ? "bg-[rgba(232,240,255,0.4)]" : ""}`}>
                  <DemoCtaButton
                    className={`w-full px-3 py-2.5 rounded-[10px] text-xs font-semibold text-center cursor-pointer transition-all ${
                      p.featured
                        ? "bg-brand text-white hover:bg-brand-hover"
                        : "border border-brand/25 text-brand hover:bg-brand/6"
                    }`}
                  >
                    ${yearly ? p.monthlyPrice * 10 : p.monthlyPrice} USD {yearly ? "/ año" : "/ mes"}
                  </DemoCtaButton>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: accordion per plan */}
          <div className="lg:hidden flex flex-col gap-4">
            {PLANS.map((plan) => (
              <MobileCompare key={plan.key} plan={plan} groups={COMPARISON_GROUPS} yearly={yearly} />
            ))}
          </div>

          <p
            className="mt-6 text-center text-sm mx-auto max-w-2xl rounded-[12px] px-5 py-3.5"
            style={{
              background: "oklch(0.96 0.04 60)",
              border: "1px solid oklch(0.88 0.06 60)",
              color: "var(--ink-2, #334155)",
            }}
          >
            💡{" "}
            <span className="font-semibold">¿No sabes cuál elegir?</span>{" "}
            Si quieres reducir ausencias → <span className="font-medium">Esencial</span>. Si quieres crecer con campañas → <span className="font-medium">Marca Propia</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Mobile compare accordion ─────────────────────────────────────────────────
function MobileCompare({
  plan,
  groups,
  yearly,
}: {
  plan: typeof PLANS[number];
  groups: typeof COMPARISON_GROUPS;
  yearly: boolean;
}) {
  const [open, setOpen] = useState(false);
  const price = yearly ? plan.monthlyPrice * 10 : plan.monthlyPrice;
  const priceUnit = yearly ? "/ año" : "/ mes";

  return (
    <div className={`rounded-[16px] border bg-bg-card overflow-hidden ${
      plan.featured ? "border-brand" : "border-brand/12"
    }`} style={{ boxShadow: "var(--shadow-card)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-heading">{plan.name}</p>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={plan.badgeStyle}>
              {plan.badge}
            </span>
          </div>
          <p className="text-brand font-bold text-lg mt-0.5">
            ${price} USD{" "}
            <span className="text-muted text-xs font-normal">{priceUnit}</span>
          </p>
        </div>
        <span className="text-muted"><IconChevron open={open} /></span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="border-t border-brand/10 px-5 pb-5 pt-4 flex flex-col gap-5">
              {groups.map((group, gi) => (
                <div key={gi}>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-2">{group.group}</p>
                  <ul className="flex flex-col gap-2">
                    {group.rows.map((row, ri) => (
                      <li key={ri} className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-body">{row.label}</span>
                        <span className="flex-shrink-0"><ValueCell value={row.values[plan.key]} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <DemoCtaButton
                className={`w-full px-5 py-3 rounded-[12px] text-sm font-semibold text-center cursor-pointer mt-2 ${
                  plan.featured
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-brand/25 text-brand hover:bg-brand/6"
                }`}
              >
                {plan.ctaLabel}
              </DemoCtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
