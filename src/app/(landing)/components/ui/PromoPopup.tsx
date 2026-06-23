"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getWhatsappHref } from "../constants";

const STORAGE_KEY = "agp_promo_popup_seen";
const SHOW_DELAY_MS = 5000;
const COUNTDOWN_SECONDS = 10 * 60;

const BENEFITS = [
  "Reservas online 24/7",
  "Recordatorios automáticos por WhatsApp",
  "Panel administrativo completo",
];

function trackPopupEvent(action: string, source: string) {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", action, {
      event_category: "promo_popup",
      event_label: source,
    });
  }
}

function formatCountdown(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

interface PromoPopupProps {
  /** Identifies the page where the popup is shown, used for UTM tracking and analytics. */
  source: string;
}

export default function PromoPopup({ source }: PromoPopupProps) {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      trackPopupEvent("promo_popup_view", source);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [source]);

  const close = useCallback(() => {
    setOpen(false);
    trackPopupEvent("promo_popup_close", source);
  }, [source]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      clearInterval(interval);
    };
  }, [open, close]);

  const whatsappHref = getWhatsappHref();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Oferta especial: 1 mes gratis"
            className="card relative w-[88%] sm:w-full sm:max-w-md overflow-hidden text-center"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ribbon de urgencia */}
            <div
              className="flex items-center justify-center gap-2 px-10 py-2.5 text-xs sm:text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, var(--warm-deep), var(--danger))" }}
            >
              <span>⚡ OFERTA FLASH</span>
              <span className="opacity-60">·</span>
              <span className="tabular-nums">Termina en {formatCountdown(secondsLeft)}</span>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/15 text-white hover:bg-black/30 transition-colors"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
              >
                🎁 Cupos limitados para nuevos negocios
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-heading mb-2 leading-tight">
                Tu primer mes es 100% gratis
              </h3>

              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-sm text-muted line-through">Desde $10 USD/mes</span>
                <span className="text-2xl font-bold text-brand">$0</span>
              </div>

              <p className="text-sm text-body mb-5">
                Activa tu cuenta hoy y empieza a recibir reservas 24/7 sin pagar nada
                el primer mes. Solo quedan unos pocos cupos disponibles este mes.
              </p>

              <ul className="text-left text-sm text-body mb-6 space-y-2 inline-block">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="text-success font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPopupEvent("promo_popup_whatsapp_click", source)}
                className="btn-primary w-full flex items-center justify-center text-[15px] font-semibold mb-3"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                Reclamar mi mes gratis por WhatsApp →
              </motion.a>

              <p className="text-xs text-muted mt-4">
                Sin tarjeta de crédito · Cancela cuando quieras
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
