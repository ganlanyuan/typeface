let doc = document,
    win = window,
    html = doc.documentElement,
    body = doc.body;

win.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('i-expand')) { target.parentNode.classList.toggle('open'); }
})