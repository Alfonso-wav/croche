// Diagramas SVG dibujados a mano (sin imágenes externas).
// Todos usan currentColor / variables CSS para adaptarse al tema.

const NS = 'xmlns="http://www.w3.org/2000/svg"';
const YARN = 'var(--yarn)';
const HOOK = 'var(--hook)';
const INK = 'var(--ink)';

function svg(w, h, body, label) {
  return `<svg ${NS} viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || ''}" class="fig-svg">${body}</svg>`;
}

const arrowDefs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>`;

// Gancho visto de lado con N lazadas (loops) puestas.
// opts.yo: dibuja la lana entrando en la garganta (hacer lazada)
// opts.pull: flecha de "saca a través de"
function hook(loops, opts = {}) {
  let b = arrowDefs;
  // hebra de trabajo saliendo hacia el ovillo
  if (loops) b += `<path d="M${150 + loops * 34} 72 C ${200 + loops * 30} 110, 300 100, 320 120" stroke="${YARN}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>`;
  // lazadas, parte trasera
  for (let i = 0; i < loops; i++) {
    const x = 120 + i * 34;
    b += `<ellipse cx="${x}" cy="60" rx="10" ry="24" stroke="${YARN}" stroke-width="6" fill="none"/>`;
  }
  // gancho
  b += `<path d="M330 52 H62 C48 52 36 50 30 58 C24 66 30 76 40 74 C46 73 48 68 54 68 H330 Z" fill="${HOOK}" stroke="${INK}" stroke-width="2"/>`;
  b += `<path d="M40 74 C34 70 36 62 44 62 L56 66" fill="none" stroke="${INK}" stroke-width="1.5" opacity=".5"/>`;
  b += `<rect x="230" y="50" width="70" height="20" rx="4" fill="var(--surface)" stroke="${INK}" stroke-width="1.5" opacity=".9"/>`;
  b += `<text x="265" y="64" text-anchor="middle" font-size="11" fill="${INK}" font-family="Nunito">4 mm</text>`;
  // parte delantera de las lazadas (encima del gancho)
  for (let i = 0; i < loops; i++) {
    const x = 120 + i * 34;
    b += `<path d="M${x} 36 C ${x - 14} 44, ${x - 14} 76, ${x} 84" stroke="${YARN}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  }
  if (opts.yo) {
    b += `<path d="M110 8 C 70 0, 40 20, 44 46" stroke="var(--accent)" stroke-width="3" fill="none" stroke-dasharray="6 5" marker-end="url(#ah)"/>`;
    b += `<text x="118" y="16" font-size="13" fill="var(--accent)" font-family="Fredoka" font-weight="600">lazada</text>`;
  }
  if (opts.pull) {
    const end = 120 + (opts.pull - 1) * 34 + 18;
    b += `<path d="M40 100 H${end}" stroke="var(--accent)" stroke-width="3" fill="none" marker-start="url(#ah)"/>`;
    b += `<text x="${(40 + end) / 2}" y="116" text-anchor="middle" font-size="12" fill="var(--accent)" font-family="Fredoka" font-weight="600">saca por ${opts.pull === 1 ? '1 lazada' : opts.pull + ' lazadas'}</text>`;
  }
  return svg(340, 124, b, `Gancho con ${loops} lazadas`);
}

// Nudo corredizo en 3 fases
function slipknot() {
  const p = (x, d) => `<g transform="translate(${x},0)">${d}</g>`;
  let b = arrowDefs;
  // 1: lazo
  b += p(10, `<path d="M10 100 C 30 90, 30 30, 60 30 C 90 30, 95 70, 70 80 C 50 88, 40 60, 60 50 L 100 20" stroke="${YARN}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <text x="55" y="122" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">1 · haz un lazo</text>`);
  // 2: pasa la hebra por dentro
  b += p(130, `<path d="M10 100 C 30 90, 30 30, 60 30 C 90 30, 95 70, 70 80 C 50 88, 40 60, 60 50 L 100 20" stroke="${YARN}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M62 10 C 60 30, 58 50, 62 66" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#ah)" stroke-dasharray="5 4"/>
    <text x="55" y="122" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">2 · pesca la hebra</text>`);
  // 3: nudo con bucle en el gancho
  b += p(250, `<ellipse cx="55" cy="40" rx="14" ry="26" stroke="${YARN}" stroke-width="6" fill="none"/>
    <rect x="0" y="34" width="110" height="12" rx="6" fill="${HOOK}" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="55" cy="74" r="9" fill="${YARN}"/>
    <path d="M50 80 L 30 110 M60 80 L 85 108" stroke="${YARN}" stroke-width="5" stroke-linecap="round"/>
    <text x="55" y="122" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">3 · tira y ajusta</text>`);
  return svg(370, 130, b, 'Nudo corredizo en tres pasos');
}

// Mano izquierda con la lana entre los dedos
function grip() {
  let b = '';
  const fingers = [[40, 'meñique'], [95, 'anular'], [150, 'corazón'], [205, 'índice']];
  fingers.forEach(([x, n], i) => {
    const top = i === 3 ? 18 : i === 0 ? 40 : 24;
    b += `<rect x="${x}" y="${top}" width="42" height="${150 - top}" rx="21" fill="var(--skin)" stroke="${INK}" stroke-width="2"/>`;
    b += `<text x="${x + 21}" y="168" text-anchor="middle" font-size="11" font-family="Nunito" fill="${INK}">${n}</text>`;
  });
  // lana: por debajo del meñique (rodea), por encima del anular, por debajo del corazón, por encima del índice
  b += `<path d="M0 110 C 30 112, 40 128, 61 128 C 80 128, 84 70, 116 70 C 140 70, 150 96, 171 96 C 196 96, 200 40, 226 38 C 250 36, 270 30, 290 20" stroke="${YARN}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  b += `<text x="292" y="16" font-size="12" font-family="Fredoka" fill="var(--accent)">al gancho →</text>`;
  b += `<text x="0" y="100" font-size="12" font-family="Fredoka" fill="var(--accent)">ovillo</text>`;
  return svg(370, 176, b, 'Cómo pasar la lana entre los dedos de la mano izquierda');
}

// Cadeneta vista de frente (una fila de V) con hebras marcadas
function chainAnatomy(n = 7) {
  let b = arrowDefs;
  for (let i = 0; i < n; i++) {
    const x = 30 + i * 44;
    b += `<ellipse cx="${x + 10}" cy="50" rx="9" ry="22" transform="rotate(-35 ${x + 10} 50)" stroke="${YARN}" stroke-width="6" fill="none"/>`;
    b += `<ellipse cx="${x + 30}" cy="50" rx="9" ry="22" transform="rotate(35 ${x + 30} 50)" stroke="${YARN}" stroke-width="6" fill="none"/>`;
  }
  b += `<path d="M118 112 L 118 76" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah)"/>`;
  b += `<text x="118" y="128" text-anchor="middle" font-size="12" font-family="Fredoka" fill="var(--accent)">1 punto = 1 «V»</text>`;
  b += `<path d="M262 112 L 254 70" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah)"/>`;
  b += `<text x="262" y="128" text-anchor="middle" font-size="12" font-family="Fredoka" fill="var(--accent)">mete el gancho por el centro</text>`;
  return svg(350, 136, b, 'Cadeneta: cada V es un punto');
}

// Símbolos internacionales de patrón
const SYM = {
  cad: { name: 'cadeneta', abbr: 'cad', d: `<ellipse cx="0" cy="0" rx="13" ry="7" fill="none" stroke="${INK}" stroke-width="3"/>` },
  pr: { name: 'punto raso', abbr: 'pr', d: `<circle cx="0" cy="0" r="7" fill="${INK}"/>` },
  pb: { name: 'punto bajo', abbr: 'pb', d: `<path d="M-10 -10 L10 10 M10 -10 L-10 10" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>` },
  mpa: { name: 'medio punto alto', abbr: 'mpa', d: `<path d="M-11 -18 H11 M0 -18 V18" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>` },
  pa: { name: 'punto alto', abbr: 'pa', d: `<path d="M-11 -24 H11 M0 -24 V24 M-7 4 L7 -6" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>` },
  aum: { name: 'aumento', abbr: 'aum', d: `<path d="M-12 -12 L0 12 L12 -12" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>` },
  dism: { name: 'disminución', abbr: 'dism', d: `<path d="M-12 12 L0 -12 L12 12" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>` },
  am: { name: 'anillo mágico', abbr: 'am', d: `<circle cx="0" cy="0" r="14" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="4 3"/>` },
};

function symbols(keys) {
  const w = 96;
  let b = '';
  keys.forEach((k, i) => {
    const s = SYM[k];
    const x = 48 + i * w;
    b += `<g transform="translate(${x},40)">${s.d}</g>`;
    b += `<text x="${x}" y="88" text-anchor="middle" font-size="14" font-family="Fredoka" font-weight="600" fill="var(--primary)">${s.abbr}</text>`;
    b += `<text x="${x}" y="104" text-anchor="middle" font-size="11" font-family="Nunito" fill="${INK}">${s.name}</text>`;
  });
  return svg(keys.length * w, 112, b, 'Símbolos de patrón').replace('class="fig-svg"', `class="fig-svg" style="max-width:${keys.length * w}px"`);
}

// Alturas comparadas de los puntos básicos
function heights() {
  const items = [['pr', 6, 'raso'], ['pb', 22, 'bajo'], ['mpa', 36, 'medio alto'], ['pa', 54, 'alto']];
  let b = `<line x1="10" y1="100" x2="330" y2="100" stroke="${INK}" stroke-width="2" opacity=".4"/>`;
  items.forEach(([k, h, n], i) => {
    const x = 50 + i * 80;
    b += `<rect x="${x - 18}" y="${100 - h * 1.4}" width="36" height="${h * 1.4}" rx="8" fill="${YARN}" opacity=".85"/>`;
    b += `<text x="${x}" y="118" text-anchor="middle" font-size="13" font-family="Fredoka" font-weight="600" fill="var(--primary)">${k}</text>`;
    b += `<text x="${x}" y="133" text-anchor="middle" font-size="11" font-family="Nunito" fill="${INK}">${n}</text>`;
  });
  return svg(340, 140, b, 'Altura de cada punto');
}

// Trabajo en filas: rejilla de puntos con cadeneta de vuelta
function rows(cols = 8, nrows = 4, sym = 'pb') {
  let b = arrowDefs;
  const cw = 34, rh = 36, x0 = 76, y0 = 30 + nrows * rh;
  // cadeneta base
  for (let c = 0; c < cols; c++) b += `<g transform="translate(${x0 + c * cw},${y0}) scale(.8)">${SYM.cad.d}</g>`;
  for (let r = 0; r < nrows; r++) {
    const y = y0 - (r + 1) * rh;
    for (let c = 0; c < cols; c++) b += `<g transform="translate(${x0 + c * cw},${y}) scale(.75)">${SYM[sym].d}</g>`;
    const right = r % 2 === 0;
    const tx = right ? x0 + cols * cw : x0 - cw;
    b += `<g transform="translate(${tx},${y}) rotate(90) scale(.7)">${SYM.cad.d}</g>`;
    const ax1 = right ? x0 - 10 : x0 + (cols - 1) * cw + 10;
    const ax2 = right ? x0 + (cols - 1) * cw + 10 : x0 - 10;
    b += `<path d="M${ax1} ${y + 17} H${ax2}" stroke="var(--accent)" stroke-width="2" opacity=".7" marker-end="url(#ah)"/>`;
    b += `<text x="${right ? x0 + cols * cw + 18 : 6}" y="${y + 4}" font-size="11" font-family="Fredoka" fill="var(--muted)">F${r + 1}</text>`;
  }
  b += `<text x="${x0 + (cols * cw) / 2 - 17}" y="${y0 + 26}" text-anchor="middle" font-size="11" font-family="Nunito" fill="var(--muted)">cadeneta base</text>`;
  return svg(x0 + cols * cw + 50, y0 + 34, b, 'Esquema de trabajo en filas');
}

// Patrón en redondo: anillos de pb con aumentos marcados
function roundChart(counts) {
  const size = 300, c = size / 2;
  let b = `<g transform="translate(${c},${c})">${SYM.am.d}</g>`;
  counts.forEach((n, i) => {
    const r = 28 + i * 30;
    b += `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
    const prev = i === 0 ? 0 : counts[i - 1];
    const incs = prev ? n - prev : 0;
    const g = incs ? n / incs : 0; // tamaño de cada grupo "(x pb, aum)"
    const place = (pos, s, hl) => {
      const a = (pos / n) * Math.PI * 2 - Math.PI / 2;
      const x = c + Math.cos(a) * r, y = c + Math.sin(a) * r;
      b += `<g transform="translate(${x},${y}) rotate(${(a * 180) / Math.PI + 90}) scale(.6)" ${hl ? 'style="--ink:var(--accent)"' : ''}>${s}</g>`;
    };
    for (let k = 0; k < n; k++) {
      const inGroup = g ? k % g : -1;
      if (g && inGroup === g - 2) place(k + 0.5, SYM.aum.d, true); // un aumento ocupa 2 puntos
      else if (g && inGroup === g - 1) continue;
      else place(k, SYM.pb.d, false);
    }
    b += `<text x="${c + r + 4}" y="${c - 4}" font-size="10" font-family="Fredoka" fill="var(--muted)">V${i + 1}</text>`;
  });
  return svg(size, size, b, 'Esquema en redondo');
}

// Anillo mágico en 3 fases
function magicRing() {
  let b = arrowDefs;
  b += `<g transform="translate(10,0)"><circle cx="55" cy="55" r="32" stroke="${YARN}" stroke-width="6" fill="none"/><path d="M55 87 L 30 120 M70 84 L 100 118" stroke="${YARN}" stroke-width="6" stroke-linecap="round"/><text x="60" y="140" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">1 · círculo cruzado</text></g>`;
  b += `<g transform="translate(130,0)"><circle cx="55" cy="55" r="32" stroke="${YARN}" stroke-width="6" fill="none"/><path d="M55 87 L 30 120 M70 84 L 100 118" stroke="${YARN}" stroke-width="6" stroke-linecap="round"/><path d="M50 20 V 52" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah)" stroke-dasharray="5 4"/><text x="60" y="140" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">2 · pesca y saca</text></g>`;
  let xs = '';
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    xs += `<g transform="translate(${55 + Math.cos(a) * 30},${55 + Math.sin(a) * 30}) scale(.5)">${SYM.pb.d}</g>`;
  }
  b += `<g transform="translate(250,0)"><circle cx="55" cy="55" r="30" stroke="${YARN}" stroke-width="4" fill="none" opacity=".5"/>${xs}<path d="M55 55 L 55 120" stroke="${YARN}" stroke-width="4" stroke-linecap="round"/><text x="60" y="140" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">3 · 6 pb y tira</text></g>`;
  return svg(370, 148, b, 'Anillo mágico en tres pasos');
}

// Granny square estilizado
function granny() {
  const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)'];
  let b = '';
  const c = 110;
  for (let r = 2; r >= 0; r--) {
    const half = 28 + r * 30;
    b += `<rect x="${c - half}" y="${c - half}" width="${half * 2}" height="${half * 2}" rx="10" fill="${colors[r]}" stroke="var(--surface)" stroke-width="4"/>`;
    // grupos de 3 pa
    const groups = r + 1;
    const step = (half * 2) / (groups + 1);
    for (let side = 0; side < 4; side++) {
      for (let g = 1; g <= groups; g++) {
        const off = -half + g * step;
        const [x, y, rot] = [[c + off, c - half + 12, 0], [c + half - 12, c + off, 90], [c - off, c + half - 12, 180], [c - half + 12, c - off, 270]][side];
        b += `<g transform="translate(${x},${y}) rotate(${rot})"><rect x="-9" y="-6" width="4" height="12" rx="2" fill="var(--surface)" opacity=".8"/><rect x="-2" y="-6" width="4" height="12" rx="2" fill="var(--surface)" opacity=".8"/><rect x="5" y="-6" width="4" height="12" rx="2" fill="var(--surface)" opacity=".8"/></g>`;
      }
    }
  }
  b += `<circle cx="${c}" cy="${c}" r="8" fill="var(--surface)"/>`;
  return svg(220, 220, b, 'Granny square de tres vueltas');
}

// El lazo (proyecto Kitty)
function bow() {
  const b = `
  <path d="M110 70 C 70 20, 20 20, 18 70 C 20 120, 70 120, 110 70 Z" fill="var(--bow)" stroke="${INK}" stroke-width="3"/>
  <path d="M110 70 C 150 20, 200 20, 202 70 C 200 120, 150 120, 110 70 Z" fill="var(--bow)" stroke="${INK}" stroke-width="3"/>
  <ellipse cx="110" cy="70" rx="18" ry="22" fill="var(--bow)" stroke="${INK}" stroke-width="3"/>
  <path d="M40 60 h40 M40 72 h44 M40 84 h40 M140 60 h40 M136 72 h44 M140 84 h40" stroke="${INK}" stroke-width="1.5" opacity=".25"/>
  <text x="110" y="134" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">rectángulo de pb + cintura apretada</text>`;
  return svg(220, 140, b, 'Lazo de ganchillo');
}

// Cuadrado con borde (posavasos Shrek)
function coaster() {
  let b = `<rect x="20" y="20" width="160" height="160" rx="6" fill="var(--vest)"/>`;
  b += `<rect x="32" y="32" width="136" height="136" rx="4" fill="var(--ogre)"/>`;
  for (let r = 0; r < 8; r++) b += `<path d="M38 ${44 + r * 16} H162" stroke="#00000022" stroke-width="2" stroke-dasharray="6 4"/>`;
  b += `<text x="100" y="200" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">verde + borde marrón (el chaleco)</text>`;
  return svg(200, 208, b, 'Posavasos verde con borde marrón');
}

// Carita amigurumi
function ballFace() {
  return svg(200, 170, `
    <path d="M38 60 C 10 50, 6 38, 14 34 C 22 32, 34 44, 46 52" fill="var(--ogre)" stroke="${INK}" stroke-width="3"/>
    <path d="M162 60 C 190 50, 194 38, 186 34 C 178 32, 166 44, 154 52" fill="var(--ogre)" stroke="${INK}" stroke-width="3"/>
    <circle cx="100" cy="84" r="62" fill="var(--ogre)" stroke="${INK}" stroke-width="3"/>
    <circle cx="80" cy="76" r="6" fill="${INK}"/><circle cx="120" cy="76" r="6" fill="${INK}"/>
    <path d="M78 104 C 90 116, 110 116, 122 104" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="100" y="164" text-anchor="middle" font-size="13" font-family="Fredoka" fill="${INK}">bolita + 2 orejitas</text>`, 'Bolita amigurumi con orejas');
}

export const FIG = { hook, slipknot, grip, chainAnatomy, symbols, heights, rows, roundChart, magicRing, granny, bow, coaster, ballFace };

// ---------- Mascotas ----------
export function kitty(size = 120) {
  return `<svg ${NS} viewBox="0 0 200 170" width="${size}" class="mascot" aria-label="Gatita con lazo">
    <path d="M38 62 L30 12 L80 40 Z" fill="#fff" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
    <path d="M162 62 L170 12 L120 40 Z" fill="#fff" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="100" cy="96" rx="88" ry="66" fill="#fff" stroke="#222" stroke-width="5"/>
    <ellipse cx="66" cy="98" rx="7" ry="10" fill="#222"/>
    <ellipse cx="134" cy="98" rx="7" ry="10" fill="#222"/>
    <ellipse cx="100" cy="114" rx="10" ry="7" fill="#ffd400" stroke="#222" stroke-width="3"/>
    <path d="M10 92 L44 98 M8 112 L42 110 M14 132 L44 120 M190 92 L156 98 M192 112 L158 110 M186 132 L156 120" stroke="#222" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(150,32) rotate(18)">
      <path d="M0 0 C -30 -30, -48 -6, -40 14 C -32 32, -10 18, 0 0 Z" fill="#ff1f4b" stroke="#222" stroke-width="4"/>
      <path d="M0 0 C 30 -30, 48 -6, 40 14 C 32 32, 10 18, 0 0 Z" fill="#ff1f4b" stroke="#222" stroke-width="4"/>
      <ellipse cx="0" cy="2" rx="11" ry="13" fill="#ff1f4b" stroke="#222" stroke-width="4"/>
    </g>
  </svg>`;
}

export function ogre(size = 120) {
  return `<svg ${NS} viewBox="0 0 200 180" width="${size}" class="mascot" aria-label="Ogro verde">
    <path d="M40 70 C 18 66, 6 54, 4 42 C 2 32, 12 30, 18 34 C 26 40, 34 52, 50 60" fill="#8db63a" stroke="#2b3a12" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="7" cy="38" rx="6" ry="9" fill="#5f8a1c"/>
    <path d="M160 70 C 182 66, 194 54, 196 42 C 198 32, 188 30, 182 34 C 174 40, 166 52, 150 60" fill="#8db63a" stroke="#2b3a12" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="193" cy="38" rx="6" ry="9" fill="#5f8a1c"/>
    <path d="M100 18 C 150 18, 172 56, 170 100 C 168 146, 140 172, 100 172 C 60 172, 32 146, 30 100 C 28 56, 50 18, 100 18 Z" fill="#9cc443" stroke="#2b3a12" stroke-width="5"/>
    <path d="M58 72 C 68 62, 82 62, 90 70 M110 70 C 118 62, 132 62, 142 72" stroke="#3d4d17" stroke-width="7" stroke-linecap="round" fill="none"/>
    <ellipse cx="76" cy="86" rx="11" ry="12" fill="#fff" stroke="#2b3a12" stroke-width="3"/>
    <ellipse cx="124" cy="86" rx="11" ry="12" fill="#fff" stroke="#2b3a12" stroke-width="3"/>
    <circle cx="78" cy="88" r="5" fill="#6b3f1d"/><circle cx="122" cy="88" r="5" fill="#6b3f1d"/>
    <path d="M90 96 C 86 116, 92 122, 100 122 C 108 122, 114 116, 110 96" fill="#88b236" stroke="#2b3a12" stroke-width="4"/>
    <path d="M62 132 C 80 150, 120 150, 138 132" stroke="#2b3a12" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

export function onion(size = 28) {
  return `<svg ${NS} viewBox="0 0 40 44" width="${size}" aria-hidden="true"><path d="M20 4 C 22 10, 36 18, 36 30 C 36 38, 28 42, 20 42 C 12 42, 4 38, 4 30 C 4 18, 18 10, 20 4 Z" fill="#e9d8a6" stroke="#8b6b2b" stroke-width="2.5"/><path d="M20 8 C 14 18, 12 30, 16 41 M20 8 C 26 18, 28 30, 24 41" fill="none" stroke="#8b6b2b" stroke-width="2"/><path d="M20 4 L18 0 M20 4 L23 0" stroke="#5f8a1c" stroke-width="2.5" stroke-linecap="round"/></svg>`;
}

export function bowIcon(size = 28) {
  return `<svg ${NS} viewBox="0 0 48 32" width="${size}" aria-hidden="true"><path d="M24 16 C 14 2, 2 4, 3 16 C 2 28, 14 30, 24 16 Z M24 16 C 34 2, 46 4, 45 16 C 46 28, 34 30, 24 16 Z" fill="#ff1f4b" stroke="#222" stroke-width="2.5"/><ellipse cx="24" cy="16" rx="5" ry="6" fill="#ff1f4b" stroke="#222" stroke-width="2.5"/></svg>`;
}
