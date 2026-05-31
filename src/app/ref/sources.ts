export type SourceType =
  | "influencer"
  | "blog"
  | "media"
  | "podcast"
  | "partner"
  | "community";

export interface ReferralSource {
  name: string;
  type: SourceType;
  handle?: string;         // @username (redes sociales)
  website?: string;        // URL del medio/blog
  signupUrl: string;
  refCode: string;
  offerBase: string;
  offerBonus: string | null;
  bonusLimit: number | null;
  // Referrer card
  quote?: string;          // Frase del referidor
  photoUrl?: string;       // URL de foto (puede ser ruta /public o URL externa)
  // Cupos de urgencia
  slotsTotal?: number;     // Cupos totales del bonus (ej. 5)
  slotsRemaining?: number; // Cupos restantes (actualizar manualmente)
  // SEO overrides opcionales
  seoTitle?: string;
  seoDescription?: string;
  customIntro?: string;
}

export const SOURCE_BADGE: Record<SourceType, string> = {
  influencer: "Recomendado por",
  blog:       "Recomendado en",
  media:      "Visto en",
  podcast:    "Recomendado en",
  partner:    "En alianza con",
  community:  "Compartido en",
};

export const SOURCE_AUDIENCE: Record<SourceType, string> = {
  influencer: "seguidores de",
  blog:       "lectores de",
  media:      "lectores de",
  podcast:    "oyentes de",
  partner:    "clientes de",
  community:  "miembros de",
};

export const sources: Record<string, ReferralSource> = {
  "felipe-blanco": {
    name:           "Felipe Blanco",
    type:           "influencer",
    handle:         "@felipeblanco23",
    signupUrl:      "https://app.agenditapp.com/signup?ref=YA7M5EKJ",
    refCode:        "YA7M5EKJ",
    offerBase:      "Primer mes gratis",
    offerBonus:     "Los primeros 5 en activar su plan pago obtienen 50% de descuento los 2 primeros meses pagos",
    bonusLimit:     5,
    photoUrl:       "/ref/felipe-blanco.jpg",
    quote:          "Llevo meses usando AgenditApp para mi negocio y dejé de perder citas. Te dejo mi enlace para que arranques gratis.",
    slotsTotal:     5,
    slotsRemaining: 3,
  },
};
