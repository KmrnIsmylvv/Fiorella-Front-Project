$(document).ready(function () {
  //START NAVBAR

  $(document).on('click', '#search', function () {
    $(this).next().toggle();
  });

  $(document).on('click', '#mobile-navbar-close', function () {
    $(this).parent().removeClass('active');
  });
  $(document).on('click', '#mobile-navbar-show', function () {
    $('.mobile-navbar').addClass('active');
  });

  $(document).on('click', '.mobile-navbar ul li a', function () {
    if ($(this).children('i').hasClass('fa-caret-right')) {
      $(this)
        .children('i')
        .removeClass('fa-caret-right')
        .addClass('fa-sort-down');
    } else {
      $(this)
        .children('i')
        .removeClass('fa-sort-down')
        .addClass('fa-caret-right');
    }
    $(this).parent().next().slideToggle();
  });

  //END NAVBAR



  
// START SLIDE
$(function() {
  $(".Slide").vegas({
      slides: [
          { src: '../IMG/h3-slider-background.jpg' },
          { src: '../IMG/h3-slider-background-2.jpg' },
          { src: '../IMG/h3-slider-background-3.jpg' }
      ],
      animation: 'kenburnsDownLeft'
  });
});
// END SLIDE

// START BOTTOM SLIDE
$(document).ready(function(){
  $(".bottom-slider").owlCarousel(
      {
          items: 1,
          loop: true,
          autoplay: true
      }
  );
});
// END BOTTOM SLIDE

  // START ACCORDION

  $('.accordion-button').mouseenter(function () {
    $('.minus').removeClass('d-none');
    $('.plus').addClass('d-none');
  });

  $('.accordion-button').mouseleave(function () {
    $('.minus').addClass('d-none');
    $('.plus').removeClass('d-none');
  });

  $('.accordion').accordion();

  // END ACCORDION

  $('.card').hover(function () {
    $('.row .inner').removeClass('d-none');
  });








});
