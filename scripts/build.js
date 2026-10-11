/* =========================================================
   ML Obras — Build estático
   Genera la carpeta dist/ reemplazando el token __SITE_URL__
   por el dominio configurado en config.json (única fuente).
   Uso: node scripts/build.js
   ========================================================= */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "dist");

const TEMPLATES = ["index.html", "robots.txt", "sitemap.xml"];
const STATIC_DIRS = ["css", "js", "assets"];
const TOKEN = "__SITE_URL__";

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

function build() {
  const { siteUrl } = readJson("config.json");
  if (!siteUrl) {
    console.error("config.json: falta 'siteUrl'");
    process.exit(1);
  }

  // Limpiar y crear dist/
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  // Templates con token reemplazado
  for (const file of TEMPLATES) {
    const src = path.join(ROOT, file);
    if (!fs.existsSync(src)) continue;
    let content = fs.readFileSync(src, "utf8");
    content = content.split(TOKEN).join(siteUrl);
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