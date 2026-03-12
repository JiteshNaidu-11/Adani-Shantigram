#!/usr/bin/env node
/**
 * Downloads amenity images to public/images/amenities/ so they load locally.
 * Run: node scripts/download-amenity-images.mjs
 */
import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images", "amenities");

const IMAGES = [
  { file: "golf.jpg", url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80" },
  { file: "sports.jpg", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { file: "aqua.jpg", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80" },
  { file: "gardens.jpg", url: "https://images.unsplash.com/photo-1585320806297-9794b3e4ee0e?w=600&q=80" },
  { file: "kids-play.jpg", url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80" },
  { file: "school.jpg", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" },
  { file: "clubhouse.jpg", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { file: "shoppers.jpg", url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" },
  { file: "fitness.jpg", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" },
  { file: "pool.jpg", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80" },
  { file: "security.jpg", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { file: "temple.jpg", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
];

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const { file, url } of IMAGES) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) throw new Error(res.statusText);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(join(OUT_DIR, file), buf);
      console.log("OK", file);
    } catch (e) {
      console.warn("Skip", file, e.message);
    }
  }
  console.log("Done. Images in public/images/amenities/");
}

run();
