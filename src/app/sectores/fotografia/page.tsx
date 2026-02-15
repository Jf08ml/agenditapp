import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Fotógrafos | Sistema de Reserva de Sesiones",
  description:
    "Sistema de agendamiento para fotógrafos y estudios. Gestiona sesiones fotográficas, eventos, alquiler de estudio con calendario online.",
  keywords: [
    "software para fotógrafos",
    "agenda sesiones fotográficas",
    "sistema reservas estudio",
    "fotografía eventos",
    "alquiler estudio fotográfico",
    "booking fotografía",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/fotografia",
  },
  openGraph: {
    title: "Software para Fotógrafos | AgenditApp",
    description:
      "Agenda para fotógrafos. Gestiona sesiones, eventos y alquiler de estudio con reservas online.",
    url: "https://agenditapp.com/sectores/fotografia",
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
      name: "Fotografía",
      item: "https://agenditapp.com/sectores/fotografia",
    },
  ],
};

const features = [
  {
    title: "Agenda de sesiones",
    description:
      "Gestiona sesiones de retratos, familias, productos, eventos y más.",
    icon: "📸",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp con detalles de la sesión.",
    icon: "📲",
  },
  {
    title: "Gestión de eventos",
    description:
      "Organiza bodas, bautizos, cumpleaños y eventos corporativos.",
    icon: "🎉",
  },
  {
    title: "Alquiler de estudio",
    description:
      "Permite que otros fotógrafos reserven tu estudio por horas.",
    icon: "🏢",
  },
  {
    title: "Depósitos y anticipos",
    description:
      "Registra pagos anticipados, depósitos y saldos pendientes.",
    icon: "💰",
  },
  {
    title: "Portafolio online",
    description:
      "Muestra tu trabajo y permite que clientes reserven directamente.",
    icon: "🌐",
  },
];

export default function FotografiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-slate-500/10 border border-slate-500/30 text-slate-300 text-sm font-bold mb-6">
              📸 Fotografía
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-400">
                Fotógrafos y Estudios
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu estudio fotográfico de forma profesional. Organiza
              sesiones, eventos y alquiler de estudio con una agenda online que
              impresiona a tus clientes.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-slate-600 text-white text-lg font-bold shadow-lg hover:bg-slate-500 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu estudio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-slate-400/50 transition-all"
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
            <div className="bg-gradient-to-r from-slate-900/40 to-gray-900/40 border border-slate-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Beneficios para tu negocio fotográfico
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="text-xl font-bold text-slate-300 mb-2">
                    Ahorra tiempo
                  </h3>
                  <p className="text-slate-400">
                    Deja de coordinar sesiones por WhatsApp. Tus clientes
                    reservan online.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💼</div>
                  <h3 className="text-xl font-bold text-slate-300 mb-2">
                    Proyecta profesionalismo
                  </h3>
                  <p className="text-slate-400">
                    Una agenda online da confianza y muestra tu profesionalismo.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📈</div>
                  <h3 className="text-xl font-bold text-slate-300 mb-2">
                    Aumenta reservas
                  </h3>
                  <p className="text-slate-400">
                    Disponibilidad 24/7 significa más oportunidades de negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para profesionalizar tu estudio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a fotógrafos que ya confían en AgenditApp para gestionar sus
              sesiones.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-slate-600 text-white text-lg font-bold shadow-lg hover:bg-slate-500 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
