# AgenditApp — Implementación completa: índice maestro

## Archivos generados y dónde copiarlos

| Archivo generado            | Destino en tu proyecto                        | Tipo        |
|-----------------------------|-----------------------------------------------|-------------|
| `fase1-fixes.md`            | Referencia — aplicar manualmente              | Patches      |
| `fase2-blog-author.md`      | Referencia — aplicar manualmente              | Patches      |
| `fase3-sobre-nosotros.tsx`  | `src/app/sobre-nosotros/page.tsx`             | Archivo nuevo|
| `fase3-footer-links.md`     | Referencia — editar Footer.tsx y PageFooter   | Patches      |
| `fase4-vs-competitor.tsx`   | `src/app/vs/[competitor]/page.tsx`            | Archivo nuevo|
| `fase4-5-addendum.md`       | Referencia — footer links + sectores          | Patches      |
| `fase6-country-pages.tsx`   | `src/app/[country]/page.tsx` O rutas estáticas| Archivo nuevo|

---

## Orden de ejecución recomendado

### Bloque 1 — ~45 min (máximo impacto, mínimo riesgo)

```
1. Eliminar "Software por zybizobazar.com"          [fase1-fixes.md § 1.1]
2. Corregir título duplicado del blog               [fase1-fixes.md § 1.2]
3. CTAs de planes de pago → signup                  [fase1-fixes.md § 1.3]
4. Hero "Ver cómo funciona" → signup                [fase1-fixes.md § 1.4]
5. Selector de país → default neutro               [fase1-fixes.md § 1.5]
6. npm run build && npm run lint
```

### Bloque 2 — ~1.5 horas (EEAT + base GEO)

```
7. Añadir author a PostMeta interface               [fase2-blog-author.md § 2.1-A]
8. Añadir author a todos los .mdx                   [fase2-blog-author.md § 2.1-B]
9. Mostrar autor en listado del blog                [fase2-blog-author.md § 2.1-C]
10. Mostrar autor en post individual + schema       [fase2-blog-author.md § 2.1-D]
11. Crear /sobre-nosotros/page.tsx                  [fase3-sobre-nosotros.tsx]
12. Añadir link /sobre-nosotros en ambos footers    [fase3-footer-links.md]
13. npm run build
```

### Bloque 3 — ~2 horas (páginas con mayor conversión)

```
14. Crear /vs/[competitor]/page.tsx                 [fase4-vs-competitor.tsx]
15. Añadir sección "Comparativas" en footers        [fase4-5-addendum.md]
16. Añadir links contextuales desde sectores        [fase4-5-addendum.md]
17. npm run build — verificar 4 rutas generadas
18. Rich Results Test en /vs/fresha
```

### Bloque 4 — ~3-4 horas (contenido sectores)

```
19. Ampliar /sectores/barberias — párrafo + FAQs    [fase4-5-addendum.md § Fase 5]
20. Ampliar /sectores/salones-belleza               [fase4-5-addendum.md § Fase 5]
21. Ampliar /sectores/psicologia                    [fase4-5-addendum.md § Fase 5]
22. npm run build
```

### Bloque 5 — ~2 horas (expansión LATAM)

```
23. Decidir: ruta dinámica /[country] vs rutas estáticas /mx, /cl, /ar
24. Crear el archivo de landings por país           [fase6-country-pages.tsx]
25. Verificar hreflang en metadata
26. npm run build — verificar rutas /mx, /cl, /ar
```

---

## Advertencias importantes al implementar

### Fase 4 — Ruta dinámica `[country]`

Si usas una ruta dinámica `/[country]/page.tsx`, asegúrate de que no capture rutas
que ya existen (como `/blog`, `/precios`, `/sectores`, `/vs`).
La forma más segura es crear rutas estáticas explícitas:

```
src/app/mx/page.tsx   ← contenido de fase6-country-pages.tsx con country = "mx"
src/app/cl/page.tsx   ← ídem con country = "cl"
src/app/ar/page.tsx   ← ídem con country = "ar"
```

Para hacer esto, en cada archivo importa los datos del país directamente:
```tsx
// src/app/mx/page.tsx
const data = countries["mx"]; // extraer de fase6-country-pages.tsx
```

### Fase 3 — `sobre-nosotros/page.tsx`

El archivo generado usa clases Tailwind estándar y Link de Next.js.
Si tu proyecto usa un layout wrapper distinto al de `privacidad/page.tsx`
(por ejemplo, un PageLayout component), envuelve el `<main>` en ese componente.

### Fase 4 — Imágenes OG de comparativas

Las páginas `/vs/[competitor]` no tienen og:image custom. Puedes usar la imagen
OG genérica del sitio, o generar una dinámica con el patrón que ya tienes en:
`/og?title=...&subtitle=...&tag=...`

Por ejemplo: `https://agenditapp.com/og?title=vs+Fresha&subtitle=Comparativa+2026&tag=Comparativas`

Añadir en `generateMetadata`:
```tsx
openGraph: {
  ...
  images: [{
    url: `https://agenditapp.com/og?title=vs+${data.name}&subtitle=Comparativa+AgenditApp+2026&tag=Comparativas`,
    width: 1200,
    height: 630,
  }],
},
```

---

## Verificación final global

```bash
# Sin errores de build
npm run build

# Sin advertencias de lint
npm run lint

# Verificar que estas URLs cargan correctamente:
# http://localhost:3000/sobre-nosotros
# http://localhost:3000/vs/fresha
# http://localhost:3000/vs/agendapro
# http://localhost:3000/vs/booksy
# http://localhost:3000/vs/weibook
# http://localhost:3000/mx  (o /ar, /cl)
# http://localhost:3000/blog  ← title sin duplicar

# Verificar schemas:
# Rich Results Test: https://search.google.com/test/rich-results
# Probar /sobre-nosotros, /vs/fresha, /sectores/barberias
```
