$(document).ready(function () {
   header();
   jQuery(window).scroll(function() {
       header();
   });
    // $(document).on("click", ".header_menu", function () {
    //    $(".menu").addClass("open");
    //    $('body').addClass('none_scroll');
    // });
    // $(document).on("click", ".close", function () {
    //     $(".menu").removeClass("open");
    //     $('body').removeClass('none_scroll');
    //  });
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