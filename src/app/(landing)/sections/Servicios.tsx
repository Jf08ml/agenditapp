"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { motion, easeOut, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false },
);

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Servicios() {
  const t = useTranslations("Servicios");
  const features = t.raw("features") as { title: string; description: string }[];

  const [open, setOpen] = useState(false);

  const screenshotAlt = t("screenshotAlt");

  return (
    <section id="servicios" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: texto + features ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
            >
              {t("badge")}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0"
            >
              {t.rich("heading", {
                highlight: (chunks) => (
                  <span
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    {chunks}
                  </span>
                ),
              })}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[17px] text-[#64748B] leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(29,78,216,0.10)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6l3 3 5-6" stroke="#1D4ED8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#0F172A] leading-snug">{f.title}</p>
                    <p className="text-[13px] text-[#64748B] mt-0.5 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: captura real del catálogo ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[240px] sm:w-[270px]">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 -z-10 scale-110"
                style={{ background: "#1D4ED8" }}
              />

              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                className="block focus:outline-none w-full cursor-zoom-in"
                aria-label={t("expandAriaLabel")}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <PhoneMockup
                  src="/screenshots/servicios-precios-mockup.png"
                  alt={screenshotAlt}
                  priority
                />
              </motion.button>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -right-4 top-10 rounded-2xl px-3.5 py-2.5 border border-[#1D4ED8]/10"
                style={{ background: "white", boxShadow: "0 8px 24px rgba(15,23,42,0.10)" }}
              >
                <p className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wide">{t("priceLabel")}</p>
                <p className="text-sm font-bold text-[#0F172A] mt-0.5">{t("demoPrice")}</p>
                <p className="text-[10px] text-[#94A3B8]">{t("demoDetail")}</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <ImageLightbox
        src="/screenshots/servicios-precios-mockup.png"
        alt={screenshotAlt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
