$(document).ready(function () {

    //flexslider for consultation
    $(window).on('load', function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    $('#carousel1').flexslider({
        animation: "slide1",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 200,
        itemMargin: 17,
        asNavFor: '#slider1'
    });

    $('#slider1').flexslider({
        animation: "slide1",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel1"
    });
    //end flexslider for consultation
    $('.js-counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
