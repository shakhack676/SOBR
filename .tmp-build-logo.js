const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

(async () => {
  const src = "C:/Users/andre/AppData/Local/Temp/opencode/logo-source.png";
  const outDir = "C:/Users/andre/OneDrive/Documents/AA/public/images";
  fs.mkdirSync(outDir, { recursive: true });

  const trimmedBuf = await sharp(src)
    .ensureAlpha()
    .trim({ threshold: 1 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = trimmedBuf.info;
  const contentSide = Math.max(width, height);
  const pad = Math.round(contentSide * 0.02);
  const side = contentSide + pad * 2;
  const left = Math.floor((side - width) / 2);
  const top = Math.floor((side - height) / 2);

  const square = await sharp(trimmedBuf.data)
    .extend({
      top,
      bottom: side - height - top,
      left,
      right: side - width - left,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  console.log("trimmed", width, height, "square", side, "pads", left, top);

  const outputs = [
    ["logo-sobr.png", 512, "png"],
    ["logo-sobr.webp", 512, "webp"],
    ["logo-sobr-192.png", 192, "png"],
    ["logo-sobr-180.png", 180, "png"],
    ["logo-sobr-32.png", 32, "png"],
  ];

  for (const [name, size, format] of outputs) {
    const target = path.join(outDir, name);
    let pipeline = sharp(square).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });
    if (format === "webp") pipeline = pipeline.webp({ quality: 92, alphaQuality: 100, effort: 6 });
    else pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
    await pipeline.toFile(target);
    const stat = fs.statSync(target);
    console.log(name, size, format, stat.size, "bytes");
  }
})();
