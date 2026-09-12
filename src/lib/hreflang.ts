export const HREFLANG_ALTERNATES = {
  "es-CO": "https://agenditapp.com",
  "es-MX": "https://agenditapp.com/mx",
  "es-CL": "https://agenditapp.com/cl",
  "es-AR": "https://agenditapp.com/ar",
  "es-ES": "https://agenditapp.com/es",
  "es-CR": "https://agenditapp.com/cr",
  "es-EC": "https://agenditapp.com/ec",
  "x-default": "https://agenditapp.com",
} as const;

/**
 * Solo las páginas que ya tienen versión en inglés (ver `pathnames` en
 * src/i18n/routing.ts) deben anunciar la alternante "en" — el resto de
 * rutas (sectores, blog, vs/*, páginas de país) todavía no tienen
 * contenido en inglés, así que no deben listar un hreflang "en" que
 * apunte a una URL inexistente.
 */
export function withEnglish(enPath: string) {
  return {
    ...HREFLANG_ALTERNATES,
    en: `https://agenditapp.com${enPath}`,
  };
}
