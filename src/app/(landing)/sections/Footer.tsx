import ExternalLink from "../components/ui/ExternalLink";
import { WHATSAPP_HREF } from "../components/constants";

export default function Footer() {
  return (
    <footer className="px-6 py-12 max-w-6xl mx-auto text-sm text-slate-400">
      <div className="flex items-center justify-between border-t border-slate-800 pt-6 gap-4 flex-wrap">
        <span>© {new Date().getFullYear()} AgenditApp</span>
        <nav className="flex gap-4">
          <ExternalLink href="/terminos">Términos</ExternalLink>
          <ExternalLink href="/privacidad">Privacidad</ExternalLink>
          <ExternalLink href={WHATSAPP_HREF}>WhatsApp</ExternalLink>
        </nav>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Software fabricado por{" "}
        <ExternalLink href="https://zybizobazar.com" className="underline">
          zybizobazar.com
        </ExternalLink>
        .
      </p>
    </footer>
  );
}
