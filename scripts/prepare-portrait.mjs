import sharp from 'sharp';
import fs from 'node:fs';

const inputPath = 'C:/Users/kolus/.gemini/antigravity/brain/10aae541-33d6-4ae9-804d-8757a0955db4/.user_uploaded/media_1794816559627_21895fad.jpg';

async function run() {
  console.log('Loading input image...');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Build grid for background model
  const gridW = 32, gridH = 20;
  const grid = [];
  for (let gy = 0; gy < gridH; gy++) {
    for (let gx = 0; gx < gridW; gx++) {
      const px = Math.round((gx / (gridW - 1)) * (width - 1));
      const py = Math.round((gy / (gridH - 1)) * (height - 1));
      
      // Known background: top region and far left/right
      if (py < 35 || px < 220 || px > 840) {
        const idx = (py * width + px) * channels;
        grid.push({ gx, gy, r: data[idx], g: data[idx+1], b: data[idx+2], isKnown: true });
      } else {
        grid.push({ gx, gy, r: 0, g: 0, b: 0, isKnown: false });
      }
    }
  }

  // Interpolate unknown grid cells
  for (const cell of grid) {
    if (!cell.isKnown) {
      let sumR = 0, sumG = 0, sumB = 0, sumW = 0;
      for (const k of grid) {
        if (k.isKnown) {
          const dist = Math.hypot(cell.gx - k.gx, cell.gy - k.gy);
          const w = 1 / Math.pow(dist, 2);
          sumR += k.r * w;
          sumG += k.g * w;
          sumB += k.b * w;
          sumW += w;
        }
      }
      cell.r = sumR / sumW;
      cell.g = sumG / sumW;
      cell.b = sumB / sumW;
    }
  }

  const getBgAt = (x, y) => {
    const gx = (x / (width - 1)) * (gridW - 1);
    const gy = (y / (height - 1)) * (gridH - 1);
    const gx0 = Math.floor(gx), gx1 = Math.min(gridW - 1, gx0 + 1);
    const gy0 = Math.floor(gy), gy1 = Math.min(gridH - 1, gy0 + 1);
    const fx = gx - gx0, fy = gy - gy0;

    const c00 = grid[gy0 * gridW + gx0];
    const c10 = grid[gy0 * gridW + gx1];
    const c01 = grid[gy1 * gridW + gx0];
    const c11 = grid[gy1 * gridW + gx1];

    const r = (1-fx)*(1-fy)*c00.r + fx*(1-fy)*c10.r + (1-fx)*fy*c01.r + fx*fy*c11.r;
    const g = (1-fx)*(1-fy)*c00.g + fx*(1-fy)*c10.g + (1-fx)*fy*c01.g + fx*fy*c11.g;
    const b = (1-fx)*(1-fy)*c00.b + fx*(1-fy)*c10.b + (1-fx)*fy*c01.b + fx*fy*c11.b;
    return [r, g, b];
  };

  // Compute alpha mask: 0 (transparent bg) to 255 (opaque fg)
  const alphaRaw = Buffer.alloc(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      // Outside subject bounding box: definitely 0
      if (x < 240 || x > 850 || y < 32) {
        alphaRaw[y * width + x] = 0;
        continue;
      }

      const bg = getBgAt(x, y);
      const dist = Math.hypot(r - bg[0], g - bg[1], b - bg[2]);

      // Soft threshold between 16 and 32
      let a = 0;
      if (dist <= 16) {
        a = 0;
      } else if (dist >= 32) {
        a = 255;
      } else {
        a = Math.round(((dist - 16) / 16) * 255);
      }

      // Check bottom fade out: smoothly fade the bottom 30px so it rests seamlessly on dark UI
      if (y > height - 30) {
        const fade = (height - 1 - y) / 30;
        a = Math.round(a * fade);
      }

      alphaRaw[y * width + x] = a;
    }
  }

  // Create full RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = alphaRaw[i];
  }

  // Crop framing: center on person (x from 188 to 908 = 720 wide, y from 0 to 640)
  // Let's create crop parameters:
  const cropLeft = 188;
  const cropWidth = 720;
  const cropHeight = height;

  console.log('Writing cropped pic1.jpeg and pic.png...');
  await sharp(inputPath)
    .extract({ left: cropLeft, top: 0, width: cropWidth, height: cropHeight })
    .jpeg({ quality: 95 })
    .toFile('pic1.jpeg');

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .extract({ left: cropLeft, top: 0, width: cropWidth, height: cropHeight })
    .png()
    .toFile('pic.png');

  console.log('Done preparing portrait files: pic1.jpeg and pic.png');
}

run().catch(console.error);
