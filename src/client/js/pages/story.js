$(window).scroll(function () {
  if ($(document).scrollTop() > 170) {
    $(".logo-wrapper, .top-header").fadeOut();
  } else {
    $(".logo-wrapper, .top-header").fadeIn();
  }
});

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true,
  },
});

Splitting({ target: ".content-heading" });
