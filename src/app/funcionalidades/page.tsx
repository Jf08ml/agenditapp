import type { Metadata } from "next";
import Link from "next/link";
import type { IconWeight } from "@phosphor-icons/react";
import {
  CalendarBlank, ChatsCircle, Briefcase, Gift, Globe,
  Megaphone, ShieldCheck, Rocket, Lightbulb, GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

type PhosphorIcon = React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>;

export const metadata: Metadata = {
  title: "Funcionalidades | Características del Sistema de Agendamiento AgenditApp",
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
  alternates: { canonical: "https://agenditapp.com/funcionalidades" },
  openGraph: {
    title: "Funcionalidades | Sistema de Agendamiento AgenditApp",
    description: "Conoce todas las herramientas que ofrece AgenditApp para automatizar reservas, WhatsApp, fidelidad y gestión completa del negocio.",
    url: "https://agenditapp.com/funcionalidades",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Funcionalidades", item: "https://agenditapp.com/funcionalidades" },
  ],
};

const funcionalidades: { categoria: string; Icon: PhosphorIcon; color: string; features: { nombre: string; descripcion: string }[] }[] = [
  {
    categoria: "Agendamiento y Reservas",
    Icon: CalendarBlank, color: "#1D4ED8",
    features: [
      { nombre: "Reservas online 24/7", descripcion: "Tus clientes agendan desde tu página web en cualquier momento, sin llamadas ni esperas." },
      { nombre: "Citas ilimitadas", descripcion: "Recibe todas las reservas que necesites: sin límites por mes y sin costos por cita." },
      { nombre: "Agenda visual simple", descripcion: "Calendario intuitivo con vista por día/semana y organización clara por empleado y servicio." },
      { nombre: "Servicios configurables", descripcion: "Define duración, precio y disponibilidad de cada servicio. Ajusta tu catálogo cuando quieras." },
      { nombre: "Horarios por empleado y por negocio", descripcion: "Configura horarios y disponibilidad para la reserva online según tu operación real." },
      { nombre: "Bloqueo de horarios", descripcion: "Marca descansos, reuniones o eventos especiales fácilmente para evitar sobrecupo." },
    ],
  },
  {
    categoria: "Comunicación y WhatsApp",
    Icon: ChatsCircle, color: "#25D366",
    features: [
      { nombre: "Mensajes por WhatsApp desde tu número", descripcion: "Automatiza mensajes desde tu WhatsApp Business (en planes Esencial y Marca Propia)." },
      { nombre: "Mensaje automático al agendar", descripcion: "Cada vez que un cliente agenda, recibe un mensaje de confirmación por WhatsApp. El texto es configurable." },
      { nombre: "Recordatorios automáticos", descripcion: "Reduce ausencias con recordatorios antes de cada cita. En Marca Propia puedes usar 2 recordatorios con horas configurables." },
      { nombre: "Confirmar asistencia y cancelar desde WhatsApp", descripcion: "Tus clientes pueden confirmar su asistencia o cancelar la cita directamente desde el mensaje." },
      { nombre: "Mensajes editables (tono de tu marca)", descripcion: "Personaliza los textos de WhatsApp con tu estilo y políticas." },
      { nombre: "Notificaciones en tiempo real", descripcion: "Recibe alertas instantáneas cuando llega una nueva reserva o un cambio en la cita." },
    ],
  },
  {
    categoria: "Gestión de Negocio",
    Icon: Briefcase, color: "#0D9488",
    features: [
      { nombre: "Gestión de empleados", descripcion: "Crea empleados, asigna servicios y administra su agenda individual con control total." },
      { nombre: "Comisiones y nómina por empleado", descripcion: "Calcula comisiones por servicio y lleva control de pagos o nómina de forma organizada." },
      { nombre: "Gestión de clientes", descripcion: "Base de datos de clientes con historial de citas, observaciones y mejor seguimiento." },
      { nombre: "Analíticas y reportes", descripcion: "Mide horas pico, servicios más vendidos, rendimiento por empleado y evolución del negocio." },
      { nombre: "Gestión de caja", descripcion: "Registra pagos, métodos de pago y genera reportes para tener claridad de ingresos." },
    ],
  },
  {
    categoria: "Fidelidad y Retención",
    Icon: Gift, color: "#DB2777",
    features: [
      { nombre: "Sistema de fidelidad", descripcion: "Recompensa clientes frecuentes con beneficios y aumenta la recompra sin esfuerzo." },
      { nombre: "Mejor experiencia del cliente", descripcion: "Confirmaciones, recordatorios y una reserva fácil hacen que el cliente vuelva más seguido." },
    ],
  },
  {
    categoria: "Presencia Digital",
    Icon: Globe, color: "#7C3AED",
    features: [
      { nombre: "Landing de bienvenida", descripcion: "Página de bienvenida con tus servicios y botón de reserva. En Marca Propia es más profesional." },
      { nombre: "Subdominio incluido", descripcion: "En planes Básico y Esencial tienes un subdominio como: tu-negocio.agenditapp.com." },
      { nombre: "Dominio propio (Marca Propia)", descripcion: "Usa tu propio dominio (ej: tumarca.com) para presencia digital fuerte y más confianza." },
      { nombre: "Diseño responsive", descripcion: "Tu página se ve perfecta en celulares, tablets y computadoras." },
      { nombre: "SEO optimizado", descripcion: "Tu sitio está preparado para aparecer en búsquedas de Google." },
    ],
  },
  {
    categoria: "Campañas y Crecimiento",
    Icon: Megaphone, color: "#EA580C",
    features: [
      { nombre: "Campañas masivas por WhatsApp (Marca Propia)", descripcion: "Envía campañas a tu base de clientes para promociones, reactivación y anuncios importantes." },
      { nombre: "Segmentación y control", descripcion: "Organiza tu base de clientes para campañas más efectivas." },
    ],
  },
  {
    categoria: "Branding, Seguridad y Soporte",
    Icon: ShieldCheck, color: "#475569",
    features: [
      { nombre: "Branding personalizado (logo, nombre y colores)", descripcion: "La plataforma se adapta a tu marca para una experiencia más profesional." },
      { nombre: "Datos seguros en la nube", descripcion: "Tu información está protegida con buenas prácticas de seguridad y respaldos automáticos." },
      { nombre: "Acceso desde cualquier dispositivo", descripcion: "Administra tu negocio desde celular, tablet o computadora, estés donde estés." },
      { nombre: "Soporte técnico incluido", descripcion: "Acompañamiento por WhatsApp y correo para resolver dudas y ayudarte a configurar todo." },
      { nombre: "Actualizaciones automáticas", descripcion: "Siempre tienes mejoras y nuevas funciones sin instalar nada ni pagar extra." },
    ],
  },
];

const highlights: { Icon: PhosphorIcon; color: string; title: string; desc: string }[] = [
  { Icon: Rocket,         color: "#1D4ED8", title: "Configuración rápida", desc: "Empieza a recibir reservas rápido. Te ayudamos con la configuración inicial." },
  { Icon: Lightbulb,      color: "#D97706", title: "Sin permanencia",      desc: "Pago mes a mes. Cancela cuando quieras sin cláusulas ni penalizaciones." },
  { Icon: GraduationCap,  color: "#4338CA", title: "Fácil de usar",        desc: "Interfaz intuitiva para ti y tu equipo. No necesitas conocimientos técnicos." },
];

export default function FuncionalidadesPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-5">
              Funcionalidades
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              Todo lo que necesitas en{" "}
              <span className="text-brand">una sola plataforma</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto mb-8 leading-relaxed">
              AgenditApp te ayuda a automatizar reservas, WhatsApp, fidelidad y
              la gestión completa del negocio para que crezcas sin complicaciones.
            </p>
            <DemoCtaButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-brand text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-md cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>

        {/* Features by category */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-14">
            {funcionalidades.map((cat, idx) => (
              <div key={cat.categoria}>
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color}18` }}
                  >
                    <cat.Icon size={26} weight="duotone" color={cat.color} />
                  </div>
                  <h2 className="text-2xl font-semibold text-heading">{cat.categoria}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.features.map((f) => (
                    <div
                      key={f.nombre}
                      className="bg-bg-card border border-brand/10 rounded-[16px] p-5 hover:border-brand/25 transition-all duration-200"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <h3 className="text-sm font-semibold text-heading mb-1.5">{f.nombre}</h3>
                      <p className="text-sm text-body leading-relaxed">{f.descripcion}</p>
                    </div>
                  ))}
                </div>

                {idx < funcionalidades.length - 1 && (
                  <div className="mt-12 border-t border-brand/8" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-heading text-center mb-10">
              Sin sorpresas ni costos ocultos
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="text-center bg-bg-card border border-brand/10 rounded-[16px] p-6"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex justify-center mb-3">
                    <span className="flex items-center justify-center w-12 h-12 rounded-[12px]" style={{ background: `${h.color}18` }}>
                      <h.Icon size={26} weight="duotone" color={h.color} />
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-heading mb-2">{h.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{h.desc}</p>
                </div>
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
              ¿Listo para optimizar tu negocio?
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              Prueba AgenditApp y descubre cómo automatizar tu agenda puede transformar tu día a día.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <DemoCtaButton className="inline-flex items-center px-7 py-3.5 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
                Probar gratis ahora
              </DemoCtaButton>
              <Link
                href="/precios"
                className="inline-flex items-center px-7 py-3.5 rounded-[12px] border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
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
