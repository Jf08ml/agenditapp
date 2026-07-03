"use client";

import {
  useEffect,
  useState,
  type ReactNode,
  type AnchorHTMLAttributes,
} from "react";
import { SIGNUP_HREF, getWhatsappHref } from "../constants";

/* ─────────────────────────────────────────────────────────────
   CTA helpers para las landings de campaña (Meta Ads).
   - WhatsApp → mide click con evento GA `demo_whatsapp_click`
   - Registro → mide click con evento GA `signup_click`
   El `event_label` (source) indica desde qué bloque/landing se hizo
   click, para atribución en Google Analytics.
───────────────────────────────────────────────────────────── */

function track(event: string, source: string) {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
      "event",
      event,
      { event_category: "cta", event_label: source },
    );
  }
}

/* ── Estilos de botón reutilizables ── */
export const BTN_WHATSAPP =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] " +
  "bg-[#25D366] text-white text-[15px] font-semibold " +
  "shadow-[0_6px_22px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#22c35e]";

export const BTN_BRAND =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] " +
  "bg-brand text-white text-[15px] font-semibold " +
  "shadow-[0_8px_24px_rgba(29,78,216,0.35)] transition-colors hover:bg-brand-hover";

export const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] " +
  "border border-[#0F172A]/12 text-[#0F172A] text-[15px] font-semibold " +
  "bg-white/70 backdrop-blur-sm transition-all hover:bg-white/90";

/* ── Icono WhatsApp ── */
export function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.52 1.36 5.06L2.05 22l5.16-1.35a9.94 9.94 0 0 0 4.82 1.23h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm5.84 14.13c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.91 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.07.18-.2.76-.89.96-1.19.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.7-.18 1.4z" />
    </svg>
  );
}

/* ── Botón WhatsApp ── */
interface CtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  source?: string;
}

export function WhatsAppCtaButton({
  children,
  className,
  source = "lp_whatsapp",
  onClick,
  ...rest
}: CtaProps) {
  return (
    <a
      href={getWhatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        track("demo_whatsapp_click", source);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ── Botón Registro ── */

/* El registro vive en app.agenditapp.com (otro dominio): los UTMs y el
   fbclid con los que llegó el visitante se perderían al cruzar. Este
   helper reenvía los query params de la landing al enlace de signup y
   añade `utm_content` con el bloque de origen, para poder atribuir
   registros a la campaña y al CTA que los generó. */
function buildSignupHref(source: string): string {
  const url = new URL(SIGNUP_HREF);
  const current = new URLSearchParams(window.location.search);
  current.forEach((value, key) => url.searchParams.set(key, value));
  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", "landing_web");
  }
  url.searchParams.set("utm_content", source);
  return url.toString();
}

export function SignupCtaButton({
  children,
  className,
  source = "lp_signup",
  onClick,
  ...rest
}: CtaProps) {
  const [href, setHref] = useState(SIGNUP_HREF);
  useEffect(() => {
    setHref(buildSignupHref(source));
  }, [source]);

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        track("signup_click", source);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   CTA único según la variante de la landing. Una sola meta de
   conversión por página:
   - variant="whatsapp" → botón WhatsApp (verde)
   - variant="signup"   → botón Registro (azul)
───────────────────────────────────────────────────────────── */
export type CtaVariant = "whatsapp" | "signup";

export function LeadCtas({
  variant,
  source,
  whatsappLabel = "Hablar por WhatsApp",
  signupLabel = "Crear mi cuenta gratis",
  className = "",
}: {
  variant: CtaVariant;
  source: string;
  whatsappLabel?: string;
  signupLabel?: string;
  className?: string;
}) {
  if (variant === "signup") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <SignupCtaButton source={`${source}_signup`} className={BTN_BRAND}>
          {signupLabel}
          <span aria-hidden>→</span>
        </SignupCtaButton>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <WhatsAppCtaButton source={`${source}_whatsapp`} className={BTN_WHATSAPP}>
        <WaIcon />
        {whatsappLabel}
      </WhatsAppCtaButton>
    </div>
  );
}
