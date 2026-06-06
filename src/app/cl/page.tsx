import type { Metadata } from "next";
import Link from "next/link";
import { HREFLANG_ALTERNATES } from "@/lib/hreflang";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { DemoCtaButton } from "@/app/(landing)/components/ui/DemoCtaModal";

const SIGNUP_HREF = "https://app.agenditapp.com/signup";

export const metadata: Metadata = {
  title: "Software de Agendamiento para Negocios en Chile",
  description:
    "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en Chile. Reservas 24/7. Prueba gratis sin tarjeta.",
  alternates: {
    canonical: "https://agenditapp.com/cl",
    languages: HREFLANG_ALTERNATES,
  },
  openGraph: {
    title: "Software de Agendamiento para Negocios en Chile | AgenditApp",
    description:
      "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en Chile. Reservas 24/7. Prueba gratis sin tarjeta.",
    url: "https://agenditapp.com/cl",
    locale: "es_CL",
    siteName: "AgenditApp",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgenditApp",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en Chile.",
  url: "https://agenditapp.com/cl",
  offers: {
    "@type": "Offer",
    price: "18000",
    priceCurrency: "CLP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      billingDuration: "P1M",
    },
  },
  areaServed: { "@type": "Country", name: "Chile" },
};

const SECTORS = [
  "Barberías y peluquerías",
  "Salones de belleza y manicure",
  "Centros de yoga y pilates",
  "Spas y bienestar",
  "Consultorios y clínicas",
  "Entrenadores y fitness",
];

const METRICS = [
  { value: "+27K", label: "citas gestionadas" },
  { value: "70%", label: "menos inasistencias" },
  { value: "24/7", label: "reservas automáticas" },
  { value: "$0", label: "comisiones por cita" },
];

const WHATSAPP_FEATURES = [
  {
    title: "Confirmación automática",
    desc: "Cada reserva nueva dispara un mensaje desde tu número de WhatsApp Business.",
  },
  {
    title: "Recordatorios configurables",
    desc: "1 o 2 recordatorios antes de cada cita. Tus clientes confirman o cancelan con un toque.",
  },
  {
    title: "Campañas masivas",
    desc: "Envía promos y reactivaciones a toda tu base de clientes desde WhatsApp.",
  },
];

const PLANS = [
  {
    name: "Básico",
    price: "$9.000",
    desc: "Agenda online, gestión de servicios y clientes.",
    plan: "basico",
    featured: false,
  },
  {
    name: "Esencial",
    price: "$18.000",
    desc: "Todo lo anterior + WhatsApp automático y recordatorios.",
    plan: "esencial",
    featured: true,
  },
  {
    name: "Marca Propia",
    price: "$27.000",
    desc: "Dominio propio, 2 recordatorios y campañas masivas.",
    plan: "marca-propia",
    featured: false,
  },
];

export default function ChilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader />
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-brand mb-5"
              style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
            >
              🇨🇱 Disponible en Chile
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              Sistema de agendamiento online para negocios en Chile
            </h1>
            <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto mb-8">
              AgenditApp es la plataforma de reservas online que integra WhatsApp Business
              nativo, sin comisiones por cita y sin permanencia. Ideal para negocios de
              belleza, bienestar y servicios profesionales en Chile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SIGNUP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3.5 rounded-[12px] text-[15px] font-semibold inline-flex items-center justify-center"
              >
                Crear cuenta gratis — sin tarjeta
              </a>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center rounded-[12px] border border-brand/20 text-brand font-medium px-8 py-3.5 text-[15px] hover:bg-brand/6 transition-colors"
              >
                Ver planes y precios
              </Link>
            </div>
            <p className="text-xs text-muted mt-3">
              7 días con acceso completo · Sin permanencia · Cancela cuando quieras
            </p>
          </div>
        </section>

        {/* Testimonio */}
        <section
          className="py-12 px-6 border-y border-brand/10"
          style={{ background: "color-mix(in srgb, var(--brand) 4%, transparent)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-bold text-brand mb-4">90% satisfacción</p>
            <blockquote className="text-lg text-body italic mb-4">
              &ldquo;Organizar clases grupales e individuales nunca fue tan simple. AgenditApp
              se adapta perfecto a yoga, pilates y danza.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-heading">Espacio Mosaico</p>
            <p className="text-xs text-muted">Quilpué, Chile</p>
          </div>
        </section>

        {/* Métricas */}
        <section className="border-b border-brand/10 py-8 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {METRICS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-brand">{value}</p>
                <p className="text-xs text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-3">
              Ideal para cualquier negocio de citas en Chile
            </h2>
            <p className="text-body text-center mb-8">
              Desde una barbería unipersonal hasta un centro con 8 profesionales.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SECTORS.map((sector) => (
                <li
                  key={sector}
                  className="flex items-center gap-2.5 border border-brand/10 rounded-[14px] px-4 py-3 text-sm text-body bg-bg-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <span className="text-brand font-semibold text-base">✓</span>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WhatsApp diferenciador */}
        <section className="py-16 px-6 border-y border-brand/10" style={{ background: "color-mix(in srgb, var(--brand) 4%, transparent)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-3">
              El único sistema que habla por ti, desde tu número de WhatsApp
            </h2>
            <p className="text-body text-center max-w-2xl mx-auto mb-8">
              En Chile, WhatsApp es el canal principal de comunicación con clientes.
              AgenditApp es la única plataforma de agendamiento que envía confirmaciones
              y recordatorios desde el número de WhatsApp Business de tu negocio —
              no desde un número genérico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {WHATSAPP_FEATURES.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-bg-card border border-brand/10 rounded-[14px] p-5"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="font-semibold text-heading mb-1">{title}</p>
                  <p className="text-sm text-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-3">
              Planes disponibles en Chile
            </h2>
            <p className="text-body text-center mb-8">
              Sin permanencia. Sin comisiones por reserva. Cancela cuando quieras.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PLANS.map(({ name, price, desc, plan, featured }) => (
                <div
                  key={name}
                  className={`rounded-[20px] border p-6 ${
                    featured
                      ? "border-brand bg-brand text-white"
                      : "border-brand/10 bg-bg-card"
                  }`}
                  style={!featured ? { boxShadow: "var(--shadow-card)" } : {}}
                >
                  {featured && (
                    <p className="text-xs font-semibold text-white/80 mb-2 uppercase tracking-wider">
                      Más elegido
                    </p>
                  )}
                  <p className={`font-semibold text-lg ${featured ? "text-white" : "text-heading"}`}>
                    {name}
                  </p>
                  <p className={`text-3xl font-bold mt-1 ${featured ? "text-white" : "text-heading"}`}>
                    {price}
                    <span className={`text-sm font-normal ${featured ? "text-white/70" : "text-muted"}`}> CLP/mes</span>
                  </p>
                  <p className={`text-sm mt-2 mb-5 ${featured ? "text-white/80" : "text-body"}`}>
                    {desc}
                  </p>
                  <a
                    href={`${SIGNUP_HREF}?plan=${plan}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-[10px] px-4 py-2.5 text-sm font-semibold transition-colors ${
                      featured
                        ? "bg-white text-brand hover:bg-white/90"
                        : "border border-brand/25 text-brand hover:bg-brand/6"
                    }`}
                  >
                    Empezar gratis
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted mt-4">
              * Precios referenciales en CLP. Consulta precios actualizados en{" "}
              <Link href="/precios" className="text-brand hover:underline">
                agenditapp.com/precios
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto bg-bg-card border border-brand/10 rounded-[20px] p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading mb-3">
              Tu próxima cita podría reservarse mientras lees esto
            </h2>
            <p className="text-body mb-8">
              Únete a los negocios que ya gestionan más de 27.000 citas con AgenditApp
              sin depender de WhatsApp manual.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SIGNUP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3.5 rounded-[12px] text-[15px] font-semibold inline-flex items-center justify-center"
              >
                Crear cuenta gratis — 7 días con todo incluido
              </a>
              <DemoCtaButton source="landing_cl" className="inline-flex items-center justify-center rounded-[12px] border border-brand/20 text-brand font-medium px-8 py-3.5 text-[15px] hover:bg-brand/6 transition-colors cursor-pointer">
                Hablar con ventas
              </DemoCtaButton>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
