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

    $(function addSlider() {
        var winBr = $(document).width();
        if (winBr <= 1380) {

            $('.ing-slider').toggleClass('ing-slider_active', true);
        }
        else {
            $('.ing-slider').toggleClass('ing-slider_active', false);
        }
    });


    $(function () {
        $('.ing-slider_active').slick({
            slidesToShow: 1,
            slidesToScrool: 1,
            infinite: true,
            centermode: true,
            arrows: true
        });
    });


})(jQuery);