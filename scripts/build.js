/* =========================================================
   ML Obras — Build estático
   Genera la carpeta dist/ reemplazando los tokens (__SITE_URL__,
   __STATS_PROJECTS__, __FB_URL__, __IG_URL__) por los valores de
   config.json (única fuente).
   Uso: node scripts/build.js
   ========================================================= */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "dist");

const TEMPLATES = ["index.html", "robots.txt", "sitemap.xml"];
const STATIC_DIRS = ["css", "js", "assets"];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

/* Elimina un bloque delimitado por comentarios:
   <!-- @ml:nombre --> ... <!-- /@ml:nombre -->
   (se usa para ocultar nodos cuyo valor de config esté vacío) */
function stripBlock(content, name) {
  const re = new RegExp(
    "\\s*<!--\\s*@ml:" + name + "\\s*-->[\\s\\S]*?<!--\\s*/@ml:" + name + "\\s*-->",
    "g"
  );
  return content.replace(re, "");
}

function build() {
  const config = readJson("config.json");
  const { siteUrl, social, stats } = config;
  if (!siteUrl) {
    console.error("config.json: falta 'siteUrl'");
    process.exit(1);
  }

  const replaces = {
    __SITE_URL__: siteUrl,
    __STATS_PROJECTS__: String((stats && stats.projects) || 0),
    __FB_URL__: (social && social.facebook) || "",
    __IG_URL__: (social && social.instagram) || ""
  };

  // Limpiar y crear dist/
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  // Templates con tokens reemplazados
  for (const file of TEMPLATES) {
    const src = path.join(ROOT, file);
    if (!fs.existsSync(src)) continue;
    let content = fs.readFileSync(src, "utf8");
    for (const token of Object.keys(replaces)) {
      content = content.split(token).join(replaces[token]);
    }
    if (!replaces.__FB_URL__) content = stripBlock(content, "facebook");
    if (!replaces.__IG_URL__) content = stripBlock(content, "instagram");
    fs.writeFileSync(path.join(OUT, file), content);
  }

  // Copiar el resto del estático
  for (const dir of STATIC_DIRS) {
    const srcDir = path.join(ROOT, dir);
    if (fs.existsSync(srcDir)) copyDir(srcDir, path.join(OUT, dir));
  }

  if (process.env.VERBOSE_BUILD) {
    console.log("Sitio generado en dist/ con siteUrl =", siteUrl);
  }
}

build();