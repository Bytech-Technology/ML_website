/* =========================================================
   ML Obras — Optimizador de imágenes (uso local, dev only)
   Convierte las fotos de assets/img/obras/ a WebP en dos
   tamaños: @thumb (ancho ~640px) y full (ancho ~1600px).
   No se ejecuta en el build de Vercel: los WebP resultantes
   se commitean. Uso: node scripts/optimize.js
   ========================================================= */
"use strict";

const fs = require("fs");
const path = require("path");

const OBRAS_DIR = path.resolve(__dirname, "../assets/img/obras");
const THUMB_WIDTH = 640;
const FULL_WIDTH = 1600;
const SOURCE_EXT = [".jpg", ".jpeg", ".png", ".webp"];
const SUFFIX = "@thumb";

function listSources() {
  if (!fs.existsSync(OBRAS_DIR)) {
    console.error("No existe la carpeta " + OBRAS_DIR);
    console.error("Poné tus fotos de obra ahí y volvé a correr este script.");
    process.exit(1);
  }
  return fs.readdirSync(OBRAS_DIR).filter((f) => SOURCE_EXT.includes(path.extname(f).toLowerCase()));
}

function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch (e) {
    console.error("Falta 'sharp'. Primero corré: npm install");
    process.exit(1);
  }

  const sources = listSources();
  if (!sources.length) {
    console.log("Sin fotos en assets/img/obras/. Nada que optimizar.");
    return;
  }

  (async () => {
    for (const file of sources) {
      const base = path.basename(file, path.extname(file));
      const src = path.join(OBRAS_DIR, file);
      const thumb = path.join(OBRAS_DIR, base + SUFFIX + ".webp");
      const full = path.join(OBRAS_DIR, base + ".webp");

      await sharp(src)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(thumb);
      await sharp(src)
        .resize({ width: FULL_WIDTH, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(full);

      console.log("OK", file, "->", base + SUFFIX + ".webp", "|", base + ".webp");
    }
    console.log("Listo. Referenciá `assets/img/obras/<nombre>.webp` en el HTML.");
  })().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

main();