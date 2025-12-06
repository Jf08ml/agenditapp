import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Estética Médica | Sistema de Citas Tratamientos",
  description:
    "Sistema de agendamiento para centros de estética médica. Gestiona botox, láser, tratamientos faciales y corporales con agenda profesional.",
  keywords: [
    "software estética médica",
    "agenda botox",
    "sistema láser",
    "tratamientos faciales",
    "medicina estética",
    "depilación láser",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/estetica-medica",
  },
  openGraph: {
    title: "Software para Estética Médica | AgenditApp",
    description:
      "Agenda para centros de estética médica. Gestiona tratamientos, procedimientos y consultas estéticas.",
    url: "https://agenditapp.com/sectores/estetica-medica",
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
      name: "Estética Médica",
      item: "https://agenditapp.com/sectores/estetica-medica",
    },
  ],
};

const features = [
  {
    title: "Agenda de tratamientos",
    description:
      "Gestiona botox, láser, peeling, rellenos y todos tus procedimientos.",
    icon: "💉",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp con indicaciones pre-tratamiento.",
    icon: "📲",
  },
  {
    title: "Historial de tratamientos",
    description:
      "Registra procedimientos, productos usados y evolución del paciente.",
    icon: "📋",
  },
  {
    title: "Gestión de equipos",
    description:
      "Organiza láser, salas de procedimientos y profesionales disponibles.",
    icon: "🏥",
  },
  {
    title: "Consentimientos informados",
    description:
      "Espacio para gestionar documentación y autorizaciones de procedimientos.",
    icon: "📄",
  },
  {
    title: "Control de pagos",
    description:
      "Registra paquetes, sesiones y planes de tratamientos con pagos.",
    icon: "💰",
  },
];

export default function EsteticaMedicaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-bold mb-6">
              💉 Estética Médica
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                Centros de Estética Médica
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu centro de medicina estética con herramientas
              profesionales. Organiza tratamientos, procedimientos y consultas
              con una agenda diseñada para el sector.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-purple-500 text-white text-lg font-bold shadow-lg hover:bg-purple-400 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu centro estético
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all"
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
            <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Beneficios para tu centro
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    100% confidencial
                  </h3>
                  <p className="text-slate-300">
                    Protección total de datos de pacientes y procedimientos.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⏱️</div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    Reduce ausencias
                  </h3>
                  <p className="text-slate-300">
                    Recordatorios automáticos mejoran la asistencia a sesiones.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💼</div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    Profesionalismo
                  </h3>
                  <p className="text-slate-300">
                    Agenda online transmite confianza y seriedad médica.
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
              ¿Listo para profesionalizar tu centro?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a centros de estética médica que ya confían en AgenditApp
              para gestionar sus procedimientos.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-purple-500 text-white text-lg font-bold shadow-lg hover:bg-purple-400 transition-colors"
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
