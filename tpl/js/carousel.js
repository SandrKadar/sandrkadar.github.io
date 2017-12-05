$(document).ready(function() {
   $("#owl-demo").owlCarousel( {
  items: 4,
  itemsDesktop : [1000,2], // 2 items between 1000px and 901px
  itemsDesktopSmall : [900,2], // betweem 900px and 601px
  itemsTablet: [700,1], // 2 items between 600 and 480
  itemsMobile : [479,1] , // 1 item between 479 and 0
  navigation: true,
  lazyLoad: true,
  pagination: false,
  scrollPerPage : true
});
  $(".owl-prev, .owl-next").html("");

  $("#owl").owlCarousel( {
  items: 4,
  itemsDesktop : [1000,2], // 2 items between 1000px and 901px
  itemsDesktopSmall : [900,2], // betweem 900px and 601px
  itemsTablet: [700,1], // 2 items between 600 and 480
  itemsMobile : [479,1] , // 1 item between 479 and 0
  navigation: true,
  lazyLoad: true,
  pagination: false,
  scrollPerPage : true

});
  $(".owl-prev, .owl-next").html("");
});

