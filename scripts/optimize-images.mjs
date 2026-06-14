import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const INPUT_DIR = "./public/images";

async function optimizeImages() {
  console.log("Optimisation des images en cours...\n");

  const files = await fs.readdir(INPUT_DIR);
  const images = files.filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(path.extname(f).toLowerCase()),
  );

  let count = 0;

  for (const file of images) {
    const inputPath = path.join(INPUT_DIR, file);
    const name = path.basename(file, path.extname(file));
    const outputPath = path.join(INPUT_DIR, `${name}.webp`);

    const inputStat = await fs.stat(inputPath);

    await sharp(inputPath)
      .rotate() // Corrige l'orientation EXIF
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    const outputStat = await fs.stat(outputPath);
    const gain = Math.round((1 - outputStat.size / inputStat.size) * 100);
    const inputMB = (inputStat.size / 1024 / 1024).toFixed(1);
    const outputKB = Math.round(outputStat.size / 1024);

    console.log(`✅ ${file}`);
    console.log(`   ${inputMB} MB → ${outputKB} KB (−${gain}%)\n`);
    count++;
  }

  console.log(` ${count} images optimisées !`);
  console.log(`⚠️  Vérifie le rendu visuel avant de supprimer les originaux.`);
}

optimizeImages().catch(console.error);
