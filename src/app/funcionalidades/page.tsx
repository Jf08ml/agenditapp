import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../(landing)/components/constants";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Funcionalidades | Características del Sistema de Agendamiento AgenditApp",
  description:
    "Descubre todas las funcionalidades de AgenditApp: reservas online 24/7, recordatorios automáticos por WhatsApp, gestión de empleados, control de caja, análisis de horas pico, página web personalizada y más.",
  keywords: [
    "funcionalidades agendamiento",
    "características sistema de reservas",
    "recordatorios WhatsApp automáticos",
    "gestión de empleados",
    "control de caja digital",
    "análisis de negocio",
    "página web reservas",
  ],
  alternates: {
    canonical: "https://agenditapp.com/funcionalidades",
  },
  openGraph: {
    title: "Funcionalidades | Sistema de Agendamiento AgenditApp",
    description:
      "Conoce todas las herramientas que ofrece AgenditApp para optimizar tu negocio de servicios.",
    url: "https://agenditapp.com/funcionalidades",
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
      name: "Funcionalidades",
      item: "https://agenditapp.com/funcionalidades",
    },
  ],
};

const funcionalidades = [
  {
    categoria: "Agendamiento y Reservas",
    icon: "📅",
    features: [
      {
        nombre: "Reservas online 24/7",
        descripcion:
          "Tus clientes agendan desde tu página web en cualquier momento, sin necesidad de llamadas.",
      },
      {
        nombre: "Agenda visual simple",
        descripcion:
          "Vista de calendario intuitiva con código de colores por servicio y empleado.",
      },
      {
        nombre: "Configuración de servicios",
        descripcion:
          "Define duración, precio y disponibilidad de cada servicio que ofreces.",
      },
      {
        nombre: "Bloqueo de horarios",
        descripcion:
          "Marca descansos, reuniones o eventos especiales fácilmente.",
      },
    ],
  },
  {
    categoria: "Comunicación y Recordatorios",
    icon: "📲",
    features: [
      {
        nombre: "Recordatorios automáticos por WhatsApp",
        descripcion:
          "Envía mensajes desde tu número oficial 24h antes de cada cita. Reduce ausencias hasta 70%.",
      },
      {
        nombre: "Confirmación de citas",
        descripcion:
          "Los clientes pueden confirmar, cancelar o reprogramar directamente desde WhatsApp.",
      },
      {
        nombre: "Mensajes personalizados",
        descripcion:
          "Configura el texto de tus recordatorios con tu tono de marca.",
      },
      {
        nombre: "Notificaciones en tiempo real",
        descripcion:
          "Recibe alertas instantáneas de nuevas reservas en tu dispositivo.",
      },
    ],
  },
  {
    categoria: "Gestión de Negocio",
    icon: "💼",
    features: [
      {
        nombre: "Control de empleados",
        descripcion:
          "Gestiona horarios, servicios asignados y agenda individual de cada empleado.",
      },
      {
        nombre: "Gestión de caja",
        descripcion:
          "Registra pagos, abonos, métodos de pago y genera reportes financieros.",
      },
      {
        nombre: "Historial de clientes",
        descripcion:
          "Consulta el historial completo de citas de cada cliente para mejor atención.",
      },
      {
        nombre: "Reportes y analíticas",
        descripcion:
          "Analiza horas pico, servicios más solicitados y rendimiento del negocio.",
      },
    ],
  },
  {
    categoria: "Presencia Digital",
    icon: "🌐",
    features: [
      {
        nombre: "Página web personalizada",
        descripcion:
          "Landing de bienvenida con tus colores, logo, servicios y formulario de reserva integrado.",
      },
      {
        nombre: "Dominio personalizado",
        descripcion:
          "Usa tu propio dominio (ej: tusalon.com) o el que te proporcionamos.",
      },
      {
        nombre: "Diseño responsive",
        descripcion:
          "Tu página se ve perfecta en celulares, tablets y computadoras.",
      },
      {
        nombre: "SEO optimizado",
        descripcion:
          "Tu sitio está preparado para aparecer en búsquedas de Google.",
      },
    ],
  },
  {
    categoria: "Seguridad y Soporte",
    icon: "🔒",
    features: [
      {
        nombre: "Datos seguros en la nube",
        descripcion:
          "Tu información protegida con encriptación y backups automáticos.",
      },
      {
        nombre: "Acceso desde cualquier dispositivo",
        descripcion:
          "Gestiona tu negocio desde celular, tablet o computadora, donde estés.",
      },
      {
        nombre: "Soporte técnico incluido",
        descripcion:
          "Ayuda por WhatsApp y correo para resolver cualquier duda.",
      },
      {
        nombre: "Actualizaciones automáticas",
        descripcion:
          "Siempre tienes la última versión sin instalar ni pagar extra.",
      },
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Todo lo que necesitas en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Una Sola Plataforma
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              AgenditApp incluye todas las herramientas que tu negocio de
              servicios necesita para automatizar reservas, comunicarse con
              clientes y crecer sin complicaciones.
            </p>
            <a
              href={WHATSAPP_HREF}
              className="inline-block px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
            >
              Solicitar demo
            </a>
          </div>
        </section>

        {/* Funcionalidades por categoría */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {funcionalidades.map((categoria, idx) => (
              <div key={categoria.categoria}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">{categoria.icon}</div>
                  <h2 className="text-3xl font-bold text-white">
                    {categoria.categoria}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoria.features.map((feature) => (
                    <div
                      key={feature.nombre}
                      className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-sky-400/50 transition-all"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.nombre}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {feature.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
                {idx < funcionalidades.length - 1 && (
                  <div className="mt-12 border-t border-white/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios adicionales */}
        <section className="py-16 px-4 sm:px-6 bg-slate-800/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Sin sorpresas ni costos ocultos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Configuración rápida
                </h3>
                <p className="text-slate-300">
                  Empieza a recibir reservas el mismo día. No requiere
                  instalaciones complejas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Sin permanencia
                </h3>
                <p className="text-slate-300">
                  Pago mes a mes. Cancela cuando quieras sin cláusulas ni
                  penalizaciones.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fácil de usar
                </h3>
                <p className="text-slate-300">
                  Interfaz intuitiva que no requiere conocimientos técnicos.
                  Todos pueden usarla.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para optimizar tu negocio?
            </h2>
            <p className="text-slate-300 mb-6">
              Prueba AgenditApp gratis y descubre cómo automatizar tu agenda
              puede transformar tu día a día.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_HREF}
                className="inline-block px-8 py-4 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 transition-colors"
              >
                Probar gratis ahora
              </a>
              <Link
                href="/precios"
                className="inline-block px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-medium transition-colors"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
