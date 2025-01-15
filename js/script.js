$(document).ready(function () {
  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".scroll").smoothScroll({
    speed: 1000,
  });

  $(".slider-for4").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav4",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav4").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for4",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    initialSlide: 1, // Синхронизация со вторым слайдом
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-for3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav3",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap2 .slider-navigation .slick-next"),
  });
  $(".slider-nav3").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for3",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  AOS.init();
});
