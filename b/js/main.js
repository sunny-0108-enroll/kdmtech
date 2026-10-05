/* KDM TECH 메인 B안 — 스토리텔링 · 스크롤 모션 */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ============ 1. 도트(하프톤) 모핑 히어로 ============ */
  var cv = document.getElementById('dots');
  var ctx = cv.getContext('2d');
  var S = 640, GAP = 9;                 // 설계 좌표계 640x640, 도트 간격
  var off = document.createElement('canvas'); off.width = off.height = S;
  var oc = off.getContext('2d', { willReadFrequently: true });

  function rr(c, x, y, w, h, r) { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); c.fill(); }
  var SHAPES = [
    { cap: 'EPC · ENGINEERING & CONSTRUCTION', draw: function (c) {           // 공장
      c.beginPath(); c.moveTo(90, 520); c.lineTo(90, 330); c.lineTo(190, 395); c.lineTo(190, 330); c.lineTo(290, 395); c.lineTo(290, 330);
      c.lineTo(390, 395); c.lineTo(390, 250); c.lineTo(550, 250); c.lineTo(550, 520); c.closePath(); c.fill();
      rr(c, 420, 110, 42, 150, 6); rr(c, 485, 150, 36, 110, 6); rr(c, 60, 520, 520, 26, 4);
      c.globalCompositeOperation = 'destination-out';
      for (var i = 0; i < 4; i++) rr(c, 120 + i * 100, 430, 50, 50, 4);
      rr(c, 430, 300, 80, 46, 4); c.globalCompositeOperation = 'source-over';
    } },
    { cap: 'PLANT · COLUMN & TOWER', draw: function (c) {      // 탑조류(컬럼)
      c.beginPath(); c.ellipse(320, 120, 62, 46, 0, Math.PI, 0); c.fill();
      rr(c, 258, 118, 124, 400, 4);
      c.beginPath(); c.moveTo(240, 560); c.lineTo(400, 560); c.lineTo(382, 512); c.lineTo(258, 512); c.closePath(); c.fill();
      [210, 330, 445].forEach(function (y) { rr(c, 205, y, 230, 13, 3); });
      rr(c, 400, 95, 14, 420, 4); rr(c, 400, 95, 70, 14, 4);
      c.globalCompositeOperation = 'destination-out';
      [260, 380].forEach(function (y) { c.beginPath(); c.arc(300, y, 14, 0, 7); c.fill(); });
      c.globalCompositeOperation = 'source-over';
    } },
    { cap: 'PLANT · HEAT EXCHANGER', draw: function (c) {      // 열교환기
      rr(c, 100, 250, 400, 160, 80); rr(c, 488, 232, 44, 196, 6); rr(c, 532, 262, 40, 136, 16);
      rr(c, 175, 196, 38, 60, 4); rr(c, 380, 196, 38, 60, 4); rr(c, 165, 186, 58, 16, 4); rr(c, 370, 186, 58, 16, 4);
      rr(c, 175, 405, 38, 50, 4);
      c.beginPath(); c.moveTo(150, 520); c.lineTo(270, 520); c.lineTo(250, 400); c.lineTo(170, 400); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(340, 520); c.lineTo(460, 520); c.lineTo(440, 400); c.lineTo(360, 400); c.closePath(); c.fill();
      rr(c, 110, 520, 400, 18, 4);
    } },
    { cap: 'MAINTENANCE · SPHERICAL TANK', draw: function (c) {        // 구형 탱크
      c.beginPath(); c.arc(320, 270, 178, 0, 7); c.fill();
      [170, 245, 395, 470].forEach(function (x) { rr(c, x - 8, 300, 16, 240, 3); });
      c.save(); c.lineWidth = 10; c.strokeStyle = '#000';
      c.beginPath(); c.moveTo(170, 520); c.lineTo(245, 420); c.lineTo(320, 520); c.lineTo(395, 420); c.lineTo(470, 520); c.stroke(); c.restore();
      rr(c, 300, 60, 40, 30, 4); rr(c, 120, 540, 400, 16, 4);
    } },
    { cap: 'MANUFACTURING AX · AI', draw: function (c) {             // AI 칩
      rr(c, 175, 175, 290, 290, 36);
      for (var i = 0; i < 5; i++) {
        var p = 205 + i * 56;
        rr(c, p, 120, 20, 55, 6); rr(c, p, 465, 20, 55, 6); rr(c, 120, p, 55, 20, 6); rr(c, 465, p, 55, 20, 6);
      }
      c.globalCompositeOperation = 'destination-out';
      c.font = '900 170px Pretendard, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('AI', 320, 330); c.globalCompositeOperation = 'source-over';
    } }
  ];

  // 각 모양을 도트 목표점으로 샘플링 (하프톤 음영: 오른쪽 아래로 갈수록 도트가 커짐)
  function sample(shape) {
    oc.setTransform(1, 0, 0, 1, 0, 0); oc.clearRect(0, 0, S, S); oc.fillStyle = '#000'; shape.draw(oc);
    var d = oc.getImageData(0, 0, S, S).data, pts = [];
    for (var y = GAP / 2; y < S; y += GAP) for (var x = GAP / 2; x < S; x += GAP) {
      if (d[((y | 0) * S + (x | 0)) * 4 + 3] > 128) {
        var shade = clamp(((x - 80) / 480) * 0.55 + ((y - 80) / 480) * 0.45, 0, 1);
        var hl = Math.exp(-(Math.pow(x - 250, 2) + Math.pow(y - 220, 2)) / 9000);   // 하이라이트
        pts.push({ x: x, y: y, r: clamp(1.1 + 3.6 * shade - 2.2 * hl, 0.7, 4.6) });
      }
    }
    return pts;
  }
  var TARGETS = SHAPES.map(sample);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { TARGETS[4] = sample(SHAPES[4]); });
  var N = Math.max.apply(null, TARGETS.map(function (t) { return t.length; }));
  var P = [];
  for (var i = 0; i < N; i++) P.push({ x: Math.random() * S, y: Math.random() * S, r: 0, tx: 0, ty: 0, tr: 0, a: 0, ta: 0, ph: Math.random() * 6.28, k: 0.05 + Math.random() * 0.07 });

  function setShape(n) {
    var t = TARGETS[n].slice();
    // 섞어서 도트가 이리저리 흩어졌다 모이는 느낌
    for (var i = t.length - 1; i > 0; i--) { var j = (Math.random() * (i + 1)) | 0, tmp = t[i]; t[i] = t[j]; t[j] = tmp; }
    P.forEach(function (p, i) {
      if (i < t.length) { p.tx = t[i].x; p.ty = t[i].y; p.tr = t[i].r; p.ta = 1; }
      else { var a = Math.random() * 6.28, rad = 260 + Math.random() * 80; p.tx = 320 + Math.cos(a) * rad; p.ty = 320 + Math.sin(a) * rad; p.tr = 0.8; p.ta = 0; }
    });
  }

  var dotColor = '#0E1621', W = 0, DPR = 1;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; cv.width = W * DPR; cv.height = W * DPR;
  }
  resize(); window.addEventListener('resize', resize);
  var t0 = performance.now();
  function frame(now) {
    var tt = (now - t0) / 1000, sc = (W / S) * DPR;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.setTransform(sc, 0, 0, sc, 0, 0); ctx.fillStyle = dotColor;
    for (var i = 0; i < P.length; i++) {
      var p = P[i];
      p.x += (p.tx - p.x) * p.k; p.y += (p.ty - p.y) * p.k; p.r += (p.tr - p.r) * 0.08; p.a += (p.ta - p.a) * 0.08;
      if (p.a < 0.02) continue;
      var wob = Math.sin(tt * 1.6 + p.ph) * 0.9;
      ctx.globalAlpha = p.a; ctx.beginPath(); ctx.arc(p.x, p.y + wob, p.r, 0, 6.283); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(frame);
  }

  /* ============ 스토리 문장 순환 (2.8초) ============ */
  var story = document.querySelector('.story'), lines = document.querySelectorAll('#storyLines li');
  var cap = document.getElementById('artCap'), bar = document.getElementById('storyBar');
  var scene = 0, STEP = 2800, sceneStart = performance.now();
  function go(n) {
    scene = n; sceneStart = performance.now();
    lines.forEach(function (li, i) { li.classList.toggle('on', i === n); });
    story.setAttribute('data-scene', n);
    dotColor = n === 4 ? '#E9F5FF' : (n === 3 ? '#0B2A55' : '#0E1621');
    cap.textContent = SHAPES[n].cap;
    setShape(n);
    document.getElementById('gnb').classList.toggle('dark', n === 4 && window.scrollY < 40);
  }
  go(0);
  if (reduce) { frame(performance.now()); P.forEach(function (p) { p.x = p.tx; p.y = p.ty; p.r = p.tr; p.a = p.ta; }); frame(performance.now()); }
  else {
    requestAnimationFrame(frame);
    (function tick() {
      var el = performance.now() - sceneStart;
      bar.style.width = (((scene + clamp(el / STEP, 0, 1)) / lines.length) * 100) + '%';
      if (el >= STEP) go((scene + 1) % lines.length);
      requestAnimationFrame(tick);
    })();
    lines.forEach(function (li, i) { li.style.cursor = 'pointer'; li.addEventListener('click', function () { go(i); }); });
  }

  /* ============ 2. 소식 카드 : 스크롤하면 화면 가득 확장 ============ */
  var nowSec = document.getElementById('now'), card = document.getElementById('nowCard');
  var slides = card.querySelectorAll('.now-slide'), ni = 0;
  var titles = ['품질경쟁력 우수기업', 'ISO 14001 갱신', '홈페이지 리뉴얼'];
  function showNow(n) {
    ni = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('on', i === ni); });
    document.getElementById('nowIdx').textContent = ni + 1;
    document.getElementById('nowPrev').textContent = titles[(ni + 2) % 3];
    document.getElementById('nowNext').textContent = titles[(ni + 1) % 3];
  }
  card.querySelector('.prev').addEventListener('click', function () { showNow(ni - 1); });
  card.querySelector('.next').addEventListener('click', function () { showNow(ni + 1); });
  if (!reduce) setInterval(function () { if (card.style.getPropertyValue('--p') > 0.95) showNow(ni + 1); }, 5000);

  /* ============ 3. 대형 타이포 + 패럴랙스 ============ */
  var blocks = document.querySelectorAll('.word-block');
  var gnb = document.getElementById('gnb');

  function onScroll() {
    var vh = window.innerHeight, sy = window.scrollY;
    gnb.classList.toggle('scrolled', sy > 10);
    if (sy > 40) gnb.classList.remove('dark'); else if (scene === 4) gnb.classList.add('dark');
    if (reduce) return;
    // now card
    var r = nowSec.getBoundingClientRect(), span = nowSec.offsetHeight - vh;
    var p = clamp((-r.top) / (span * 0.7), 0, 1);
    p = 1 - Math.pow(1 - p, 2);
    card.style.setProperty('--p', p.toFixed(4));
    document.querySelector('.now-label').style.opacity = (1 - p * 1.6).toFixed(3);
    // words
    blocks.forEach(function (b) {
      var br = b.getBoundingClientRect();
      var prog = clamp(1 - (br.top + br.height / 2) / (vh + br.height / 2), -1, 1); // -..+
      var side = b.getAttribute('data-side') === 'left' ? -1 : 1;
      b.style.setProperty('--wy', (-prog * (window.innerWidth < 980 ? 50 : 160)).toFixed(1));
      b.style.setProperty('--wx', (side * (1 - clamp(prog + 0.6, 0, 1)) * 8).toFixed(2));
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll); onScroll();

  // 등장 효과
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); } }); }, { threshold: 0.25 });
    blocks.forEach(function (b) { io.observe(b); });
    document.querySelectorAll('.word-cap, .quick-title, .acc, .partners-head, .pl-marquee').forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  } else blocks.forEach(function (b) { b.classList.add('in'); });

  /* ============ 4. 아코디언 패널 ============ */
  var panels = document.querySelectorAll('.acc-p');
  panels.forEach(function (pn) {
    function on() { panels.forEach(function (x) { x.classList.toggle('on', x === pn); }); }
    pn.addEventListener('mouseenter', on); pn.addEventListener('focus', on);
  });

  /* ============ 플로팅 바 : 푸터 위에서 흰색으로 ============ */
  var fbar = document.getElementById('fbar'), foot = document.getElementById('foot');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      var e = es[0]; fbar.classList.toggle('on-footer', e.isIntersecting && e.boundingClientRect.top < window.innerHeight - 90);
    }, { threshold: [0, 0.1, 0.2, 0.4, 0.6, 1] }).observe(foot);
  }
})();
