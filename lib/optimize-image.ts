import sharp from "sharp";

export type ImageProfile = "balanced" | "high-quality" | "compact";

export async function optimizeImage(input: Buffer, profile: ImageProfile = "balanced") {
  const options = { animated: true, limitInputPixels: 40000000, failOn: "warning" as const };
  const metadata = await sharp(input, options).metadata();
  if (!["jpeg", "png", "webp", "gif"].includes(metadata.format || "")) throw new Error("Only JPG, PNG, GIF, and WebP images are supported.");
  if ((metadata.pages || 1) > 120) throw new Error("Animated images must contain no more than 120 frames.");
  const settings = profile === "high-quality" ? { quality: 92, floor: 84, target: 650 } : profile === "compact" ? { quality: 76, floor: 64, target: 180 } : { quality: 84, floor: 76, target: 350 };
  let output: Buffer | undefined;
  for (let quality = settings.quality; quality >= settings.floor; quality -= 4) {
    const candidate = await sharp(input, options)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
      .webp({ quality, effort: 6, alphaQuality: 90, minSize: true })
      .toBuffer();
    if (!output || candidate.length < output.length) output = candidate;
    if (output.length <= settings.target * 1024) break;
  }
  if (!output) throw new Error("Unable to optimize this image.");
  if (output.length > 2 * 1024 * 1024) throw new Error("The optimized image exceeds 2 MB. Please use a smaller image or shorter animation.");
  return output;
}
