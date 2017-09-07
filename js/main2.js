;(function ($) {
    "use strict";

    $(document).ready(function () {
        $(document).on("click", ".main-middle__switcher-sizeBtn--item", function (e) {
            $(".main-middle__switcher-sizeBtn--item").removeClass("active");
            $(e.currentTarget).addClass('active');
        });
    });


    $(".btn_nutrition").hover(function (e) {
        $('.table').css("display", e.type === "mouseenter" ? "block" : "none");
    });


    $(function () {

        $('.ing-slider2').slick({
            slidesToShow: 2,
            slidesToScrool: 1,
            infinite: true,
            centermode: true,
            arrows: true,
            slickRemove: 1,
            responsive:[
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
                ]


        });
    });

    $(function () {

        $('.main-bottom-story--slider').slick({
            slidesToShow: 5,
            slidesToScrool: 1,
            infinite: true,
            // centermode: true,
            dots: true,

            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,


                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1380,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                        // centerMode: true
                    }
                }
                // {
                //     breakpoint: 900,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //
                //     }
                // },
                // {
                //     breakpoint: 710,
                //     settings: {
                //
                //         infinite: true,
                //         centerPadding: '20%',
                //         slidesToShow: 1,
                //         variableWidth: false
                //     }
                // },
                // {
                //     breakpoint: 640,
                //     settings: {
                //         centerMode: true,
                //         infinite: true,
                //         centerPadding: '27%',
                //         slidesToShow: 1,
                //         variableWidth: false
                //     }
                // }
            ]
        });
    });


})(jQuery);