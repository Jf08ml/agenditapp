"use client";

import { Link as IntlLink } from "@/i18n/navigation";
import { motion, easeOut, type Variants } from "framer-motion";
import { CreditCard, Stack, Storefront } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

type Feature = {
  Icon: typeof CreditCard;
  color: string;
  title: string;
  description: string;
};

// Solo datos estructurales (icono, color); el copy (title/description) viene
// de los mensajes de next-intl y se combina por índice en el componente.
const FEATURE_ICONS: Omit<Feature, "title" | "description">[] = [
  { Icon: CreditCard, color: "#16A34A" },
  { Icon: Stack, color: "#0EA5E9" },
  { Icon: Storefront, color: "#CA8A04" },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function PagosVentas() {
  const t = useTranslations("PagosVentas");
  const featureCopy = t.raw("features") as { title: string; description: string }[];
  const features: Feature[] = FEATURE_ICONS.map((f, i) => ({
    ...f,
    ...featureCopy[i],
  }));

  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
          >
            {t("badge")}
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            {t("heading")}
          </h2>
          <p className="mt-4 text-[17px] text-[#64748B] leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              className="rounded-[20px] p-7 bg-white"
              style={{
                border: "1px solid rgba(15,23,42,0.08)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-[12px] mb-5"
                style={{ background: `${f.color}18` }}
              >
                <f.Icon size={26} weight="duotone" color={f.color} />
              </span>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 text-center text-sm text-[#64748B]"
        >
          {t.rich("footnote", {
            link: (chunks) => (
              <IntlLink href="/funcionalidades" className="text-[#1D4ED8] font-medium hover:underline">
                {chunks}
              </IntlLink>
            ),
          })}
        </motion.p>
      </div>
    </section>
  );
}
