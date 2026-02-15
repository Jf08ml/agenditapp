import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Spas y Centros de Bienestar | Sistema de Citas Online",
  description:
    "Sistema de agendamiento online para spas y centros de bienestar. Gestiona citas de masajes, faciales, terapias y tratamientos. Control de terapeutas y salas en tiempo real. Recordatorios automáticos. Prueba gratis.",
  keywords: [
    "software para spas",
    "agenda para spa",
    "sistema de citas spa",
    "reservas online masajes",
    "agendamiento terapias",
    "software centro de bienestar",
    "gestión de spa",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/spas",
  },
  openGraph: {
    title: "Software para Spas y Centros de Bienestar | AgenditApp",
    description:
      "Automatiza tu spa. Reservas online de masajes y terapias, recordatorios por WhatsApp y gestión completa.",
    url: "https://agenditapp.com/sectores/spas",
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
      name: "Spas y Bienestar",
      item: "https://agenditapp.com/sectores/spas",
    },
  ],
};

const features = [
  {
    title: "Gestión de terapeutas",
    description:
      "Asigna masajistas y terapeutas por servicio. Controla horarios y especialidades.",
    icon: "🧘‍♀️",
  },
  {
    title: "Control de salas",
    description:
      "Administra disponibilidad de cabinas, salas de masajes y espacios de tratamiento.",
    icon: "🛏️",
  },
  {
    title: "Catálogo de servicios wellness",
    description:
      "Masajes, faciales, hidroterapia, tratamientos corporales. Todo en un solo lugar.",
    icon: "💆‍♀️",
  },
  {
    title: "Reservas online 24/7",
    description:
      "Tus clientes reservan en cualquier momento. Aumenta ocupación sin atender el teléfono.",
    icon: "🌙",
  },
  {
    title: "Recordatorios personalizados",
    description:
      "Envía mensajes por WhatsApp con instrucciones previas al tratamiento.",
    icon: "📲",
  },
  {
    title: "Paquetes y promociones",
    description:
      "Crea combos de servicios, membresías y planes especiales para fidelizar clientes.",
    icon: "🎁",
  },
];

export default function SpasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-6xl mb-6">🧖‍♀️</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software para Spas y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Centros de Bienestar
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Digitaliza tu spa con reservas online automáticas, gestión de
              terapeutas y salas, recordatorios por WhatsApp y control total de
              servicios wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <DemoCtaButton className="px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors cursor-pointer">
                Probar gratis
              </DemoCtaButton>
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
              Todo para gestionar tu spa profesionalmente
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
              Beneficios clave para tu spa
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🕒 Optimiza ocupación de salas
                </h3>
                <p className="text-slate-300">
                  Visualiza disponibilidad de cabinas y terapeutas en tiempo
                  real. Reduce tiempos muertos y aumenta ingresos.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  📊 Reportes de servicios más solicitados
                </h3>
                <p className="text-slate-300">
                  Conoce qué masajes y tratamientos prefieren tus clientes.
                  Toma decisiones basadas en datos.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  💬 Comunicación directa con clientes
                </h3>
                <p className="text-slate-300">
                  Envía recordatorios con recomendaciones previas (ayuno,
                  hidratación) para mejorar la experiencia.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🎯 Sin complicaciones técnicas
                </h3>
                <p className="text-slate-300">
                  Todo en la nube. No necesitas instalar nada. Accede desde
                  celular, tablet o computadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transforma la gestión de tu spa
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a spas y centros de bienestar que ya digitalizaron su
              operación. Sin permanencia.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
