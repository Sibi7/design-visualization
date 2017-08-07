$(document).ready(function () {

    //flexslider for consultation
    $(window).on('load', function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
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
})

