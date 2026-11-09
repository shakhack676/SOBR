const sharp = require("sharp");

(async () => {
  const src = "C:/Users/andre/AppData/Local/Temp/opencode/logo-source.png";
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log({ width, height, minX, minY, maxX, maxY, w: maxX - minX + 1, h: maxY - minY + 1 });
  // sample alpha along the middle row/col at edges
  const alphaAt = (x, y) => data[(y * width + x) * channels + 3];
  console.log("row512 left", Array.from({length: 20}, (_, i) => [25 + i, alphaAt(25 + i, 512)]));
  console.log("row512 right", Array.from({length: 20}, (_, i) => [975 + i, alphaAt(975 + i, 512)]));
  console.log("col512 top", Array.from({length: 20}, (_, i) => [i, alphaAt(512, i)]));
  console.log("col512 bottom", Array.from({length: 20}, (_, i) => [997 + i, alphaAt(512, 997 + i)]));
})();
