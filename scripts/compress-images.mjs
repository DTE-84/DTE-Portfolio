/**
 * One-time image compression script using Sharp (bundled with Next.js).
 * Run: node scripts/compress-images.mjs
 *
 * Targets:
 *   public/DTELogo.png        1024x1024 → 512x512 WebP  (~50KB target)
 *   public/mwpropertiesmain.png  860x483 → 624x546 WebP  (~40KB target)
 *   public/assets/proxima.jpg              → WebP          (~50KB target)
 */

import sharp from "sharp";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const jobs = [
  {
    input: path.join(root, "public", "DTELogo.png"),
    output: path.join(root, "public", "DTELogo.webp"),
    // Displayed at 500x500 — 2x for HiDPI = 512px
    resize: { width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } },
    webp: { quality: 85, lossless: false },
    label: "DTELogo.png → DTELogo.webp (512x512)",
  },
  {
    input: path.join(root, "public", "DTELogo.png"),
    output: path.join(root, "public", "DTELogo-512.png"),
    // Compressed PNG fallback for browsers that need it
    resize: { width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } },
    png: { compressionLevel: 9, quality: 80 },
    label: "DTELogo.png → DTELogo-512.png (compressed fallback)",
  },
  {
    input: path.join(root, "public", "mwpropertiesmain.png"),
    output: path.join(root, "public", "mwpropertiesmain.webp"),
    // Displayed at 312x273 — 2x = 624x546
    resize: { width: 624, height: 546, fit: "inside" },
    webp: { quality: 82 },
    label: "mwpropertiesmain.png → mwpropertiesmain.webp (624px)",
  },
  {
    input: path.join(root, "public", "assets", "proxima.jpg"),
    output: path.join(root, "public", "assets", "proxima.webp"),
    // Fixed background — 1920px wide is plenty, lower quality fine
    resize: { width: 1920, fit: "inside" },
    webp: { quality: 60 },
    label: "proxima.jpg → proxima.webp (1920px, q60)",
  },
];

console.log("🗜  DTE Image Compressor\n");

for (const job of jobs) {
  if (!existsSync(job.input)) {
    console.warn(`⚠  Skipping — not found: ${job.input}`);
    continue;
  }

  try {
    let pipeline = sharp(job.input);
    if (job.resize) pipeline = pipeline.resize(job.resize);

    if (job.webp)       pipeline = pipeline.webp(job.webp);
    else if (job.png)   pipeline = pipeline.png(job.png);

    const info = await pipeline.toFile(job.output);
    const kb = (info.size / 1024).toFixed(1);
    console.log(`✅  ${job.label} → ${kb} KB`);
  } catch (err) {
    console.error(`❌  Failed: ${job.label}`, err.message);
  }
}

console.log("\nDone. Update component references to use .webp files.");
