import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Tutores y Academias | Sistema de Clases Particulares",
  description:
    "Sistema de agendamiento para tutores y academias. Gestiona clases de matemáticas, idiomas, refuerzo escolar y más con recordatorios automáticos.",
  keywords: [
    "software para tutores",
    "agenda clases particulares",
    "sistema tutorías",
    "refuerzo escolar",
    "clases idiomas",
    "academia matemáticas",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/tutorias",
  },
  openGraph: {
    title: "Software para Tutores y Academias | AgenditApp",
    description:
      "Agenda para tutores. Gestiona clases particulares, refuerzo escolar y talleres educativos.",
    url: "https://agenditapp.com/sectores/tutorias",
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
      name: "Tutorías",
      item: "https://agenditapp.com/sectores/tutorias",
    },
  ],
};

const features = [
  {
    title: "Agenda de clases particulares",
    description:
      "Organiza tutorías de matemáticas, idiomas, ciencias y más materias.",
    icon: "📚",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios a estudiantes y padres por WhatsApp.",
    icon: "🔔",
  },
  {
    title: "Gestión de estudiantes",
    description:
      "Registra nivel académico, objetivos y progreso de cada alumno.",
    icon: "👨‍🎓",
  },
  {
    title: "Clases presenciales y online",
    description:
      "Gestiona tanto clases en tu academia como sesiones virtuales.",
    icon: "💻",
  },
  {
    title: "Talleres y grupos",
    description:
      "Organiza talleres grupales, preparación de exámenes y cursos.",
    icon: "📖",
  },
  {
    title: "Control de pagos",
    description:
      "Registra mensualidades, clases sueltas y paquetes de horas.",
    icon: "💰",
  },
];

export default function TutoriasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold mb-6">
              📚 Tutorías y Academias
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Tutores y Academias
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu academia o clases particulares de forma profesional.
              Organiza tutorías, refuerzo escolar y talleres con una herramienta
              diseñada para educadores.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow-lg hover:bg-blue-400 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu academia
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all"
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
            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🌟</div>
                <div>
                  <p className="text-lg text-slate-200 italic mb-4">
                    &quot;Los padres aprecian recibir recordatorios automáticos. Ya no
                    tengo que estar llamando para confirmar las clases, y los
                    alumnos llegan más puntuales.&quot;
                  </p>
                  <p className="font-bold text-blue-300">
                    Roberto - Tutor de Matemáticas
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
              ¿Listo para profesionalizar tu academia?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a tutores que ya confían en AgenditApp para gestionar sus
              clases.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow-lg hover:bg-blue-400 transition-colors"
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
