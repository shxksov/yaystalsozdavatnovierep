// Мобильное меню: открытие по бургеру, закрытие по крестику и Esc
(function () {
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.nav');
  var close = document.querySelector('.nav__close');

  if (!burger || !nav || !close) return;

  function setOpened(opened) {
    nav.classList.toggle('nav_opened', opened);
    burger.setAttribute('aria-expanded', String(opened));
  }

  burger.addEventListener('click', function () { setOpened(true); });
  close.addEventListener('click', function () { setOpened(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpened(false);
  });
})();
