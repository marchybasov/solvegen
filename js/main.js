;(function ($) {
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $(function () {
        // Sliders
        $('.main-top__slider-top').slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });

        $('.main-active-slider').slick({
            infinite: true,
            dots: false,
            slidesToShow: 5,
            centerPadding: '-10px',
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,
                        initialSlide: 1,
                        centerMode: true,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        initialSlide: 1,
                        slidesToScroll: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2,
                        initialSlide: 0,
                        slidesToScroll: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 710,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '20%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '27%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '22%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '0',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                }
            ]
        });

        $('.wholesale-slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 4,
            centerPadding: '-10px',
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: true,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 0,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 710,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '20%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '27%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '22%',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        infinite: true,
                        centerPadding: '0',
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                }
            ]
        });

        // End Sliders

        $(".cart-list").niceScroll({
                cursorcolor: "#424242", // change cursor color in hex
                cursoropacitymin: 0.5, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
                cursoropacitymax: 0.5, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
                cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
                cursorborder: "1px solid #fff", // css definition for cursor border
                cursorborderradius: "5px", // border radius in pixel for cursor
                zindex: "auto", // change z-index for scrollbar div
                scrollspeed: 60, // scrolling speed
                mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
                touchbehavior: false, // DEPRECATED!! use "touchemulate"
                emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
                hwacceleration: true, // use hardware accelerated scroll when supported
                boxzoom: false, // enable zoom for box content
                dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
                gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
                grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
                background: "", // change css for rail background
                iframeautoresize: true, // autoresize iframe on load event
                cursorminheight: 32, // set the minimum cursor height (pixel)
                preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
                railoffset: false, // you can add offset top/left for rail position
                bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like
                spacebarenabled: true, // enable page down scrolling when space bar has pressed
                railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
                disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
                horizrailenabled: true, // nicescroll can manage horizontal scroll
                railalign: 'right', // alignment of vertical rail
                railvalign: 'bottom', // alignment of horizontal rail
                enabletranslate3d: true, // nicescroll can use css translate to scroll content
                enablemousewheel: true, // nicescroll can manage mouse wheel events
                enablekeyboard: true, // nicescroll can manage keyboard events
                smoothscroll: true, // scroll with ease movement
                sensitiverail: true, // click on rail make a scroll
                enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
                cursorfixedheight: false, // set fixed height for cursor in pixel
                hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
                directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
                nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
                enablescrollonselection: true, // enable auto-scrolling of content when selection text
                cursordragspeed: 0.3, // speed of selection when dragged with cursor
                rtlmode: "auto", // horizontal div scrolling starts at left side
                cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
                oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
                scriptpath: "" ,// define custom path for boxmode icons ("" => same script path)
                preventmultitouchscrolling: true, // prevent scrolling on multitouch events
                disablemutationobserver: false, // force MutationObserver disabled,
                enableobserver: true, // enable DOM changing observer, it tries to resize/hide/show when parent or content div had changed
                scrollbarid: false // set a custom ID for nicescroll bars
    });

        $('.col-2-first-row__second').find('img').on('click', function () {
            var $this = $(this),
                $iframe = $(this).closest('div').find('iframe'),
                id = '599e4a25d1e20';

            if ($iframe.length && $iframe.is('iframe') && $iframe.attr('src').search('youtube') >= -1) {
                $iframe.attr('id', id);

                new YT.Player($iframe.attr('id'), {
                    events: {
                        'onReady': function (event) {
                            event.target.playVideo();
                            setTimeout(function () {
                                $iframe.show();
                                $this.remove();
                            }, 500);
                        }
                    }
                });
            }
        });

        $(document).on("click", ".cart-icon", function (e) {
            if ($(window).width() > 768) {
                $(".cart-list").getNiceScroll().resize();
                $(".head_view_cart.order_right").toggleClass("active");
            }
        });
        $(window).resize(function () {
            if ($(window).width() < 768) {
                $(".head_view_cart.order_right").removeClass("active");
            }
        });
    });



})(jQuery);

/************ create map function catalog***************/
function initMap() {

    var myLatlng = new google.maps.LatLng(59.928242, 30.339973);
    var pos1 = new google.maps.LatLng(59.928242, 30.335495);
    var map = new google.maps.Map(document.getElementById('catalog-map'), {
        zoom: 15,
        center: myLatlng,
        disableDefaultUI: true,
        // scrollwheel:false
    });
    var marker = new google.maps.Marker({
        position: pos1,
        map: map,
          icon: 'img/marker.png',
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    });


    google.maps.event.addListener(map, 'zoom_changed', function () {
        map.setCenter(marker.getPosition());
    });
}
/***************end map*************************/


