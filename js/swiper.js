const swiper = new Swiper('.testimionals-section__slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 0,

    breakpoints: {
      1200: {
        spaceBetween: 40,
        slidesOffsetBefore: 476,
      },
    },

    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

if (nav && burger) {
  const setMenuOpen = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  burger.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('.header__menu-first a, .header__menu-second a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setMenuOpen(false);
    }
  });
}