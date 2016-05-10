$(document).ready(function() {
    $('#open').click(function(evt) {
        evt.preventDefault();
        $('.login form').slideToggle(300);

        $(this).toggleClass('close');

    }); //end open
    $('.sm').smartmenus({
        showFunction: function($ul, complete) {
            $ul.slideDown(250, complete);
        },
        hideFunction: function($ul, complete) {
            $ul.slideUp(150, complete);
        }

    }); //end smartmenus
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000

    });

    $(".next_button").click(function() {
        owl.trigger("next.owl.carousel");
    });
    $(".prev_button").click(function() {
        owl.trigger("prev.owl.carousel");
    }); //end carousel



    $('.portfolio_menu li a').click(function(evt) {
        event.preventDefault();
        $('portfolio_menu li').removeClass('selected');
        $(this).parent('li').addClass('selected');

        imgWidth = '400px';
        thisItem = $(this).attr('rel');

        if (thisItem != "all") {

            $('.item li[rel=' + thisItem + ']').stop()
                .animate({
                    'width': imgWidth,
                    'opacity': 1,
                    'marginRight': '.5em',
                    'marginLeft': '.5em'
                });

            $('.item li[rel!=' + thisItem + ']').stop()
                .animate({
                    'width': 0,
                    'opacity': 0,
                    'marginRight': 0,
                    'marginLeft': 0
                });
        } else {

            $('.item li').stop()
                .animate({
                    'opacity': 1,
                    'width': imgWidth,
                    'marginRight': '1px',
                    'marginLeft': '1px'
                });
        }
    })

    $('.item li img').animate({ 'opacity': 0.5 }).hover(function() {
        $(this).animate({ 'opacity': 1 });
    }, function() {
        $(this).animate({ 'opacity': 0.5 });

    }); //end portfolio

    $('#accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
        animate: true,
        icons: {
            'header': 'ui-icon-carat-1-e',
            'activeHeader': 'ui-icon-carat-1-s'
        }
    }); //end accordion

    var owl1 = $('.owl-carousel1');
    owl1.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000

    });
    $(".owl-dots-next").click(function() {
        owl1.trigger("next.owl.carousel");
    });
    $(".owl-dots-prev").click(function() {
        owl1.trigger("prev.owl.carousel");

    });
    //end 2 carousel

    var owl2 = $('.owl-carousel2');
    owl2.owlCarousel({
        items: 1,
        singleItem: true,
        pagination: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsContainer: '#customDots'

    });

    $(".owl-dots-next1").click(function() {
        owl2.trigger("next.owl.carousel");
    });
    $(".owl-dots-prev1").click(function() {
        owl2.trigger("prev.owl.carousel");

    }); //end 3 carousel

    $('#tab').tabs({
        orientation: "vertical",
        show: 'fadeIn',
        hide: 'fadeOut',

    });
    var hash = location.hash;
    if (hash) {
        $('#tab').tabs("load", hash)
    };
    //end tabs

    var owl3 = $('.owl-carousel3');
    owl3.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true

    });
    $(".next_button").click(function() {
        owl3.trigger("next.owl.carousel");
    });
    $(".prev_button").click(function() {
        owl3.trigger("prev.owl.carousel");

    }); //end carousel
    function expand() {
        $(".search").toggleClass("close");
        $(".input").toggleClass("square");
        if ($('.search').hasClass('close')) {
            $('.input').focus();
        } else {
            $('.input').blur();
        }
    };
    $('button').on('click', expand);
    //end search bar

    $(function() {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 6000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 5000, // Animation in speed (ms)
            animationOutSpeed: 3000, // Animation out speed (ms)
            scrollImg: true,
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });
    //end scroll up
    

    function circle_bar(id, value, progress_number){
    
            $(id).circleProgress({
                value: value,
                size: 120,
                startAngle: -1.6,
                thickness: 4,
                fill: {
                    gradient: ["red", "orange"]
                }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(progress_number * progress))
            });
};
 var $triggered_times = 0;
    $(window).scroll(function() {
        var hT = $('.about_text').offset().top,
            hH = $('.about_text').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH) && $triggered_times == 0) {
         circle_bar('#circle1', 0.941, 6587);
circle_bar('#circle1', 0.941, 6587);
circle_bar('#circle2', 0.128, 896);
circle_bar('#circle3', 0.240, 1674);
circle_bar('#circle4', 0.110, 769);
        }     
$triggered_times = 1;
})



}); //end ready
