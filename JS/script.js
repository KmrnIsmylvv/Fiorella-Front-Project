// START AMARALLYS
let product_menus = document.querySelectorAll('#tab_menu .menus .menu');
let product_contents = document.querySelectorAll(
  '#tab_menu .contents .content'
);

for (let menu of product_menus) {
  menu.addEventListener('click', function () {
    document
      .querySelector('#tab_menu .menus .selected')
      .classList.remove('selected');
    this.classList.add('selected');
    let data_id = this.getAttribute('data-id');
    for (let content of product_contents) {
      if (data_id == content.getAttribute('data-id')) {
        content.classList.remove('d-none');
      } else {
        content.classList.add('d-none');
      }
    }
  });
}
// END AMARLLYS


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

  // START FILTER
  $(document).on('click', '.categories', function(e)
  {
      e.preventDefault();
      $(this).next().next().slideToggle();
  })

  $(document).on('click', '.category li a', function (e) {
      e.preventDefault();
      let category = $(this).attr('data-id');
      let products_filter = $('.product-items');
      
      products_filter.each(function () {
          if(category == $(this).attr('data-id'))
          {
              $(this).parent().fadeIn();
          }
          else
          {
              $(this).parent().hide();
          }
      })
      if(category == 'all')
      {
          products_filter.parent().fadeIn();
      }
  })
  // END FILTER

  // START SLIDE
  $(function () {
    $('.Slide').vegas({
      slides: [
        { src: '../IMG/h3-slider-background.jpg' },
        { src: '../IMG/h3-slider-background-2.jpg' },
        { src: '../IMG/h3-slider-background-3.jpg' },
      ],
      animation: 'kenburnsDownLeft',
    });
  });
  // END SLIDE

  // START BOTTOM SLIDE
  $(document).ready(function () {
    $('.bottom-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
    });
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

