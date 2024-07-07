$(document).ready(function () {
   header();
   jQuery(window).scroll(function() {
       header();
   });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
    $(document).on("click", ".menu-top3", function () {
        $(".menu-top1").toggleClass("open");
    });
    $(document).on("click", ".menu-bottom3", function () {
        $(".menu-top1").removeClass("open");
    });
});
function header() {
   // Scroll article
   jQuery(window).scroll(function(event) {
       var scroll = jQuery(window).scrollTop();
       if (scroll > 100) {
           jQuery('.header').addClass('white');
       } else {
           jQuery('.header').removeClass('white');
       }
   });
}