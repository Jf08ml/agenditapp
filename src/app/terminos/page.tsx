import type { Metadata } from "next";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Sistema de Reservas Online",
  description: "Términos y condiciones de uso de AgenditApp. Conoce las políticas de nuestro software de agendamiento online, planes, pagos y uso de la plataforma.",
  alternates: { canonical: "https://agenditapp.com/terminos" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
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
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading mb-3">Términos y Condiciones</h1>
            <p className="text-body leading-relaxed">
              Bienvenido/a a AgenditApp. Al usar nuestra plataforma, aceptas los
              siguientes términos y condiciones. Por favor, léelos cuidadosamente.
            </p>
          </div>

          {/* Content */}
          <div className="bg-bg-card border border-brand/10 rounded-[20px] p-6 sm:p-8 space-y-6"
            style={{ boxShadow: "var(--shadow-card)" }}>
            {[
              { n: "1", title: "Uso del servicio", body: "El acceso a la plataforma es personal e intransferible. No está permitido revender, sublicenciar o compartir credenciales sin autorización." },
              { n: "2", title: "Pagos y planes", body: "Todos los precios están en dólares (USD). Los pagos son mensuales y no tienen cláusulas de permanencia. Puedes cancelar en cualquier momento." },
              { n: "3", title: "Responsabilidad", body: "AgenditApp no se hace responsable por fallas externas de conectividad o integraciones con terceros (ej. WhatsApp) fuera de nuestro control." },
              { n: "4", title: "Modificaciones", body: "Nos reservamos el derecho de actualizar estos términos en cualquier momento. Se notificará a los usuarios activos en caso de cambios importantes." },
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
                  <p className="text-sm text-body leading-relaxed">{item.body}</p>
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
