import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Servicio no disponible en tu región - AgenditApp",
  description: "AgenditApp no está disponible en tu región por el momento.",
  robots: { index: false, follow: false },
};

export default function NoDisponiblePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-bg-main">
      <div
        className="w-full max-w-md bg-bg-card border border-brand/10 rounded-[20px] p-8 sm:p-10 text-center"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div
          className="mx-auto mb-6 w-12 h-12 rounded-full flex items-center justify-center text-brand"
          style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-heading mb-3">
          Servicio no disponible en tu región
        </h1>
        <p className="text-sm text-body leading-relaxed mb-6">
          Por el momento, AgenditApp no está disponible para visitantes ubicados en
          Paraguay. Estamos trabajando para ampliar nuestra cobertura próximamente.
        </p>

        <p className="text-xs text-muted">
          ¿Tienes dudas? Escríbenos a{" "}
          <a
            href="mailto:soporte@agenditapp.com"
            className="text-brand underline decoration-brand/30 hover:decoration-brand transition-colors"
          >
            soporte@agenditapp.com
          </a>
        </p>
      </div>
    </main>
  );
}

// Sin versión en inglés todavía: se genera solo para el locale por defecto
// y cualquier /en/* de esta ruta debe devolver 404 en vez de renderizar en español.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export const dynamicParams = false;
