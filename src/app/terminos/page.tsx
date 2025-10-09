import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | AgenditApp",
  description: "Lee los términos y condiciones del servicio de AgenditApp.",
};

export default function TerminosPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <p className="mb-4 text-slate-400">
        Bienvenido/a a AgenditApp. Al usar nuestra plataforma, aceptas los
        siguientes términos y condiciones. Por favor, léelos cuidadosamente.
      </p>

      <section className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          <strong>1. Uso del servicio:</strong> El acceso a la plataforma es
          personal e intransferible. No está permitido revender, sublicenciar o
          compartir credenciales sin autorización.
        </p>
        <p>
          <strong>2. Pagos y planes:</strong> Todos los precios están en pesos
          colombianos (COP). Los pagos son mensuales y no tienen cláusulas de
          permanencia. Puedes cancelar en cualquier momento.
        </p>
        <p>
          <strong>3. Responsabilidad:</strong> AgenditApp no se hace responsable
          por fallas externas de conectividad o integraciones con terceros (ej.
          WhatsApp) fuera de nuestro control.
        </p>
        <p>
          <strong>4. Modificaciones:</strong> Nos reservamos el derecho de
          actualizar estos términos en cualquier momento. Se notificará a los
          usuarios activos en caso de cambios importantes.
        </p>
      </section>

      <p className="mt-8 text-xs text-slate-500">
        Última actualización: {new Date().toLocaleDateString("es-CO")}
      </p>
    </main>
  );
}
