import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const BLOCKED_COUNTRIES = new Set(["PY"]);

// Crawlers de buscadores, previews sociales y bots GEO/IA que el sitio
// permite explícitamente en robots.ts (src/app/robots.ts). Nunca deben
// ser bloqueados por país: afectaría indexación y previews de enlaces.
const BOT_USER_AGENT_PATTERN =
  /googlebot|adsbot-google|mediapartners-google|apis-google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebookexternalhit|facebookcatalog|meta-externalagent|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|skypeuripreview|slackbot|applebot|pinterest(bot)?|redditbot|amazonbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|chatgpt-user|perplexitybot|google-extended|anthropic-ai|claude-web|claudebot|cohere-ai|ccbot|imagesiftbot/i;

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const isBot = BOT_USER_AGENT_PATTERN.test(userAgent);

  // El bloqueo geográfico siempre sirve /no-disponible en español, sin
  // importar el locale solicitado — no es una decisión de idioma, así que
  // se resuelve antes de pasarle la petición a next-intl. Los bots SÍ deben
  // pasar por next-intl (de lo contrario, rutas con slug traducido como
  // /en/pricing devolverían 404 a los crawlers, justo lo opuesto a lo que
  // se busca con esta migración).
  if (!isBot) {
    const country = request.headers.get("x-vercel-ip-country");
    if (country && BLOCKED_COUNTRIES.has(country)) {
      const url = request.nextUrl.clone();
      url.pathname = "/no-disponible";
      url.search = "";
      return NextResponse.rewrite(url, { status: 451 });
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|og|.*\\..*).*)"],
};
