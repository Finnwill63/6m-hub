// 6M Compass — render + interaction logic

function buildTabbar(){
  const bar = document.getElementById('tabbar-inner');
  bar.innerHTML = ORDER.map((key, i) => {
    return '<button class="tab-btn' + (i===0 ? ' active' : '') + '" data-tab="' + key + '">' + SIXM[key].label + '</button>';
  }).join('');
}

function renderPanel(key){
  const m = SIXM[key];

  const toolsHtml = m.tools.map(function(item){
    return (
      '<li class="tool-item">' +
        '<span class="tn">' + item.n + '</span>' +
        '<div>' +
          '<div class="tt">' + item.t + '</div>' +
          '<div class="td">' + item.d + '</div>' +
          '<span class="tag">' + item.tag + '</span>' +
        '</div>' +
      '</li>'
    );
  }).join('');

  const casesHtml = m.cases.map(function(c){
    return (
      '<div class="case-card">' +
        '<div class="cwho">' + c.who + '</div>' +
        '<div class="cname">' + c.name + '</div>' +
        '<div class="cdesc">' + c.desc + '</div>' +
      '</div>'
    );
  }).join('');

  const resHtml = m.external.map(function(r){
    const inner =
      '<div class="res-main">' +
        '<div class="rt">' + r.t + '</div>' +
        '<div class="ra">' + r.a + '</div>' +
      '</div>' +
      '<span class="res-kind">' + r.k + '</span>';
    if (r.href && r.href !== '#'){
      return '<a class="res-item" href="' + r.href + '" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">' + inner + '</a>';
    }
    return '<div class="res-item">' + inner + '</div>';
  }).join('');

  return (
    '<div class="m-head">' +
      '<div class="eyebrow">6M Focus</div>' +
      '<h2>' + m.label + '</h2>' +
      '<div class="axis">' + m.axis + '</div>' +
    '</div>' +
    '<div class="vp-line">' + m.vp + '</div>' +
    '<section class="block">' +
      '<p class="take">' + m.take + '</p>' +
    '</section>' +
    '<section class="block">' +
      '<h3><span class="dot"></span>Sprint Toolkit</h3>' +
      '<ul class="tool-list">' + toolsHtml + '</ul>' +
    '</section>' +
    '<section class="block">' +
      '<h3><span class="dot"></span>Case Examples</h3>' +
      '<div class="case-grid">' + casesHtml + '</div>' +
    '</section>' +
    '<section class="block">' +
      '<h3><span class="dot"></span>External Resources</h3>' +
      '<div class="res-grid">' + resHtml + '</div>' +
    '</section>'
  );
}

function buildMain(){
  const main = document.getElementById('main');
  main.innerHTML = ORDER.map(function(key, i){
    return '<div class="panel' + (i===0 ? ' active' : '') + '" id="panel-' + key + '">' + renderPanel(key) + '</div>';
  }).join('');
}

function activateTab(key){
  document.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.tab === key);
  });
  document.querySelectorAll('.panel').forEach(function(p){
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  const target = document.querySelector('.tabbar');
  if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
}

document.addEventListener('DOMContentLoaded', function(){
  buildTabbar();
  buildMain();

  document.getElementById('tabbar-inner').addEventListener('click', function(e){
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    activateTab(btn.dataset.tab);
  });

  document.getElementById('orbit-nav').addEventListener('click', function(e){
    const node = e.target.closest('.orbit-node');
    if (!node) return;
    activateTab(node.dataset.tab);
  });
});
