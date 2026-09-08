import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_COUNTRIES = new Set(["PY"]);

// Crawlers de buscadores, previews sociales y bots GEO/IA que el sitio
// permite explícitamente en robots.ts (src/app/robots.ts). Nunca deben
// ser bloqueados por país: afectaría indexación y previews de enlaces.
const BOT_USER_AGENT_PATTERN =
  /googlebot|adsbot-google|mediapartners-google|apis-google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebookexternalhit|facebookcatalog|meta-externalagent|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|skypeuripreview|slackbot|applebot|pinterest(bot)?|redditbot|amazonbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|chatgpt-user|perplexitybot|google-extended|anthropic-ai|claude-web|claudebot|cohere-ai|ccbot|imagesiftbot/i;

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  if (BOT_USER_AGENT_PATTERN.test(userAgent)) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country");
  if (country && BLOCKED_COUNTRIES.has(country)) {
    const url = request.nextUrl.clone();
    url.pathname = "/no-disponible";
    url.search = "";
    return NextResponse.rewrite(url, { status: 451 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|woff2?|ttf|map|xml|txt)$).*)",
  ],
};
