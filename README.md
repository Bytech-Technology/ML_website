# ML Obras — Sitio web

Landing page de una sola página para **ML Obras** (Marcelo Lezcano), empresa de
construcción, reformas, instalaciones y mantenimiento en Chascomús, Buenos Aires.

Sitio estático con **build mínimo**: HTML + CSS + JavaScript vanilla, sin
dependencias. Un pequeño script Node genera la carpeta `dist/` reemplazando el
dominio en `canonical`, `og:*`, JSON-LD, `robots.txt` y `sitemap.xml`.

## Cambiar el dominio y datos (un solo lugar)

Editá `config.json`:

```json
{
  "siteUrl": "https://ml-obras.vercel.app",
  "social": { "facebook": "", "instagram": "" },
  "stats": { "projects": 400 }
}
```

- `siteUrl` → dominio (canonical, `og:*`, JSON-LD, `robots.txt`, `sitemap.xml`).
- `social` → URLs de Facebook/Instagram (si quedan vacías, los íconos no se muestran).
- `stats.projects` → número que anima el contador del hero.

Los archivos fuente usan tokens (`__SITE_URL__`, `__FB_URL__`, `__IG_URL__`,
`__STATS_PROJECTS__`); no hay que tocarlos. Al deployar, `scripts/build.js`
regenera todo con esos valores.

## Fotos de obras (WebP optimizado)

1. Poné las fotos originales en `assets/img/obras/` (ej. `bath-01.jpg`).
2. Corré una vez (local, con `npm install` la primera vez):

```powershell
npm run optimize
```

Genera `bath-01.webp` (full ~1600px) y `bath-01@thumb.webp` (~640px) listos
para `srcset`. Luego referencialas en los items del portafolio de `index.html`.
Este script es de desarrollo: `sharp` no se instala en el build de Vercel.

## Estructura

```
.
├─ index.html            # Estructura y contenido (tokens __SITE_URL__ y demás)
├─ config.json           # Única fuente: dominio, redes sociales, contador de obras
├─ scripts/build.js      # Genera dist/ reemplazando tokens + copia estáticos
├─ scripts/optimize.js   # (dev) Convierte fotos de obras/ a WebP en 2 tamaños
├─ css/styles.css        # Design system y estilos responsive
├─ js/i18n.js            # Diccionario ES/EN + toggle de idioma
├─ js/main.js            # Nav, reveal, portafolio, FAQ, lightbox, carrusel, count-up, form→WhatsApp
├─ assets/img/           # logo.svg, favicon.svg, obras/
├─ robots.txt
├─ sitemap.xml
└─ vercel.json           # buildCommand + outputDirectory + installCommand + cache headers
```

## Funcionalidades

- Toggle **ES/EN** persistente y **tema claro/oscuro** (sigue al sistema).
- Hero con **slider de fondo**, **count-up** en estadísticas y **CTA móvil fija**.
- **Cómo trabajamos** (4 pasos), portafolio filtrable con **lightbox + CTA a WhatsApp**.
- **Carrusel de testimonios** (autoplay con pausa al hover).
- Contacto por **WhatsApp** (botones + form que arma el mensaje).
- **Barra de progreso** de scroll y botón **volver arriba**.
- Redes sociales (Facebook/Instagram) configurables desde `config.json`.

## Cómo verlo localmente

Para ver el sitio con el dominio ya reemplazado, generá el build y servilo:

```powershell
node scripts/build.js
python -m http.server 8000
```

Luego ingresá a <http://localhost:8000> (Vercel sirve la carpeta `dist/`).

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

Hosting: **Vercel** → <https://ml-obras.vercel.app> (repo
`Bytech-Technology/ML_website`, rama `main`). Cada push regenera el deploy
automáticamente (`vercel.json` define el build y el output `dist/`).

```powershell
node scripts/build.js   # verificar localmente el build
git push                # depliega
```

Cuando tengas dominio propio (`mlobras.com.ar`), editá `config.json` y volvé a
pushear; se actualiza canónico, `og:*`, JSON-LD, `robots.txt` y `sitemap.xml`.

Lighthouse: `robots.txt`, compresión y cache no se verifican bien contra
`file://` o `python -m http.server`; corré el audit contra el deploy en Vercel.

## Pendientes recomendados

- Foto/logo real y fotos de obra (formato WebP).
- Perfil de Google Business para SEO local.
- Analítica (Google Analytics o Plausible).
