(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
const j = '_section_okxtr_1',
  V = { section: j },
  G = '_form_1l8zy_1',
  K = { form: G };
function Z({ autocomplete: e, className: t, parent: n }) {
  const s = document.createElement('form');
  return (
    s.setAttribute('autocomplete', e),
    s.classList.add(K.form),
    t && s.classList.add(t),
    n && n.append(s),
    s
  );
}
const Y = '_label_tvp1f_1',
  Q = { label: Y };
function A({ forInput: e, text: t, className: n, parent: s }) {
  const o = document.createElement('label');
  return (
    o.setAttribute('for', e),
    (o.textContent = t),
    o.classList.add(Q.label),
    n && o.classList.add(n),
    s && s.append(o),
    o
  );
}
const X = '_input_rl4aw_1',
  ee = { input: X };
function C({
  type: e,
  id: t,
  className: n,
  title: s,
  required: o,
  placeholder: i,
  minLength: a,
  pattern: c,
  addRules: l,
  onInput: r,
  parent: f,
}) {
  const u = document.createElement('input');
  return (
    u.setAttribute('type', e),
    t && u.setAttribute('id', t),
    u.classList.add(ee.input),
    n && u.classList.add(n),
    s && u.setAttribute('title', s),
    o && u.setAttribute('required', ''),
    i && u.setAttribute('placeholder', i),
    a && u.setAttribute('minlength', a),
    c && u.setAttribute('pattern', c),
    l && u.setAttribute('aria-describedby', l),
    r && (u.oninput = r),
    f && f.append(u),
    u
  );
}
const te = '_button_e6zya_1',
  ne = { button: te };
function m({
  className: e,
  text: t,
  id: n,
  disabled: s,
  onClick: o,
  parent: i,
}) {
  const a = document.createElement('button');
  return (
    a.classList.add(ne.button),
    e && a.classList.add(e),
    t && (a.textContent = t),
    n && (a.id = n),
    s && a.setAttribute('disabled', ' '),
    o && (a.onclick = o),
    i && i.append(a),
    a
  );
}
const oe = '_span_1a59u_1',
  se = { span: oe };
function P({ id: e, className: t, text: n, parent: s }) {
  const o = document.createElement('span');
  return (
    e && o.setAttribute('id', e),
    o.classList.add(se.span),
    t && o.classList.add(t),
    n && (o.textContent = n),
    s && s.append(o),
    o
  );
}
function ie() {
  const e = document.querySelectorAll('.login-input'),
    t = document.querySelector('.login-btn');
  let n = 0;
  e.forEach((s) => {
    s.classList.value.includes('input-valid') && (n += 1);
  }),
    t &&
      (n === e.length
        ? (t.removeAttribute('disabled'),
          t.addEventListener('click', function (s) {
            s.preventDefault();
          }))
        : t.setAttribute('disabled', 'true'));
}
function B(e) {
  const t = document.querySelector(`#${e}`),
    n = document.querySelector(`#${e}-minlength`);
  if (t && n) {
    const s = t.value.length,
      o = t.validity.valid;
    s > 0 &&
      (o
        ? (t.classList.remove('input-invalid'),
          n.classList.remove('input-error'),
          t.classList.add('input-valid'))
        : (t.classList.remove('input-valid'),
          t.classList.add('input-invalid'),
          n.classList.add('input-error')),
      ie());
  }
}
const ae = '_div_ckpog_1',
  re = { div: ae };
function d({ className: e, id: t, text: n, parent: s }) {
  const o = document.createElement('div');
  return (
    o.classList.add(re.div),
    e && o.classList.add(e),
    t && (o.id = t),
    n && (o.textContent = n),
    s && s.append(o),
    o
  );
}
function p({ tag: e, className: t, id: n, text: s, parent: o }) {
  const i = document.createElement(`${e}`);
  return (
    t && i.classList.add(t),
    n && (i.id = n),
    s && (i.textContent = s),
    o && o.append(i),
    i
  );
}
function ce() {
  localStorage.removeItem('UserPuzzle'),
    localStorage.removeItem('UserPuzzleCompleteRounds'),
    localStorage.removeItem('UserPuzzleHintsState'),
    localStorage.removeItem('UserPuzzleLastRound'),
    I();
}
function le() {
  const e = p({ tag: 'header', className: 'header' }),
    t = p({ tag: 'h1', className: 'logo', text: 'English Puzzles' }),
    n = m({ className: 'logout-btn', text: 'Logout', onClick: () => ce() });
  return e.append(t, n), e;
}
function ue() {
  return p({ tag: 'main', className: 'main' });
}
function de({ href: e, className: t, id: n, text: s, target: o, parent: i }) {
  const a = document.createElement('a');
  return (
    (a.href = e),
    t && a.classList.add(t),
    n && (a.id = n),
    s && (a.textContent = s),
    o && a.setAttribute('target', o),
    i && i.append(a),
    a
  );
}
function fe() {
  const e = p({ tag: 'footer', className: 'footer' }),
    t = p({ tag: 'p', className: 'footer-text', text: '2024' }),
    n = de({
      href: 'https://github.com/Ihar-Batura',
      className: 'footer-link',
      text: 'Ihar Batura',
      target: '_blank',
    });
  return e.append(t, n), e;
}
function N() {
  const e = localStorage.getItem('UserPuzzle');
  if (e) return JSON.parse(e);
}
function me() {
  const e = document.querySelector('main');
  e && (e.innerHTML = '');
}
function _() {
  const e = localStorage.getItem('UserPuzzleHintsState');
  if (e) return JSON.parse(e);
}
function g({ audio: e = !0, text: t = !0, image: n = !0 }) {
  const s = { audio: e, text: t, image: n };
  localStorage.setItem('UserPuzzleHintsState', JSON.stringify(s));
}
function x(e) {
  const t = document.querySelector(`#${e}`),
    n = _();
  t &&
    n &&
    (t.classList.toggle('cliked'),
    e === 'translate-btn' &&
      n.text === !0 &&
      g({ audio: n.audio, text: !1, image: n.image }),
    e === 'translate-btn' &&
      n.text === !1 &&
      g({ audio: n.audio, text: !0, image: n.image }),
    e === 'audio-btn' &&
      n.audio === !0 &&
      g({ audio: !1, text: n.text, image: n.image }),
    e === 'audio-btn' &&
      n.audio === !1 &&
      g({ audio: !0, text: n.text, image: n.image }),
    e === 'image-btn' &&
      n.image === !0 &&
      g({ audio: n.audio, text: n.text, image: !1 }),
    e === 'image-btn' &&
      n.image === !1 &&
      g({ audio: n.audio, text: n.text, image: !0 }));
}
function E(e) {
  const t = document.querySelector('.text-hint');
  t &&
    (t.classList.toggle('hidden'),
    e === !0 && t.classList.remove('hidden'),
    e === !1 && t.classList.add('hidden'));
}
function ge() {
  E(), x('translate-btn');
}
function $(e) {
  const t = document.querySelector('#sound-btn'),
    n = document.querySelector('#translate-btn');
  t &&
    n &&
    (t.classList.toggle('hidden'),
    n.classList.toggle('add-position'),
    e === !0 &&
      (t.classList.remove('hidden'), n.classList.remove('add-position')),
    e === !1 && (t.classList.add('hidden'), n.classList.add('add-position')));
}
function pe() {
  $(), x('audio-btn');
}
function w({
  value: e,
  options: t,
  id: n,
  className: s,
  name: o,
  selected: i,
}) {
  let a = document.querySelector(`#${n}`);
  if (a) {
    if (((a.innerHTML = ''), t > 0))
      for (let c = 1; c <= t; c += 1) {
        const l = document.createElement('option');
        l.setAttribute('value', `${c}`),
          e && (l.innerText = `${e} ${c}`),
          i && c === +i && l.setAttribute('selected', ' '),
          a.append(l);
      }
  } else if (
    ((a = document.createElement('select')),
    s && a.classList.add(s),
    n && (a.id = n),
    o && a.setAttribute('name', o),
    t > 0)
  )
    for (let c = 1; c <= t; c += 1) {
      const l = document.createElement('option');
      l.setAttribute('value', `${c}`),
        e && (l.innerText = `${e} ${c}`),
        i && c === +i && l.setAttribute('selected', ' '),
        a.append(l);
    }
  return a;
}
function z() {
  const e = localStorage.getItem('UserPuzzleLastRound');
  if (e) return JSON.parse(e);
}
function h() {
  const e = document.querySelector('#level-btn');
  if (e) return e.value;
  {
    const t = z();
    return t ? `${t[0]}` : '1';
  }
}
function L() {
  const e = document.querySelector('#round-btn');
  if (e) return e.value;
  {
    const t = z();
    return t ? `${t[1]}` : '1';
  }
}
function he(e) {
  const t = document.querySelector('.game-board');
  if (t) {
    const n = d({ className: 'game-board__row', id: `row_${e}` });
    t.append(n);
  }
}
function be(e, t) {
  const n = document.getElementById('answer-row');
  if (n) {
    const s = n.offsetWidth,
      o = s > 768 ? e.imageSrc : e.cutSrc,
      i = n.childNodes.length;
    let a = 0,
      c = -40 * t;
    for (let l = 0; l < i; l += 1) {
      const r = document.getElementById(`${t}_${l}`);
      r &&
        ((r.style.backgroundImage = `url(Images/${o})`),
        (r.style.backgroundSize = `${s}px 400px`),
        (r.style.backgroundPosition = `left ${a}px top ${c}px`),
        (a -= r.offsetWidth));
    }
  }
}
function Se(e, t, n) {
  const s = document.getElementById('answer-row');
  if (s) {
    s.innerHTML = '';
    const o = s.offsetWidth,
      i = t[e].textExample.length,
      a = t[e].textExample.split(' '),
      c = o / (i - a.length - 1);
    for (let l = 0; l < a.length; l += 1) {
      const r = d({
          className: 'game-board__row-word',
          text: `${a[l]}`,
          id: `${e}_${l}`,
        }),
        f = c * a[l].length;
      (r.style.maxWidth = `${f}px`),
        a[l].length === 1 && (r.style.minWidth = '25px'),
        r.setAttribute('draggable', 'true'),
        s.append(r);
    }
  }
  be(n, e);
}
function ye(e, t) {
  const n = e[t].audioExample,
    s = document.querySelector('body'),
    o = document.querySelector('audio');
  if (s) {
    o && o.remove();
    const i = new Audio(n);
    s.append(i);
  }
}
function we(e, t) {
  const n = document.querySelector('.text-hint');
  n && ((n.innerText = ''), (n.innerText = e[t].textExampleTranslate));
}
function Le() {
  const e = document.getElementById('answer-row'),
    t = document.querySelectorAll('.game-words .game-board__row-word'),
    n = t.length,
    s = Math.floor(n / 2);
  if (e)
    for (let o = 0; o < s; o += 1)
      Math.random() > 0.5
        ? (e.insertBefore(t[o], t[o + 2]),
          e.insertBefore(t[o + 1], t[0]),
          e.insertBefore(t[o * 2], null))
        : (e.insertBefore(t[o], null),
          e.insertBefore(t[o + 1], t[o - 1]),
          e.insertBefore(t[o * 2], t[0]));
}
function b(e, t, n) {
  const s = document.querySelector(`.${e}`);
  s && (s.innerText = `${t}`);
}
function ve() {
  const e = document.querySelectorAll('.game-board__row'),
    t = e[e.length - 1].id;
  document.querySelectorAll(`#${t} .game-board__row-word`).forEach((s) => {
    s.removeAttribute('draggable'), s.classList.remove('image-hint-active');
  });
}
function k(e) {
  const t = document.querySelector('.solution-btn');
  t && (e ? t.setAttribute('disabled', 'true') : t.removeAttribute('disabled'));
}
function D() {
  const e = document.querySelectorAll('.game-board__row'),
    t = e[e.length - 1].id,
    n = document.querySelectorAll(`#${t} .game-board__row-word`);
  let s = !0;
  for (let o = 0; o < n.length; o += 1)
    +n[o].id.split('_')[1] !== o && (s = !1);
  s && (b('check-solution__btn', 'Continue'), ve(), k(!0), E(!0), $(!0));
}
function v() {
  const e = document.getElementById('answer-row'),
    t = document.querySelector('.check-solution__btn');
  e &&
    t &&
    (e.childNodes.length < 1
      ? (t.removeAttribute('disabled'), D())
      : t.setAttribute('disabled', 'true'));
}
function _e(e) {
  const t = document.getElementById('answer-row'),
    n = document.getElementById(`row_${e}`);
  document
    .querySelectorAll('.game-words .game-board__row-word')
    .forEach((r) => {
      r.addEventListener('dragstart', (f) => {
        i(f);
      }),
        r.addEventListener('click', function () {
          t &&
            n &&
            (r.parentElement === t && r.hasAttribute('draggable')
              ? n.append(r)
              : r.hasAttribute('draggable') && t.append(r)),
            v();
        });
    }),
    t &&
      n &&
      (t.addEventListener('dragover', (r) => {
        o(r);
      }),
      t.addEventListener('drop', (r) => {
        a(r);
      }),
      n.addEventListener('dragover', (r) => {
        o(r);
      }),
      n.addEventListener('drop', (r) => {
        a(r);
      }));
  function o(r) {
    r.preventDefault();
  }
  function i(r) {
    r.dataTransfer.setData('id', r.target.id), c();
  }
  function a(r) {
    let f = r.dataTransfer.getData('id');
    (r.target.id === 'answer-row' || r.target.id === `row_${e}`) &&
      (r.target.append(document.getElementById(f)), v()),
      l();
  }
  function c() {
    t &&
      n &&
      ((t.style.backgroundColor = 'rgba(186, 186, 235, 0.4)'),
      (n.style.backgroundColor = 'rgba(186, 186, 235, 0.4)'));
  }
  function l() {
    t &&
      n &&
      ((t.style.backgroundColor = 'transparent'),
      (n.style.backgroundColor = 'transparent'));
  }
}
function T(e) {
  const t = document.querySelector('#image-btn');
  if (t) {
    const n = document.querySelectorAll('.game-board__row'),
      s = n[n.length - 1].id,
      o = document.querySelectorAll(
        `#${s} .game-board__row-word, .game-words .game-board__row-word`
      );
    t.classList.value.includes('cliked') || e === !1
      ? o.forEach((i) => {
          i.classList.add('image-hint-active');
        })
      : o.forEach((i) => {
          i.classList.remove('image-hint-active');
        });
  }
}
function xe() {
  const e = _();
  e && (E(e.text), $(e.audio), T(e.image));
}
function H({ levelData: e, words: t }, n) {
  ye(t, n), we(t, n), he(n), Se(n, t, e), Le(), _e(n), v(), k(!1), xe();
}
function O() {
  const e = document.querySelector('.game-board');
  e && ((e.innerHTML = ''), (e.style.backgroundImage = ''));
}
function q(e, t) {
  if (e && t) {
    const n = t[0];
    let s = !1;
    if (
      (e.forEach((o) => {
        o.includes(n) && (s = !0);
      }),
      s === !1)
    ) {
      const o = [...e, t];
      localStorage.setItem('UserPuzzleResults', JSON.stringify(o));
    }
  } else {
    const n = [];
    localStorage.setItem('UserPuzzleResults', JSON.stringify(n));
  }
}
function U() {
  const e = localStorage.getItem('UserPuzzleCompleteRounds');
  return e ? JSON.parse(e) : [];
}
function Ee() {
  const e = h(),
    t = U(),
    n = document.querySelectorAll('#round-btn option');
  if (n.length > 0)
    for (let s = 0; s < n.length; s += 1)
      t[+e - 1].includes(s) && n[s].classList.add('complete');
}
async function y(e, t) {
  const n = `data/wordCollectionLevel${e}.json`,
    o = await (await fetch(n)).json(),
    i = o.rounds,
    a = o.roundsCount;
  w({ value: 'Level', options: 6, id: 'level-btn', selected: e }),
    w({ value: 'Round', options: a, id: 'round-btn', selected: t }),
    O(),
    q(),
    Ee(),
    H(i[+t - 1], 0);
}
function $e(e) {
  const t = z(),
    n = w({
      value: 'Level',
      options: 6,
      id: 'level-btn',
      className: 'select-levels',
      selected: `${t ? t[0] : '1'}`,
    }),
    s = w({
      value: 'Round',
      options: 1,
      id: 'round-btn',
      className: 'select-levels',
    });
  let o = h(),
    i = L();
  y(o, i),
    n.addEventListener('change', () => {
      (o = h()), (i = '1'), y(o, i);
    }),
    s.addEventListener('change', () => {
      (o = h()), (i = L()), y(o, i);
    }),
    e.append(n, s);
}
function ze() {
  x('image-btn'), T();
}
function ke() {
  const e = document.querySelector('audio'),
    t = document.querySelector('#sound-btn');
  e &&
    (e.play(),
    t &&
      (t.classList.add('shake'),
      e.addEventListener('ended', () => {
        t.classList.remove('shake');
      })));
}
function qe() {
  const e = d({ className: 'hints-container' }),
    t = _();
  $e(e);
  const n = m({ className: 'hint-btn', id: 'sound-btn', onClick: ke }),
    s = m({ className: 'hint-btn', id: 'translate-btn', onClick: ge }),
    o = m({ className: 'hint-btn', id: 'audio-btn', onClick: pe }),
    i = m({ className: 'hint-btn', id: 'image-btn', onClick: ze });
  return (
    t &&
      (t.text === !1 && s.classList.add('cliked'),
      t.audio === !1 && o.classList.add('cliked'),
      t.image === !1 && i.classList.add('cliked')),
    e.append(n, s, o, i),
    e
  );
}
function Re(e, t) {
  const n = document.querySelector('.game-board');
  n &&
    (window.innerWidth > 768
      ? (n.style.backgroundImage = `url(Images/${t})`)
      : (n.style.backgroundImage = `url(Images/${e})`));
}
function Ie({ author: e, cutSrc: t, imageSrc: n, name: s, year: o }) {
  const i = document.querySelector('.text-hint');
  i && (i.innerText = `${s} ${e} ${o}`),
    O(),
    Re(t, n),
    b('solution-btn', 'Results'),
    k(!1);
}
function Ae(e, t) {
  let n = [],
    s,
    o;
  return (
    +e == 1 && +t < 45 && ((s = '1'), (o = `${+t + 1}`)),
    +e == 1 && +t == 45 && ((s = '2'), (o = '1')),
    +e == 2 && +t < 41 && ((s = '2'), (o = `${+t + 1}`)),
    +e == 2 && +t == 41 && ((s = '3'), (o = '1')),
    +e == 3 && +t < 40 && ((s = '3'), (o = `${+t + 1}`)),
    +e == 3 && +t == 40 && ((s = '4'), (o = '1')),
    +e == 4 && +t < 29 && ((s = '4'), (o = `${+t + 1}`)),
    +e == 4 && +t == 29 && ((s = '5'), (o = '1')),
    +e == 5 && +t < 29 && ((s = '5'), (o = `${+t + 1}`)),
    +e == 5 && +t == 29 && ((s = '6'), (o = '1')),
    +e == 6 && +t < 25 && ((s = '6'), (o = `${+t + 1}`)),
    +e == 6 && +t == 25 && ((s = '1'), (o = '1')),
    s && o && (n.push(s), n.push(o)),
    n
  );
}
function F(e = '1', t = '1') {
  const n = [];
  n.push(e),
    n.push(t),
    localStorage.setItem('UserPuzzleLastRound', JSON.stringify(n));
}
function W(e, t) {
  if (e !== void 0 && t !== void 0) {
    const n = U();
    n[e].includes(t) ||
      (n[e].push(t),
      localStorage.setItem('UserPuzzleCompleteRounds', JSON.stringify(n)));
  } else {
    const n = [[], [], [], [], [], []];
    localStorage.setItem('UserPuzzleCompleteRounds', JSON.stringify(n));
  }
}
function Ce() {
  const e = h(),
    t = L(),
    n = document.querySelectorAll('.game-board .game-board__row').length;
  async function s(i, a, c) {
    const l = `data/wordCollectionLevel${i}.json`,
      u = (await (await fetch(l)).json()).rounds[+a - 1];
    c > 0 && c <= 9 && H(u, c),
      c > 9 &&
        (W(+i - 1, +a - 1),
        Ie({
          author: u.levelData.author,
          cutSrc: u.levelData.cutSrc,
          id: u.levelData.id,
          imageSrc: u.levelData.imageSrc,
          name: u.levelData.name,
          year: u.levelData.year,
        }));
  }
  const o = Ae(e, t);
  n === 0
    ? (y(o[0], o[1]),
      F(o[0], o[1]),
      b('solution-btn', 'Solution'),
      b('check-solution__btn', 'Check'))
    : (s(e, t, n), n <= 9 && b('check-solution__btn', 'Check'));
}
function Pe() {
  const e = document.querySelector('.page-result');
  e && e.remove();
}
function R() {
  const e = localStorage.getItem('UserPuzzleResults');
  return e ? JSON.parse(e) : [];
}
function M() {
  const e = document.querySelector('.check-solution__btn'),
    t = document.querySelector('.result-container');
  if (e) {
    if (e.innerText === 'Check') {
      let n = function () {
        i.forEach((a) => {
          a.classList.remove('valid'), a.classList.remove('invalid');
        });
      };
      const s = document.querySelectorAll('.game-board__row'),
        o = s[s.length - 1].id,
        i = document.querySelectorAll(`#${o} .game-board__row-word`);
      for (let a = 0; a < i.length; a += 1)
        +i[a].id.split('_')[1] === a
          ? i[a].classList.add('valid')
          : i[a].classList.add('invalid');
      setTimeout(n, 1500);
    }
    if (e.innerText === 'Continue') {
      Ce();
      const n = document.querySelectorAll('.game-board__row');
      if (n.length > 0) {
        const s = n[n.length - 1].id,
          o = R(),
          a = [+s.split('_')[1], !0];
        q(o, a);
      }
      t && Pe();
    }
  }
}
function Be() {
  const e = document.querySelectorAll('.game-board__row'),
    t = e[e.length - 1].id,
    n = document.getElementById(`${t}`),
    s = document.querySelectorAll('#answer-row .game-board__row-word');
  if (n) {
    s.length > 0 &&
      s.forEach((l) => {
        n.append(l);
      });
    const c = document.querySelectorAll(`#${t} .game-board__row-word`);
    for (let l = 0; l < c.length; l += 1)
      for (let r = 0; r < c.length; r += 1)
        +c[r].id.split('_')[1] === l && n.append(c[r]);
  }
  const o = R(),
    a = [+t.split('_')[1], !1];
  q(o, a);
}
function Ne(e) {
  const t = document.querySelector('audio');
  t && ((t.src = `${e}`), t.play());
}
function De() {
  const e = document.querySelectorAll('.result-item__btn');
  e.length > 0 &&
    e.forEach((t) => {
      t.addEventListener('click', function (n) {
        n && n.target && Ne(n.target.id);
      });
    });
}
async function Te(e, t) {
  const n = `data/wordCollectionLevel${e}.json`,
    i = (await (await fetch(n)).json()).rounds[+t - 1],
    a = R(),
    c = document.querySelector('.result-img');
  c && (c.style.backgroundImage = `url(Images/${i.levelData.cutSrc})`);
  const l = document.querySelector('.result-img__description');
  if (
    (l && (l.innerText = `${i.levelData.name} ${i.levelData.author}`),
    a.length > 0)
  ) {
    const r = document.querySelector('.result-know'),
      f = document.querySelector('.result-dontknow');
    if (r && f)
      for (let u = 0; u < a.length; u += 1) {
        const S = d({ className: 'result-item' });
        m({
          className: 'result-item__btn',
          id: `${i.words[u].audioExample}`,
          parent: S,
        }),
          d({
            className: 'result-item__text',
            text: `${i.words[u].textExample}`,
            parent: S,
          }),
          a[u][1] === !0 && r.append(S),
          a[u][1] === !1 && f.append(S);
      }
  }
  De();
}
function He() {
  const e = h(),
    t = L();
  Te(e, t);
}
function Oe() {
  const e = document.querySelector('.main');
  if (e) {
    const t = d({ className: 'page-result', parent: e }),
      n = d({ className: 'result-container', parent: t });
    d({ className: 'result-img', parent: n }),
      d({ className: 'result-img__description', text: '', parent: n }),
      d({ className: 'result-know', text: 'I know:', parent: n }),
      d({ className: 'result-dontknow', text: "I don't know:", parent: n }),
      m({
        className: 'check-solution__btn',
        text: 'Continue',
        onClick: () => M(),
        parent: n,
      }),
      He();
  }
}
function Ue() {
  const e = document.querySelector('.solution-btn');
  e &&
    (e.innerText === 'Solution' && (Be(), D(), v()),
    e.innerText === 'Results' && Oe());
}
function Fe() {
  const e = d({ className: 'btns-solution__container' }),
    t = m({ className: 'solution-btn', text: 'Solution', onClick: () => Ue() }),
    n = m({
      className: 'check-solution__btn',
      text: 'Check',
      disabled: !0,
      onClick: () => M(),
    });
  return e.append(t, n), e;
}
function We() {
  me();
  const e = document.querySelector('main');
  if (e) {
    const t = qe(),
      n = d({ className: 'text-hint', text: '' }),
      s = d({ className: 'game-board' }),
      o = d({ className: 'game-words', id: 'answer-row' }),
      i = Fe();
    e.append(t, n, s, o, i);
  }
}
function Me() {
  const e = document.querySelector('body');
  if (e) {
    const t = d({ className: 'wrapper' }),
      n = le(),
      s = ue(),
      o = N();
    if (o !== void 0) {
      const a = o.name,
        c = o.surname;
      p({
        tag: 'h3',
        text: `Hello, ${a} ${c}`,
        className: 'greetin-text',
        parent: s,
      });
    }
    p({
      tag: 'div',
      text: 'Learn English fun with English Puzzles! Here you will find interesting tasks of different difficulty levels. You need to assemble sentences from words and solve exciting puzzles. There are a lot of different tips)',
      className: 'rules-text',
      parent: s,
    }),
      m({ className: 'start-btn', text: 'Start', onClick: We, parent: s });
    const i = fe();
    t.append(n, s, i), e.append(t);
  }
}
function I() {
  const e = document.querySelector('body'),
    t = document.querySelector('.page-login');
  e && ((e.innerHTML = ''), t ? Me() : J('page-login', e));
}
function Je() {
  const e = document.querySelector('#name'),
    t = document.querySelector('#surname');
  if (e && t) {
    const n = { name: `${e.value}`, surname: `${t.value}` };
    localStorage.setItem('UserPuzzle', JSON.stringify(n)),
      W(),
      g({ audio: !0, text: !0, image: !0 }),
      F(),
      I();
  }
}
function je() {
  const e = Z({ autocomplete: 'off', className: 'page-login__form' });
  return (
    A({
      forInput: 'name',
      text: 'First Name',
      className: 'login-label',
      parent: e,
    }),
    C({
      type: 'text',
      id: 'name',
      className: 'login-input',
      title: 'Enter First Name (only latin letters and the hyphen (-) symbol)',
      required: ' ',
      minLength: '3',
      pattern: '[A-Z]{1}[a-z\\-]{2,25}',
      addRules: 'name-minlength',
      onInput: () => B('name'),
      parent: e,
    }),
    P({
      id: 'name-minlength',
      className: 'login-span',
      text: 'Minimum 3 characters, the first letter is in uppercase',
      parent: e,
    }),
    A({
      forInput: 'surname',
      text: 'Last Name',
      className: 'login-label',
      parent: e,
    }),
    C({
      type: 'text',
      id: 'surname',
      className: 'login-input',
      title: 'Enter Last Name (only latin letters and the hyphen (-) symbol)',
      required: ' ',
      minLength: '4',
      pattern: '[A-Z]{1}[a-z\\-]{3,25}',
      addRules: 'surname-minlength',
      onInput: () => B('surname'),
      parent: e,
    }),
    P({
      id: 'surname-minlength',
      className: 'login-span',
      text: 'Minimum 4 characters, the first letter is in uppercase',
      parent: e,
    }),
    m({
      className: 'login-btn',
      text: 'LogIn',
      disabled: !0,
      onClick: () => Je(),
      parent: e,
    }),
    e
  );
}
function J(e, t) {
  const n = document.createElement('section');
  n.classList.add(V.section), n.classList.add(e), t && t.append(n);
  const s = je();
  return n.appendChild(s), n;
}
const Ve = document.querySelector('body');
J('page-login', Ve);
document.addEventListener('DOMContentLoaded', function () {
  N() && I();
});
