import Link from "next/link";
import Image from "next/image";
import { DemoCtaButton } from "./DemoCtaModal";

const SECTOR_LINKS = [
  { label: "Salones de belleza", href: "/sectores/salones-belleza" },
  { label: "Barberías", href: "/sectores/barberias" },
  { label: "Spas y bienestar", href: "/sectores/spas" },
  { label: "Consultorios", href: "/sectores/consultorios" },
  { label: "Ver todos →", href: "/sectores" },
];

const NAV_LINKS = [
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Planes y precios", href: "/precios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Blog", href: "/blog" },
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
];

export default function PageFooter() {
  return (
    <footer className="border-t border-brand/10 mt-8">
      {/* CTA band */}
      <div
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            ¿Listo para automatizar tu agenda?
          </h2>
          <p className="text-white/75 text-base max-w-xl leading-relaxed">
            Únete a cientos de negocios en Latinoamérica que ya reciben reservas
            24/7 sin depender de WhatsApp manual.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <DemoCtaButton className="inline-flex items-center gap-2 rounded-[12px] bg-white text-brand font-semibold px-6 py-3 text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-lg">
              Solicitar demo gratis
            </DemoCtaButton>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-[12px] border border-white/30 text-white font-medium px-6 py-3 text-sm hover:bg-white/10 transition-colors"
            >
              Ver planes y precios
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-text.png" alt="AgenditApp" width={140} height={36} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Sistema de agendamiento online para negocios de belleza, bienestar
              y servicios profesionales en Latinoamérica.
            </p>
            <DemoCtaButton className="inline-flex items-center gap-2 rounded-[10px] border border-brand/25 text-brand text-sm font-medium px-4 py-2 hover:bg-brand/6 transition-colors cursor-pointer">
              💬 Solicitar demo
            </DemoCtaButton>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">Producto</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">Sectores</p>
            <ul className="flex flex-col gap-2.5">
              {SECTOR_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-heading uppercase tracking-wider mb-4">Contacto</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">🌎</span>
                <span>Colombia, México, Costa Rica, Chile y más</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">⏰</span>
                <span>Soporte por WhatsApp · Lun–Sáb</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 text-base">🔒</span>
                <span>Sin permanencia. Cancela cuando quieras.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-brand/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} AgenditApp. Todos los derechos reservados.{" "}
            <span className="text-muted/60">Hecho con ❤️ para negocios que viven de las citas.</span>
          </p>
          <p className="text-xs text-muted/60">
            Software por{" "}
            <a href="https://zybizobazar.com" target="_blank" rel="noopener noreferrer"
              className="underline decoration-muted/30 hover:text-muted transition-colors">
              zybizobazar.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
