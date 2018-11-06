let doc = document,
    win = window,
    html = doc.documentElement,
    body = doc.body;

html.className = html.className.replace('no-script', 'script');

win.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('i-expand')) { target.parentNode.classList.toggle('open'); }
});

if (win.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

let ranges = doc.querySelectorAll('[type="range"]');
ranges.forEach(function(range) {
  range.parentNode.style.fontSize = range.getAttribute('data-base') + 'px';
  range.addEventListener('change', function(e) {
    let el = e.target,
        parent = el.parentNode;
        parent.style.fontSize = (Number(el.getAttribute('data-base')) + Number(el.getAttribute('data-step')) * el.value) + 'px';
  });
});