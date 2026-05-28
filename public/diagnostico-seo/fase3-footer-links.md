# Fase 3 — Addendum: enlace /sobre-nosotros en footers

---

## `src/app/(landing)/sections/Footer.tsx`

Busca la sección "Producto" del footer (donde están los links Funcionalidades, Planes, Sectores, etc.)
y añade el enlace a /sobre-nosotros:

```tsx
// En el listado de links de la sección "Producto":
<li>
  <Link href="/sobre-nosotros" className="hover:text-foreground transition-colors">
    Sobre AgenditApp
  </Link>
</li>
```

Sugerencia de orden:
1. Funcionalidades
2. Planes y precios
3. Sectores
4. Blog
5. **Sobre AgenditApp** ← añadir aquí
6. Términos
7. Privacidad

---

## `src/app/(landing)/components/ui/PageFooter.tsx`

Mismo cambio — añadir el link en la sección de producto/navegación del footer secundario.

---

## Checklist Fase 3

- [ ] Archivo `src/app/sobre-nosotros/page.tsx` creado
- [ ] La página carga en `http://localhost:3000/sobre-nosotros`
- [ ] El JSON-LD aparece en `view-source:` de la página
- [ ] Footer principal muestra "Sobre AgenditApp" en la sección de links
- [ ] Footer secundario (PageFooter) también tiene el link
- [ ] `npm run build` sin errores
