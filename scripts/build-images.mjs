import sharp from 'sharp';
import fs from 'node:fs';

const origPath = 'C:/Users/kolus/.gemini/antigravity/brain/10aae541-33d6-4ae9-804d-8757a0955db4/.user_uploaded/media_1794816559627_21895fad.jpg';
const OUT = 'public/assets';

fs.mkdirSync(OUT, { recursive: true });

async function build() {
  console.log('Copying original high-res photo...');
  fs.copyFileSync(origPath, `${OUT}/portrait-original.jpg`);
  fs.copyFileSync(origPath, 'pic1.jpeg');

  console.log('Generating webp assets at maximum quality...');
  // 1100w (original width is 1024, keep 100% native resolution)
  await sharp(origPath)
    .webp({ quality: 98, effort: 6 })
    .toFile(`${OUT}/portrait-1100.webp`);

  // 720w
  await sharp(origPath)
    .resize({ width: 720 })
    .webp({ quality: 98, effort: 6 })
    .toFile(`${OUT}/portrait-720.webp`);

  // 420w
  await sharp(origPath)
    .resize({ width: 420 })
    .webp({ quality: 98, effort: 6 })
    .toFile(`${OUT}/portrait-420.webp`);

  console.log('Generating social share image (og-image.jpg)...');
  const cardPortrait = await sharp(origPath)
    .resize({ height: 580 })
    .jpeg({ quality: 95 })
    .toBuffer();

  const svgGrad = Buffer.from(
    '<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="1200" height="630" fill="url(#g)"/>' +
    '</svg>'
  );

  const svgText = Buffer.from(
    '<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">' +
      '<text x="72" y="290" font-family="Impact, Arial Narrow, sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">TEJASWI</text>' +
      '<text x="78" y="345" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>' +
      '<text x="78" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">SOFTWARE &amp; AI ENGINEER • JAVA • PYTHON • GENAI</text>' +
    '</svg>'
  );

  await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
    .composite([
      { input: svgGrad },
      { input: cardPortrait, gravity: 'southeast' },
      { input: svgText },
    ])
    .jpeg({ quality: 92 })
    .toFile(`${OUT}/og-image.jpg`);

  console.log('Done! All pure photo assets built successfully.');
}

build().catch(console.error);
