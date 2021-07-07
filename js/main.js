const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__prev',
    prevEl: '.slider-button__next',
  },

  effect: 'coverflow',

  keyboard: {
    enabled: true

  }
});