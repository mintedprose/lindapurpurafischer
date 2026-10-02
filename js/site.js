// Phone menu: the Menu button opens and closes the list of pages
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.nav__toggle');
  if (!nav || !btn) return;
  var label = btn.querySelector('.nav__label');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? 'Close' : 'Menu';
  });
});
