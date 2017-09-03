;(function ($) {
    "use strict";

    // $(function () {
    //     $('.main-top-product-slider').slick({
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         dots: true,
    //         autoplay: true,
    //         autoplaySpeed: 2000,
    //         responsive: [
    //
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     arrows: false
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     dots: false,
    //                     arrows: true
    //                 }
    //             }
    //         ]
    //     });
    // });
    $(document).ready(function () {
        $(document).on("click",".main-middle__switcher-sizeBtn--item", function (e) {
                $(".main-middle__switcher-sizeBtn--item").removeClass("active");
                $(e.currentTarget).addClass('active');
        });
    });


    $(function (){

            $('.ing-slider2').slick({
                slidesToShow: 1,
                slidesToScrool: 1,
                infinite: true,
                centermode: true,
                arrows: true,
                slickRemove: 2

            });
        });


})(jQuery);