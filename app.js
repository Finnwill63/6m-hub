// 6M Compass — render + interaction logic, v2
// Each module now renders a 6-level question selector (mirroring CommonWeal's
// public diagnostic tool) with resources attached to the active level.

let activeModule = ORDER[0];
let activeLevel = 1;

function buildTabbar(){
  const bar = document.getElementById('tabbar-inner');
  bar.innerHTML = ORDER.map(function(key, i){
    return '<button class="tab-btn' + (i===0 ? ' active' : '') + '" data-tab="' + key + '">' + SIXM[key].label + '</button>';
  }).join('');
}

function renderResources(list){
  return list.map(function(r){
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
}

function renderPanel(key){
  const m = SIXM[key];

  const levelPills = m.questions.map(function(item){
    return '<button class="level-pill' + (item.level===1 ? ' active' : '') + '" data-level="' + item.level + '">' + item.level + '</button>';
  }).join('');

  const questionBlocks = m.questions.map(function(item){
    return (
      '<div class="q-block' + (item.level===1 ? ' active' : '') + '" data-level="' + item.level + '">' +
        '<div class="q-tag">' + m.label + ': Level ' + item.level + '</div>' +
        '<h3 class="q-text">' + item.q + '</h3>' +
        '<div class="q-sub">' + item.sub + '</div>' +
        '<div class="q-resources">' + renderResources(item.resources) + '</div>' +
      '</div>'
    );
  }).join('');

  return (
    '<div class="m-head">' +
      '<div class="eyebrow">6M Focus</div>' +
      '<h2>' + m.label + '</h2>' +
      '<div class="axis">' + m.axis + '</div>' +
    '</div>' +
    '<div class="vp-line">' + m.vp + '</div>' +
    '<p class="take">' + m.take + '</p>' +
    '<div class="level-select">' +
      '<div class="level-select-label">Select Level (1 = Broad, 6 = Focused)</div>' +
      '<div class="level-pills">' + levelPills + '</div>' +
    '</div>' +
    '<div class="q-wrap">' + questionBlocks + '</div>'
  );
}

function buildMain(){
  const main = document.getElementById('main');
  main.innerHTML = ORDER.map(function(key, i){
    return '<div class="panel' + (i===0 ? ' active' : '') + '" id="panel-' + key + '">' + renderPanel(key) + '</div>';
  }).join('');
}

function activateTab(key){
  activeModule = key;
  activeLevel = 1;
  document.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.tab === key);
  });
  document.querySelectorAll('.panel').forEach(function(p){
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  const panel = document.getElementById('panel-' + key);
  if (panel){
    panel.querySelectorAll('.level-pill').forEach(function(p){
      p.classList.toggle('active', p.dataset.level === '1');
    });
    panel.querySelectorAll('.q-block').forEach(function(q){
      q.classList.toggle('active', q.dataset.level === '1');
    });
  }
  const target = document.querySelector('.tabbar');
  if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
}

function activateLevel(panelEl, level){
  panelEl.querySelectorAll('.level-pill').forEach(function(p){
    p.classList.toggle('active', p.dataset.level === String(level));
  });
  panelEl.querySelectorAll('.q-block').forEach(function(q){
    q.classList.toggle('active', q.dataset.level === String(level));
  });
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

  document.getElementById('main').addEventListener('click', function(e){
    const pill = e.target.closest('.level-pill');
    if (!pill) return;
    const panel = pill.closest('.panel');
    activateLevel(panel, pill.dataset.level);
  });
});
