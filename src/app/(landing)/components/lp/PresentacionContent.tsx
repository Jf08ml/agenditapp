"use client";

import { motion, type Variants } from "framer-motion";
import LpHeader from "./LpHeader";
import LpFooter from "./LpFooter";
import LpHero from "./LpHero";
import {
  LpProofStats,
  LpBenefits,
  LpShowcase,
  LpTestimonials,
  LpFinalCta,
  type Benefit,
} from "./sections";
import { SignupCtaButton, BTN_GHOST } from "./cta";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BENEFITS: Benefit[] = [
  {
    icon: "📅",
    title: "Agenda inteligente",
    desc: "Vista semanal y mensual con columnas por profesional. Todo tu equipo en una sola pantalla.",
  },
  {
    icon: "💬",
    title: "WhatsApp automático",
    desc: "Confirmaciones y recordatorios desde tu propio número Business, sin mover un dedo.",
  },
  {
    icon: "🌐",
    title: "Reservas 24/7",
    desc: "Una página de reservas con tu marca que tus clientes usan a cualquier hora.",
  },
  {
    icon: "👥",
    title: "Gestión de equipo",
    desc: "Horarios, servicios, comisiones y nómina por empleado, automáticos.",
  },
  {
    icon: "💜",
    title: "Fidelización",
    desc: "Base de datos de clientes y programa de fidelidad para que vuelvan.",
  },
  {
    icon: "📈",
    title: "Decisiones con datos",
    desc: "Reportes de ingresos, horas pico y clientes frecuentes en tiempo real.",
  },
];

/* Resumen compacto de planes (sin la tabla completa de /precios) */
const PLANS = [
  {
    name: "Gratuito",
    price: "$0",
    note: "Siempre gratis",
    tagline: "Empieza sin costo. 7 días con todo incluido.",
    featured: false,
  },
  {
    name: "Esencial",
    price: "$20",
    note: "USD / mes",
    tagline: "Automatiza WhatsApp y reduce ausencias.",
    featured: true,
  },
  {
    name: "Marca Propia",
    price: "$30",
    note: "USD / mes",
    tagline: "Dominio propio y campañas masivas.",
    featured: false,
  },
];

export default function PresentacionContent() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LpHeader source="presentacion_header" />

      <LpHero
        variant="whatsapp"
        source="presentacion_hero"
        badge="Conoce AgenditApp"
        whatsappLabel="Hablar por WhatsApp"
        signupLabel="Empezar gratis"
        title={
          <>
            La plataforma que{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #1D4ED8 0%, oklch(0.62 0.2 260) 50%, var(--warm-deep) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              agenda por ti.
            </span>
          </>
        }
        subtitle="AgenditApp organiza tus citas, automatiza tus recordatorios por WhatsApp y le da a tu negocio una imagen profesional. Todo desde tu celular."
      />

      <LpProofStats />

      <LpBenefits
        badge="Todo lo que incluye"
        title="Una sola herramienta para todo tu negocio"
        subtitle="Desde la primera reserva hasta el reporte de fin de mes, AgenditApp lo gestiona por ti."
        items={BENEFITS}
      />

      <LpShowcase
        src="/screenshots/agenda-virtual-desktop-1.png"
        alt="Vista semanal de citas con columnas por profesional — AgenditApp"
        caption="Tu agenda y la de todo tu equipo, en una sola pantalla."
      />

      <LpTestimonials />

      {/* ── Resumen de planes ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#0F172A]/8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
              Planes y precios
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
              Empieza gratis. <span className="text-brand">Sin tarjeta.</span>
            </h2>
            <p className="mt-4 text-base text-body leading-relaxed">
              Activa tu cuenta con 7 días de acceso completo. Después, el plan
              gratuito para siempre — o elige uno de pago cuando quieras.
            </p>
          </motion.div>

          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.09 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-3 items-stretch"
          >
            {PLANS.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="rounded-[20px] p-6 flex flex-col"
                style={
                  p.featured
                    ? {
                        background:
                          "linear-gradient(180deg, #1a3a8f 0%, #0A2A6B 100%)",
                        boxShadow: "0 24px 64px -28px rgba(29,78,216,0.6)",
                      }
                    : {
                        background: "var(--bg-card)",
                        border: "1px solid color-mix(in srgb, var(--brand) 12%, transparent)",
                        boxShadow: "var(--shadow-card)",
                      }
                }
              >
                <h3
                  className={`text-lg font-semibold ${p.featured ? "text-white" : "text-heading"}`}
                >
                  {p.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span
                    className={`font-extrabold leading-none ${p.featured ? "text-white" : "text-heading"}`}
                    style={{ fontSize: "clamp(32px,4vw,44px)", letterSpacing: "-0.03em" }}
                  >
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.featured ? "text-white/60" : "text-muted"}`}>
                    {p.note}
                  </span>
                </div>
                <p
                  className={`text-sm mt-3 leading-relaxed ${p.featured ? "text-white/75" : "text-body"}`}
                >
                  {p.tagline}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 text-center text-sm text-muted"
          >
            Reservas y clientes ilimitados en todos los planes. Sin permanencia.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-7 flex justify-center"
          >
            <SignupCtaButton source="presentacion_planes" className={BTN_GHOST}>
              Empezar gratis
              <span aria-hidden>→</span>
            </SignupCtaButton>
          </motion.div>
        </div>
      </section>

      <LpFinalCta
        variant="whatsapp"
        source="presentacion_final"
        title={
          <>
            ¿Listo para que tu agenda{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              trabaje sola?
            </span>
          </>
        }
        subtitle="Escríbenos por WhatsApp y te mostramos AgenditApp funcionando en tu negocio."
      />

      <LpFooter />
    </main>
  );
}
