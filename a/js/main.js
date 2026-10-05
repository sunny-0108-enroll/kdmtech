/* KDM TECH 메인 시안 — 인터랙션 */
(function () {
  // 1) 시공 사례
  var CASES = [
    { cat: '설치·시공', tag: 'Mechanical & Piping', short: '공정설비 기계설치·배관', title: '정유공장 공정설비 기계설치·압력배관 공사', img: 'img/case_mechanical.jpg',
      client: 'S-OIL', site: '울산 온산공장', period: '2024.03 – 2024.09', size: '기계설치 42기 · 배관 3.8km',
      desc: '운전 중인 공정 구역 내 신규 설비의 기계설치와 압력배관 공사를 HSE 기준에 따라 무재해로 완료했습니다.',
      scope: ['기계설치', '압력배관', '시운전 지원'] },
    { cat: '유지보수', tag: 'Tank Maintenance', short: '저장탱크 개방검사·보수', title: '석유화학 저장탱크 개방검사·보수 공사', img: 'img/case_tank_maintenance.jpg',
      client: 'SK이노베이션', site: '울산 CLX', period: '2025.04 – 2025.05', size: '저장탱크 6기 (최대 Ø32m)',
      desc: '정기보수(T/A) 기간 내 저장탱크 개방검사와 바닥판·측판 보수를 마쳐 재가동 일정을 지켰습니다.',
      scope: ['개방검사', '보수·개보수', 'T/A 대응'] },
    { cat: '설치·시공', tag: 'Steel Structure', short: '공정 구조물 철골 제작·설치', title: '플랜트 공정 구조물 철골 제작·설치', img: 'img/case_steel.jpg',
      client: '현대엔지니어링', site: '충남 대산', period: '2023.08 – 2024.01', size: '철골 1,250톤',
      desc: '공정 구조물 철골을 온산공장에서 자체 제작하고 현장 설치까지 일괄 수행했습니다.',
      scope: ['철골 제작', '도장', '현장 설치'] },
    { cat: '설치·시공', tag: 'Replacement', short: '노후 설비 철거·교체 인양', title: '노후 설비 철거 및 신규 기기 교체 인양 공사', img: 'img/case_replacement.jpg',
      client: 'HD현대오일뱅크', site: '충남 대산공장', period: '2024.10 – 2024.12', size: '교체 기기 8기 · 최대 180톤',
      desc: '노후 설비를 해체·철거하고 신규 기기를 대형 크레인으로 인양·설치했습니다.',
      scope: ['해체·철거', '중량물 인양', '안전관리'] },
    { cat: 'EPC', tag: 'Tank EPC', short: '저장탱크 설계·구매·시공', title: '저장탱크 EPC 일괄 수행', img: 'img/case_tank_epc.jpg',
      client: 'DL케미칼', site: '여수 산단', period: '2025.02 – 2025.12', size: '저장탱크 4기 · 15,000㎥',
      desc: '저장탱크 설계부터 자재 구매, 현장 제작·시공, 수압시험까지 통합 수행했습니다.',
      scope: ['설계', '구매', '현장 제작·시공'] }
  ];
  var FILTERS = ['전체', '설치·시공', '유지보수', 'EPC'];
  var state = { filter: '전체', sel: 0 };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shown() { return (state.filter === '전체' ? CASES : CASES.filter(function (c) { return c.cat === state.filter; })).slice(0, 5); }
  function renderFilters() {
    document.getElementById('case-filters').innerHTML = FILTERS.map(function (f) {
      return '<button type="button" role="tab" class="case-filter' + (f === state.filter ? ' on' : '') + '" aria-selected="' + (f === state.filter) + '" data-f="' + esc(f) + '">' + esc(f) + '</button>';
    }).join('');
  }
  function renderFeature() {
    var list = shown(); var f = list[Math.min(state.sel, list.length - 1)] || CASES[0];
    document.getElementById('case-feature').innerHTML =
      '<div style="flex:3 1 560px;height:340px;border-radius:14px;overflow:hidden;background:#1E2A3A"><img src="' + f.img + '" alt="' + esc(f.title) + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
      '<div style="flex:2 1 360px;min-width:0;background:#162130;border-radius:14px;padding:30px 32px;box-sizing:border-box;display:flex;flex-direction:column;gap:14px">' +
      '<span style="align-self:flex-start;padding:7px 14px;border-radius:999px;background:#24324A;color:#C9E89E;font-size:13px;font-weight:600">' + esc(f.cat) + ' · ' + esc(f.tag) + '</span>' +
      '<h3 style="margin:0;font-size:23px;line-height:1.35;font-weight:700;letter-spacing:-0.02em">' + esc(f.title) + '</h3>' +
      '<p style="margin:0;font-size:15px;line-height:1.65;color:#B7C2D0">' + esc(f.desc) + '</p>' +
      '<div style="display:grid;grid-template-columns:72px minmax(0,1fr);row-gap:8px;column-gap:12px;padding-top:14px;border-top:1px solid #2A3646;font-size:14px;line-height:1.5">' +
      '<span style="color:#8FA0B5">발주처</span><span style="font-weight:600">' + esc(f.client) + '</span>' +
      '<span style="color:#8FA0B5">현장</span><span>' + esc(f.site) + '</span>' +
      '<span style="color:#8FA0B5">수행 기간</span><span>' + esc(f.period) + '</span>' +
      '<span style="color:#8FA0B5">규모</span><span>' + esc(f.size) + '</span></div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px">' + f.scope.map(function (s) { return '<span style="padding:7px 13px;border-radius:999px;border:1px solid #33425A;font-size:13px;color:#D3DCE8">' + esc(s) + '</span>'; }).join('') + '</div>' +
      '<a href="#" style="margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:#FFFFFF">사례 자세히 보기 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div>';
  }
  function renderList() {
    var list = shown(); var si = Math.min(state.sel, list.length - 1);
    document.getElementById('case-list').innerHTML = list.map(function (c, i) {
      return '<button type="button" class="case-thumb' + (i === si ? ' on' : '') + '" data-i="' + i + '" aria-pressed="' + (i === si) + '">' +
        '<img src="' + c.img + '" alt="" style="height:92px;width:100%;border-radius:6px;object-fit:cover;display:block">' +
        '<span style="font-size:11px;font-weight:600;color:#8FA0B5">' + esc(c.cat) + ' · ' + esc(c.period) + '</span>' +
        '<span style="font-size:14px;font-weight:600;line-height:1.4;color:#FFFFFF;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%">' + esc(c.short) + '</span></button>';
    }).join('');
  }
  function update(anim) {
    var feat = document.getElementById('case-feature');
    if (anim) { feat.classList.add('fade'); setTimeout(function () { renderFeature(); feat.classList.remove('fade'); }, 180); } else renderFeature();
    renderFilters(); renderList();
  }
  document.getElementById('case-filters').addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]'); if (!b) return; state.filter = b.getAttribute('data-f'); state.sel = 0; update(true);
  });
  document.getElementById('case-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-i]'); if (!b) return; state.sel = +b.getAttribute('data-i'); update(true);
  });
  update(false);

  // 1-2) 히어로 마우스 패럴랙스
  var hero = document.getElementById('top'), pars = document.querySelectorAll('.hero-par'), par = pars.length ? pars : null;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (hero && par && !reduce && window.matchMedia('(pointer: fine)').matches) {
    var raf = 0;
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () { pars.forEach(function (el) { el.style.setProperty('--px', (-dx * 18).toFixed(1) + 'px'); el.style.setProperty('--py', (-dy * 12).toFixed(1) + 'px'); }); });
    });
    hero.addEventListener('mouseleave', function () { pars.forEach(function (el) { el.style.setProperty('--px', '0px'); el.style.setProperty('--py', '0px'); }); });
  }

  // 1-3) 푸터 위에서 문의하기 버튼 색 반전
  var fcta = document.querySelector('.float-cta'), foot = document.getElementById('site-footer');
  if (fcta && foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      var r = es[0].boundingClientRect;
      fcta.classList.toggle('on-footer', es[0].isIntersecting && r.top < window.innerHeight - 56);
    }, { threshold: [0, 0.05, 0.1, 0.2, 0.4, 0.6, 1] }).observe(foot);
  }

  // 1-4) 모바일 사업영역 탭 + 스와이프 캐러셀
  var bTrack = document.querySelector('.biz-track'), bTabs = document.querySelectorAll('.biz-tab'), bDots = document.querySelectorAll('.biz-dots span');
  if (bTrack && bTabs.length) {
    var bCards = bTrack.querySelectorAll('.bizcard');
    var setTab = function (n) {
      bTabs.forEach(function (t, i) { t.classList.toggle('on', i === n); t.classList.toggle('off', i !== n); t.setAttribute('aria-selected', i === n); });
      bDots.forEach(function (d, i) { d.classList.toggle('on', i === n); });
      var tb = bTabs[n]; if (tb && tb.parentNode.scrollWidth > tb.parentNode.clientWidth) tb.parentNode.scrollTo({ left: tb.offsetLeft - 20, behavior: 'smooth' });
    };
    bTabs.forEach(function (t, i) { t.addEventListener('click', function () { bTrack.scrollTo({ left: bCards[i].offsetLeft - bTrack.offsetLeft - 20, behavior: 'smooth' }); setTab(i); }); });
    var bRaf = 0;
    bTrack.addEventListener('scroll', function () {
      cancelAnimationFrame(bRaf);
      bRaf = requestAnimationFrame(function () {
        var x = bTrack.scrollLeft, best = 0, bd = 1e9;
        bCards.forEach(function (c, i) { var d = Math.abs(c.offsetLeft - bTrack.offsetLeft - 20 - x); if (d < bd) { bd = d; best = i; } });
        setTab(best);
      });
    }, { passive: true });
    setTab(0);
  }

  // 2) 모바일 메뉴
  var btn = document.getElementById('menu-btn'), nav = document.getElementById('mnav');
  if (btn && nav) {
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); document.body.style.overflow = ''; } });
  }

  // 3) 스크롤 등장 효과
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });
})();
