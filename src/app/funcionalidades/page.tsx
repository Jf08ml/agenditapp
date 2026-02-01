import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../(landing)/components/constants";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title:
    "Funcionalidades | Características del Sistema de Agendamiento AgenditApp",
  description:
    "Descubre todas las funcionalidades de AgenditApp: reservas online 24/7, confirmación/cancelación por WhatsApp, recordatorios automáticos, fidelidad, branding personalizado, gestión de empleados, comisiones, analíticas y página web.",
  keywords: [
    "funcionalidades agendamiento",
    "características sistema de reservas",
    "recordatorios WhatsApp automáticos",
    "confirmar cita WhatsApp",
    "cancelar cita WhatsApp",
    "gestión de empleados",
    "comisiones por empleado",
    "control de caja digital",
    "análisis de negocio",
    "página web reservas",
    "fidelidad clientes",
    "branding marca blanca",
  ],
  alternates: {
    canonical: "https://agenditapp.com/funcionalidades",
  },
  openGraph: {
    title: "Funcionalidades | Sistema de Agendamiento AgenditApp",
    description:
      "Conoce todas las herramientas que ofrece AgenditApp para automatizar reservas, WhatsApp, fidelidad y gestión completa del negocio.",
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
          "Tus clientes agendan desde tu página web en cualquier momento, sin llamadas ni esperas.",
      },
      {
        nombre: "Citas ilimitadas",
        descripcion:
          "Recibe todas las reservas que necesites: sin límites por mes y sin costos por cita.",
      },
      {
        nombre: "Agenda visual simple",
        descripcion:
          "Calendario intuitivo con vista por día/semana y organización clara por empleado y servicio.",
      },
      {
        nombre: "Servicios configurables",
        descripcion:
          "Define duración, precio y disponibilidad de cada servicio. Ajusta tu catálogo cuando quieras.",
      },
      {
        nombre: "Horarios por empleado y por negocio",
        descripcion:
          "Configura horarios y disponibilidad para la reserva online según tu operación real (por empleado y por organización).",
      },
      {
        nombre: "Bloqueo de horarios",
        descripcion:
          "Marca descansos, reuniones o eventos especiales fácilmente para evitar sobrecupo.",
      },
    ],
  },
  {
    categoria: "Comunicación y WhatsApp",
    icon: "📲",
    features: [
      {
        nombre: "Mensajes por WhatsApp desde tu número",
        descripcion:
          "Automatiza mensajes desde tu WhatsApp Business (en planes Esencial y Marca Propia).",
      },
      {
        nombre: "Mensaje automático al agendar",
        descripcion:
          "Cada vez que un cliente agenda, recibe un mensaje de confirmación por WhatsApp. El texto es configurable.",
      },
      {
        nombre: "Recordatorios automáticos",
        descripcion:
          "Reduce ausencias con recordatorios antes de cada cita. En Marca Propia puedes usar 2 recordatorios con horas configurables.",
      },
      {
        nombre: "Confirmar asistencia y cancelar desde WhatsApp",
        descripcion:
          "Tus clientes pueden confirmar su asistencia o cancelar la cita directamente desde el mensaje, sin llamadas ni chats largos.",
      },
      {
        nombre: "Mensajes editables (tono de tu marca)",
        descripcion:
          "Personaliza los textos de WhatsApp (agendamiento y recordatorios) con tu estilo y políticas.",
      },
      {
        nombre: "Notificaciones en tiempo real",
        descripcion:
          "Recibe alertas instantáneas cuando llega una nueva reserva o un cambio en la cita.",
      },
    ],
  },
  {
    categoria: "Gestión de Negocio",
    icon: "💼",
    features: [
      {
        nombre: "Gestión de empleados",
        descripcion:
          "Crea empleados, asigna servicios y administra su agenda individual con control total.",
      },
      {
        nombre: "Comisiones y nómina por empleado",
        descripcion:
          "Calcula comisiones por servicio y lleva control de pagos o nómina de forma organizada.",
      },
      {
        nombre: "Gestión de clientes",
        descripcion:
          "Base de datos de clientes con historial de citas, observaciones y mejor seguimiento.",
      },
      {
        nombre: "Analíticas y reportes",
        descripcion:
          "Mide horas pico, servicios más vendidos, rendimiento por empleado y evolución del negocio.",
      },
      {
        nombre: "Gestión de caja",
        descripcion:
          "Registra pagos, métodos de pago y genera reportes para tener claridad de ingresos.",
      },
    ],
  },
  {
    categoria: "Fidelidad y Retención",
    icon: "🎁",
    features: [
      {
        nombre: "Sistema de fidelidad",
        descripcion:
          "Recompensa clientes frecuentes con beneficios y aumenta la recompra sin esfuerzo.",
      },
      {
        nombre: "Mejor experiencia del cliente",
        descripcion:
          "Confirmaciones, recordatorios y una reserva fácil hacen que el cliente vuelva más seguido.",
      },
    ],
  },
  {
    categoria: "Presencia Digital",
    icon: "🌐",
    features: [
      {
        nombre: "Landing de bienvenida",
        descripcion:
          "Página de bienvenida con tus servicios y botón de reserva. En Marca Propia es más profesional para convertir más.",
      },
      {
        nombre: "Subdominio incluido",
        descripcion:
          "En planes Básico y Esencial tienes un subdominio como: tu-negocio.agenditapp.com para empezar rápido.",
      },
      {
        nombre: "Dominio propio (Marca Propia)",
        descripcion:
          "Usa tu propio dominio (ej: tumarca.com / tumarca.com.co) para presencia digital fuerte y más confianza.",
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
    categoria: "Campañas y Crecimiento",
    icon: "📣",
    features: [
      {
        nombre: "Campañas masivas por WhatsApp (Marca Propia)",
        descripcion:
          "Envía campañas a tu base de clientes para promociones, reactivación y anuncios importantes.",
      },
      {
        nombre: "Segmentación y control",
        descripcion:
          "Organiza tu base de clientes para campañas más efectivas (por ejemplo: frecuentes, nuevos, inactivos).",
      },
    ],
  },
  {
    categoria: "Branding, Seguridad y Soporte",
    icon: "🛡️",
    features: [
      {
        nombre: "Branding personalizado (logo, nombre y colores)",
        descripcion:
          "La plataforma se adapta a tu marca: tu logo, nombre del negocio y colores para una experiencia más profesional.",
      },
      {
        nombre: "Datos seguros en la nube",
        descripcion:
          "Tu información está protegida con buenas prácticas de seguridad y respaldos automáticos.",
      },
      {
        nombre: "Acceso desde cualquier dispositivo",
        descripcion:
          "Administra tu negocio desde celular, tablet o computadora, estés donde estés.",
      },
      {
        nombre: "Soporte técnico incluido",
        descripcion:
          "Acompañamiento por WhatsApp y correo para resolver dudas y ayudarte a configurar todo.",
      },
      {
        nombre: "Actualizaciones automáticas",
        descripcion:
          "Siempre tienes mejoras y nuevas funciones sin instalar nada ni pagar extra.",
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
                una sola plataforma
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              AgenditApp te ayuda a automatizar reservas, WhatsApp, fidelidad y
              la gestión completa del negocio para que crezcas sin
              complicaciones.
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
                  Empieza a recibir reservas rápido. Te ayudamos con la
                  configuración inicial.
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
                  Interfaz intuitiva para ti y tu equipo. No necesitas
                  conocimientos técnicos.
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
