/* ─────────────────────────────────────────────────────────────
   Meta Pixel + Conversions API (CAPI) para la landing /oferta.

   Cada click en un botón de WhatsApp dispara el evento estándar
   "Contact" dos veces con el MISMO event_id:
   - browser: window.fbq (Pixel)
   - server:  POST /api/capi (Conversions API)
   Meta deduplica automáticamente por event_name + event_id.
───────────────────────────────────────────────────────────── */

/* source (event_label de GA) → content_name del evento "Contact".
   Solo los CTAs de /oferta; cualquier otro source es un no-op. */
const OFERTA_CONTACT_NAMES: Record<string, string> = {
  oferta_header: "land1_header",
  oferta_hero_whatsapp: "land1_hero",
  oferta_banda_whatsapp: "land1_oferta",
  oferta_media_whatsapp: "land1_media",
  oferta_final_whatsapp: "land1_final",
  fab: "flotante",
};

type FbqWindow = Window & {
  fbq?: (...args: unknown[]) => void;
};

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function trackContact(contentName: string) {
  const eventId = crypto.randomUUID();

  const { fbq } = window as FbqWindow;
  if (fbq) {
    fbq(
      "track",
      "Contact",
      { content_name: contentName },
      { eventID: eventId },
    );
  }

  /* keepalive: el click navega a WhatsApp y descarga la página;
     garantiza que el beacon al CAPI se complete igual. */
  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_id: eventId,
      content_name: contentName,
      event_source_url: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
    }),
    keepalive: true,
  }).catch(() => {});
}

/* Punto de entrada desde los botones de WhatsApp (compartidos con otras
   páginas): solo dispara en /oferta — única ruta con el pixel montado —
   y solo para los sources mapeados. */
export function trackMetaContactFromSource(source: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname.replace(/\/+$/, "") !== "/oferta") return;

  const contentName = OFERTA_CONTACT_NAMES[source];
  if (contentName) trackContact(contentName);
}
