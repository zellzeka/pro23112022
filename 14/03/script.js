$(document).ready(function () {
  $(".responsive-carusel").slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
    ],
  });

  $("img").attr("style", "width: 95%;");
});
