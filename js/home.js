new Swiper('.swiper_one', {
  direction: 'horizontal',
  autoHeight: true,
  loop:true, 
  autoplay: {
    delay: 7000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});