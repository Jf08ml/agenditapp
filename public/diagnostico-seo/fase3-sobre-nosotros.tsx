// src/app/sobre-nosotros/page.tsx
// ARCHIVO NUEVO — copiar completo

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre AgenditApp | Sistema de Agendamiento Online para LATAM",
  description:
    "AgenditApp es una plataforma SaaS de agendamiento online fundada en Colombia. Ayudamos a barberías, salones, spas, consultorios y negocios de servicios a automatizar sus reservas con WhatsApp.",
  alternates: {
    canonical: "https://agenditapp.com/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre AgenditApp | Agendamiento Online para LATAM",
    description:
      "Conoce la historia, misión y equipo detrás de AgenditApp — el sistema de reservas online con WhatsApp nativo para negocios de belleza y bienestar en Latinoamérica.",
    url: "https://agenditapp.com/sobre-nosotros",
  },
};

// Schema JSON-LD para GEO
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  logo: "https://agenditapp.com/logo-text.png",
  description:
    "AgenditApp es una plataforma SaaS de agendamiento online para negocios de belleza, bienestar y servicios profesionales en Latinoamérica. Permite recibir reservas 24/7 con confirmaciones automáticas por WhatsApp Business.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "CO",
    addressLocality: "Colombia",
  },
  areaServed: ["CO", "MX", "CL", "AR", "CR", "PE", "EC"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Spanish",
    contactOption: "TollFree",
  },
  sameAs: [
    "https://www.instagram.com/agenditapp",
    "https://www.linkedin.com/company/agenditapp",
  ],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Reutiliza el header/footer de tu proyecto.
          Reemplaza PageHeader / PageFooter por los componentes reales de tu codebase.
          Patrón basado en privacidad/page.tsx y terminos/page.tsx */}

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1">
            <li>
              <Link href="/" className="hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">Sobre AgenditApp</li>
          </ol>
        </nav>

        {/* Encabezado */}
        <header className="mb-12">
          <p className="text-sm font-medium text-primary mb-2">Quiénes somos</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Sobre AgenditApp
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            La plataforma de agendamiento online que habla el idioma de los
            negocios latinoamericanos: WhatsApp, sencillez y sin comisiones.
          </p>
        </header>

        {/* Sección 1: Qué es AgenditApp — párrafo citable para GEO */}
        <section className="mb-12" aria-labelledby="que-es">
          <h2 id="que-es" className="text-2xl font-semibold mb-4">
            ¿Qué es AgenditApp?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            AgenditApp es una plataforma SaaS de agendamiento online fundada en
            Colombia, especializada en negocios de belleza, bienestar y servicios
            profesionales. Permite a barberías, salones de belleza, spas,
            consultorios médicos, psicólogos y otros negocios de citas recibir
            reservas en línea las 24 horas del día, con confirmaciones y
            recordatorios automáticos enviados directamente desde el número de
            WhatsApp Business del negocio.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            A diferencia de otras plataformas de reservas, AgenditApp integra
            WhatsApp de forma nativa — los mensajes salen del número propio del
            negocio, no de un número genérico de terceros — y no cobra comisión
            por cada reserva recibida.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            La plataforma opera en Colombia, México, Chile, Costa Rica, Argentina
            y otros países hispanohablantes, con más de 200 negocios activos que
            gestionan colectivamente miles de citas cada mes.
          </p>
        </section>

        {/* Sección 2: Misión */}
        <section className="mb-12" aria-labelledby="mision">
          <h2 id="mision" className="text-2xl font-semibold mb-4">
            Nuestra misión
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Creemos que los dueños de negocios de servicios en Latinoamérica
            merecen herramientas de gestión tan buenas como las que usan las
            empresas grandes — sin permanencia, sin contratos, sin cobros por
            cada reserva.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Nuestra misión es eliminar el caos administrativo que genera manejar
            citas por WhatsApp manual, y convertir la agenda de cada negocio en
            un sistema que trabaja 24/7, incluso cuando el dueño está durmiendo.
          </p>
        </section>

        {/* Sección 3: Sectores */}
        <section className="mb-12" aria-labelledby="sectores">
          <h2 id="sectores" className="text-2xl font-semibold mb-4">
            Sectores que atendemos
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            AgenditApp está diseñado para cualquier negocio que opere con citas o
            turnos programados. Los sectores más frecuentes en nuestra plataforma
            son:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { emoji: "💈", label: "Barberías y peluquerías" },
              { emoji: "💅", label: "Salones de belleza y uñas" },
              { emoji: "🧖", label: "Spas y centros de masajes" },
              { emoji: "👁️", label: "Lashes, cejas y estética" },
              { emoji: "🧠", label: "Psicólogos y terapeutas" },
              { emoji: "🦷", label: "Odontólogos y clínicas dentales" },
              { emoji: "🩺", label: "Consultorios médicos" },
              { emoji: "🏋️", label: "Entrenadores personales y fitness" },
              { emoji: "🎨", label: "Academias y clases individuales" },
              { emoji: "✨", label: "Estética médica" },
            ].map(({ emoji, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm"
              >
                <span aria-hidden="true">{emoji}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sección 4: Países */}
        <section className="mb-12" aria-labelledby="paises">
          <h2 id="paises" className="text-2xl font-semibold mb-4">
            Dónde operamos
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            AgenditApp está disponible para negocios en toda Latinoamérica y
            España. Actualmente tenemos clientes activos en:
          </p>
          <ul className="flex flex-wrap gap-2">
            {[
              { flag: "🇨🇴", name: "Colombia" },
              { flag: "🇲🇽", name: "México" },
              { flag: "🇨🇱", name: "Chile" },
              { flag: "🇨🇷", name: "Costa Rica" },
              { flag: "🇦🇷", name: "Argentina" },
              { flag: "🇵🇪", name: "Perú" },
              { flag: "🇪🇨", name: "Ecuador" },
            ].map(({ flag, name }) => (
              <li
                key={name}
                className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm"
              >
                <span aria-hidden="true">{flag}</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sección 5: Funcionalidades clave */}
        <section className="mb-12" aria-labelledby="funcionalidades">
          <h2 id="funcionalidades" className="text-2xl font-semibold mb-4">
            Qué hace AgenditApp
          </h2>
          <dl className="space-y-4">
            {[
              {
                term: "Reservas online 24/7",
                desc: "Los clientes agendan desde un enlace personalizado sin necesidad de descargar una app ni llamar.",
              },
              {
                term: "WhatsApp desde tu número propio",
                desc: "Las confirmaciones y recordatorios se envían desde el número de WhatsApp Business del negocio, no desde un número genérico.",
              },
              {
                term: "Recordatorios automáticos",
                desc: "El sistema envía recordatorios configurables que reducen las inasistencias hasta un 70%.",
              },
              {
                term: "Gestión de equipo y comisiones",
                desc: "Agenda por empleado, control de comisiones por servicio y reportes de productividad.",
              },
              {
                term: "Sin comisiones por reserva",
                desc: "AgenditApp cobra una suscripción mensual fija — no un porcentaje de cada cita recibida.",
              },
            ].map(({ term, desc }) => (
              <div key={term} className="rounded-lg bg-muted/50 px-5 py-4">
                <dt className="font-medium mb-1">{term}</dt>
                <dd className="text-sm text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sección 6: Contacto */}
        <section className="mb-12" aria-labelledby="contacto">
          <h2 id="contacto" className="text-2xl font-semibold mb-4">
            Contacto
          </h2>
          <div className="rounded-lg border border-border p-6 space-y-3 text-sm">
            <p>
              <span className="font-medium">Soporte y ventas:</span>{" "}
              <a
                href="https://wa.me/573184345284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp — lunes a sábado
              </a>
            </p>
            <p>
              <span className="font-medium">Correo:</span>{" "}
              <a
                href="mailto:soporte@agenditapp.com"
                className="text-primary hover:underline"
              >
                soporte@agenditapp.com
              </a>
            </p>
            <p>
              <span className="font-medium">Sitio web:</span>{" "}
              <a
                href="https://agenditapp.com"
                className="text-primary hover:underline"
              >
                agenditapp.com
              </a>
            </p>
            <p>
              <span className="font-medium">País de origen:</span> Colombia 🇨🇴
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-primary/5 border border-primary/20 px-6 py-8 text-center">
          <h2 className="text-xl font-semibold mb-2">
            ¿Listo para automatizar tu agenda?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Únete a más de 200 negocios en Latinoamérica que ya reciben reservas
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.agenditapp.com/signup"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center rounded-md border border-input px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Ver planes y precios
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
