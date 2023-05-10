var navToggle = function () {
  var nav = document.getElementById('main-nav');

  var reducer = 100;
  if (window.innerWidth < 768) {
    reducer = 30
  }
  if (window.scrollY > reducer) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.onload = function () {
  window.addEventListener('wheel', navToggle);
};

