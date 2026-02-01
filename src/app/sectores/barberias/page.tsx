import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Barberías | Sistema de Agendamiento Online",
  description:
    "Sistema de reservas online para barberías. Gestiona citas de cortes, barba, afeitado y servicios express. Recordatorios automáticos por WhatsApp. Control de barberos y turnos en tiempo real. Prueba gratis.",
  keywords: [
    "software para barberías",
    "agenda para barbería",
    "sistema de turnos barbería",
    "reservas online barbería",
    "agendamiento barbero",
    "software cortes de cabello",
    "gestión de barbería",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/barberias",
  },
  openGraph: {
    title: "Software para Barberías | AgenditApp",
    description:
      "Automatiza tu barbería. Reservas online, recordatorios por WhatsApp y gestión de barberos.",
    url: "https://agenditapp.com/sectores/barberias",
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
      name: "Barberías",
      item: "https://agenditapp.com/sectores/barberias",
    },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software de Agendamiento para Barberías",
  provider: {
    "@type": "Organization",
    name: "AgenditApp",
    url: "https://agenditapp.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Barberías y Barberos Profesionales",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Funcionalidades para Barberías",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestión de turnos rápidos y cortes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Control de barberos y productividad",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recordatorios por WhatsApp",
        },
      },
    ],
  },
};

const features = [
  {
    title: "Turnos express optimizados",
    description:
      "Gestiona turnos cortos de 20-30 min. Ideal para cortes rápidos y alto flujo de clientes.",
    icon: "⏱️",
  },
  {
    title: "Gestión de barberos",
    description:
      "Asigna clientes por barbero, controla horarios y descansos. Reportes de productividad.",
    icon: "✂️",
  },
  {
    title: "Servicios personalizados",
    description:
      "Corte, barba, afeitado, diseño. Configura duración y precio de cada servicio.",
    icon: "💈",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp para evitar ausencias y optimizar tu agenda.",
    icon: "📲",
  },
  {
    title: "Sin instalaciones",
    description:
      "Todo en la nube. Accede desde tu celular, tablet o computadora desde cualquier lugar.",
    icon: "☁️",
  },
  {
    title: "Página web incluida",
    description:
      "Landing personalizada para que tus clientes reserven online las 24 horas.",
    icon: "🌐",
  },
];

export default function BarberiasPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, SERVICE_SCHEMA]} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/sectores"
                className="hover:text-sky-400 transition-colors"
              >
                Sectores
              </Link>
            </li>
            <li>/</li>
            <li className="text-white font-medium">Barberías</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-6xl mb-6">💈</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Barberías
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Optimiza tu barbería con reservas online automáticas, control de
              turnos express y recordatorios por WhatsApp. Aumenta tu
              facturación sin perder tiempo.
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
              Todo lo que necesitas para tu barbería
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

        {/* Beneficios específicos */}
        <section className="py-16 px-4 sm:px-6 bg-slate-800/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              ¿Por qué los barberos prefieren AgenditApp?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Turnos optimizados
                  </h3>
                  <p className="text-slate-300">
                    Configura servicios de 20-30 minutos para maximizar tu día.
                    Sin tiempos muertos ni confusiones.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Reduce ausencias
                  </h3>
                  <p className="text-slate-300">
                    Los recordatorios automáticos por WhatsApp disminuyen las
                    ausencias hasta un 70%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Control total
                  </h3>
                  <p className="text-slate-300">
                    Ve tu agenda, ingresos y barberos en tiempo real desde
                    cualquier dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectores Relacionados */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Otros profesionales que confían en AgenditApp
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Descubre cómo otros negocios de belleza y bienestar automatizan
              sus reservas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/sectores/salones-belleza"
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-sky-400/50 transition-all group"
              >
                <div className="text-3xl mb-3">💇‍♀️</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  Salones de Belleza
                </h3>
                <p className="text-slate-400 text-sm">
                  Sistema completo para manicure, pedicure y tratamientos
                </p>
              </Link>
              <Link
                href="/sectores/estetica-medica"
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-sky-400/50 transition-all group"
              >
                <div className="text-3xl mb-3">💉</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  Estética Médica
                </h3>
                <p className="text-slate-400 text-sm">
                  Agenda para tratamientos faciales y procedimientos
                </p>
              </Link>
              <Link
                href="/sectores/gimnasios"
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-sky-400/50 transition-all group"
              >
                <div className="text-3xl mb-3">🏋️‍♀️</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  Gimnasios
                </h3>
                <p className="text-slate-400 text-sm">
                  Reservas de clases y entrenamiento personal
                </p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/sectores"
                className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-2"
              >
                Ver todos los sectores →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lleva tu barbería al siguiente nivel
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a cientos de barberías que ya optimizaron su agenda. Sin
              permanencia.
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
