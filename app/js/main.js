$(function () {

  // ! Product Tabs script
  $('.shops__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.shops__tabs-link').removeClass('shops__tabs-link--active');
    $(this).addClass('shops__tabs-link--active');

    $('.shops__tabs-map').removeClass('shops__tabs-map--active');
    $($(this).attr('href')).addClass('shops__tabs-map--active');
  })


  // ! Main slider
  $('.header__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
  });


  // ! Brands slider
  $('.slider').slick({
    arrows: true,
    dots: true,
    fade: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/right.svg" alt="next"></button>',

    responsive: [
      {
        breakpoint: 1171,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });


  // ! Button for adaptive menu
  $('.header__mobile').on('click', function () {
    $('.header__mobile,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });


  // ! Убрать меню при переходе по якорю
  $('.header__menu-link').on('click', function () {
    $('.header__menu, .header__mobile').removeClass('active');
    $('.header__menu-link').add('active');
    $('body').removeClass('lock');
  });

});