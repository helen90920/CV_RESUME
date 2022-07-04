$(document).ready(function () {
  //header color change

  $(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header");
    if (scrollDistance > 80) {
      $header.addClass("header--colored");
    } else {
      $header.removeClass("header--colored");
    }
  });

  // wow 
  if(screen.width >768){
  new WOW().init();
}
  // fancybox options
  $('[data-fancybox]').fancybox({
    loop:true

  });

  if(screen.width >768){
    $(window).stellar();
  }

})
