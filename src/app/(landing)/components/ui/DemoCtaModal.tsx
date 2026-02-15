"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
  type ButtonHTMLAttributes,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_HREF } from "../constants";

/* ─── helpers ─── */

function getSignupUrl(): string {
  const base = "https://app.agenditapp.com/signup";
  if (typeof window === "undefined") return base;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const utmParams = new URLSearchParams();
  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) utmParams.set(key, val);
  });
  const qs = utmParams.toString();
  return qs ? `${base}?${qs}` : base;
}

function trackClick(eventName: string) {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
      "event",
      eventName,
      { event_category: "cta" }
    );
  }
}

/* ─── modal ─── */

interface DemoCtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoCtaModal({ isOpen, onClose }: DemoCtaModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Save + restore focus
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      const t = setTimeout(() => modalRef.current?.focus(), 80);
      return () => clearTimeout(t);
    } else if (previousFocus.current) {
      previousFocus.current.focus();
    }
  }, [isOpen]);

  // ESC
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const signupUrl = useMemo(getSignupUrl, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          role="presentation"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Elige cómo obtener tu demo"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl border border-white/10 bg-slate-900 shadow-2xl outline-none overflow-hidden"
            initial={{ opacity: 0, y: 80, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-b-full bg-gradient-to-r from-sky-400 to-blue-500" />

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white pr-8">
                ¿Cómo quieres empezar?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Elige la opción que mejor se adapte a ti.
              </p>

              {/* Options */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Option 1: Assisted (WhatsApp) */}
                <div className="relative group rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex flex-col gap-3 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">
                      💬
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Configurar mi demo con asistencia
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Te ayudamos a dejarlo listo en minutos.
                  </p>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick("demo_assisted_click")}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-400/50 px-4 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-400 hover:text-slate-950 shadow-[0_0_14px_rgba(16,185,129,0.3)] hover:shadow-[0_0_22px_rgba(16,185,129,0.5)] transition-all"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                {/* Option 2: Self-service */}
                <div className="relative group rounded-2xl border border-sky-500/40 bg-sky-500/5 p-5 flex flex-col gap-3 hover:border-sky-400/60 hover:bg-sky-500/10 transition-all ring-1 ring-sky-500/20">
                  {/* Recommended badge */}
                  <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-sky-400 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                    Recomendada
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl" aria-hidden="true">
                      🚀
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Crear mi demo ahora
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Regístrate y crea tu demo en automático.
                  </p>
                  <a
                    href={signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick("demo_selfserve_click")}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all"
                  >
                    Ir al registro
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ─── self-contained trigger button ─── */

interface DemoCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function DemoCtaButton({
  children,
  className,
  ...rest
}: DemoCtaButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        className={className}
        onClick={() => setIsOpen(true)}
        type="button"
        {...rest}
      >
        {children}
      </button>
      <DemoCtaModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
