import type { Metadata } from "next";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";
import Precio from "../(landing)/sections/Precio";

export const metadata: Metadata = {
  title: "Planes AgenditApp | Empieza Gratis · Sin Tarjeta · Sin Permanencia",
  description:
    "Empieza gratis hoy con 7 días de acceso completo. Planes de pago desde $10 USD/mes sin permanencia. Reservas ilimitadas + WhatsApp + página web incluida.",
  keywords: ["plan gratuito agendamiento", "precios software de reservas", "planes agendamiento online", "costo sistema de citas", "precio agenda digital", "software sin permanencia", "precios AgenditApp"],
  alternates: { canonical: "https://agenditapp.com/precios" },
  openGraph: {
    title: "Planes AgenditApp | Empieza Gratis · Sin Tarjeta · Sin Permanencia",
    description:
      "Empieza gratis hoy con 7 días de acceso completo. Planes de pago desde $10 USD/mes sin permanencia. Reservas ilimitadas + WhatsApp + página web incluida.",
    url: "https://agenditapp.com/precios",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Precios", item: "https://agenditapp.com/precios" },
  ],
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AgenditApp",
  description: "Software de agendamiento online para negocios de belleza y servicios en Latinoamérica. Reservas 24/7, recordatorios por WhatsApp y gestión completa del negocio.",
  image: "https://agenditapp.com/inicio_page.png",
  brand: { "@type": "Brand", name: "AgenditApp" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "45", ratingCount: "120", bestRating: "5", worstRating: "1" },
  offers: [
    {
      "@type": "Offer",
      name: "Básico",
      price: "10",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      description: "Reservas online 24/7, calendario visual, gestión de servicios y empleados, base de datos de clientes, comisiones, programa de fidelización, subdominio personalizado.",
      url: "https://agenditapp.com/precios",
    },
    {
      "@type": "Offer",
      name: "Esencial",
      price: "20",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      description: "Todo lo del plan Básico más integración WhatsApp desde tu número, recordatorios automáticos y enlace de confirmación/cancelación para clientes.",
      url: "https://agenditapp.com/precios",
    },
    {
      "@type": "Offer",
      name: "Marca Propia",
      price: "30",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      description: "Todo lo del plan Esencial más dominio personalizado, 2 recordatorios automáticos y campañas masivas por WhatsApp.",
      url: "https://agenditapp.com/precios",
    },
  ],
};

export default function PreciosPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, OFFER_SCHEMA]} />
      <PageHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-5">
              Planes y precios
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              Empieza gratis.{" "}
              <span className="text-brand">Escala a tu ritmo.</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
              Regístrate hoy sin tarjeta y obtén 7 días con acceso completo a todo. Después, el plan gratuito para siempre — o elige un plan de pago cuando quieras.
            </p>
          </div>
        </section>

        {/* Reuse Precio section (removes duplicate logic) */}
        <Precio />

        {/* FAQ */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-heading text-center mb-10">Preguntas frecuentes</h2>
            <div className="flex flex-col gap-3">
              {[
                { q: "¿Tiene permanencia o cláusulas?", a: "No. El pago es mes a mes y puedes cancelar cuando quieras sin penalizaciones ni cláusulas de permanencia." },
                { q: "¿Los recordatorios salen desde mi número de WhatsApp?", a: "Sí. En los planes que incluyen WhatsApp, los mensajes se envían desde tu número oficial de WhatsApp Business." },
                { q: "¿Hay límite de reservas o empleados?", a: "No. Incluye reservas y citas ilimitadas. Además puedes gestionar empleados, horarios y comisiones." },
                { q: "¿Incluye página web / landing?", a: "Sí. Incluye landing de bienvenida. En Marca Propia es más profesional y funciona con tu propio dominio." },
                { q: "¿Necesito conocimientos técnicos?", a: "No. Te ayudamos con la configuración inicial y soporte para que empieces rápido." },
                { q: "¿Hay costos de instalación o configuración?", a: "No. Todo está incluido en el plan mensual. Sin costos ocultos." },
                { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos transferencia bancaria, Nequi, Daviplata y tarjetas de crédito/débito." },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-bg-card border border-brand/10 rounded-[14px] px-5 py-4 hover:border-brand/25 transition-colors"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <summary className="cursor-pointer font-semibold text-heading text-sm list-none flex justify-between items-center gap-4">
                    {faq.q}
                    <span className="text-brand text-lg leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-body leading-relaxed border-t border-brand/8 pt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
