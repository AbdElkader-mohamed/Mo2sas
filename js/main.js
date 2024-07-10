$(document).ready(function() {
// handel loader
	setTimeout(function() {
		$('#preloader').addClass('hide');
	}, 3000);

// handel scroll to top 
  $(window).scroll(function() {
    if($(this).scrollTop() >= 500) {
      $('.totop').addClass("show");
    }else {
    $('.totop').removeClass("show");
  }
  })
  $('.totop').click(function() {
    $('html,body').animate({scrollTop:0});
  })

  // handel wow js 
  // new WOW().init();
})




window.onload = () => {

  setTimeout(() => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.querySelector("#preloader");
    s1.async=true;
    s1.src='https://embed.tawk.to/65355dedf2439e1631e71504/1hdc7dqaa';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
  },1690)
}