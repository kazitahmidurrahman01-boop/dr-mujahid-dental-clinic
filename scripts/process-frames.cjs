const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'tooth-3d');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const frameFiles = [
  'ezgif-frame-022.jpg', 'ezgif-frame-023.jpg', 'ezgif-frame-024.jpg', 'ezgif-frame-025.jpg', 'ezgif-frame-026.jpg', 
  'ezgif-frame-027.jpg', 'ezgif-frame-028.jpg', 'ezgif-frame-029.jpg', 'ezgif-frame-030.jpg', 'ezgif-frame-031.jpg', 
  'ezgif-frame-032.jpg', 'ezgif-frame-033.jpg', 'ezgif-frame-034.jpg', 'ezgif-frame-035.jpg', 'ezgif-frame-036.jpg', 
  'ezgif-frame-037.jpg', 'ezgif-frame-038.jpg', 'ezgif-frame-039.jpg', 'ezgif-frame-040.jpg', 'ezgif-frame-041.jpg', 
  'ezgif-frame-042.jpg', 'ezgif-frame-043.jpg', 'ezgif-frame-044.jpg', 'ezgif-frame-045.jpg', 'ezgif-frame-046.jpg', 
  'ezgif-frame-047.jpg', 'ezgif-frame-048.jpg', 'ezgif-frame-049.jpg', 'ezgif-frame-050.jpg', 'ezgif-frame-051.jpg', 
  'ezgif-frame-052.jpg', 'ezgif-frame-053.jpg', 'ezgif-frame-054.jpg', 'ezgif-frame-055.jpg', 'ezgif-frame-056.jpg', 
  'ezgif-frame-057.jpg', 'ezgif-frame-058.jpg', 'ezgif-frame-059.jpg', 'ezgif-frame-060.jpg', 'ezgif-frame-061.jpg', 
  'ezgif-frame-062.jpg', 'ezgif-frame-063.jpg', 'ezgif-frame-064.jpg', 'ezgif-frame-065.jpg', 'ezgif-frame-066.jpg', 
  'ezgif-frame-067.jpg', 'ezgif-frame-068.jpg', 'ezgif-frame-069.jpg', 'ezgif-frame-072.jpg', 'ezgif-frame-073.jpg'
];

async function processAll() {
  console.log('Processing 50 frames into transparent radial-fade WebP...');
  const cx = 658, cy = 360;
  const rInner = 260;
  const rOuter = 335;
  const cropSize = 680;

  for (let i = 0; i < frameFiles.length; i++) {
    const file = frameFiles[i];
    const srcPath = path.join(__dirname, '..', 'public', 'tooth-frames', file);
    const { data, info } = await sharp(srcPath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const w = info.width, h = info.height;
    const out = Buffer.alloc(w * h * 4);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        const r = data[idx * 3];
        const g = data[idx * 3 + 1];
        const b = data[idx * 3 + 2];

        const dx = (x - cx) / 1.0;
        const dy = (y - cy) / 1.12;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = 255;
        if (dist > rOuter) {
          alpha = 0;
        } else if (dist > rInner) {
          alpha = Math.round((1 - (dist - rInner) / (rOuter - rInner)) * 255);
        }

        out[idx * 4] = r;
        out[idx * 4 + 1] = g;
        out[idx * 4 + 2] = b;
        out[idx * 4 + 3] = alpha;
      }
    }

    const padIndex = String(i).padStart(2, '0');
    const destPath = path.join(outDir, 'frame-' + padIndex + '.webp');

    await sharp(out, { raw: { width: w, height: h, channels: 4 } })
      .extract({ left: Math.round(cx - cropSize / 2), top: Math.max(0, Math.round(cy - cropSize / 2)), width: cropSize, height: cropSize })
      .resize(640, 640)
      .webp({ quality: 92 })
      .toFile(destPath);
  }

  console.log('All 50 frames converted successfully into public/tooth-3d/!');
}

processAll().catch(console.error);
