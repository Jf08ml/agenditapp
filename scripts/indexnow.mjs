#!/usr/bin/env node
// scripts/indexnow.mjs
//
// Avisa a los buscadores que usan IndexNow (Bing, Yandex, Naver, Seznam, Yep)
// que hay URLs nuevas o actualizadas. Google NO usa IndexNow.
//
// Lee el sitemap EN PRODUCCIÓN (https://agenditapp.com/sitemap.xml), así que
// debe correr después del deploy. En CI lo hace .github/workflows/indexnow.yml.
//
// Uso:
//   node scripts/indexnow.mjs                 # URLs con lastmod en los últimos 3 días
//   node scripts/indexnow.mjs --days=7        # ventana distinta
//   node scripts/indexnow.mjs --all           # todo el sitemap
//   node scripts/indexnow.mjs /precios /blog/mi-post   # rutas o URLs concretas
//   node scripts/indexnow.mjs --dry-run ...   # muestra qué enviaría, sin enviar
//
// La clave es pública por diseño: el archivo public/<KEY>.txt prueba que el
// dominio es nuestro. Si se cambia, renombrar también ese archivo.

const HOST = "agenditapp.com";
const BASE = `https://${HOST}`;
const KEY = "b2de4b923360aaccc0a7790aa50fea78";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10_000; // límite del protocolo por petición

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const getFlag = (name) =>
  args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const positional = args.filter((a) => !a.startsWith("--"));

const dryRun = flags.has("--dry-run");
const all = flags.has("--all");
const days = Number(getFlag("days") ?? 3);

function toAbsolute(u) {
  if (/^https?:\/\//.test(u)) return u;
  return `${BASE}${u.startsWith("/") ? "" : "/"}${u}`;
}

async function fetchSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`No se pudo leer el sitemap (${res.status})`);
  const xml = await res.text();
  const entries = [];
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>\s*([^<]+?)\s*<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/)?.[1];
    if (loc) entries.push({ loc, lastmod: lastmod ? new Date(lastmod) : null });
  }
  return entries;
}

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION);
  const body = res.ok ? (await res.text()).trim() : "";
  if (body !== KEY) {
    throw new Error(
      `El archivo de la clave no está publicado en ${KEY_LOCATION} (status ${res.status}). ` +
        "¿Ya se desplegó public/" + KEY + ".txt?",
    );
  }
}

async function main() {
  let urls;
  if (positional.length) {
    urls = positional.map(toAbsolute);
  } else {
    const entries = await fetchSitemap();
    if (all) {
      urls = entries.map((e) => e.loc);
    } else {
      const since = Date.now() - days * 24 * 60 * 60 * 1000;
      urls = entries
        .filter((e) => e.lastmod && e.lastmod.getTime() >= since)
        .map((e) => e.loc);
    }
  }

  urls = [...new Set(urls)].filter((u) => new URL(u).host === HOST);

  if (!urls.length) {
    console.log(
      all || positional.length
        ? "No hay URLs para enviar."
        : `No hay URLs con lastmod en los últimos ${days} días. Usa --all o pasa rutas concretas.`,
    );
    return;
  }

  console.log(`${urls.length} URL(s) para IndexNow:`);
  for (const u of urls) console.log(`  ${u}`);

  if (dryRun) {
    console.log("\n--dry-run: no se envió nada.");
    return;
  }

  await verifyKeyFile();

  for (let i = 0; i < urls.length; i += MAX_URLS) {
    const urlList = urls.slice(i, i + MAX_URLS);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    // 200 = recibido, 202 = recibido y la clave se validará después.
    if (res.status !== 200 && res.status !== 202) {
      const text = await res.text().catch(() => "");
      throw new Error(`IndexNow respondió ${res.status}: ${text}`);
    }
    console.log(`\nIndexNow: ${res.status} OK (${urlList.length} URLs).`);
  }
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
