"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { LeadCtas, type CtaVariant } from "./cta";

/* ─────────────────────────────────────────────────────────────
   Bloques de contenido reutilizables entre las landings de
   campaña (presentación + ofertas). Mantienen el lenguaje visual
   del sitio (gradientes, pills, Poppins/serif, motion).
───────────────────────────────────────────────────────────── */

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.09 } },
};

/* ── Stats de prueba social ── */
const STATS = [
  { n: "+27K", l: "citas gestionadas" },
  { n: "60%", l: "menos inasistencias" },
  { n: "24/7", l: "reservas online" },
  { n: "4.9★", l: "satisfacción" },
];

export function LpProofStats() {
  return (
    <section className="border-y border-[#0F172A]/8 bg-white py-9">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span
                className="text-[30px] sm:text-[34px] font-extrabold leading-none tracking-tight"
                style={{ color: "#1e3a8a" }}
              >
                {s.n}
              </span>
              <span className="mt-1.5 text-[11px] text-[#64748B] uppercase tracking-widest font-semibold leading-tight">
                {s.l}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Grid de beneficios ── */
export type Benefit = { icon: string; title: string; desc: string };

export function LpBenefits({
  badge = "Por qué AgenditApp",
  title,
  subtitle,
  items,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  items: Benefit[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-body leading-relaxed">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              className="card p-6 border border-brand/10 flex flex-col gap-3"
            >
              <span
                className="w-12 h-12 shrink-0 flex items-center justify-center text-2xl rounded-[14px]"
                style={{
                  background: "linear-gradient(150deg, #eaf0ff, #f2eeff)",
                  border: "1px solid #e0e7ff",
                }}
              >
                {b.icon}
              </span>
              <h3 className="font-semibold text-[17px] text-heading">{b.title}</h3>
              <p className="text-sm text-body leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Showcase: captura dentro de un chrome de navegador ── */
export function LpShowcase({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] overflow-hidden bg-white border border-[#0F172A]/8 shadow-[0_4px_40px_rgba(29,78,216,0.14),0_24px_80px_rgba(15,23,42,0.16)]"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F1F5F9] border-b border-[#0F172A]/6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
            <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#64748B] border border-[#0F172A]/8 max-w-xs">
              app.agenditapp.com
            </div>
          </div>
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={720}
            className="w-full h-auto object-cover object-top"
          />
        </motion.div>
        {caption && (
          <p className="mt-4 text-center text-sm text-muted">{caption}</p>
        )}
      </div>
    </section>
  );
}

/* ── Cómo funciona: 3 pasos ── */
const STEPS = [
  {
    n: "1",
    title: "Configura tu agenda",
    desc: "Crea tus servicios, horarios y empleados en minutos. Sin instalar nada.",
  },
  {
    n: "2",
    title: "Comparte tu enlace",
    desc: "Tus clientes reservan solos 24/7 desde WhatsApp, Instagram o tu bio.",
  },
  {
    n: "3",
    title: "Recibe citas en automático",
    desc: "Confirmaciones y recordatorios por WhatsApp que reducen las ausencias.",
  },
];

export function LpHowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#0F172A]/8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
            Listo en 10 minutos
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {STEPS.map((s) => (
            <motion.div key={s.n} variants={fadeUp} className="text-center px-4">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-lg font-bold"
                style={{
                  background: "linear-gradient(155deg, #2a4ef2 0%, #1a37c4 100%)",
                  boxShadow: "0 10px 24px -10px rgba(35,71,230,0.7)",
                }}
              >
                {s.n}
              </div>
              <h3 className="font-semibold text-[17px] text-heading mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Testimonios cortos ── */
const TESTIMONIALS = [
  {
    quote:
      "Desde que usamos AgenditApp, las ausencias bajaron un 60%. Mis clientas agendan solas a cualquier hora.",
    name: "Luisa Fernanda",
    biz: "Estudio Rosa · Neiva",
  },
  {
    quote:
      "Los recordatorios automáticos por WhatsApp son un hit. Ahora tenemos la agenda llena toda la semana.",
    name: "Nataly Martínez",
    biz: "Galaxia Glamour · Neiva",
  },
  {
    quote:
      "Controlo la agenda de todo el equipo desde el celular. Los clientes llegan puntuales y todo se ve más profesional.",
    name: "Cristian Bastidas",
    biz: "Bastidas Barber Studio · Pereira",
  },
];

export function LpTestimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl md:text-4xl font-semibold text-heading tracking-tight mb-12"
        >
          Negocios que ya{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--brand)",
            }}
          >
            llenan su agenda
          </span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="card p-6 border border-brand/10 flex flex-col gap-4"
            >
              <div className="text-[#F59E0B] text-sm tracking-wide">★★★★★</div>
              <blockquote className="text-[15px] text-body leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <div className="font-semibold text-heading text-sm">{t.name}</div>
                <div className="text-xs text-muted">{t.biz}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Banda de CTA final ── */
export function LpFinalCta({
  variant,
  source,
  title,
  subtitle,
  whatsappLabel,
  signupLabel,
}: {
  variant: CtaVariant;
  source: string;
  title?: React.ReactNode;
  subtitle?: string;
  whatsappLabel?: string;
  signupLabel?: string;
}) {
  return (
    <section className="py-16 px-6">
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto relative rounded-[28px] px-6 py-12 sm:px-14 sm:py-16 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1D4ED8 0%, oklch(0.45 0.18 280) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(37,211,102,0.18), transparent 50%)",
            opacity: 0.6,
          }}
        />
        <div className="relative">
          <h2
            className="text-[clamp(26px,4vw,40px)] font-bold leading-[1.12] tracking-tight text-balance mx-auto"
            style={{ maxWidth: 620, color: "white" }}
          >
            {title ?? (
              <>
                Empieza hoy.{" "}
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Tu agenda se llena sola.
                </span>
              </>
            )}
          </h2>
          <p
            className="mt-4 text-[16px] leading-relaxed mx-auto"
            style={{ color: "rgba(255,255,255,0.82)", maxWidth: 480 }}
          >
            {subtitle ??
              "Sin tarjeta · Listo en 10 minutos · Cancela cuando quieras."}
          </p>
          <div className="mt-8 flex justify-center">
            <LeadCtas
              variant={variant}
              source={source}
              className="justify-center"
              whatsappLabel={whatsappLabel}
              signupLabel={signupLabel}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
