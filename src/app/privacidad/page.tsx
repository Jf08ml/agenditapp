import type { Metadata } from "next";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Política de Privacidad | AgenditApp - Sistema de Agendamiento Online",
  description: "Política de privacidad y tratamiento de datos personales de AgenditApp. Conoce cómo protegemos tu información en nuestra plataforma de agendamiento y gestión de citas.",
  keywords: ["política de privacidad", "protección de datos", "AgenditApp privacidad", "tratamiento de datos personales"],
  alternates: { canonical: "https://agenditapp.com/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading mb-3">Política de Privacidad</h1>
            <p className="text-body leading-relaxed">
              En AgenditApp respetamos y protegemos tu privacidad. Esta política
              explica cómo recopilamos, usamos y protegemos tu información personal.
            </p>
          </div>

          {/* Content */}
          <div className="bg-bg-card border border-brand/10 rounded-[20px] p-6 sm:p-8 space-y-6"
            style={{ boxShadow: "var(--shadow-card)" }}>
            {[
              { n: "1", title: "Información que recopilamos", body: "Al registrarte, podemos solicitar nombre, correo, teléfono, información de tu negocio y preferencias de uso." },
              { n: "2", title: "Uso de datos", body: "Usamos esta información exclusivamente para prestar el servicio, enviar notificaciones de reservas y comunicaciones relacionadas." },
              { n: "3", title: "Protección", body: "Implementamos medidas técnicas y organizativas para proteger tu información de accesos no autorizados o usos indebidos." },
              { n: "4", title: "Derechos ARCO", body: null },
              { n: "5", title: "Cookies", body: "Utilizamos cookies esenciales para el correcto funcionamiento del sitio y para mejorar tu experiencia de uso." },
            ].map((item) => (
              <div key={item.n} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-brand"
                  style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                >
                  {item.n}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading mb-1">{item.title}</p>
                  {item.body ? (
                    <p className="text-sm text-body leading-relaxed">{item.body}</p>
                  ) : (
                    <p className="text-sm text-body leading-relaxed">
                      Puedes acceder, rectificar o eliminar tus datos escribiéndonos a{" "}
                      <a href="mailto:soporte@agenditapp.com" className="text-brand underline decoration-brand/30 hover:decoration-brand transition-colors">
                        soporte@agenditapp.com
                      </a>.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted">
            Última actualización: {new Date().toLocaleDateString("es-CO")}
          </p>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
