import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { DemoCtaButton } from "@/app/(landing)/components/ui/DemoCtaModal";

export const metadata: Metadata = {
  title: "Nosotros — Quiénes Somos",
  description:
    "Conoce a AgenditApp: la plataforma de agendamiento online creada en Colombia para negocios de belleza, bienestar y servicios profesionales en Latinoamérica. Nuestra misión, historia y equipo.",
  keywords: [
    "quiénes somos AgenditApp",
    "empresa agendamiento Colombia",
    "startup agendamiento Latinoamérica",
    "AgenditApp historia",
  ],
  alternates: { canonical: "https://agenditapp.com/nosotros" },
  openGraph: {
    title: "Nosotros | AgenditApp",
    description: "Conoce la empresa detrás de AgenditApp: misión, historia y el equipo que construye la plataforma de agendamiento para Latinoamérica.",
    url: "https://agenditapp.com/nosotros",
    images: [{ url: "/og?title=Qui%C3%A9nes%20Somos&subtitle=AgenditApp%20%C2%B7%20Agendamiento%20para%20Latinoam%C3%A9rica&tag=Nosotros", width: 1200, height: 630 }],
  },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  logo: { "@type": "ImageObject", url: "https://agenditapp.com/logo_dorado.png" },
  description:
    "AgenditApp es una plataforma SaaS de agendamiento online fundada en Colombia en 2024, diseñada para negocios de belleza, bienestar y servicios profesionales en Latinoamérica. Automatiza reservas, envía recordatorios por WhatsApp y centraliza la gestión de citas.",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "CO", addressLocality: "Colombia" },
  },
  areaServed: ["CO", "MX", "CL", "CR"],
  knowsAbout: [
    "Software de agendamiento online",
    "Gestión de citas para salones de belleza",
    "Recordatorios automáticos por WhatsApp",
    "Digitalización de negocios de servicios en Latinoamérica",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-318-434-5284",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
    areaServed: ["CO", "MX", "CL", "CR"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Nosotros", item: "https://agenditapp.com/nosotros" },
  ],
};

const stats = [
  { valor: "2024", label: "Año de fundación" },
  { valor: "200+", label: "Negocios activos" },
  { valor: "4", label: "Países en Latinoamérica" },
  { valor: "16+", label: "Sectores atendidos" },
];

const valores = [
  {
    icon: "🎯",
    titulo: "Simplicidad ante todo",
    descripcion:
      "Un dueño de salón no debería necesitar un manual para digitalizar su negocio. Cada función de AgenditApp está diseñada para ser usada desde el primer día, sin capacitación técnica.",
  },
  {
    icon: "🇨🇴",
    titulo: "Construido para Latinoamérica",
    descripcion:
      "No somos una adaptación de software extranjero. AgenditApp nació en Colombia pensando en WhatsApp como canal principal, en pesos y dólares, con soporte en español real.",
  },
  {
    icon: "⚡",
    titulo: "Automatización que libera tiempo",
    descripcion:
      "Cada minuto que un dueño de negocio pasa gestionando citas manualmente es un minuto que no pasa atendiendo clientes o descansando. Automatizamos lo repetitivo para que ellos hagan lo que importa.",
  },
  {
    icon: "🤝",
    titulo: "Éxito compartido",
    descripcion:
      "Cobramos mensualmente solo si nuestros clientes siguen usándonos. Sin permanencias ni cláusulas. Si AgenditApp no entrega valor, el cliente se va — y eso nos obliga a mejorar constantemente.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([ORGANIZATION_SCHEMA, BREADCRUMB_SCHEMA]) }}
      />
      <PageHeader />
      <main className="min-h-screen pt-28">

        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 py-4 max-w-5xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-brand transition-colors">Inicio</Link></li>
            <li className="text-muted/50">/</li>
            <li className="text-heading font-medium">Nosotros</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-brand text-[11px] font-semibold tracking-wider uppercase mb-6"
              style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--brand) 20%, transparent)" }}
            >
              Quiénes somos
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-6">
              Creamos AgenditApp para que los negocios de servicios{" "}
              <span className="text-brand">dejen de perder citas</span>
            </h1>
            <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
              Somos un equipo colombiano que vio de cerca el problema: miles de salones, barberías, consultorios y negocios de servicios perdiendo clientes y tiempo por gestionar su agenda en papel o por WhatsApp manual. Decidimos resolverlo.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-bg-card border border-brand/10 rounded-[16px] p-5 text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className="text-3xl font-semibold text-brand mb-1">{s.valor}</p>
                <p className="text-xs text-muted leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading mb-6">Nuestra historia</h2>
            <div className="prose-custom space-y-4 text-body leading-relaxed">
              <p>
                AgenditApp nació en Colombia en 2024 a partir de una observación simple: los negocios de servicios — salones de belleza, barberías, consultorios, spas — son el motor económico de miles de comunidades en Latinoamérica, pero operan con herramientas de hace 20 años.
              </p>
              <p>
                Una libreta, un grupo de WhatsApp y la memoria del dueño no escalan. Cada ausencia de cliente, cada cita mal coordinada, cada hora perdida en recordatorios manuales es dinero que se va y tiempo que no vuelve.
              </p>
              <p>
                El mercado de software de agendamiento estaba dominado por herramientas diseñadas para Estados Unidos o Europa: precios en dólares altos, sin soporte en español real, y sin WhatsApp como canal central. En Colombia y el resto de Latinoamérica, WhatsApp no es opcional — es el canal donde viven los clientes.
              </p>
              <p>
                Construimos AgenditApp desde cero para este contexto: recordatorios que salen del número del propio negocio, planes accesibles para pequeñas empresas, y una plataforma que cualquier dueño de salón puede usar desde el primer día sin necesitar un técnico.
              </p>
              <p>
                Hoy, más de 200 negocios en Colombia, México, Costa Rica y Chile confían en AgenditApp para gestionar su agenda, reducir ausencias y crecer.
              </p>
            </div>
          </div>
        </section>

        {/* Comparativas */}
        <section className="pb-4 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted">
              ¿Comparando opciones?{" "}
              <Link href="/vs/fresha" className="text-brand hover:underline transition-colors">AgenditApp vs Fresha</Link>
              {" · "}
              <Link href="/vs/agendapro" className="text-brand hover:underline transition-colors">AgenditApp vs AgendaPro</Link>
              {" · "}
              <Link href="/vs/booksy" className="text-brand hover:underline transition-colors">AgenditApp vs Booksy</Link>
              {" · "}
              <Link href="/vs/weibook" className="text-brand hover:underline transition-colors">AgenditApp vs Weibook</Link>
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="py-10 px-4 sm:px-6">
          <div
            className="max-w-4xl mx-auto rounded-[24px] p-10 sm:p-14 text-center"
            style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Nuestra misión</p>
            <p className="text-2xl sm:text-3xl font-semibold text-white leading-snug max-w-2xl mx-auto">
              &ldquo;Que ningún negocio de servicios en Latinoamérica pierda una cita por falta de herramientas.&rdquo;
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-10">
              Cómo trabajamos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {valores.map((v) => (
                <div
                  key={v.titulo}
                  className="bg-bg-card border border-brand/10 rounded-[16px] p-6"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4"
                    style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-base font-semibold text-heading mb-2">{v.titulo}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presencia */}
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-heading text-center mb-8">Presente en Latinoamérica</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { pais: "Colombia", bandera: "🇨🇴", desc: "País de origen y principal mercado" },
                { pais: "México", bandera: "🇲🇽", desc: "Expansión activa desde 2025" },
                { pais: "Costa Rica", bandera: "🇨🇷", desc: "Negocios activos en la región" },
                { pais: "Chile", bandera: "🇨🇱", desc: "Presencia y crecimiento constante" },
              ].map((p) => (
                <div
                  key={p.pais}
                  className="bg-bg-card border border-brand/10 rounded-[16px] p-5 text-center"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="text-3xl mb-2">{p.bandera}</div>
                  <p className="text-sm font-semibold text-heading">{p.pais}</p>
                  <p className="text-xs text-muted mt-1 leading-tight">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-bg-card border border-brand/10 rounded-[20px] p-8 sm:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-xl font-semibold text-heading mb-5">Contáctanos</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-body">
              <div>
                <p className="font-semibold text-heading mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/573184345284"
                  className="text-brand hover:text-brand-hover transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  +57 318 434 5284
                </a>
              </div>
              <div>
                <p className="font-semibold text-heading mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/agenditapp/"
                  className="text-brand hover:text-brand-hover transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  @agenditapp
                </a>
              </div>
              <div>
                <p className="font-semibold text-heading mb-1">Facebook</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61587186579271"
                  className="text-brand hover:text-brand-hover transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  AgenditApp en Facebook
                </a>
              </div>
              <div>
                <p className="font-semibold text-heading mb-1">País</p>
                <p>Colombia 🇨🇴</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-heading mb-3">¿Quieres conocer la plataforma?</h2>
            <p className="text-body mb-8">Solicita una demo gratuita y en menos de 1 hora tienes tu agenda digital funcionando.</p>
            <DemoCtaButton className="inline-flex items-center px-8 py-4 rounded-[14px] bg-brand text-white font-semibold text-base hover:bg-brand-hover transition-colors cursor-pointer shadow-[0_8px_24px_rgba(29,78,216,0.28)]">
              Solicitar demo gratis
            </DemoCtaButton>
            <p className="text-muted text-sm mt-4">Sin permanencia · Sin tarjeta de crédito</p>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
