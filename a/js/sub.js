/* 서브화면 (주요실적) — 프로젝트 리스트 / 실적 상세 */
(function () {
  var D = window.KDM_CASES || [];
  var TYPES = ['열교환기', '압력용기', '컬럼·타워', '반응기', '탱크', '배관·시공', '가열로 코일'];
  var PER = 12;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function idNum(c) { var n = +c.id.split('-')[1] || 0; return c.id.indexOf('SE') === 0 ? n + 2000 : c.id.indexOf('CM') === 0 ? n + 3000 : n; }
  function nophoto(c) { return '<div class="noph"><span class="np-t">' + esc(c.typeEn || c.type) + '</span><b>' + esc(c.type) + '</b><span class="np-s">' + esc(c.dimension || c.period || '') + '</span><em>사진 준비 중</em></div>'; }
  function stage(c, sz) {   // 세로 사진: 원본 비율 그대로 '도면 스테이지' 위에 배치 (늘이거나 자르지 않음)
    return '<div class="stage stage-' + sz + '"><span class="st-side" aria-hidden="true">' + esc(c.itemEn) + '</span><span class="st-code" aria-hidden="true">' + esc(c.id) + '</span>' +
      '<figure class="st-photo" style="aspect-ratio:' + c.imgRatio + '"><img src="' + c.img + '" alt="' + esc(c.item) + '" loading="lazy"></figure>' +
      '<span class="st-spec" aria-hidden="true">' + esc(c.weight) + '<br>' + esc(c.dimension) + '</span></div>';
  }
  function photo(c, sz) {
    if (!c.img) return nophoto(c);
    if (c.imgOrientation === 'portrait') return stage(c, sz || 'sm');
    return '<img src="' + c.img + '" alt="' + esc(c.item) + '" loading="lazy">';
  }
  function card(c) {
    return '<a class="pcard" href="project.html?id=' + c.id + '">' +
      '<div class="pc-img photo-fx soft">' + photo(c) + '<span class="pc-badge">' + esc(c.type) + '</span></div>' +
      '<div class="pc-body"><h3>' + esc(c.item) + '</h3><span class="pc-client">' + [c.client, c.project].filter(Boolean).map(esc).join(' · ') + '</span>' +
      '<div class="pc-specs">' + [c.weight, c.material, c.scope === 'EPC' || c.scope === 'EP' ? c.scope : '', c.period].filter(Boolean).map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' +
      (c.sources && c.sources.indexOf('+') > -1 ? '<span class="pc-src">홈페이지 + 2026 PQ</span>' : '') + '</div></a>';
  }

  /* ---------- 프로젝트 리스트 ---------- */
  if (document.getElementById('list-page')) {
    var params = new URLSearchParams(location.search);
    var st = { type: TYPES.indexOf(params.get('type')) > -1 ? params.get('type') : '전체', q: '', sort: 'w-desc', view: 'grid', page: 1 };
    var stats = document.getElementById('stats'), chips = document.getElementById('chips');
    function countOf(t) { return t === '전체' ? D.length : D.filter(function (c) { return c.type === t; }).length; }
    function drawFilters() {
      stats.innerHTML = ['전체'].concat(TYPES).map(function (t) {
        return '<button type="button" class="stat' + (st.type === t ? ' on' : '') + '" data-t="' + t + '" aria-pressed="' + (st.type === t) + '"><b>' + countOf(t) + '<small>건</small></b><span>' + (t === '전체' ? '전체 실적' : t) + '</span></button>';
      }).join('');
      chips.innerHTML = ['전체'].concat(TYPES).map(function (t) {
        return '<button type="button" role="tab" class="chip' + (st.type === t ? ' on' : '') + '" data-t="' + t + '" aria-selected="' + (st.type === t) + '">' + t + '</button>';
      }).join('');
    }
    function filtered() {
      var q = st.q.trim().toLowerCase();
      var r = D.filter(function (c) {
        if (st.type !== '전체' && c.type !== st.type) return false;
        if (!q) return true;
        return [c.item, c.itemEn, c.client, c.clientEn, c.material, c.project, c.type, c.typeEn].join(' ').toLowerCase().indexOf(q) > -1;
      });
      r.sort(function (a, b) {
        if (st.sort === 'w-asc') return a.weightTon - b.weightTon;
        if (st.sort === 'id-desc') return idNum(b) - idNum(a);
        return b.weightTon - a.weightTon;
      });
      return r;
    }
    function draw() {
      var r = filtered(), pages = Math.max(1, Math.ceil(r.length / PER));
      if (st.page > pages) st.page = pages;
      document.getElementById('count').innerHTML = (st.type === '전체' ? '전체' : esc(st.type)) + ' <b>' + r.length + '</b>건' + (st.q ? ' · “' + esc(st.q) + '” 검색 결과' : '');
      var res = document.getElementById('results');
      if (!r.length) { res.innerHTML = '<p class="empty">검색 결과가 없습니다.</p>'; document.getElementById('pager').innerHTML = ''; return; }
      if (st.view === 'table') {
        res.innerHTML = '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>사진</th><th>품목</th><th>품목명</th><th>발주처</th><th>재질</th><th class="num">중량</th><th>치수</th></tr></thead><tbody>' +
          r.map(function (c) {
            return '<tr><td>' + (c.img ? '<img class="thumb" src="' + c.img + '" alt="">' : '<span class="thumb nothumb">-</span>') + '</td><td>' + esc(c.type) + '</td><td><a href="project.html?id=' + c.id + '">' + esc(c.item) + '</a></td><td>' + esc(c.client) + '</td><td>' + esc(c.material) + '</td><td class="num">' + esc(c.weight) + '</td><td>' + esc(c.dimension) + '</td></tr>';
          }).join('') + '</tbody></table></div>';
        document.getElementById('pager').innerHTML = '';
        return;
      }
      res.innerHTML = '<div class="grid">' + r.slice((st.page - 1) * PER, st.page * PER).map(card).join('') + '</div>';
      var pg = '<button type="button" data-p="' + (st.page - 1) + '"' + (st.page === 1 ? ' disabled' : '') + ' aria-label="이전 페이지">‹</button>';
      for (var i = 1; i <= pages; i++) pg += '<button type="button" data-p="' + i + '"' + (i === st.page ? ' class="on" aria-current="page"' : '') + '>' + i + '</button>';
      pg += '<button type="button" data-p="' + (st.page + 1) + '"' + (st.page === pages ? ' disabled' : '') + ' aria-label="다음 페이지">›</button>';
      document.getElementById('pager').innerHTML = pages > 1 ? pg : '';
    }
    function setType(t) { st.type = t; st.page = 1; drawFilters(); draw(); }
    stats.addEventListener('click', function (e) { var b = e.target.closest('[data-t]'); if (b) setType(b.getAttribute('data-t')); });
    chips.addEventListener('click', function (e) { var b = e.target.closest('[data-t]'); if (b) setType(b.getAttribute('data-t')); });
    document.getElementById('q').addEventListener('input', function (e) { st.q = e.target.value; st.page = 1; draw(); });
    document.getElementById('sort').addEventListener('change', function (e) { st.sort = e.target.value; draw(); });
    document.querySelector('.view').addEventListener('click', function (e) {
      var b = e.target.closest('[data-v]'); if (!b) return; st.view = b.getAttribute('data-v');
      document.querySelectorAll('.view button').forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); draw();
    });
    document.getElementById('pager').addEventListener('click', function (e) {
      var b = e.target.closest('[data-p]'); if (!b || b.disabled) return; st.page = +b.getAttribute('data-p'); draw();
      document.querySelector('.toolbar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    drawFilters(); draw();
  }

  /* ---------- 실적 상세 ---------- */
  if (document.getElementById('detail-page')) {
    var id = new URLSearchParams(location.search).get('id');
    var list = D.slice().sort(function (a, b) { return b.weightTon - a.weightTon; });
    var i = Math.max(0, list.findIndex(function (c) { return c.id === id; }));
    var c = list[i];
    document.title = c.item + ' | 주요실적 | 케이디엠텍';
    var cur = document.getElementById('crumb-cur'); if (cur) cur.textContent = c.item;
    function row(k, v, sub) { return '<dt>' + k + '</dt>' + (v ? '<dd>' + esc(v) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</dd>' : '<dd class="todo">입력 예정</dd>'); }
    var prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    document.getElementById('detail').innerHTML =
      '<div class="dt"><div><div class="dt-photo photo-fx">' + photo(c, 'lg') + '</div>' +
      '<div class="dt-thumbs">' + ((c.images && c.images.length) ? c.images : (c.img ? [c.img] : [])).map(function (s) { return '<button type="button" aria-label="사진 보기"><img src="' + s + '" alt=""></button>'; }).join('') +
      '<span class="add">사진 추가<br>등록 영역</span></div></div>' +
      '<div><span class="dt-badge">' + esc(c.division) + ' · ' + esc(c.type) + '</span><h1>' + esc(c.item) + '</h1><p class="dt-sub">' + esc(c.project) + ' · ' + esc(c.itemEn) + '</p>' +
      '<dl class="spec">' + row('발주처', c.client, c.clientEn) + row('품목', c.type, c.typeEn) + row('재질', c.material) + row('중량', c.weight) + row('치수', c.dimension) + row('수행 기간', c.period) + row('수행 범위', c.scope) + row('위치', c.location || c.site) + row('출처', c.sources) + '</dl>' +
      (c.note ? '<p class="dt-note"><b>확인 필요</b> ' + esc(c.note) + '</p>' : '') +
      (c.caseUrl ? '<a class="dt-case" href="' + c.caseUrl + '">산업별 사례에서 자세히 보기 →</a>' : '') + '</div></div>' +
      '<section class="dt-desc"><h2>프로젝트 개요</h2>' + (c.description ? '<p>' + esc(c.description) + '</p>' :
        '<div class="cms"><b>CMS 입력 영역 (description)</b><br>설계 조건, 제작 범위(설계·제작·검사·운송), 적용 코드(ASME 등), 납기 등을 2~4문장으로 입력합니다.<br>현재 홈페이지에는 해당 내용이 없어 비워 두었습니다.</div>') + '</section>' +
      '<nav class="pn" aria-label="이전·다음 실적"><a href="project.html?id=' + prev.id + '"><span>이전 실적</span><b>' + esc(prev.item) + '</b></a><a class="next" href="project.html?id=' + next.id + '"><span>다음 실적</span><b>' + esc(next.item) + '</b></a></nav>';
    var rel = D.filter(function (x) { return x.type === c.type && x.id !== c.id; }).sort(function (a, b) { return b.weightTon - a.weightTon; }).slice(0, 3);
    document.getElementById('related').innerHTML = rel.length ? '<h2>같은 품목의 다른 실적</h2><div class="grid">' + rel.map(card).join('') + '</div>' : '';
  }

  /* ---------- 공통: 2단계 메뉴(LNB) — 그룹명 표시 · 스크롤 고정 시 강조 ---------- */
  var lnb = document.querySelector('.lnb'), lin = lnb && lnb.querySelector('.lnb-in');
  if (lin && !lin.querySelector('.lnb-t')) {
    var g = document.querySelectorAll('.crumb a')[1];
    if (g) { var t = document.createElement('span'); t.className = 'lnb-t'; t.textContent = g.textContent; lin.insertBefore(t, lin.firstChild); }
  }
  if (lnb) {
    var stick = function () { var top = parseFloat(getComputedStyle(lnb).top) || 0; lnb.classList.toggle('stuck', lnb.getBoundingClientRect().top <= top + 0.5 && window.scrollY > 0); };
    window.addEventListener('scroll', stick, { passive: true }); window.addEventListener('resize', stick); stick();
  }

  /* ---------- 공통: 모바일 메뉴 · 문의 버튼 ---------- */
  var btn = document.getElementById('menu-btn'), nav = document.getElementById('mnav');
  if (btn && nav) {
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); document.body.style.overflow = ''; } });
  }
  var fcta = document.querySelector('.float-cta'), foot = document.getElementById('site-footer');
  if (fcta && foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      var r = es[0].boundingClientRect;
      fcta.classList.toggle('on-footer', es[0].isIntersecting && r.top < window.innerHeight - 56);
    }, { threshold: [0, 0.05, 0.1, 0.2, 0.4, 0.6, 1] }).observe(foot);
  }
})();
