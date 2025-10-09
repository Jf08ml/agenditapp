import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | AgenditApp",
  description:
    "Consulta nuestra política de privacidad y tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4 text-slate-400">
        En AgenditApp respetamos y protegemos tu privacidad. Esta política
        explica cómo recopilamos, usamos y protegemos tu información personal.
      </p>

      <section className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          <strong>1. Información que recopilamos:</strong> Al registrarte,
          podemos solicitar nombre, correo, teléfono, información de tu negocio
          y preferencias de uso.
        </p>
        <p>
          <strong>2. Uso de datos:</strong> Usamos esta información
          exclusivamente para prestar el servicio, enviar notificaciones de
          reservas y comunicaciones relacionadas.
        </p>
        <p>
          <strong>3. Protección:</strong> Implementamos medidas técnicas y
          organizativas para proteger tu información de accesos no autorizados o
          usos indebidos.
        </p>
        <p>
          <strong>4. Derechos ARCO:</strong> Puedes acceder, rectificar o
          eliminar tus datos escribiéndonos a{" "}
          <a
            href="mailto:soporte@agenditapp.com"
            className="underline text-sky-400"
          >
            soporte@agenditapp.com
          </a>
          .
        </p>
        <p>
          <strong>5. Cookies:</strong> Utilizamos cookies esenciales para el
          correcto funcionamiento del sitio y para mejorar tu experiencia de
          uso.
        </p>
      </section>

      <p className="mt-8 text-xs text-slate-500">
        Última actualización: {new Date().toLocaleDateString("es-CO")}
      </p>
    </main>
  );
}
