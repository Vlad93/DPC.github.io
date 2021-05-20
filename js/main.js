//   Parallax 

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});

(function ($)
  { "use strict" 

  // Sticky header
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".menu-wrap").removeClass("sticky-bar");          
      } else {
        $(".menu-wrap").addClass("sticky-bar");          
      }
    });

   // animation
  $( document ).ready(function() {
      $('.investments-example').hover( function () {
          $('.investment-term').toggleClass('show');
      })   
    });

  let target = $('.bg-rain1');
  let targetPos = target.offset().top;
  let winHeight = $(window).height();
  let scrollToElem = targetPos - winHeight;

  $(window).scroll(function(){
    let winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
    $(target).addClass("drop");

    } else {
      $(target).removeClass("drop");
    }
  });

  let target2 = $('.info-bg');
  let targetPos2 = target2.offset().top;  
  let scrollToElem2 = targetPos2 - winHeight;

  $(window).scroll(function(){
    let winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem2){
    $(target2).addClass("drop2");

    } else {
      $(target2).removeClass("drop2");
    }
  });

  // HAMB
  $( document ).ready(function() {
    $('.mobile-menu').on('click', function (e) {
      e.preventDefault();
      $('.menu').fadeToggle();
    })
  })  
})(jQuery);
