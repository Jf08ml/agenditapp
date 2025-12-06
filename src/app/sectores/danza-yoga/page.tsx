import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Escuelas de Danza y Yoga | Sistema de Reservas",
  description:
    "Sistema de agendamiento para escuelas de danza, yoga y pilates. Gestiona clases grupales, talleres, cupos y reservas online.",
  keywords: [
    "software para danza",
    "agenda yoga",
    "sistema reservas pilates",
    "clases grupales",
    "talleres danza",
    "escuelas baile",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/danza-yoga",
  },
  openGraph: {
    title: "Software para Escuelas de Danza y Yoga | AgenditApp",
    description:
      "Agenda para escuelas de danza y yoga. Gestiona clases, talleres y cupos de forma profesional.",
    url: "https://agenditapp.com/sectores/danza-yoga",
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
      name: "Danza y Yoga",
      item: "https://agenditapp.com/sectores/danza-yoga",
    },
  ],
};

const features = [
  {
    title: "Reservas de clases grupales",
    description:
      "Gestiona múltiples clases de danza, yoga o pilates con control de cupos.",
    icon: "💃",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp antes de cada clase o taller.",
    icon: "🔔",
  },
  {
    title: "Gestión de instructores",
    description:
      "Asigna clases a diferentes profesores y controla su agenda.",
    icon: "👩‍🏫",
  },
  {
    title: "Control de cupos",
    description:
      "Define capacidad máxima por clase y evita sobrecupo en tu escuela.",
    icon: "📊",
  },
  {
    title: "Talleres y eventos",
    description:
      "Gestiona talleres especiales, workshops y eventos con inscripción.",
    icon: "🎭",
  },
  {
    title: "Paquetes de clases",
    description:
      "Ofrece bonos de 5, 10 o más clases y controla el consumo.",
    icon: "🎫",
  },
];

export default function DanzaYogaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-bold mb-6">
              🧘‍♀️ Danza y Yoga
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                Escuelas de Danza y Yoga
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu escuela de danza, yoga o pilates de forma
              profesional. Controla clases, cupos, instructores y reservas en un
              solo lugar.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-pink-500 text-white text-lg font-bold shadow-lg hover:bg-pink-400 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu escuela
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-pink-400/50 transition-all"
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

        {/* Testimonial */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-pink-900/20 to-rose-900/20 border border-pink-500/20 rounded-2xl p-8 sm:p-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🌸</div>
                <div>
                  <p className="text-lg text-slate-200 italic mb-4">
                    &quot;Ya no tengo sobrecupo en mis clases. Los alumnos reservan
                    online y yo puedo enfocarme en enseñar. Los recordatorios
                    redujeron las ausencias increíblemente.&quot;
                  </p>
                  <p className="font-bold text-pink-300">
                    Carolina - Instructora de Yoga
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
              ¿Listo para profesionalizar tu escuela?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a escuelas de danza y yoga que ya confían en AgenditApp para
              gestionar sus clases.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-pink-500 text-white text-lg font-bold shadow-lg hover:bg-pink-400 transition-colors"
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
