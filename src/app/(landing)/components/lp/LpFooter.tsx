import Image from "next/image";
import Link from "next/link";

/* Footer minimal para landings de campaña: logo, copyright y enlaces
   legales (requeridos por la política de anuncios de Meta). Sin menú
   de navegación que distraiga del funnel. */
export default function LpFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#0F172A]/8 bg-white/70">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/logo-text.png"
          alt="AgenditApp"
          width={130}
          height={40}
          className="h-7 w-auto object-contain opacity-90"
        />

        <p className="text-xs text-muted text-center order-last sm:order-none">
          © {year} AgenditApp. Todos los derechos reservados.
        </p>

        <nav className="flex items-center gap-5 text-xs text-muted">
          <Link href="/privacidad" className="hover:text-brand transition-colors">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-brand transition-colors">
            Términos
          </Link>
        </nav>
      </div>
    </footer>
  );
}
