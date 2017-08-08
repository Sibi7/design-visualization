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

    //animate section better------------------------------

    //img----------------------------
    $(window).scroll(function () {
        $('.better__left img').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow+400) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        });

        $('.better__right img').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow+400) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        })
        //end img----------------------------

        //dot----------------------------
        $('.better__block--dot').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            console.log(topOfWindow)
            if(imagePos < topOfWindow+500) {
                $(this).css('opacity', '1')
                        .addClass('fadeInUpBig')
                        .css('height', '250px');
            }
        })
        //end dot----------------------------

        //text----------------------------
        $('.better__block--text').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            console.log(topOfWindow)
            if(imagePos < topOfWindow+400) {
                $(this).css('opacity', '1')
                    .addClass('animated zoomIn')
            }
        })
        //end text----------------------------

        //time-and-money----------------------------
        $('.time-money__left p img').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow+400) {
                $(this).css('opacity', '1').addClass('animated rotateIn')
            }
        })
        //end time-and-money----------------------------

    });
    //end animate section better--------------------------------

});
