$(document).ready(function() {
  $(window).scroll(function() {
    let distanceFromTopOfDocToScroll = $(window).scrollTop(),
      distanceFromTopToAside = $("aside").position().top,
      distanceAsideToScroll =
        distanceFromTopOfDocToScroll - distanceFromTopToAside;
    if (distanceAsideToScroll > 0) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });
});

// 516
