import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CO from "country-flag-icons/react/3x2/CO";
import MX from "country-flag-icons/react/3x2/MX";
import CR from "country-flag-icons/react/3x2/CR";
import CL from "country-flag-icons/react/3x2/CL";
import type { IconWeight } from "@phosphor-icons/react";
import { Crosshair, Cpu, GlobeSimple, HandHeart } from "@phosphor-icons/react/dist/ssr";

type ValorIcon = React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>;
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

const EQUIPO = [
  {
    nombre: "Juan Mosquera",
    cargo: "Fundador & CEO",
    bio: "Ingeniero de software nacido y formado en Neiva, Huila. Fundó AgenditApp en 2024 tras ver el problema de primera mano en un negocio cercano. Lidera el desarrollo técnico, el producto y la visión de la plataforma.",
    foto: "/equipo/juan.png",
    origen: "Neiva, Huila 🏔️",
    redes: {
      linkedin: "https://www.linkedin.com/in/juanfemosquera/",   // reemplaza con tu URL de LinkedIn
      instagram: "#",  // reemplaza con tu URL de Instagram
      portfolio: "https://juanfe.dev",   // URL de portafolio si tienes (deja vacío para ocultar)
    },
  },
  {
    nombre: "Brayan Mayorga",
    cargo: "Marketing & Ventas",
    bio: "Responsable del crecimiento de marca, redes sociales, diseño visual y estrategia comercial de AgenditApp en Latinoamérica.",
    foto: "/equipo/brayan.jpg",
    origen: "",
    redes: {
      linkedin: "#",   // reemplaza con URL de LinkedIn
      instagram: "#",  // reemplaza con URL de Instagram
      portfolio: "",   // URL de portafolio si tienes (deja vacío para ocultar)
    },
  },
];

const stats = [
  { valor: "2024", label: "Año de fundación" },
  { valor: "+27K", label: "Citas gestionadas" },
  { valor: "4", label: "Países en Latinoamérica" },
  { valor: "16+", label: "Sectores atendidos" },
];

const valores: { Icon: ValorIcon; color: string; titulo: string; descripcion: string }[] = [
  {
    Icon: Crosshair, color: "#EA580C",
    titulo: "Simplicidad ante todo",
    descripcion:
      "Un dueño de salón no debería necesitar un manual para digitalizar su negocio. Cada función de AgenditApp está diseñada para ser usada desde el primer día, sin capacitación técnica.",
  },
  {
    Icon: GlobeSimple, color: "#059669",
    titulo: "Construido para Latinoamérica",
    descripcion:
      "No somos una adaptación de software extranjero. AgenditApp nació en Colombia pensando en WhatsApp como canal principal, en pesos y dólares, con soporte en español real.",
  },
  {
    Icon: Cpu, color: "#D97706",
    titulo: "Automatización que libera tiempo",
    descripcion:
      "Cada minuto que un dueño de negocio pasa gestionando citas manualmente es un minuto que no pasa atendiendo clientes o descansando. Automatizamos lo repetitivo para que ellos hagan lo que importa.",
  },
  {
    Icon: HandHeart, color: "#0D9488",
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
                Esa observación no vino de un estudio de mercado. Juan Mosquera, fundador de AgenditApp, la vivió de primera mano en Neiva, capital del Huila, donde nació, creció y estudió ingeniería de software. Viendo cómo un negocio cercano gestionaba su agenda en papel y por WhatsApp —perdiendo citas, olvidando confirmaciones, desorganizando su semana— entendió que el problema no era de actitud sino de herramientas. Decidió construir la que hubiera querido que tuvieran.
              </p>
              <p>
                Una libreta, un grupo de WhatsApp y la memoria del dueño no escalan. Cada ausencia de cliente, cada cita mal coordinada, cada hora perdida en recordatorios manuales es dinero que se va y tiempo que no vuelve.
              </p>
              <p>
                Antes de escribir la primera línea de código, Juan evaluó lo que existía: Fresha, Booksy, AgendaPro, Square — las plataformas líderes del mercado. El diagnóstico fue claro. Ninguna tenía WhatsApp integrado de verdad, el canal donde los colombianos coordinan todo. Las que se acercaban costaban entre $30 y $60 USD al mes, inaccesibles para la mayoría de negocios pequeños. Y las que eran más baratas eran tan complejas que requerían configuración técnica que el dueño de una barbería no tiene tiempo ni interés de hacer. El mercado tenía software. No tenía el software correcto.
              </p>
              <p>
                Construimos AgenditApp desde cero para este contexto: recordatorios que salen del número del propio negocio, planes desde $10 USD al mes, y una plataforma que cualquier dueño de salón puede usar desde el primer día sin necesitar un técnico.
              </p>
              <p>
                Hoy, más de 27.000 citas han sido gestionadas a través de AgenditApp en Colombia, México, Costa Rica y Chile — cada una es un cliente que llegó a tiempo, una ausencia que no ocurrió, un negocio que ganó.
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
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                    style={{ background: `${v.color}18` }}
                  >
                    <v.Icon size={22} weight="duotone" color={v.color} />
                  </div>
                  <h3 className="text-base font-semibold text-heading mb-2">{v.titulo}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-3">
              El equipo detrás de AgenditApp
            </h2>
            <p className="text-body text-center mb-10 max-w-xl mx-auto">
              Dos personas construyendo el software que hubieran querido tener
              cuando gestionaban su propio negocio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EQUIPO.map((persona) => (
                <div
                  key={persona.nombre}
                  className="bg-bg-card border border-brand/10 rounded-[20px] p-7 flex flex-col items-center text-center gap-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* Foto */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-brand/20 shrink-0">
                    <Image
                      src={persona.foto}
                      alt={persona.nombre}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-lg font-semibold text-heading leading-tight">
                      {persona.nombre}
                    </p>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mt-1 mb-3"
                      style={{ color: "var(--brand)" }}
                    >
                      {persona.cargo}
                    </p>
                    {persona.origen && (
                      <p className="text-xs text-muted mb-3">{persona.origen}</p>
                    )}
                    <p className="text-sm text-body leading-relaxed">
                      {persona.bio}
                    </p>
                  </div>

                  {/* Redes */}
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    {persona.redes.linkedin && persona.redes.linkedin !== "#" && (
                      <a
                        href={persona.redes.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    )}
                    {persona.redes.instagram && persona.redes.instagram !== "#" && (
                      <a
                        href={persona.redes.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                        </svg>
                      </a>
                    )}
                    {persona.redes.portfolio && (
                      <a
                        href={persona.redes.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Portafolio"
                        className="flex items-center justify-center w-8 h-8 rounded-[8px] border border-brand/15 text-muted hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    )}
                  </div>
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
                { pais: "Colombia",   Flag: CO, desc: "País de origen y principal mercado" },
                { pais: "México",     Flag: MX, desc: "Expansión activa desde 2025" },
                { pais: "Costa Rica", Flag: CR, desc: "Negocios activos en la región" },
                { pais: "Chile",      Flag: CL, desc: "Presencia y crecimiento constante" },
              ].map(({ pais, Flag, desc }) => (
                <div
                  key={pais}
                  className="bg-bg-card border border-brand/10 rounded-[16px] p-5 text-center"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex justify-center mb-3">
                    <Flag className="w-10 rounded-sm shadow-sm" />
                  </div>
                  <p className="text-sm font-semibold text-heading">{pais}</p>
                  <p className="text-xs text-muted mt-1 leading-tight">{desc}</p>
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
