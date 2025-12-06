import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Salones de Belleza | Sistema de Reservas Online",
  description:
    "Sistema de agendamiento online para salones de belleza. Gestiona citas de manicure, pedicure, tintes, cortes y tratamientos. Recordatorios automáticos por WhatsApp para reducir ausencias. Prueba gratis.",
  keywords: [
    "software para salones de belleza",
    "agenda para salones",
    "sistema de reservas belleza",
    "agendamiento salón de belleza",
    "software manicure pedicure",
    "gestión de citas belleza",
    "recordatorios WhatsApp salón",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/salones-belleza",
  },
  openGraph: {
    title: "Software para Salones de Belleza | AgenditApp",
    description:
      "Automatiza tu agenda de belleza. Reservas online, recordatorios por WhatsApp y gestión completa de servicios.",
    url: "https://agenditapp.com/sectores/salones-belleza",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://agenditapp.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sectores",
      item: "https://agenditapp.com/sectores",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Salones de Belleza",
      item: "https://agenditapp.com/sectores/salones-belleza",
    },
  ],
};

const features = [
  {
    title: "Agenda personalizada por servicio",
    description:
      "Configura duraciones específicas para manicure, pedicure, tintes, cortes y tratamientos.",
    icon: "📅",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Reduce ausencias hasta 70% con recordatorios por WhatsApp 24 horas antes.",
    icon: "📲",
  },
  {
    title: "Gestión de estilistas",
    description:
      "Asigna citas por estilista, controla horarios y disponibilidad en tiempo real.",
    icon: "👩‍🦰",
  },
  {
    title: "Catálogo de servicios",
    description:
      "Muestra tus servicios con precios y duración. Tus clientes reservan lo que necesitan.",
    icon: "💅",
  },
  {
    title: "Control de pagos",
    description:
      "Registra pagos, abonos y métodos de pago. Reportes financieros automáticos.",
    icon: "💰",
  },
  {
    title: "Página web incluida",
    description:
      "Landing personalizada para que tus clientes reserven online 24/7.",
    icon: "🌐",
  },
];

export default function SalonesBellezaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-6xl mb-6">💇‍♀️</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                Salones de Belleza
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Optimiza la gestión de tu salón con reservas online automáticas,
              recordatorios por WhatsApp y control completo de servicios y
              estilistas. Sin permanencia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_HREF}
                className="px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
              >
                Probar gratis
              </a>
              <Link
                href="/precios"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-medium transition-colors"
              >
                Ver planes
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Todo lo que necesitas para tu salón
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-sky-400/50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial / Social Proof */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 sm:p-12 text-center">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-lg sm:text-xl text-white italic mb-4">
              &quot;Desde que uso AgenditApp, mis clientas reservan solas y las
              ausencias bajaron un montón. ¡Lo recomiendo!&quot;
            </p>
            <p className="text-sky-400 font-semibold">
              — Laura M., Salón de Belleza en Bogotá
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Lista para digitalizar tu salón?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a cientos de salones que ya usan AgenditApp. Sin
              instalaciones complejas, sin permanencia.
            </p>
            <a
              href={WHATSAPP_HREF}
              className="inline-block px-10 py-5 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
            >
              Solicitar demo gratis
            </a>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
