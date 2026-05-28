import type { Metadata } from "next";
import Link from "next/link";
import type { IconWeight } from "@phosphor-icons/react";
import {
  Sparkle, Scissors, Flower, Eye, Stethoscope, Tooth, Brain, Barbell,
  Leaf, PawPrint, Syringe, Camera, MusicNotes, Books, Scales, YinYang,
} from "@phosphor-icons/react/dist/ssr";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

type PIEntry = { Icon: React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>; color: string };
const SECTOR_ICON_MAP: Record<string, PIEntry> = {
  "💇‍♀️": { Icon: Sparkle,    color: "#DB2777" },
  "💈":   { Icon: Scissors,   color: "#1D4ED8" },
  "🧖‍♀️": { Icon: Flower,     color: "#059669" },
  "🏥":   { Icon: Stethoscope,color: "#0D9488" },
  "👁️":  { Icon: Eye,        color: "#7C3AED" },
  "🏋️‍♀️": { Icon: Barbell,   color: "#EA580C" },
  "🦷":   { Icon: Tooth,      color: "#0EA5E9" },
  "🧠":   { Icon: Brain,      color: "#4338CA" },
  "🥗":   { Icon: Leaf,       color: "#059669" },
  "🐶":   { Icon: PawPrint,    color: "#D97706" },
  "💃":   { Icon: YinYang,    color: "#4338CA" },
  "🎸":   { Icon: MusicNotes, color: "#7C3AED" },
  "📚":   { Icon: Books,      color: "#D97706" },
  "📸":   { Icon: Camera,     color: "#475569" },
  "⚖️":  { Icon: Scales,     color: "#1D4ED8" },
  "💉":   { Icon: Syringe,    color: "#E11D48" },
};

export const metadata: Metadata = {
  title: "Sectores | Software de Agendamiento para Belleza, Bienestar y Salud",
  description:
    "Descubre cómo AgenditApp optimiza la gestión de citas para salones de belleza, barberías, spas, consultorios médicos, gimnasios y centros de bienestar.",
  keywords: ["software para salones de belleza", "agenda para barberías", "sistema de citas para spas", "software médico de citas", "agendamiento para gimnasios"],
  alternates: { canonical: "https://agenditapp.com/sectores" },
  openGraph: {
    title: "Sectores | Software de Agendamiento Profesional",
    description: "Software de reservas online para salones de belleza, barberías, spas, consultorios y más.",
    url: "https://agenditapp.com/sectores",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
  ],
};

const sectores = [
  { title: "Salones de Belleza", slug: "salones-belleza", description: "Gestiona citas de corte, color, tratamientos y más. Recordatorios automáticos para reducir ausencias.", icon: "💇‍♀️", keywords: ["manicure", "pedicure", "tintes", "tratamientos capilares"] },
  { title: "Barberías", slug: "barberias", description: "Agenda de cortes, afeitados y servicios express. Controla tu flujo de clientes sin complicaciones.", icon: "💈", keywords: ["cortes de cabello", "barba", "afeitado", "grooming"] },
  { title: "Spas y Bienestar", slug: "spas", description: "Reservas para masajes, faciales, terapias. Gestión de terapeutas y salas en tiempo real.", icon: "🧖‍♀️", keywords: ["masajes", "faciales", "hidroterapia", "relajación"] },
  { title: "Consultorios y Clínicas", slug: "consultorios", description: "Sistema médico de citas con recordatorios. Perfecto para consultas, terapias y atención profesional.", icon: "🏥", keywords: ["consultas médicas", "terapias", "odontología", "psicología"] },
  { title: "Lash & Brow Studios", slug: "lash-brow", description: "Agenda para extensiones de pestañas, microblading, cejas y servicios de belleza especializados.", icon: "👁️", keywords: ["pestañas", "microblading", "cejas", "lash lift"] },
  { title: "Gimnasios y Fitness", slug: "gimnasios", description: "Reserva de clases grupales, entrenamiento personal y gestión de horarios para entrenadores.", icon: "🏋️‍♀️", keywords: ["fitness", "crossfit", "yoga", "pilates"] },
  { title: "Odontología", slug: "odontologia", description: "Sistema de citas para dentistas. Control de tratamientos, recordatorios y seguimiento de pacientes.", icon: "🦷", keywords: ["ortodoncia", "limpieza dental", "cirugía", "tratamientos"] },
  { title: "Psicología y Terapia", slug: "psicologia", description: "Agenda confidencial para psicólogos, terapeutas y profesionales de salud mental.", icon: "🧠", keywords: ["terapia", "consejería", "salud mental", "sesiones"] },
  { title: "Nutricionistas", slug: "nutricion", description: "Reserva de consultas nutricionales, seguimiento de planes alimenticios y control de pacientes.", icon: "🥗", keywords: ["nutrición", "dietas", "planes alimenticios", "consultas"] },
  { title: "Veterinarias", slug: "veterinarias", description: "Agenda de citas para mascotas, grooming, vacunas y consultas veterinarias.", icon: "🐶", keywords: ["mascotas", "grooming", "vacunas", "veterinaria"] },
  { title: "Escuelas de Danza y Yoga", slug: "danza-yoga", description: "Reserva de clases, talleres y eventos. Gestión de instructores y alumnos.", icon: "💃", keywords: ["danza", "yoga", "pilates", "clases grupales"] },
  { title: "Profesores de Música", slug: "musica", description: "Agenda de clases particulares, ensayos y talleres musicales.", icon: "🎸", keywords: ["guitarra", "piano", "canto", "clases particulares"] },
  { title: "Tutores y Academias", slug: "tutorias", description: "Sistema de reservas para clases particulares, refuerzos académicos y tutorías.", icon: "📚", keywords: ["matemáticas", "idiomas", "tutorías", "educación"] },
  { title: "Fotógrafos y Estudios", slug: "fotografia", description: "Reserva de sesiones fotográficas, eventos y alquiler de estudio.", icon: "📸", keywords: ["fotografía", "sesiones", "eventos", "estudio"] },
  { title: "Abogados y Asesorías", slug: "abogados", description: "Agenda de consultas legales, reuniones y gestión de expedientes.", icon: "⚖️", keywords: ["legal", "consultas", "asesoría", "derecho"] },
  { title: "Centros de Estética Médica", slug: "estetica-medica", description: "Agenda para tratamientos estéticos, láser, botox y procedimientos médicos.", icon: "💉", keywords: ["botox", "láser", "tratamientos", "estética"] },
];

export default function SectoresPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-5">
              Sectores
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              Software adaptado a{" "}
              <span className="text-brand">todos los sectores</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto mb-8 leading-relaxed">
              AgenditApp se adapta a las necesidades específicas de tu negocio.
              Automatiza reservas, envía recordatorios y gestiona tu agenda
              desde cualquier dispositivo.
            </p>
            <DemoCtaButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-brand text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-md cursor-pointer">
              Consultar por mi sector
            </DemoCtaButton>
          </div>
        </section>

        {/* Grid */}
        <section className="py-8 pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectores.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/sectores/${sector.slug}`}
                  className="group bg-bg-card border border-brand/10 rounded-[20px] p-6 hover:border-brand/30 transition-all duration-200 flex flex-col"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {(() => {
                    const e = SECTOR_ICON_MAP[sector.icon];
                    return (
                      <div
                        className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 flex-shrink-0"
                        style={{ background: e ? `${e.color}18` : "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                      >
                        {e ? <e.Icon size={26} weight="duotone" color={e.color} /> : <span className="text-2xl">{sector.icon}</span>}
                      </div>
                    );
                  })()}
                  <h2 className="text-base font-semibold text-heading mb-2 group-hover:text-brand transition-colors">
                    {sector.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed mb-4 flex-1">{sector.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sector.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-brand/6 text-brand border border-brand/15"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver más detalles
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 sm:px-6">
          <div
            className="max-w-4xl mx-auto text-center rounded-[24px] p-10 sm:p-14"
            style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              ¿No encuentras tu sector?
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              AgenditApp es flexible y se adapta a cualquier negocio de servicios.
              Contáctanos y te ayudamos a configurarlo.
            </p>
            <DemoCtaButton className="inline-flex items-center px-7 py-3.5 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
              Contactar ahora
            </DemoCtaButton>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
