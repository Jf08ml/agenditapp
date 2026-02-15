import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Gimnasios y Fitness | Sistema de Reservas de Clases",
  description:
    "Sistema de agendamiento para gimnasios, box de crossfit, estudios de yoga y entrenadores personales. Gestiona clases grupales, reservas de cupos y horarios de entrenamiento.",
  keywords: [
    "software para gimnasios",
    "agenda para crossfit",
    "sistema reservas fitness",
    "agendamiento clases yoga",
    "software entrenador personal",
    "gestión clases grupales",
    "reservas gimnasio",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/gimnasios",
  },
  openGraph: {
    title: "Software para Gimnasios y Fitness | AgenditApp",
    description:
      "Automatiza reservas de clases, gestiona horarios de entrenadores y controla cupos en tiempo real.",
    url: "https://agenditapp.com/sectores/gimnasios",
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
      name: "Gimnasios y Fitness",
      item: "https://agenditapp.com/sectores/gimnasios",
    },
  ],
};

const features = [
  {
    title: "Reservas de clases grupales",
    description:
      "Controla cupos disponibles, horarios y asistencia a clases de yoga, crossfit, spinning y más.",
    icon: "🏋️‍♀️",
  },
  {
    title: "Gestión de entrenadores",
    description:
      "Asigna horarios, clases y entrenamientos personales a cada coach.",
    icon: "👨‍🏫",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp para reducir ausencias en clases.",
    icon: "📲",
  },
  {
    title: "Control de cupos",
    description:
      "Establece límites de personas por clase y evita sobrecupos.",
    icon: "📊",
  },
  {
    title: "Reservas online 24/7",
    description:
      "Tus clientes reservan su clase desde tu página web a cualquier hora.",
    icon: "🌐",
  },
  {
    title: "Reportes de asistencia",
    description:
      "Visualiza estadísticas de clases más populares y horarios pico.",
    icon: "📈",
  },
];

export default function GimnasiosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-sm font-bold mb-6">
              🏋️‍♀️ Gimnasios y Fitness
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Reservas para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Gimnasios y Estudios Fitness
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona clases grupales, entrenamientos personales y cupos en
              tiempo real. Sistema completo para gimnasios, box de crossfit y
              estudios de yoga.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-orange-500 text-white text-lg font-bold shadow-lg hover:bg-orange-400 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu gimnasio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-orange-400/50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Beneficios clave
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎯 Optimiza tu capacidad
                </h3>
                <p className="text-slate-300">
                  Llena todas tus clases sin exceder cupos. Visualiza horarios
                  disponibles y maximiza la ocupación de tu gimnasio.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ⚡ Reduce trabajo administrativo
                </h3>
                <p className="text-slate-300">
                  Automatiza recordatorios, confirmaciones y cancelaciones.
                  Dedica más tiempo a entrenar que a gestionar agendas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar tu gimnasio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a gimnasios que ya confían en AgenditApp. Sin permanencia,
              sin complicaciones.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-orange-500 text-white text-lg font-bold shadow-lg hover:bg-orange-400 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
