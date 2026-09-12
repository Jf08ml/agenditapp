"use client";

import { useState } from "react";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, AnimatePresence, easeOut, type Variants } from "framer-motion";
import { ChatCircle } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemIn: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function FAQ() {
  const t = useTranslations("FAQ");
  const faqs = t.raw("items") as { question: string; answer: string }[];

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white border-t border-b border-[#0F172A]/6">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            {t("badge")}
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            {t("heading.prefix")}{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {t("heading.highlight")}
            </span>
          </h2>
        </motion.div>

        {/* ── FAQ list ── */}
        <motion.div
          className="flex flex-col gap-3"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((f, i) => (
            <motion.div key={i} variants={itemIn}>
              <FaqItem question={f.question} answer={f.answer} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-[16px] border border-brand/12 bg-bg-card px-6 py-5"
          style={{ boxShadow: "var(--shadow-card)" }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm text-body text-center sm:text-left">
            {t("ctaText")}
          </p>
          <DemoCtaButton source="faq" className="flex-shrink-0 inline-flex items-center gap-2 rounded-[10px] bg-brand text-white font-semibold px-4 py-2.5 text-sm hover:bg-brand-hover transition-colors cursor-pointer shadow-sm">
            <ChatCircle size={16} weight="duotone" />
            {t("ctaButton")}
          </DemoCtaButton>
        </motion.div>
      </div>
    </section>

  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className={`w-full text-left rounded-[14px] border bg-bg-card transition-all duration-200 ${
        open
          ? "border-brand/30 shadow-[0_0_0_1px_color-mix(in_srgb,var(--brand)_15%,transparent)]"
          : "border-brand/12 hover:border-brand/25"
      }`}
      style={{ boxShadow: open ? undefined : "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between gap-4 px-5 py-4">
        <span className={`text-sm font-semibold leading-snug transition-colors ${open ? "text-brand" : "text-heading"}`}>
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
            open ? "bg-brand text-white rotate-45" : "bg-brand/8 text-brand"
          }`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={2.5} d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: easeOut } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-5 pb-4 text-sm text-body leading-relaxed border-t border-brand/8 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
