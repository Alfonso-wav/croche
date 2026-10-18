import { MODULES, LESSONS, GLOSSARY, WORDS } from './lessons.js';
import { FIG, kitty, ogre, onion, bowIcon } from './figures.js';

// ✏️ Personaliza aquí
const DEDICATORIA = {
  nombre: 'mi amor',
  mensaje: 'Un curso hecho solo para ti, paso a paso y desde cero. Con tus dos ganchos y tus lanas tienes todo lo que necesitas.',
};

// ---------- Estado (solo en este navegador) ----------
const KEY = 'croche-v1';
const state = load();
function load() {
  try {
    return { done: [], theme: 'kitty', counters: { vueltas: 0, puntos: 0 }, notes: {}, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return { done: [], theme: 'kitty', counters: { vueltas: 0, puntos: 0 }, notes: {} };
  }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* modo privado: no pasa nada */ }
}

const ORDER = MODULES.flatMap((m) => m.lessons);
const $ = (s) => document.querySelector(s);
const app = $('#app');

// ---------- Tema ----------
function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const btn = $('#theme-btn');
  btn.innerHTML = state.theme === 'kitty'
    ? `${onion(22)}<span>Modo pantano</span>`
    : `${bowIcon(24)}<span>Modo Kitty</span>`;
  btn.setAttribute('aria-label', state.theme === 'kitty' ? 'Cambiar a tema Shrek' : 'Cambiar a tema Hello Kitty');
  document.querySelector('meta[name="theme-color"]').content = state.theme === 'kitty' ? '#ffd6e5' : '#cfe0a3';
}
$('#theme-btn').addEventListener('click', () => {
  state.theme = state.theme === 'kitty' ? 'shrek' : 'kitty';
  save();
  applyTheme();
});

// ---------- Utilidades ----------
const fig = (spec) => (spec ? `<figure class="fig">${FIG[spec[0]](...spec.slice(1))}</figure>` : '');
const mascot = (who, size) => (who === 'kitty' ? kitty(size) : ogre(size));
const hostName = (who) => (who === 'kitty' ? 'Kitty' : 'Shrek');
const isDone = (id) => state.done.includes(id);
const num = (id) => ORDER.indexOf(id) + 1;

function progressBar() {
  const n = state.done.length, total = ORDER.length;
  const pct = Math.round((n / total) * 100);
  return `<div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <span class="progress-label">${n} de ${total} lecciones · ${pct}%</span>
  </div>`;
}

// ---------- Vistas ----------
function home() {
  const next = ORDER.find((id) => !isDone(id));
  return `
  <section class="hero">
    <div class="hero-mascots">${kitty(130)}${ogre(130)}</div>
    <p class="eyebrow">Para ${DEDICATORIA.nombre} 💕</p>
    <h1>Ganchillo desde cero</h1>
    <p class="lead">${DEDICATORIA.mensaje}</p>
    ${progressBar()}
    ${next
      ? `<a class="btn btn-big" href="#/leccion/${next}">${state.done.length ? 'Seguir por' : 'Empezar con'}: ${LESSONS[next].title} →</a>`
      : `<p class="all-done">¡Has terminado el curso entero! Kitty y Shrek están orgullosísimos. 🎀🧅</p>`}
  </section>

  <section class="kit">
    <h2>Lo que necesitas</h2>
    <div class="kit-row">
      <div class="kit-item"><span class="kit-emoji">🪝</span><b>2 ganchos</b><small>los que tienes</small></div>
      <div class="kit-item"><span class="kit-emoji">🧶</span><b>Lanas</b><small>de colores</small></div>
      <div class="kit-item"><span class="kit-emoji">✂️</span><b>Tijeras</b><small>las de casa</small></div>
      <div class="kit-item"><span class="kit-emoji">💗</span><b>Paciencia</b><small>un poquito</small></div>
    </div>
  </section>

  ${MODULES.map((m, mi) => `
    <section class="module">
      <header class="module-head">
        <span class="module-num">Módulo ${mi + 1}</span>
        <h2>${m.title}</h2>
        <p>${m.blurb}</p>
      </header>
      <ol class="lesson-list">
        ${m.lessons.map((id) => {
          const l = LESSONS[id];
          return `<li><a class="lesson-card ${isDone(id) ? 'done' : ''} host-${l.host}" href="#/leccion/${id}">
            <span class="lesson-num">${isDone(id) ? '✓' : num(id)}</span>
            <span class="lesson-body"><b>${l.title}</b><small>${l.time}${l.abbr ? ' · ' + l.abbr : ''} · con ${hostName(l.host)}</small></span>
            <span class="lesson-host">${l.host === 'kitty' ? bowIcon(26) : onion(24)}</span>
          </a></li>`;
        }).join('')}
      </ol>
    </section>`).join('')}
  `;
}

function lesson(id) {
  const l = LESSONS[id];
  if (!l) return notFound();
  const i = ORDER.indexOf(id);
  const prev = ORDER[i - 1], next = ORDER[i + 1];
  const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(l.video);
  return `
  <article class="lesson">
    <a class="back" href="#/">← Todas las lecciones</a>
    <header class="lesson-head">
      <div class="lesson-mascot">${mascot(l.host, 110)}</div>
      <div>
        <p class="eyebrow">Lección ${i + 1} · ${l.time}${l.abbr ? ` · <span class="abbr">${l.abbr}</span>` : ''}</p>
        <h1>${l.title}</h1>
        <p class="goal"><b>Objetivo:</b> ${l.goal}</p>
      </div>
    </header>
    <p class="lead">${l.intro}</p>

    <h2>Paso a paso</h2>
    <ol class="steps">
      ${l.steps.map((s) => `<li class="step"><div class="step-text"><h3>${s.h}</h3><p>${s.t}</p></div>${fig(s.fig)}</li>`).join('')}
    </ol>

    <div class="tips">
      <aside class="tip tip-kitty"><div class="tip-face">${kitty(56)}</div><div><b>Kitty dice</b><p>${l.tips.kitty}</p></div></aside>
      <aside class="tip tip-shrek"><div class="tip-face">${ogre(56)}</div><div><b>Shrek dice</b><p>${l.tips.shrek}</p></div></aside>
    </div>

    <section class="errors">
      <h2>Errores típicos</h2>
      <ul>${l.errors.map((e) => `<li>${e}</li>`).join('')}</ul>
    </section>

    <section class="practice practice-${l.practice.who}">
      <div class="practice-head">
        ${l.practice.who === 'kitty' ? bowIcon(34) : onion(30)}
        <div><p class="eyebrow">Ejercicio</p><h2>${l.practice.title}</h2></div>
      </div>
      ${fig(l.practice.fig)}
      <ol>${l.practice.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
    </section>

    <section class="notes">
      <h2>Mis notas</h2>
      <textarea id="notes" rows="3" placeholder="Apunta aquí lo que quieras: números de tus ganchos, qué te costó, ideas…">${(state.notes[id] || '').replace(/</g, '&lt;')}</textarea>
    </section>

    <div class="lesson-actions">
      <a class="btn btn-ghost" href="${yt}" target="_blank" rel="noopener">▶ Ver vídeos de esto en YouTube</a>
      <button class="btn btn-big ${isDone(id) ? 'is-done' : ''}" id="done-btn">${isDone(id) ? '✓ ¡Conseguido!' : '¡Lo he conseguido!'}</button>
    </div>

    <nav class="pager">
      ${prev ? `<a href="#/leccion/${prev}">← ${LESSONS[prev].title}</a>` : '<span></span>'}
      ${next ? `<a href="#/leccion/${next}">${LESSONS[next].title} →</a>` : '<a href="#/">Volver al inicio</a>'}
    </nav>
  </article>`;
}

function counter() {
  const c = state.counters;
  const box = (k, label) => `
    <div class="counter" data-k="${k}">
      <p class="counter-label">${label}</p>
      <p class="counter-num" id="n-${k}">${c[k]}</p>
      <div class="counter-btns">
        <button class="btn btn-round" data-op="-1" aria-label="Restar ${label}">−</button>
        <button class="btn btn-round btn-plus" data-op="1" aria-label="Sumar ${label}">+</button>
      </div>
      <button class="link" data-op="0">Poner a 0</button>
    </div>`;
  return `
  <section class="page">
    <h1>Contador</h1>
    <p class="lead">Para no perderte nunca más. Se guarda solo, aunque cierres la página.</p>
    <div class="counters">${box('vueltas', 'Fila / vuelta')}${box('puntos', 'Puntos')}</div>
    <div class="tips"><aside class="tip tip-shrek"><div class="tip-face">${ogre(56)}</div><div><b>Shrek dice</b><p>Pulsa + al terminar cada fila, no al empezar. Si no, te lías. Lo sé porque me lié.</p></div></aside></div>
  </section>`;
}

function glossary() {
  return `
  <section class="page">
    <h1>Glosario</h1>
    <p class="lead">Las abreviaturas que verás en patrones y vídeos. Muchos tutoriales están en inglés, así que aquí tienes la traducción.</p>
    <div class="warn"><b>¡Ojo!</b> En inglés de EE. UU. y de Reino Unido los nombres no coinciden: el <i>double crochet</i> americano es nuestro punto alto, pero el británico es nuestro punto bajo. Si un vídeo dice “dc”, comprueba de dónde es.</div>
    <div class="table-wrap">
      <table class="gloss">
        <thead><tr><th>Abrev.</th><th>Español</th><th>Inglés EE. UU.</th><th>Inglés R. U.</th></tr></thead>
        <tbody>${GLOSSARY.map(([a, es, us, uk]) => `<tr><td><b>${a}</b></td><td>${es}</td><td>${us}</td><td>${uk}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <h2>Símbolos de los esquemas</h2>
    <figure class="fig fig-wide">${FIG.symbols(['cad', 'pr', 'pb', 'mpa'])}</figure>
    <figure class="fig fig-wide">${FIG.symbols(['pa', 'aum', 'dism', 'am'])}</figure>
    <h2>Palabras</h2>
    <dl class="words">${WORDS.map(([w, d]) => `<div><dt>${w}</dt><dd>${d}</dd></div>`).join('')}</dl>
  </section>`;
}

function notFound() {
  return `<section class="page"><h1>¿Dónde estoy?</h1><p>Esta página no existe. <a href="#/">Vuelve al inicio</a>.</p></section>`;
}

// ---------- Confeti de lazos y cebollas ----------
function celebrate() {
  const layer = document.createElement('div');
  layer.className = 'confetti';
  const pieces = ['🎀', '💗', '🧅', '💚', '🧶', '⭐'];
  for (let k = 0; k < 36; k++) {
    const s = document.createElement('span');
    s.textContent = pieces[k % pieces.length];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDelay = Math.random() * 0.6 + 's';
    s.style.fontSize = 18 + Math.random() * 18 + 'px';
    layer.appendChild(s);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 3200);
}

// ---------- Router ----------
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  let html;
  if (!parts[0]) html = home();
  else if (parts[0] === 'leccion') html = lesson(parts[1]);
  else if (parts[0] === 'contador') html = counter();
  else if (parts[0] === 'glosario') html = glossary();
  else html = notFound();
  app.innerHTML = html;
  document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#/' + (parts[0] || '')));
  window.scrollTo(0, 0);
  bind(parts);
}

function bind(parts) {
  if (parts[0] === 'leccion' && LESSONS[parts[1]]) {
    const id = parts[1];
    $('#done-btn').addEventListener('click', (e) => {
      if (isDone(id)) state.done = state.done.filter((x) => x !== id);
      else { state.done.push(id); celebrate(); }
      save();
      e.currentTarget.classList.toggle('is-done', isDone(id));
      e.currentTarget.textContent = isDone(id) ? '✓ ¡Conseguido!' : '¡Lo he conseguido!';
    });
    $('#notes').addEventListener('input', (e) => { state.notes[id] = e.target.value; save(); });
  }
  if (parts[0] === 'contador') {
    document.querySelectorAll('.counter').forEach((box) => {
      const k = box.dataset.k;
      box.addEventListener('click', (e) => {
        const op = e.target.closest('[data-op]')?.dataset.op;
        if (op === undefined) return;
        state.counters[k] = op === '0' ? 0 : Math.max(0, state.counters[k] + Number(op));
        save();
        const n = $('#n-' + k);
        n.textContent = state.counters[k];
        n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump');
      });
    });
  }
}

// ?tema=shrek o ?tema=kitty en la URL fuerza el tema
const forced = new URLSearchParams(location.search).get('tema');
if (forced === 'shrek' || forced === 'kitty') { state.theme = forced; save(); }
applyTheme();
window.addEventListener('hashchange', route);
route();
