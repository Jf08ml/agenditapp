"use client";

import Link from "next/link";
import { motion, easeOut, type Variants } from "framer-motion";
import { CreditCard, Stack, Storefront } from "@phosphor-icons/react";

const FEATURES = [
  {
    Icon: CreditCard,
    color: "#16A34A",
    title: "Cobra reservas online",
    description:
      "Acepta abonos o el pago completo al momento de reservar, con Mercado Pago (comisión por transacción) o comprobante de transferencia, sin comisión.",
  },
  {
    Icon: Stack,
    color: "#0EA5E9",
    title: "Paquetes de sesiones",
    description:
      "Vende paquetes prepagados —como 4 sesiones de masaje— y el sistema descuenta automáticamente cada sesión que tu cliente utiliza.",
  },
  {
    Icon: Storefront,
    color: "#CA8A04",
    title: "Tienda e inventario",
    description:
      "Vende productos desde tu página y controla el inventario de insumos de tu negocio, con los mismos métodos de pago que usas para las reservas.",
  },
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
            Pagos y ventas
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0">
            Cobra, vende paquetes y controla tu inventario
          </h2>
          <p className="mt-4 text-[17px] text-[#64748B] leading-relaxed">
            Todo desde la misma plataforma, sin planillas aparte ni procesos manuales.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {FEATURES.map((f) => (
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
          Pagos, tienda e inventario disponibles desde el plan Básico. Los paquetes de
          sesiones son exclusivos del plan Marca Propia.{" "}
          <Link href="/funcionalidades" className="text-[#1D4ED8] font-medium hover:underline">
            Ver todas las funcionalidades →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
