# ML Obras — Sitio web

Landing page de una sola página para **ML Obras** (Marcelo Lezcano), empresa de
construcción, reformas, instalaciones y mantenimiento en Chascomús, Buenos Aires.

Sitio estático: **HTML + CSS + JavaScript vanilla**, sin dependencias ni build.

## Estructura

```
.
├─ index.html            # Estructura y contenido
├─ css/styles.css        # Design system y estilos responsive
├─ js/i18n.js            # Diccionario ES/EN + toggle de idioma
├─ js/main.js            # Nav, reveal, portafolio, FAQ, lightbox, form→WhatsApp
├─ assets/img/           # logo.svg, favicon.svg
├─ robots.txt
└─ sitemap.xml
```

## Cómo verlo localmente

Abrí `index.html` en el navegador, o levantá un servidor local:

```powershell
python -m http.server 8000
```

Luego ingresá a <http://localhost:8000>.

## Editar contenido

- **Textos:** en `js/i18n.js` (claves `es` y `en`). El HTML usa `data-i18n="clave"`.
- **Datos de contacto / WhatsApp:** número en `js/main.js` (`PHONE`) y en los enlaces
  `https://wa.me/...` de `index.html`. Email y dirección en `index.html` y en el JSON-LD.
- **Logo:** reemplazá `assets/img/logo.svg` y `assets/img/favicon.svg` por la marca real.
- **Fotos del portafolio:** reemplazá las clases `ph--*` (degradados placeholder) por
  imágenes reales en `assets/img/` y ajustá el `background` en `css/styles.css`.
- **Mapa:** cambiá el `src` del `<iframe>` en `index.html` por el embed de Google Maps.

## Idiomas

Toggle ES/EN persistente (`localStorage`) con autodetección del navegador.
El texto se intercambia en el cliente; el SEO indexa el idioma por defecto (ES).
Para SEO bilingüe real, migrar a rutas `/es/` y `/en/` con `hreflang`.

## Tema claro / oscuro

El botón de sol/luna en el header activa el modo oscuro (`data-theme="dark"` en
`<html>`). La elección se guarda en `localStorage` y, si no hay preferencia,
sigue al sistema (`prefers-color-scheme`). Los colores se manejan con variables
CSS semánticas en `css/styles.css` (`:root` y `[data-theme="dark"]`).

## Deploy

Hosting de referencia: **Vercel** (incluye `vercel.json` con cache headers y
`cleanUrls`). Es igual de compatible con Netlify, Cloudflare Pages o GitHub Pages.
Dominio sugerido: `mlobras.com.ar`.

```powershell
npx vercel
```

Lighthouse: `robots.txt`, compressión y cache no se verifican bien contra
`file://` o `python -m http.server`; corré el audit contra el deploy en Vercel.

## Pendientes recomendados

- Foto/logo real y fotos de obra (formato WebP).
- Perfil de Google Business para SEO local.
- Analítica (Google Analytics o Plausible).
