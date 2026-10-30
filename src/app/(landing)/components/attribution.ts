/* Atribución de la visita: UTM y fbclid con los que llegó el visitante.
   Solo están en la URL de la primera página; si navega por la landing antes
   de registrarse (por ejemplo, de la portada a /precios), se perderían. Se
   guardan en sessionStorage durante la visita para que el botón de registro
   los reenvíe desde cualquier página. Sin datos personales. */

const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"] as const;
const STORAGE_KEY = "landing_attribution";

function fromSearch(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const found: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key)?.trim();
    if (value) found[key] = value.slice(0, key === "fbclid" ? 500 : 200);
  }
  return found;
}

/** Guarda la atribución de la URL actual, si trae alguna. La última visita con UTM manda. */
export function rememberAttribution(): void {
  const found = fromSearch(window.location.search);
  if (!Object.keys(found).length) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // sessionStorage no disponible: solo se reenvía lo que esté en la URL.
  }
}

/** Atribución guardada en esta visita (vacía si no hay o no se puede leer). */
export function storedAttribution(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== "object") return {};
    const result: Record<string, string> = {};
    for (const key of ATTRIBUTION_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string" && value) result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}
