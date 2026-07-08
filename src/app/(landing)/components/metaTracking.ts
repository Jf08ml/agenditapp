/* ─────────────────────────────────────────────────────────────
   Meta Pixel + Conversions API (CAPI) para las landings de campaña
   /oferta y /oferta-registro.

   Cada click en un CTA dispara un evento dos veces con el MISMO
   event_id:
   - browser: window.fbq (Pixel)
   - server:  POST /api/capi (Conversions API)
   Meta deduplica automáticamente por event_name + event_id.
───────────────────────────────────────────────────────────── */

/* source (event_label de GA) → content_name del evento estándar
   "Contact". CTAs de WhatsApp en /oferta y el flotante de soporte de
   /oferta-registro (que también es contacto por WhatsApp, no
   registro); cualquier otro source es un no-op. */
const OFERTA_CONTACT_NAMES: Record<string, string> = {
  oferta_header: "land1_header",
  oferta_hero_whatsapp: "land1_hero",
  oferta_banda_whatsapp: "land1_oferta",
  oferta_media_whatsapp: "land1_media",
  oferta_final_whatsapp: "land1_final",
  fab: "flotante",
  oferta_registro_fab: "flotante",
};

/* source (event_label de GA) → content_name del evento personalizado
   "CTA Registro". Solo los CTAs de registro en /oferta-registro; el
   botón flotante de esa landing sigue siendo soporte por WhatsApp y
   no se mide aquí. */
const OFERTA_REGISTRO_NAMES: Record<string, string> = {
  oferta_header: "land2_header",
  oferta_hero_signup: "land2_hero",
  oferta_banda_signup: "land2_oferta",
  oferta_media_signup: "land2_media",
  oferta_final_signup: "land2_final",
};

type FbqWindow = Window & {
  fbq?: (...args: unknown[]) => void;
};

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/* keepalive: el click navega fuera de la página (WhatsApp o el
   registro en app.agenditapp.com); garantiza que el beacon al CAPI
   se complete igual. */
function sendCapiEvent(eventName: string, eventId: string, contentName: string) {
  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      content_name: contentName,
      event_source_url: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
    }),
    keepalive: true,
  }).catch(() => {});
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
  sendCapiEvent("Contact", eventId, contentName);
}

export function trackCtaRegistro(contentName: string) {
  const eventId = crypto.randomUUID();
  const { fbq } = window as FbqWindow;
  if (fbq) {
    fbq(
      "trackCustom",
      "CTA Registro",
      { content_name: contentName },
      { eventID: eventId },
    );
  }
  sendCapiEvent("CTA Registro", eventId, contentName);
}

/* Punto de entrada desde los botones de WhatsApp (compartidos con otras
   páginas): dispara en /oferta y en /oferta-registro (su flotante es
   soporte por WhatsApp, no un CTA de registro) y solo para los sources
   mapeados. */
export function trackMetaContactFromSource(source: string) {
  if (typeof window === "undefined") return;
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path !== "/oferta" && path !== "/oferta-registro") return;

  const contentName = OFERTA_CONTACT_NAMES[source];
  if (contentName) trackContact(contentName);
}

/* Punto de entrada desde los botones de registro (compartidos con
   otras páginas): solo dispara en /oferta-registro y solo para los
   sources mapeados. */
export function trackMetaCtaRegistroFromSource(source: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname.replace(/\/+$/, "") !== "/oferta-registro") return;

  const contentName = OFERTA_REGISTRO_NAMES[source];
  if (contentName) trackCtaRegistro(contentName);
}

export { readCookie };
