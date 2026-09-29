import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate high quality SVG strings and convert to JPG
const assets = [
  {
    filename: 'profile.jpg',
    width: 800,
    height: 800,
    svg: `
      <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#1E1F26" />
            <stop offset="60%" stop-color="#0E0F14" />
            <stop offset="100%" stop-color="#060608" />
          </radialGradient>
          <linearGradient id="rim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E5484D" stop-opacity="0.6"/>
            <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
          </linearGradient>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0"/>
          </filter>
        </defs>
        <rect width="800" height="800" fill="url(#bg)"/>
        <!-- Silhouette of male creative director with headphones -->
        <g transform="translate(100, 140)">
          <!-- Head & Torso Silhouette with sharp rim light -->
          <circle cx="300" cy="220" r="110" fill="#14151B" stroke="#2D3039" stroke-width="2"/>
          <!-- Modern studio headphones -->
          <path d="M190 220 C190 140, 410 140, 410 220" fill="none" stroke="#E5484D" stroke-width="14" stroke-linecap="round"/>
          <rect x="175" y="195" width="30" height="65" rx="12" fill="#1E2029" stroke="#E5484D" stroke-width="3"/>
          <rect x="395" y="195" width="30" height="65" rx="12" fill="#1E2029" stroke="#E5484D" stroke-width="3"/>
          <!-- Dark minimal turtleneck shoulders -->
          <path d="M140 460 C180 340, 240 330, 300 330 C360 330, 420 340, 460 460 L480 560 L120 560 Z" fill="#0A0B0E" stroke="#1D1F28" stroke-width="2"/>
          <!-- Subtle rim lighting on jaw and shoulder -->
          <path d="M230 260 Q 300 310 370 260" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3"/>
          <path d="M140 460 C 180 340 220 335 250 335" fill="none" stroke="#E5484D" stroke-width="2.5" opacity="0.7"/>
        </g>
        <!-- Overlay technical HUD and typography -->
        <text x="50" y="80" font-family="'JetBrains Mono', monospace" font-size="12" fill="#666874" letter-spacing="3">CREATIVE DIRECTION // PROFILE_ID: 01</text>
        <text x="50" y="740" font-family="'Syne', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF" letter-spacing="1">VIDEO EDITOR &amp; DESIGNER</text>
        <text x="50" y="765" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D" letter-spacing="2">PLACEHOLDER ASSET (profile.jpg)</text>
        <!-- Studio crosshair marks -->
        <circle cx="740" cy="80" r="16" fill="none" stroke="#333644" stroke-width="1.5"/>
        <line x1="740" y1="58" x2="740" y2="102" stroke="#333644" stroke-width="1.5"/>
        <line x1="718" y1="80" x2="762" y2="80" stroke="#333644" stroke-width="1.5"/>
      </svg>
    `
  },
  {
    filename: 'graphic1.jpg',
    width: 800,
    height: 1000,
    svg: `
      <svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="1000" fill="#0C0D11"/>
        <!-- Brutalist Swiss Editorial Poster -->
        <g stroke="#232530" stroke-width="1">
          <line x1="80" y1="0" x2="80" y2="1000"/>
          <line x1="720" y1="0" x2="720" y2="1000"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="880" x2="800" y2="880"/>
        </g>
        <!-- 3D Geometric forms -->
        <circle cx="400" cy="460" r="220" fill="none" stroke="#E5484D" stroke-width="3" stroke-dasharray="12 6"/>
        <circle cx="400" cy="460" r="160" fill="#14151C" stroke="#2E313D" stroke-width="2"/>
        <rect x="290" y="350" width="220" height="220" fill="none" stroke="#FFFFFF" stroke-width="2" transform="rotate(45 400 460)"/>
        <!-- Bold Typography -->
        <text x="80" y="90" font-family="'Syne', sans-serif" font-weight="800" font-size="36" fill="#FFFFFF" letter-spacing="4">KINETIC MONOLITH</text>
        <text x="80" y="740" font-family="'Syne', sans-serif" font-weight="700" font-size="64" fill="#FFFFFF" letter-spacing="-1">01 / BRANDING</text>
        <text x="80" y="790" font-family="'JetBrains Mono', monospace" font-size="14" fill="#8E909D" letter-spacing="1">MODULAR IDENTITY SYSTEM &amp; TYPOGRAPHY</text>
        <text x="80" y="925" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D" letter-spacing="2">LOCAL ASSET: graphic1.jpg</text>
        <text x="640" y="925" font-family="'JetBrains Mono', monospace" font-size="12" fill="#666874">POSTER 01</text>
      </svg>
    `
  },
  {
    filename: 'graphic2.jpg',
    width: 800,
    height: 600,
    svg: `
      <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="#0A0B0E"/>
        <!-- 3D Architectural / Tech Product Visualization -->
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#E5484D" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#FF8343" stop-opacity="0.2"/>
          </linearGradient>
        </defs>
        <!-- Isometric wireframe grid -->
        <path d="M100 450 L400 250 L700 450 L400 550 Z" fill="#12131A" stroke="#2A2D3A" stroke-width="2"/>
        <path d="M400 250 L400 120 L700 320 L700 450 Z" fill="#181A24" stroke="#2A2D3A" stroke-width="2"/>
        <path d="M100 450 L100 320 L400 120 L400 250 Z" fill="#1C1E2B" stroke="#E5484D" stroke-width="2"/>
        <!-- Cinema Camera / Audio Visualizer Wave -->
        <g stroke="#E5484D" stroke-width="3" fill="none">
          <path d="M 220 480 Q 280 430 340 480 T 460 480 T 580 480"/>
        </g>
        <text x="60" y="70" font-family="'Syne', sans-serif" font-weight="800" font-size="28" fill="#FFFFFF">AUDIO VISUAL IDENTITY</text>
        <text x="60" y="98" font-family="'JetBrains Mono', monospace" font-size="12" fill="#888A98">02 / 3D PACKAGING &amp; SOUND DESIGN</text>
        <text x="60" y="550" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D">LOCAL ASSET: graphic2.jpg</text>
      </svg>
    `
  },
  {
    filename: 'graphic3.jpg',
    width: 800,
    height: 800,
    svg: `
      <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="800" fill="#0E0F14"/>
        <!-- High-Impact YouTube / Stream Thumbnail Design -->
        <rect x="40" y="40" width="720" height="720" rx="16" fill="#15161E" stroke="#2A2C38" stroke-width="2"/>
        <!-- Abstract Cinema Lens Ring -->
        <circle cx="400" cy="380" r="180" fill="none" stroke="#2D3040" stroke-width="12"/>
        <circle cx="400" cy="380" r="150" fill="none" stroke="#E5484D" stroke-width="4"/>
        <circle cx="400" cy="380" r="110" fill="#0C0D12" stroke="#4B4E61" stroke-width="2"/>
        <!-- Bold Typography -->
        <text x="80" y="130" font-family="'Syne', sans-serif" font-weight="800" font-size="44" fill="#FFFFFF">MASTERING</text>
        <text x="80" y="180" font-family="'Syne', sans-serif" font-weight="800" font-size="44" fill="#E5484D">THE TIMELINE</text>
        <text x="80" y="680" font-family="'JetBrains Mono', monospace" font-size="14" fill="#8A8C9B">HIGH-CTR THUMBNAIL COMPOSITION</text>
        <text x="80" y="715" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D">LOCAL ASSET: graphic3.jpg</text>
      </svg>
    `
  },
  {
    filename: 'graphic4.jpg',
    width: 800,
    height: 600,
    svg: `
      <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="#08090C"/>
        <!-- Color Grading Scopes & Vector Poster -->
        <circle cx="260" cy="300" r="160" fill="none" stroke="#222530" stroke-width="2"/>
        <circle cx="260" cy="300" r="110" fill="none" stroke="#333748" stroke-width="1.5"/>
        <line x1="260" y1="120" x2="260" y2="480" stroke="#333748" stroke-width="1"/>
        <line x1="80" y1="300" x2="440" y2="300" stroke="#333748" stroke-width="1"/>
        <!-- RGB scopes plot -->
        <path d="M180 340 Q 220 220 260 270 T 320 240 T 350 330" fill="none" stroke="#E5484D" stroke-width="3"/>
        <path d="M190 320 Q 230 200 270 290 T 330 210 T 360 310" fill="none" stroke="#3B82F6" stroke-width="2" opacity="0.6"/>
        <text x="480" y="240" font-family="'Syne', sans-serif" font-weight="700" font-size="36" fill="#FFFFFF">LUT &amp; COLOR</text>
        <text x="480" y="280" font-family="'Syne', sans-serif" font-weight="700" font-size="36" fill="#E5484D">PALETTE</text>
        <text x="480" y="325" font-family="'JetBrains Mono', monospace" font-size="13" fill="#888B98">FILM EMULATION SERIES</text>
        <text x="480" y="530" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D">LOCAL ASSET: graphic4.jpg</text>
      </svg>
    `
  },
  {
    filename: 'graphic5.jpg',
    width: 800,
    height: 1000,
    svg: `
      <svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="1000" fill="#0C0D11"/>
        <!-- Typography Poster & Kinetic Grid -->
        <g stroke="#1F212B" stroke-width="1">
          <line x1="100" y1="0" x2="100" y2="1000"/>
          <line x1="700" y1="0" x2="700" y2="1000"/>
        </g>
        <text x="100" y="220" font-family="'Syne', sans-serif" font-weight="800" font-size="76" fill="#242633">FRAME</text>
        <text x="100" y="320" font-family="'Syne', sans-serif" font-weight="800" font-size="76" fill="#FFFFFF">BY FRAME</text>
        <text x="100" y="420" font-family="'Syne', sans-serif" font-weight="800" font-size="76" fill="#E5484D">MOTION</text>
        <!-- Dynamic angled bars -->
        <rect x="100" y="480" width="400" height="8" fill="#E5484D"/>
        <rect x="100" y="505" width="280" height="4" fill="#FFFFFF" opacity="0.7"/>
        <rect x="100" y="525" width="500" height="2" fill="#4B4E61"/>
        <text x="100" y="860" font-family="'JetBrains Mono', monospace" font-size="14" fill="#9093A2">EDITORIAL DESIGN &amp; TYPOGRAPHIC POSTER</text>
        <text x="100" y="900" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D">LOCAL ASSET: graphic5.jpg</text>
      </svg>
    `
  },
  {
    filename: 'graphic6.jpg',
    width: 800,
    height: 800,
    svg: `
      <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="800" fill="#0B0C10"/>
        <!-- Social Media Design Template Suite -->
        <rect x="60" y="60" width="680" height="680" rx="20" fill="#14151D" stroke="#252733" stroke-width="2"/>
        <rect x="120" y="140" width="240" height="380" rx="12" fill="#1C1E29" stroke="#333748" stroke-width="1.5"/>
        <rect x="400" y="140" width="280" height="200" rx="12" fill="#1C1E29" stroke="#E5484D" stroke-width="2"/>
        <rect x="400" y="370" width="280" height="150" rx="12" fill="#1A1B24" stroke="#333748" stroke-width="1.5"/>
        <text x="120" y="600" font-family="'Syne', sans-serif" font-weight="700" font-size="32" fill="#FFFFFF">SOCIAL CAROUSEL KIT</text>
        <text x="120" y="635" font-family="'JetBrains Mono', monospace" font-size="13" fill="#888B9A">MULTI-FORMAT DESIGN SYSTEM</text>
        <text x="120" y="680" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E5484D">LOCAL ASSET: graphic6.jpg</text>
      </svg>
    `
  },
  {
    filename: 'showreel_poster.jpg',
    width: 1280,
    height: 720,
    svg: `
      <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
        <rect width="1280" height="720" fill="#08090C"/>
        <!-- Cinema suite timeline view -->
        <defs>
          <linearGradient id="reelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E5484D" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
        <rect width="1280" height="720" fill="url(#reelGrad)"/>
        <!-- Timeline tracks -->
        <g opacity="0.35">
          <line x1="80" y1="480" x2="1200" y2="480" stroke="#3A3D4D" stroke-width="1"/>
          <line x1="80" y1="540" x2="1200" y2="540" stroke="#3A3D4D" stroke-width="1"/>
          <line x1="80" y1="600" x2="1200" y2="600" stroke="#3A3D4D" stroke-width="1"/>
          <!-- Clip blocks -->
          <rect x="140" y="490" width="220" height="40" rx="4" fill="#3B82F6" opacity="0.6"/>
          <rect x="380" y="490" width="310" height="40" rx="4" fill="#E5484D" opacity="0.8"/>
          <rect x="710" y="490" width="180" height="40" rx="4" fill="#10B981" opacity="0.6"/>
          <rect x="910" y="490" width="240" height="40" rx="4" fill="#F59E0B" opacity="0.6"/>
          <!-- Audio waveforms -->
          <path d="M 140 570 Q 200 550 260 570 T 380 570 T 500 570 T 700 570 T 900 570 T 1150 570" fill="none" stroke="#06B6D4" stroke-width="3" opacity="0.7"/>
          <!-- Playhead line -->
          <line x1="560" y1="440" x2="560" y2="650" stroke="#FFFFFF" stroke-width="2"/>
          <polygon points="553,440 567,440 560,455" fill="#FFFFFF"/>
        </g>
        <!-- Center play glyph preview -->
        <circle cx="640" cy="300" r="54" fill="#12131A" stroke="#E5484D" stroke-width="2"/>
        <polygon points="633,282 656,300 633,318" fill="#FFFFFF"/>
        <text x="640" y="390" text-anchor="middle" font-family="'Syne', sans-serif" font-weight="700" font-size="24" fill="#FFFFFF" letter-spacing="4">SHOWREEL</text>
        <text x="640" y="415" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E91A0" letter-spacing="2">4K 60FPS // EDITING &amp; MOTION</text>
      </svg>
    `
  },
  {
    filename: 'featured_project.jpg',
    width: 1280,
    height: 720,
    svg: `
      <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
        <rect width="1280" height="720" fill="#07080B"/>
        <!-- Brutalist Architectural / Automotive Pavilion -->
        <path d="M120 620 L400 200 L900 200 L1160 620 Z" fill="#111218" stroke="#252733" stroke-width="2"/>
        <!-- Concept car geometric aerodynamic silhouette -->
        <path d="M 280 560 C 340 480, 520 460, 680 460 C 840 460, 960 500, 1020 560 Z" fill="#161822" stroke="#E5484D" stroke-width="2.5"/>
        <line x1="380" y1="560" x2="440" y2="560" stroke="#FFFFFF" stroke-width="4"/>
        <line x1="840" y1="560" x2="920" y2="560" stroke="#E5484D" stroke-width="4"/>
        <!-- Dramatic horizon light beam -->
        <line x1="0" y1="360" x2="1280" y2="360" stroke="#E5484D" stroke-width="1" opacity="0.3"/>
        <text x="120" y="120" font-family="'Syne', sans-serif" font-weight="800" font-size="40" fill="#FFFFFF" letter-spacing="2">PROJECT: VELOCITY APEX</text>
        <text x="120" y="155" font-family="'JetBrains Mono', monospace" font-size="14" fill="#E5484D" letter-spacing="3">COMMERCIAL LAUNCH FILM &amp; MOTION CAMPAIGN</text>
      </svg>
    `
  },
  {
    filename: 'before_raw.jpg',
    width: 800,
    height: 500,
    svg: `
      <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#202228"/>
        <!-- Flat desaturated LOG look -->
        <path d="M 100 400 L 300 220 L 500 350 L 700 180" fill="none" stroke="#484C5A" stroke-width="4"/>
        <rect x="250" y="240" width="300" height="160" fill="#2E313C" stroke="#3D4150" stroke-width="2"/>
        <text x="40" y="60" font-family="'JetBrains Mono', monospace" font-weight="600" font-size="16" fill="#8E92A2" letter-spacing="2">RAW LOG FOOTAGE [UNGRADED]</text>
        <text x="40" y="90" font-family="'JetBrains Mono', monospace" font-size="12" fill="#656977">S-Log3 / 10-bit 4:2:2 / Flat Dynamic Range</text>
      </svg>
    `
  },
  {
    filename: 'after_grade.jpg',
    width: 800,
    height: 500,
    svg: `
      <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#07080B"/>
        <!-- Rich contrast cinematic film emulation -->
        <defs>
          <linearGradient id="cinemaSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0E192B"/>
            <stop offset="60%" stop-color="#2D1115"/>
            <stop offset="100%" stop-color="#07080B"/>
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(#cinemaSky)"/>
        <path d="M 100 400 L 300 220 L 500 350 L 700 180" fill="none" stroke="#E5484D" stroke-width="6"/>
        <rect x="250" y="240" width="300" height="160" fill="#14151F" stroke="#E5484D" stroke-width="2"/>
        <!-- Film grain and anamorphic flare -->
        <line x1="0" y1="280" x2="800" y2="280" stroke="#00E5FF" stroke-width="1.5" opacity="0.4"/>
        <text x="40" y="60" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="16" fill="#E5484D" letter-spacing="2">FINAL CINEMATIC GRADE [COLOR &amp; PACING]</text>
        <text x="40" y="90" font-family="'JetBrains Mono', monospace" font-size="12" fill="#FFFFFF">Kodak 2383 Print Emulation / Film Grain / Sound Design</text>
      </svg>
    `
  }
];

async function run() {
  for (const item of assets) {
    const filePath = path.join(publicDir, item.filename);
    const buffer = Buffer.from(item.svg);
    await sharp(buffer)
      .jpeg({ quality: 92 })
      .toFile(filePath);
    console.log(`Generated ${item.filename}`);
  }
}

run().catch(console.error);
