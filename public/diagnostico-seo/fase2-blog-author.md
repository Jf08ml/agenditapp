# Fase 2 — Mejoras al blog (EEAT): campo author

---

## 2.1-A — Interface `src/lib/blog.ts`

Añade los campos al interface `PostMeta`:

```ts
// ANTES:
export interface PostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
  slug: string;
  // ... otros campos existentes
}

// DESPUÉS — añadir al final del interface:
export interface PostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
  slug: string;
  // ... otros campos existentes
  author?: string;
  authorTitle?: string;
  authorImage?: string; // opcional, para foto futura
}
```

---

## 2.1-B — Frontmatter MDX

Añade estas dos líneas al frontmatter de **cada archivo** en `src/content/blog/*.mdx`:

```mdx
---
title: "..."
description: "..."
date: "..."
category: "..."
readTime: "..."
author: "Equipo AgenditApp"
authorTitle: "Especialistas en gestión de negocios de citas"
---
```

Si tienes artículos que puedes atribuir a una persona específica (fundador, etc.), usa su nombre real — eso tiene más peso en EEAT que "Equipo AgenditApp". Ejemplo:

```mdx
author: "Juan Camilo Rodríguez"
authorTitle: "Fundador de AgenditApp · Especialista en automatización para negocios de servicios"
```

---

## 2.1-C — Listado del blog `src/app/blog/page.tsx`

Añade el autor debajo de la fecha en cada card del listado:

```tsx
// Dentro del map de posts, donde renderizas cada card:
// Busca donde está la fecha y añade debajo:

{/* ANTES — solo fecha */}
<span className="text-sm text-muted-foreground">
  {formatDate(post.date)}
</span>

{/* DESPUÉS — fecha + autor */}
<div className="flex items-center gap-2 text-sm text-muted-foreground">
  <span>{formatDate(post.date)}</span>
  {post.author && (
    <>
      <span aria-hidden="true">·</span>
      <span>{post.author}</span>
    </>
  )}
</div>
```

---

## 2.1-D — Post individual `src/app/blog/[slug]/page.tsx`

### 1. Bloque de autor debajo del título (añadir antes del contenido MDX):

```tsx
// Añadir este componente después del H1 / metadata del post, antes del <MDXContent>:

{post.author && (
  <div className="flex items-center gap-3 py-4 border-b border-border mb-8">
    {/* Avatar con iniciales */}
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm select-none">
      {post.author
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()}
    </div>
    <div>
      <p className="text-sm font-medium leading-none">{post.author}</p>
      {post.authorTitle && (
        <p className="text-xs text-muted-foreground mt-1">{post.authorTitle}</p>
      )}
    </div>
  </div>
)}
```

### 2. Añadir `author` al schema `BlogPosting`:

Busca el schema JSON-LD del post (probablemente en la misma página o en un componente SchemaOrg).
Añade el campo `author`:

```tsx
// Dentro del objeto schema BlogPosting:
const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  // ... campos existentes

  // AÑADIR:
  author: {
    "@type": "Person",
    name: post.author ?? "Equipo AgenditApp",
    jobTitle: post.authorTitle ?? "Especialistas en gestión de negocios de citas",
    url: "https://agenditapp.com/sobre-nosotros",
  },
  publisher: {
    "@type": "Organization",
    name: "AgenditApp",
    logo: {
      "@type": "ImageObject",
      url: "https://agenditapp.com/logo-text.png",
    },
  },
};
```

---

## Checklist Fase 2

- [ ] `PostMeta` interface tiene `author?` y `authorTitle?`
- [ ] Todos los `.mdx` tienen `author:` en el frontmatter
- [ ] Listado del blog muestra "· Equipo AgenditApp" (o nombre) junto a la fecha
- [ ] Post individual muestra bloque de autor con avatar de iniciales
- [ ] Schema BlogPosting incluye `author.name` en el JSON-LD
- [ ] `npm run build` sin errores TypeScript
