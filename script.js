/**
 * ============================================================================
 * CONFIGURATION OBJECT (EASY TO EDIT VIETNAMESE MESSAGES & TIMINGS)
 * ============================================================================
 */
const CONFIG = {
  introWhisper: '“Anh có một món quà nhỏ dành cho em...”',
  stageLabels: {
    stage1: '01 / Khởi tạo món quà nhỏ',
    stage2: '02 / Cành lá đang vươn mình',
    stage3: '03 / Nụ hoa hé mở',
    stage4: '04 / Bó hoa đang bung nở',
    stage5: '05 / Bó hoa đã nở trọn vẹn',
    night: '06 / Chúc bé yêu ngủ ngon'
  },
  bloomingProgressMessages: [
    'Từng nhành lá xanh đang khẽ vươn lên từ lớp giấy gói trắng...',
    'Những nụ hoa nhỏ xinh đang dần xuất hiện trên đầu cành...',
    'Những cánh hoa hồng, trắng và cam san hô đang bung nở dành riêng cho em...'
  ],
  romanticMessage: {
    badge: 'LỜI NHẮN DỊU DÀNG TRƯỚC GIỜ ĐI NGỦ',
    heading: 'Bé yêu ơi, đến giờ đi ngủ rồi nè! 🌙',
    paragraphs: [
      'Hôm nay em đã cố gắng nhiều rồi. Đừng thức khuya nữa nhé, anh muốn ngày mai em thức dậy thật vui và khỏe mạnh.',
      'Anh không ở cạnh để nhắc em mỗi tối, nên anh làm món quà nhỏ này để nhắc em thay anh.',
      'Ngoan nhé, đi ngủ sớm đi bé. Anh thương em nhiều lắm! ❤️'
    ],
    confirmButtonText: 'Em nghe lời anh, em đi ngủ đây ❤️'
  },
  goodnightMessage: {
    badge: 'ĐÊM YÊN BÌNH · CHÚC BÉ NGỦ NGON',
    heading: 'Chúc bé ngủ ngon, mơ thấy anh nhé! 💗',
    paragraphs: ['Anh yêu em.'],
    restartButtonText: 'Xem lại từ đầu'
  },
  timings: {
    stage1WrapperMs: 250,
    stage2StemsMs: 1400,
    stage3BudsMs: 3200,
    stage4BloomMs: 4700,
    stage5CompleteMs: 7900,
    paragraphStaggerMs: 650
  }
};

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

const RAW_FLOWERS = [
  { x: 296, y: 274, r: 34, type: 'white', layer: 2 },
  { x: 242, y: 292, r: 28, type: 'coral', layer: 2 },
  { x: 356, y: 266, r: 32, type: 'white', layer: 2 },
  { x: 312, y: 344, r: 30, type: 'white', layer: 2 },
  { x: 354, y: 312, r: 22, type: 'blush', layer: 3 },
  { x: 235, y: 348, r: 25, type: 'blush', layer: 3 },
  { x: 316, y: 214, r: 31, type: 'white', layer: 2 },
  { x: 272, y: 224, r: 20, type: 'blush', layer: 1 },
  { x: 238, y: 204, r: 23, type: 'blush', layer: 2 },
  { x: 254, y: 248, r: 22, type: 'blush', layer: 2 },
  { x: 184, y: 242, r: 29, type: 'white', layer: 2 },
  { x: 196, y: 268, r: 21, type: 'blush', layer: 3 },
  { x: 192, y: 318, r: 34, type: 'white', layer: 2 },
  { x: 372, y: 224, r: 21, type: 'blush', layer: 1 },
  { x: 416, y: 232, r: 34, type: 'coral', layer: 2 },
  { x: 404, y: 288, r: 22, type: 'blush', layer: 3 },
  { x: 382, y: 344, r: 26, type: 'coral', layer: 1 },
  { x: 418, y: 364, r: 32, type: 'white', layer: 2 },
  { x: 348, y: 404, r: 31, type: 'white', layer: 2 },
  { x: 284, y: 418, r: 32, type: 'coral', layer: 2 },
  { x: 234, y: 402, r: 23, type: 'blush', layer: 2 },
  { x: 186, y: 388, r: 34, type: 'coral', layer: 2 },
  { x: 302, y: 152, r: 33, type: 'coral', layer: 2 },
  { x: 226, y: 158, r: 22, type: 'white', layer: 1 },
  { x: 184, y: 192, r: 32, type: 'coral', layer: 2 },
  { x: 154, y: 222, r: 21, type: 'blush', layer: 1 },
  { x: 112, y: 242, r: 22, type: 'blush', layer: 2 },
  { x: 126, y: 278, r: 25, type: 'coral', layer: 2 },
  { x: 118, y: 344, r: 31, type: 'white', layer: 2 },
  { x: 132, y: 392, r: 21, type: 'blush', layer: 3 },
  { x: 154, y: 428, r: 22, type: 'blush', layer: 3 },
  { x: 222, y: 438, r: 26, type: 'white', layer: 3 },
  { x: 374, y: 192, r: 23, type: 'blush', layer: 2 },
  { x: 462, y: 266, r: 22, type: 'blush', layer: 2 },
  { x: 466, y: 320, r: 30, type: 'coral', layer: 2 },
  { x: 472, y: 368, r: 22, type: 'blush', layer: 3 },
  { x: 412, y: 412, r: 26, type: 'coral', layer: 2 },
  { x: 392, y: 442, r: 22, type: 'blush', layer: 3 },
  { x: 328, y: 448, r: 20, type: 'blush', layer: 3 },
  { x: 338, y: 468, r: 18, type: 'blush', layer: 3 }
];

function solveFlowerSeparation(flowers, iterations = 18) {
  const nodes = flowers.map((f, idx) => ({ ...f, id: idx }));
  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const minDist = (a.r + b.r) * 0.78;
        if (dist < minDist) {
          const overlap = (minDist - dist) * 0.35;
          const nx = dx / dist;
          const ny = dy / dist;
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;
        }
      }
    }
  }
  return nodes;
}

const SVG_NS = 'http://www.w3.org/2000/svg';

function createSvgElement(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, String(v));
  }
  return el;
}

function buildBouquetSvg() {
  const backdropLayer = document.getElementById('backdrop-foliage-layer');
  const wheatLayer = document.getElementById('wheat-sprigs-layer');
  const stemsLayer = document.getElementById('stems-layer');
  const leavesLayer = document.getElementById('leaves-layer');
  const budsLayer = document.getElementById('buds-layer');
  const flowersLayer = document.getElementById('flowers-layer');

  if (!backdropLayer) return;

  backdropLayer.innerHTML = '';
  wheatLayer.innerHTML = '';
  stemsLayer.innerHTML = '';
  leavesLayer.innerHTML = '';
  budsLayer.innerHTML = '';
  flowersLayer.innerHTML = '';

  const backdropLeaves = [
    { cx: 175, cy: 205, rx: 46, ry: 85, rot: -32, color: '#234F32' },
    { cx: 265, cy: 172, rx: 52, ry: 92, rot: -12, color: '#295A39' },
    { cx: 365, cy: 185, rx: 50, ry: 88, rot: 18, color: '#234F32' },
    { cx: 445, cy: 265, rx: 54, ry: 95, rot: 42, color: '#295A39' },
    { cx: 145, cy: 310, rx: 48, ry: 90, rot: -55, color: '#2B5E3C' },
    { cx: 455, cy: 345, rx: 46, ry: 86, rot: 62, color: '#234F32' },
    { cx: 215, cy: 395, rx: 50, ry: 78, rot: -40, color: '#316844' },
    { cx: 385, cy: 395, rx: 50, ry: 78, rot: 40, color: '#2B5E3C' },
    { cx: 300, cy: 295, rx: 125, ry: 118, rot: 0, color: '#2F6541' }
  ];

  backdropLeaves.forEach((leaf, idx) => {
    const g = createSvgElement('g', {
      class: 'backdrop-foliage-leaf',
      style: `transform-origin: 300px 460px; transition-delay: ${idx * 65}ms;`
    });
    const path = createSvgElement('ellipse', {
      cx: leaf.cx,
      cy: leaf.cy,
      rx: leaf.rx,
      ry: leaf.ry,
      fill: leaf.color,
      transform: `rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`
    });
    g.appendChild(path);
    backdropLayer.appendChild(g);
  });

  const wheatSprigs = [
    { x1: 255, y1: 245, x2: 222, y2: 112 },
    { x1: 180, y1: 260, x2: 96, y2: 175 },
    { x1: 380, y1: 235, x2: 448, y2: 148 },
    { x1: 430, y1: 325, x2: 522, y2: 342 },
    { x1: 210, y1: 395, x2: 162, y2: 458 },
    { x1: 365, y1: 415, x2: 382, y2: 498 },
    { x1: 325, y1: 335, x2: 368, y2: 278 },
    { x1: 245, y1: 325, x2: 185, y2: 288 }
  ];

  wheatSprigs.forEach((sp, idx) => {
    const g = createSvgElement('g', {
      class: 'wheat-sprig-item',
      style: `transform-origin: ${sp.x1}px ${sp.y1}px; transition-delay: ${300 + idx * 90}ms;`
    });

    const stem = createSvgElement('line', {
      x1: sp.x1,
      y1: sp.y1,
      x2: sp.x2,
      y2: sp.y2,
      stroke: '#DFB968',
      'stroke-width': '2',
      'stroke-linecap': 'round'
    });
    g.appendChild(stem);

    const dx = sp.x2 - sp.x1;
    const dy = sp.y2 - sp.y1;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;

    for (let k = 0.35; k <= 0.96; k += 0.11) {
      const bx = sp.x1 + dx * k;
      const by = sp.y1 + dy * k;
      const grainSize = (1 - (k - 0.35) * 0.6) * 5.5;

      [-1, 1].forEach((side) => {
        const gx = bx + px * side * (grainSize * 0.9) + ux * grainSize;
        const gy = by + py * side * (grainSize * 0.9) + uy * grainSize;
        const grain = createSvgElement('ellipse', {
          cx: (bx + gx) / 2,
          cy: (by + gy) / 2,
          rx: grainSize * 0.95,
          ry: grainSize * 0.38,
          fill: k > 0.7 ? '#F4D88E' : '#E5C06B',
          transform: `rotate(${(Math.atan2(gy - by, gx - bx) * 180) / Math.PI} ${(bx + gx) / 2} ${(by + gy) / 2})`
        });
        g.appendChild(grain);
      });
    }

    wheatLayer.appendChild(g);
  });

  const separatedFlowers = solveFlowerSeparation(RAW_FLOWERS, 16);
  const centerRef = { x: 295, y: 295 };

  separatedFlowers.forEach((f) => {
    f.distFromCenter = Math.hypot(f.x - centerRef.x, f.y - centerRef.y);
  });

  const renderOrderedFlowers = [...separatedFlowers].sort((a, b) => a.layer - b.layer);
  const distanceRankedIds = [...separatedFlowers]
    .sort((a, b) => a.distFromCenter - b.distFromCenter)
    .map((f) => f.id);

  const stemColors = ['#356E47', '#438257', '#4E8F63', '#2E623E'];
  const leafColors = ['#3E7C52', '#4F9164', '#5C9E71', '#2F6642'];

  renderOrderedFlowers.forEach((flower, idx) => {
    const bloomRank = distanceRankedIds.indexOf(flower.id);
    const startX = 300 + (flower.x - 300) * 0.18;
    const startY = 478;
    const ctrlX = (startX + flower.x) / 2 + (flower.x - 300) * 0.16;
    const ctrlY = (startY + flower.y) / 2 - 24;

    const pathD = `M ${startX.toFixed(1)} ${startY.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${flower.x.toFixed(1)} ${flower.y.toFixed(1)}`;
    const approxLen = Math.round(Math.hypot(flower.x - startX, flower.y - startY) * 1.25);

    const stemPath = createSvgElement('path', {
      d: pathD,
      fill: 'none',
      stroke: stemColors[idx % stemColors.length],
      'stroke-width': (flower.r > 28 ? 3.4 : 2.5).toString(),
      'stroke-linecap': 'round',
      class: 'stem-path',
      style: `--stem-len: ${approxLen}; transition-delay: ${bloomRank * 26}ms;`
    });
    stemsLayer.appendChild(stemPath);

    const tValues = idx % 2 === 0 ? [0.46, 0.72] : [0.58];
    tValues.forEach((t, lIdx) => {
      const mt = 1 - t;
      const lx = mt * mt * startX + 2 * mt * t * ctrlX + t * t * flower.x;
      const ly = mt * mt * startY + 2 * mt * t * ctrlY + t * t * flower.y;
      const side = (idx + lIdx) % 2 === 0 ? 1 : -1;
      const leafAngle = side * 38 + (flower.x - 300) * 0.12;
      const leafColor = leafColors[(idx + lIdx) % leafColors.length];

      const leafGroup = createSvgElement('g', {
        class: 'stem-leaf-item',
        style: `transform-origin: ${lx.toFixed(1)}px ${ly.toFixed(1)}px; transition-delay: ${220 + bloomRank * 30 + lIdx * 90}ms;`
      });

      const leafBody = createSvgElement('path', {
        d: `M ${lx.toFixed(1)} ${ly.toFixed(1)} C ${(lx + side * 14).toFixed(1)} ${(ly - 14).toFixed(1)}, ${(lx + side * 26).toFixed(1)} ${(ly - 6).toFixed(1)}, ${(lx + side * 28).toFixed(1)} ${(ly - 22).toFixed(1)} C ${(lx + side * 14).toFixed(1)} ${(ly - 24).toFixed(1)}, ${(lx + side * 6).toFixed(1)} ${(ly - 10).toFixed(1)}, ${lx.toFixed(1)} ${ly.toFixed(1)} Z`,
        fill: leafColor,
        transform: `rotate(${leafAngle.toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})`
      });

      leafGroup.appendChild(leafBody);
      leavesLayer.appendChild(leafGroup);
    });

    const budGroup = createSvgElement('g', {
      class: 'flower-bud-node',
      style: `transform-origin: ${flower.x.toFixed(1)}px ${flower.y.toFixed(1)}px; transition-delay: ${bloomRank * 28}ms;`
    });

    const budColor =
      flower.type === 'coral' ? '#F0597A' : flower.type === 'white' ? '#FFF8EB' : '#F6B8C4';

    const budCircle = createSvgElement('circle', {
      cx: flower.x.toFixed(1),
      cy: flower.y.toFixed(1),
      r: (flower.r * 0.28).toFixed(1),
      fill: budColor,
      stroke: '#356E47',
      'stroke-width': '1.8'
    });
    budGroup.appendChild(budCircle);
    budsLayer.appendChild(budGroup);

    const flowerNode = buildFlowerHeadSvg(flower, bloomRank);
    flowersLayer.appendChild(flowerNode);
  });
}

function buildFlowerHeadSvg(flower, bloomRank) {
  const { x, y, r, type } = flower;
  const staggerDelay = bloomRank * 48;

  const rootG = createSvgElement('g', {
    class: 'flower-head-node',
    style: `transform-origin: ${x.toFixed(1)}px ${y.toFixed(1)}px; transition-delay: ${staggerDelay}ms;`
  });

  const localG = createSvgElement('g', {
    transform: `translate(${x.toFixed(1)}, ${y.toFixed(1)})`
  });

  const outerRing = createSvgElement('g', { class: 'flower-outer-ring' });
  const innerRing = createSvgElement('g', {
    class: 'flower-inner-ring',
    style: 'transform-origin: 0px 0px;'
  });
  const coreGroup = createSvgElement('g', {
    class: 'flower-core-group',
    style: 'transform-origin: 0px 0px;'
  });

  if (type === 'coral') {
    const outerCount = 8;
    for (let i = 0; i < outerCount; i++) {
      const deg = (i * 360) / outerCount + (bloomRank % 3) * 7;
      const pLen = r * 0.98;
      const pWid = r * 0.44;
      const petal = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.35).toFixed(1)}, ${(-pWid * 0.85).toFixed(1)} ${(-pLen * 0.92).toFixed(1)}, ${(-pWid * 0.28).toFixed(1)} ${(-pLen).toFixed(1)} L 0 ${(-pLen * 0.88).toFixed(1)} L ${(pWid * 0.28).toFixed(1)} ${(-pLen).toFixed(1)} C ${(pWid * 0.85).toFixed(1)} ${(-pLen * 0.92).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.35).toFixed(1)}, 0 0 Z`,
        fill: i % 2 === 0 ? '#F0597A' : '#E84A6C',
        transform: `rotate(${deg.toFixed(1)})`
      });
      outerRing.appendChild(petal);
    }

    const innerCount = 6;
    for (let i = 0; i < innerCount; i++) {
      const deg = (i * 360) / innerCount + 25;
      const pLen = r * 0.72;
      const pWid = r * 0.34;
      const petal = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, ${(-pWid * 0.6).toFixed(1)} ${(-pLen).toFixed(1)}, 0 ${(-pLen * 0.92).toFixed(1)} C ${(pWid * 0.6).toFixed(1)} ${(-pLen).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, 0 0 Z`,
        fill: '#FF7090',
        transform: `rotate(${deg.toFixed(1)})`
      });
      innerRing.appendChild(petal);
    }

    const centerDisk = createSvgElement('circle', {
      cx: '0',
      cy: '0',
      r: (r * 0.16).toFixed(1),
      fill: '#C93B5B'
    });
    coreGroup.appendChild(centerDisk);

    for (let d = 0; d < 5; d++) {
      const a = (d * Math.PI * 2) / 5;
      const dot = createSvgElement('circle', {
        cx: (Math.cos(a) * r * 0.1).toFixed(1),
        cy: (Math.sin(a) * r * 0.1).toFixed(1),
        r: '1.7',
        fill: '#FFD166'
      });
      coreGroup.appendChild(dot);
    }
  } else if (type === 'white') {
    const outerCount = 12;
    for (let i = 0; i < outerCount; i++) {
      const deg = (i * 360) / outerCount;
      const pLen = r * 0.96;
      const pWid = r * 0.24;
      const petal = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.35).toFixed(1)}, ${(-pWid * 0.85).toFixed(1)} ${(-pLen).toFixed(1)}, 0 ${(-pLen).toFixed(1)} C ${(pWid * 0.85).toFixed(1)} ${(-pLen).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.35).toFixed(1)}, 0 0 Z`,
        fill: i % 2 === 0 ? '#FFFDF9' : '#F5EFE2',
        transform: `rotate(${deg.toFixed(1)})`
      });
      outerRing.appendChild(petal);
    }

    const innerCount = 10;
    for (let i = 0; i < innerCount; i++) {
      const deg = (i * 360) / innerCount + 15;
      const pLen = r * 0.72;
      const pWid = r * 0.2;
      const petal = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, ${(-pWid * 0.75).toFixed(1)} ${(-pLen).toFixed(1)}, 0 ${(-pLen).toFixed(1)} C ${(pWid * 0.75).toFixed(1)} ${(-pLen).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, 0 0 Z`,
        fill: '#FFFFFF',
        transform: `rotate(${deg.toFixed(1)})`
      });
      innerRing.appendChild(petal);
    }

    const halo = createSvgElement('circle', {
      cx: '0',
      cy: '0',
      r: (r * 0.26).toFixed(1),
      fill: '#F3C65F',
      opacity: '0.45'
    });
    const disk = createSvgElement('circle', {
      cx: '0',
      cy: '0',
      r: (r * 0.18).toFixed(1),
      fill: '#E5A93C'
    });
    coreGroup.appendChild(halo);
    coreGroup.appendChild(disk);
  } else {
    const petalCount = 5;
    for (let i = 0; i < petalCount; i++) {
      const deg = (i * 360) / petalCount + (bloomRank % 5) * 11;
      const pLen = r * 0.95;
      const pWid = r * 0.54;
      const petal = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.32).toFixed(1)}, ${(-pWid * 0.9).toFixed(1)} ${(-pLen * 0.98).toFixed(1)}, 0 ${(-pLen * 0.92).toFixed(1)} C ${(pWid * 0.9).toFixed(1)} ${(-pLen * 0.98).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.32).toFixed(1)}, 0 0 Z`,
        fill: i % 2 === 0 ? '#FAD2DA' : '#F6B8C5',
        transform: `rotate(${deg.toFixed(1)})`
      });
      outerRing.appendChild(petal);
    }

    for (let i = 0; i < petalCount; i++) {
      const deg = (i * 360) / petalCount + (bloomRank % 5) * 11;
      const pLen = r * 0.48;
      const pWid = r * 0.26;
      const innerFlush = createSvgElement('path', {
        d: `M 0 0 C ${(-pWid).toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, ${(-pWid * 0.6).toFixed(1)} ${(-pLen).toFixed(1)}, 0 ${(-pLen).toFixed(1)} C ${(pWid * 0.6).toFixed(1)} ${(-pLen).toFixed(1)}, ${pWid.toFixed(1)} ${(-pLen * 0.4).toFixed(1)}, 0 0 Z`,
        fill: '#E8839B',
        opacity: '0.75',
        transform: `rotate(${deg.toFixed(1)})`
      });
      innerRing.appendChild(innerFlush);
    }

    const coreCenter = createSvgElement('circle', {
      cx: '0',
      cy: '0',
      r: (r * 0.15).toFixed(1),
      fill: '#D65C7A'
    });
    coreGroup.appendChild(coreCenter);
  }

  localG.appendChild(outerRing);
  localG.appendChild(innerRing);
  localG.appendChild(coreGroup);
  rootG.appendChild(localG);
  return rootG;
}

class AmbientCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lastTime = performance.now();

    this.petals = [];
    this.stars = [];
    this.sparkles = [];
    this.floatingNotes = [];

    this.targetSpeedMultiplier = 1.0;
    this.currentSpeedMultiplier = 1.0;
    this.targetPetalAlpha = 0.45;
    this.currentPetalAlpha = 0.45;
    this.targetNightBlend = 0.78;
    this.currentNightBlend = 0.78;

    this.pointer = { x: -9999, y: -9999 };
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.resize();
    this.initEntities();
    this.bindEvents();
    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  initEntities() {
    const petalColors = ['#FFB6D5', '#FFF5F8', '#F497B6', '#F0597A', '#A88BFF'];
    const petalCount = this.width < 768 ? 24 : 36;

    this.petals = Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 18,
      vy: 16 + Math.random() * 20,
      size: 5.0 + Math.random() * 5.5,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 1.4,
      swayPhase: Math.random() * Math.PI * 2,
      color: petalColors[i % petalColors.length],
      radius: 26
    }));

    const starCount = this.width < 768 ? 68 : 120;
    const starColors = ['#FFF5F8', '#FFB6D5', '#A88BFF', '#FDE68A'];
    this.stars = Array.from({ length: starCount }, (_, i) => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      r: 0.6 + Math.random() * 1.7,
      phase: Math.random() * Math.PI * 2,
      speed: 0.7 + Math.random() * 1.9,
      color: starColors[i % starColors.length]
    }));

    const sparkleCount = this.width < 768 ? 22 : 38;
    this.sparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      x: this.width * (0.2 + Math.random() * 0.6),
      y: this.height * (0.15 + Math.random() * 0.7),
      r: 1.1 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      speed: 1.0 + Math.random() * 1.6,
      vy: -6 - Math.random() * 10,
      color: i % 2 === 0 ? '#FFB6D5' : '#A88BFF'
    }));
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('pointermove', (e) => {
      this.pointer.x = e.clientX;
      this.pointer.y = e.clientY;
    });
  }

  setStageMode({ petalsActive, nightMode }) {
    this.targetPetalAlpha = petalsActive ? 0.92 : 0.45;
    this.targetNightBlend = nightMode ? 1.0 : 0.78;
    this.targetSpeedMultiplier = nightMode ? 0.38 : 1.0;
  }

  loop(now) {
    const deltaTime = clamp((now - this.lastTime) / 1000, 0.001, 0.05);
    this.lastTime = now;

    this.update(deltaTime, now / 1000);
    this.draw(now / 1000);

    requestAnimationFrame((t) => this.loop(t));
  }

  update(deltaTime) {
    this.currentPetalAlpha = lerp(this.currentPetalAlpha, this.targetPetalAlpha, deltaTime * 2.2);
    this.currentNightBlend = lerp(this.currentNightBlend, this.targetNightBlend, deltaTime * 1.6);
    this.currentSpeedMultiplier = lerp(
      this.currentSpeedMultiplier,
      this.targetSpeedMultiplier,
      deltaTime * 2.0
    );

    if (this.reducedMotion) return;

    const speedMult = this.currentSpeedMultiplier;

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.swayPhase += deltaTime * 1.1 * speedMult;
      const waveT = (Math.sin(p.swayPhase) + 1) * 0.5;
      const easedWave = easeInOutCubic(waveT) - 0.5;

      let sepX = 0;
      let sepY = 0;
      for (let j = 0; j < this.petals.length; j++) {
        if (i === j) continue;
        const other = this.petals[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const dist = Math.hypot(dx, dy);
        const minSep = p.radius + other.radius;
        if (dist > 0 && dist < minSep) {
          const force = (minSep - dist) / minSep;
          sepX += (dx / dist) * force * 24;
          sepY += (dy / dist) * force * 24;
        }
      }

      const pdx = p.x - this.pointer.x;
      const pdy = p.y - this.pointer.y;
      const pDist = Math.hypot(pdx, pdy);
      if (pDist > 0 && pDist < 95) {
        const push = (95 - pDist) / 95;
        sepX += (pdx / pDist) * push * 45;
        sepY += (pdy / pDist) * push * 45;
      }

      const desiredVx = easedWave * 28 + sepX;
      const desiredVy = (18 + (p.id % 5) * 3.5) * speedMult + sepY;

      p.vx = lerp(p.vx, desiredVx, deltaTime * 3.0);
      p.vy = lerp(p.vy, desiredVy, deltaTime * 3.0);

      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      p.rot += p.vRot * deltaTime * speedMult;

      if (p.y > this.height + 24) {
        p.y = -20;
        p.x = Math.random() * this.width;
      }
      if (p.x < -25) p.x = this.width + 20;
      if (p.x > this.width + 25) p.x = -20;
    }

    for (let i = 0; i < this.sparkles.length; i++) {
      const sp = this.sparkles[i];
      sp.phase += deltaTime * sp.speed;
      sp.y += sp.vy * deltaTime * speedMult;
      sp.x += Math.sin(sp.phase) * 8 * deltaTime;
      if (sp.y < this.height * 0.08) {
        sp.y = this.height * 0.85;
        sp.x = this.width * (0.2 + Math.random() * 0.6);
      }
    }
  }

  draw(elapsedSec) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      const twinkle = 0.3 + 0.7 * ((Math.sin(elapsedSec * s.speed + s.phase) + 1) * 0.5);
      ctx.save();
      ctx.globalAlpha = twinkle * this.currentNightBlend;
      ctx.fillStyle = s.color;
      if (s.r > 1.5) {
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (let i = 0; i < this.sparkles.length; i++) {
      const sp = this.sparkles[i];
      const pulse = 0.25 + 0.75 * ((Math.sin(elapsedSec * sp.speed + sp.phase) + 1) * 0.5);
      ctx.save();
      ctx.globalAlpha = pulse * 0.82;
      ctx.fillStyle = sp.color;
      ctx.shadowColor = sp.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (this.currentPetalAlpha > 0.02) {
      for (let i = 0; i < this.petals.length; i++) {
        const p = this.petals[i];
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = this.currentPetalAlpha * (0.65 + (i % 3) * 0.1);
        ctx.fillStyle = p.color;

        if (this.currentNightBlend > 0.3) {
          ctx.shadowColor = 'rgba(244, 143, 177, 0.45)';
          ctx.shadowBlur = 8 * this.currentNightBlend;
        }

        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(
          p.size * 0.85,
          -p.size * 0.7,
          p.size * 0.75,
          p.size * 0.7,
          0,
          p.size
        );
        ctx.bezierCurveTo(
          -p.size * 0.75,
          p.size * 0.7,
          -p.size * 0.85,
          -p.size * 0.7,
          0,
          -p.size
        );
        ctx.fill();
        ctx.restore();
      }
    }
  }
}

class BloomExperienceController {
  constructor(canvasEngine) {
    this.canvasEngine = canvasEngine;
    this.timers = [];
    this.isTransitioningToSleep = false;

    this.stageLabel = document.getElementById('stage-status-label');
    this.whisperPill = document.getElementById('stage-whisper-pill');
    this.bouquetShowcase = document.getElementById('bouquet-showcase');
    this.bouquetSvg = document.getElementById('bouquet-svg');
    this.cardBadge = document.getElementById('card-badge-text');
    this.cardClock = document.getElementById('card-clock-display');
    this.messageHeading = document.getElementById('message-heading');
    this.messageBody = document.getElementById('message-body');
    this.cardActions = document.getElementById('card-actions');
    this.confirmSleepBtn = document.getElementById('confirm-sleep-btn');
    this.restartBtn = document.getElementById('restart-experience-btn');
    this.topReplayBtn = document.getElementById('top-replay-btn');
    this.themeColorMeta = document.getElementById('theme-color-meta');

    this.updateLiveClock();
    setInterval(() => this.updateLiveClock(), 15000);

    this.bindControls();
    this.startSequence();
  }

  updateLiveClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    if (this.cardClock) {
      this.cardClock.textContent = `${hh}:${mm}`;
    }
  }

  clearAllTimers() {
    while (this.timers.length > 0) {
      clearTimeout(this.timers.pop());
    }
  }

  schedule(fn, delayMs) {
    const id = setTimeout(fn, delayMs);
    this.timers.push(id);
    return id;
  }

  bindControls() {
    this.confirmSleepBtn.addEventListener('click', () => {
      this.triggerGoodnightScene();
    });

    this.restartBtn.addEventListener('click', () => {
      this.startSequence();
    });

    this.topReplayBtn.addEventListener('click', () => {
      this.startSequence();
    });
  }

  resetVisualState() {
    this.clearAllTimers();
    this.isTransitioningToSleep = false;

    document.body.classList.remove('is-night');
    this.themeColorMeta.setAttribute('content', '#080D24');

    this.bouquetShowcase.classList.remove('aura-visible');
    this.bouquetSvg.classList.remove('swaying');

    document
      .querySelectorAll(
        '.wrapper-cone-group, .backdrop-foliage-leaf, .stem-path, .stem-leaf-item, .wheat-sprig-item, .flower-bud-node, .flower-head-node'
      )
      .forEach((el) => {
        el.classList.remove('active', 'bloomed');
      });

    this.whisperPill.textContent = CONFIG.introWhisper;
    this.whisperPill.classList.add('visible');

    this.cardBadge.textContent = CONFIG.romanticMessage.badge;
    this.messageHeading.textContent = 'Anh có một món quà nhỏ dành cho em...';
    this.messageBody.innerHTML = '';

    this.confirmSleepBtn.disabled = false;
    this.confirmSleepBtn.classList.remove('hidden');
    this.confirmSleepBtn.querySelector('span').textContent =
      CONFIG.romanticMessage.confirmButtonText;
    this.restartBtn.classList.add('hidden');
    this.cardActions.classList.remove('ready');

    this.canvasEngine.setStageMode({ petalsActive: false, nightMode: false });
  }

  renderProgressNote(text) {
    this.messageBody.innerHTML = '';
    const p = document.createElement('p');
    p.className = 'msg-para';
    p.textContent = text;
    this.messageBody.appendChild(p);
    requestAnimationFrame(() => p.classList.add('revealed'));
  }

  startSequence() {
    this.resetVisualState();
    const t = CONFIG.timings;

    this.stageLabel.textContent = CONFIG.stageLabels.stage1;
    this.schedule(() => {
      document.querySelectorAll('.wrapper-cone-group').forEach((el) => {
        el.classList.add('active');
      });
      this.renderProgressNote(CONFIG.bloomingProgressMessages[0]);
    }, t.stage1WrapperMs);

    this.schedule(() => {
      this.stageLabel.textContent = CONFIG.stageLabels.stage2;
      document.querySelectorAll('.backdrop-foliage-leaf, .stem-path').forEach((el) => {
        el.classList.add('active');
      });
      document.querySelectorAll('.stem-leaf-item, .wheat-sprig-item').forEach((el) => {
        el.classList.add('active');
      });
    }, t.stage2StemsMs);

    this.schedule(() => {
      this.stageLabel.textContent = CONFIG.stageLabels.stage3;
      this.renderProgressNote(CONFIG.bloomingProgressMessages[1]);
      document.querySelectorAll('.flower-bud-node').forEach((el) => {
        el.classList.add('active');
      });
    }, t.stage3BudsMs);

    this.schedule(() => {
      this.stageLabel.textContent = CONFIG.stageLabels.stage4;
      this.renderProgressNote(CONFIG.bloomingProgressMessages[2]);
      document.querySelectorAll('.flower-bud-node').forEach((el) => {
        el.classList.add('bloomed');
      });
      document.querySelectorAll('.flower-head-node').forEach((el) => {
        el.classList.add('active');
      });
    }, t.stage4BloomMs);

    this.schedule(() => {
      this.stageLabel.textContent = CONFIG.stageLabels.stage5;
      this.bouquetShowcase.classList.add('aura-visible');
      this.bouquetSvg.classList.add('swaying');
      this.whisperPill.classList.remove('visible');

      this.canvasEngine.setStageMode({ petalsActive: true, nightMode: false });
      this.revealRomanticMessage();
    }, t.stage5CompleteMs);
  }

  revealRomanticMessage() {
    this.messageHeading.textContent = CONFIG.romanticMessage.heading;
    this.messageBody.innerHTML = '';

    const paras = CONFIG.romanticMessage.paragraphs;
    paras.forEach((text, idx) => {
      const p = document.createElement('p');
      p.className = idx === paras.length - 1 ? 'msg-para highlight-love' : 'msg-para';
      p.textContent = text;
      this.messageBody.appendChild(p);

      this.schedule(() => {
        p.classList.add('revealed');
      }, 150 + idx * CONFIG.timings.paragraphStaggerMs);
    });

    const totalRevealDelay = 250 + paras.length * CONFIG.timings.paragraphStaggerMs;
    this.schedule(() => {
      this.cardActions.classList.add('ready');
    }, totalRevealDelay);
  }

  triggerGoodnightScene() {
    if (this.isTransitioningToSleep) return;
    this.isTransitioningToSleep = true;
    this.confirmSleepBtn.disabled = true;

    document.body.classList.add('is-night');
    this.themeColorMeta.setAttribute('content', '#080D24');
    this.stageLabel.textContent = CONFIG.stageLabels.night;
    this.canvasEngine.setStageMode({ petalsActive: true, nightMode: true });

    this.cardActions.classList.remove('ready');
    this.messageBody.querySelectorAll('.msg-para').forEach((p) => {
      p.classList.remove('revealed');
    });

    this.schedule(() => {
      this.cardBadge.textContent = CONFIG.goodnightMessage.badge;
      this.messageHeading.textContent = CONFIG.goodnightMessage.heading;
      this.messageBody.innerHTML = '';

      CONFIG.goodnightMessage.paragraphs.forEach((line, idx) => {
        const p = document.createElement('p');
        p.className = 'msg-para highlight-love';
        p.textContent = line;
        this.messageBody.appendChild(p);

        this.schedule(() => {
          p.classList.add('revealed');
        }, 160 + idx * 350);
      });

      this.confirmSleepBtn.classList.add('hidden');
      this.restartBtn.querySelector('span').textContent =
        CONFIG.goodnightMessage.restartButtonText;
      this.restartBtn.classList.remove('hidden');

      this.schedule(() => {
        this.cardActions.classList.add('ready');
      }, 450);
    }, 550);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildBouquetSvg();
  const canvasEl = document.getElementById('ambient-canvas');
  const canvasEngine = new AmbientCanvasEngine(canvasEl);
  new BloomExperienceController(canvasEngine);
});
