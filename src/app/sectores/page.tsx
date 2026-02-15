import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Sectores | Software de Agendamiento para Belleza, Bienestar y Salud",
  description:
    "Descubre cómo AgenditApp optimiza la gestión de citas para salones de belleza, barberías, spas, consultorios médicos, gimnasios y centros de bienestar. Sistema de reservas online adaptado a tu sector.",
  keywords: [
    "software para salones de belleza",
    "agenda para barberías",
    "sistema de citas para spas",
    "software médico de citas",
    "agendamiento para gimnasios",
    "reservas online belleza",
    "gestión de turnos salud",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores",
  },
  openGraph: {
    title: "Sectores | Software de Agendamiento Profesional",
    description:
      "Software de reservas online para salones de belleza, barberías, spas, consultorios y más. Automatiza tu agenda con AgenditApp.",
    url: "https://agenditapp.com/sectores",
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
  ],
};

const sectores = [
  {
    title: "Salones de Belleza",
    slug: "salones-belleza",
    description:
      "Gestiona citas de corte, color, tratamientos y más. Recordatorios automáticos para reducir ausencias.",
    icon: "💇‍♀️",
    keywords: ["manicure", "pedicure", "tintes", "tratamientos capilares"],
  },
  {
    title: "Barberías",
    slug: "barberias",
    description:
      "Agenda de cortes, afeitados y servicios express. Controla tu flujo de clientes sin complicaciones.",
    icon: "💈",
    keywords: ["cortes de cabello", "barba", "afeitado", "grooming"],
  },
  {
    title: "Spas y Bienestar",
    slug: "spas",
    description:
      "Reservas para masajes, faciales, terapias. Gestión de terapeutas y salas en tiempo real.",
    icon: "🧖‍♀️",
    keywords: ["masajes", "faciales", "hidroterapia", "relajación"],
  },
  {
    title: "Consultorios y Clínicas",
    slug: "consultorios",
    description:
      "Sistema médico de citas con recordatorios. Perfecto para consultas, terapias y atención profesional.",
    icon: "🏥",
    keywords: ["consultas médicas", "terapias", "odontología", "psicología"],
  },
  {
    title: "Lash & Brow Studios",
    slug: "lash-brow",
    description:
      "Agenda para extensiones de pestañas, microblading, cejas y servicios de belleza especializados.",
    icon: "👁️",
    keywords: ["pestañas", "microblading", "cejas", "lash lift"],
  },
  {
    title: "Gimnasios y Fitness",
    slug: "gimnasios",
    description:
      "Reserva de clases grupales, entrenamiento personal y gestión de horarios para entrenadores.",
    icon: "🏋️‍♀️",
    keywords: ["fitness", "crossfit", "yoga", "pilates", "entrenamiento"],
  },
  {
    title: "Odontología",
    slug: "odontologia",
    description:
      "Sistema de citas para dentistas. Control de tratamientos, recordatorios y seguimiento de pacientes.",
    icon: "🦷",
    keywords: ["ortodoncia", "limpieza dental", "cirugía", "tratamientos"],
  },
  {
    title: "Psicología y Terapia",
    slug: "psicologia",
    description:
      "Agenda confidencial para psicólogos, terapeutas y profesionales de salud mental.",
    icon: "🧠",
    keywords: ["terapia", "consejeria", "salud mental", "sesiones"],
  },
  {
    title: "Nutricionistas",
    slug: "nutricion",
    description:
      "Reserva de consultas nutricionales, seguimiento de planes alimenticios y control de pacientes.",
    icon: "🥗",
    keywords: ["nutrición", "dietas", "planes alimenticios", "consultas"],
  },
  {
    title: "Veterinarias",
    slug: "veterinarias",
    description:
      "Agenda de citas para mascotas, grooming, vacunas y consultas veterinarias.",
    icon: "🐶",
    keywords: ["mascotas", "grooming", "vacunas", "veterinaria"],
  },
  {
    title: "Escuelas de Danza y Yoga",
    slug: "danza-yoga",
    description:
      "Reserva de clases, talleres y eventos. Gestión de instructores y alumnos.",
    icon: "💃",
    keywords: ["danza", "yoga", "pilates", "clases grupales"],
  },
  {
    title: "Profesores de Música",
    slug: "musica",
    description:
      "Agenda de clases particulares, ensayos y talleres musicales.",
    icon: "🎸",
    keywords: ["guitarra", "piano", "canto", "clases particulares"],
  },
  {
    title: "Tutores y Academias",
    slug: "tutorias",
    description:
      "Sistema de reservas para clases particulares, refuerzos académicos y tutorías.",
    icon: "📚",
    keywords: ["matemáticas", "idiomas", "tutorías", "educación"],
  },
  {
    title: "Fotógrafos y Estudios",
    slug: "fotografia",
    description:
      "Reserva de sesiones fotográficas, eventos y alquiler de estudio.",
    icon: "📸",
    keywords: ["fotografía", "sesiones", "eventos", "estudio"],
  },
  {
    title: "Abogados y Asesorías",
    slug: "abogados",
    description:
      "Agenda de consultas legales, reuniones y gestión de expedientes.",
    icon: "⚖️",
    keywords: ["legal", "consultas", "asesoría", "derecho"],
  },
  {
    title: "Centros de Estética Médica",
    slug: "estetica-medica",
    description:
      "Agenda para tratamientos estéticos, láser, botox y procedimientos médicos.",
    icon: "💉",
    keywords: ["botox", "láser", "tratamientos", "estética"],
  },
];

export default function SectoresPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Todos los Sectores
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              AgenditApp se adapta a las necesidades específicas de tu negocio.
              Automatiza reservas, envía recordatorios y gestiona tu agenda
              desde cualquier dispositivo.
            </p>
            <DemoCtaButton
              className="inline-block px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors cursor-pointer"
            >
              Consultar por mi sector
            </DemoCtaButton>
          </div>
        </section>

        {/* Grid de Sectores */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectores.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/sectores/${sector.slug}`}
                  className="group bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800 hover:border-sky-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                >
                  <div className="text-5xl mb-4">{sector.icon}</div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {sector.title}
                  </h2>
                  <p className="text-slate-300 mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 text-sky-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Ver más detalles →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿No encuentras tu sector?
            </h2>
            <p className="text-slate-300 mb-6">
              AgenditApp es flexible y se adapta a cualquier negocio de servicios.
              Contáctanos y te ayudamos a configurarlo.
            </p>
            <DemoCtaButton
              className="inline-block px-8 py-4 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 transition-colors cursor-pointer"
            >
              Contactar ahora
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
