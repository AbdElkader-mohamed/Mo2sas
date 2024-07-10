$(document).ready(function() {
// handel custom sliders  
  $slide = $('.sliders .slider').slick({
  slidesToShow: 1,
  arrows:false,
  dots:true,
  draggable: false,
  rtl:true,
  });
  $('.slider').click(function() {
  $slide.slick('slickGoTo', parseInt($slide.slick('slickCurrentSlide'))+1);
  setPrevImg();
  setNextImg ();
  });

setPrevImg();
setNextImg ();
  function setPrevImg () {
  $prev_slick_img = $('.slider2 .slick-current').prev('.slick-slide ').find('img').attr('src');
  $('.slider1 .slick-current img').attr('src', $prev_slick_img);
  $('slider1 .prev-slick-img').css('background-image', 'url(' + $prev_slick_img+ ')')
  }
  function setNextImg () {
  $next_slick_img = $('.slider2 .slick-current').next('.slick-slide ').find('img').attr('src');
  $('.slider3 .slick-current img').attr('src', $next_slick_img);
  $('slider3 .prev-slick-img').css('background-image', 'url(' + $next_slick_img+ ')')
  }

// handel open video
  $('.play-btn').click(function(){
  $(this).prev().remove();
  $(this).remove();
  document.querySelector(".video__container video").play();
  });

// handel testimonial-slider
	new Swiper('.testimonial-slider', {
		loop:true, 
		autoplay: {
			delay: 7000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
})