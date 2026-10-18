import sharp from "sharp";

export async function optimizeImage(input: Buffer) {
  const options = { animated: true, limitInputPixels: 40000000, failOn: "warning" as const };
  const metadata = await sharp(input, options).metadata();
  if (!["jpeg", "png", "webp", "gif"].includes(metadata.format || "")) throw new Error("Only JPG, PNG, GIF, and WebP images are supported.");
  if ((metadata.pages || 1) > 120) throw new Error("Animated images must contain no more than 120 frames.");
  const output = await sharp(input, options)
    .rotate()
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5, alphaQuality: 80, minSize: true })
    .toBuffer();
  if (output.length > 2 * 1024 * 1024) throw new Error("The optimized image exceeds 2 MB. Please use a smaller image or shorter animation.");
  return output;
}
