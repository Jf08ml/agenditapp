"use client";

import { motion, type Variants } from "framer-motion";
import LpHeader from "./LpHeader";
import LpFooter from "./LpFooter";
import LpHero from "./LpHero";
import LpWhatsAppFab from "./LpWhatsAppFab";
import {
  LpProofStats,
  LpBenefits,
  LpHowItWorks,
  LpTestimonials,
  LpFinalCta,
  type Benefit,
} from "./sections";
import { LeadCtas, type CtaVariant } from "./cta";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BENEFITS: Benefit[] = [
  {
    icon: "📅",
    title: "Reservas online 24/7",
    desc: "Tus clientes agendan solos a cualquier hora, sin que tengas que responder mensajes.",
  },
  {
    icon: "💬",
    title: "Recordatorios por WhatsApp",
    desc: "Enviados desde tu propio número Business. Reducen las inasistencias hasta un 60%.",
  },
  {
    icon: "✅",
    title: "Confirma y cancela solo",
    desc: "El cliente confirma o reagenda desde un enlace. Tu agenda siempre actualizada.",
  },
  {
    icon: "👥",
    title: "Tu equipo, ordenado",
    desc: "Horarios, servicios y comisiones por empleado, todo desde un solo panel.",
  },
  {
    icon: "🔗",
    title: "Tu enlace de reservas",
    desc: "Compártelo en Instagram, WhatsApp o tu bio. Tus clientes no instalan nada.",
  },
  {
    icon: "📊",
    title: "Reportes claros",
    desc: "Ingresos, horas pico y clientes frecuentes para tomar mejores decisiones.",
  },
];

const FAQ = [
  {
    q: "¿Cuánto cuesta?",
    a: "Empiezas gratis con 7 días de acceso completo. Después puedes quedarte en el plan gratuito para siempre o elegir un plan desde $10 USD/mes. Sin permanencia.",
  },
  {
    q: "¿Los recordatorios salen desde mi número?",
    a: "Sí. En los planes con WhatsApp, los mensajes se envían desde tu número oficial de WhatsApp Business, no desde un número desconocido.",
  },
  {
    q: "¿Mis clientes necesitan una app?",
    a: "No. Reservan desde un enlace web que compartes por WhatsApp, Instagram o redes. No instalan nada.",
  },
  {
    q: "¿Sirve para mi negocio?",
    a: "Si trabajas con citas o turnos, sí: salones, barberías, spas, consultorios, psicólogos, odontólogos, nutricionistas, veterinarias y más.",
  },
];

export default function OfertaContent({ variant }: { variant: CtaVariant }) {
  const primaryIsSignup = variant === "signup";

  return (
    <main className="min-h-screen overflow-x-hidden">
      <LpHeader source="oferta_header" cta={variant} />

      <LpHero
        variant={variant}
        source="oferta_hero"
        badge="Oferta de lanzamiento · Empieza gratis"
        whatsappLabel="Quiero llenar mi agenda"
        signupLabel="Crear mi cuenta gratis"
        title={
          <>
            Llena tu agenda{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #1D4ED8 0%, oklch(0.62 0.2 260) 50%, var(--warm-deep) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              sin perseguir citas
            </span>{" "}
            por WhatsApp.
          </>
        }
        subtitle="AgenditApp recibe reservas 24/7, confirma con tus clientes por WhatsApp y reduce las inasistencias hasta un 60%. Pruébalo gratis hoy."
      />

      <LpProofStats />

      {/* ── Banda de oferta ── */}
      <section className="py-12 px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto rounded-[22px] p-7 sm:p-9 text-center"
          style={{
            background:
              "linear-gradient(160deg, rgba(37,211,102,0.08) 0%, rgba(255,255,255,1) 60%)",
            border: "1.5px solid rgba(37,211,102,0.3)",
            boxShadow: "0 18px 50px -28px rgba(28,45,120,0.35)",
          }}
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase mb-4"
            style={{ background: "rgba(37,211,102,0.14)", color: "#128C7E" }}
          >
            🎁 Solo por tiempo limitado
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-heading tracking-tight">
            7 días con TODO incluido + acompañamiento 1:1
          </h2>
          <p className="mt-3 text-body leading-relaxed max-w-xl mx-auto">
            Activa tu cuenta hoy y te ayudamos a configurar tu agenda por
            WhatsApp, sin costo. Sin tarjeta de crédito y sin permanencia.
          </p>
          <div className="mt-7 flex justify-center">
            <LeadCtas
              variant={variant}
              source="oferta_banda"
              className="justify-center"
              whatsappLabel="Quiero activar mi cuenta"
              signupLabel="Activar mi cuenta gratis"
            />
          </div>
        </motion.div>
      </section>

      <LpBenefits
        badge="Todo en un solo lugar"
        title="Lo que tu negocio gana con AgenditApp"
        items={BENEFITS}
      />

      <LpHowItWorks />

      <LpTestimonials />

      {/* ── FAQ corto ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-3xl md:text-4xl font-semibold text-heading tracking-tight mb-10"
          >
            Preguntas frecuentes
          </motion.h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <motion.div
                key={f.q}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                className="card p-5 border border-brand/10"
              >
                <h3 className="font-semibold text-heading text-[15px] mb-1.5">
                  {f.q}
                </h3>
                <p className="text-sm text-body leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LpFinalCta
        variant={variant}
        source="oferta_final"
        title={
          primaryIsSignup ? (
            <>
              Crea tu cuenta y empieza{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                gratis hoy.
              </span>
            </>
          ) : undefined
        }
        subtitle="Sin tarjeta · Listo en 10 minutos · Cancela cuando quieras."
        whatsappLabel="Quiero llenar mi agenda"
        signupLabel="Crear mi cuenta gratis"
      />

      <LpFooter />

      {/* En la variante de registro, WhatsApp queda solo como canal
          flotante de soporte para no competir con el CTA principal. */}
      {primaryIsSignup && <LpWhatsAppFab source="oferta_registro_fab" />}
    </main>
  );
}
