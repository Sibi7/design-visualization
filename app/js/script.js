$(document).ready(function () {

    //flexslider for consultation
    $(window).on('load', function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    $('#carousel1').flexslider({
        animation: "slide1",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 153,
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
    $('#carousel2').flexslider({
        animation: "slide2",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 153,
        itemMargin: 17,
        asNavFor: '#slider2'
    });

    $('#slider2').flexslider({
        animation: "slide2",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel2"
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
    $('.header-slide__content__wrap [href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1200);
        return false;
    });

    //animate section better------------------------------

//img----------------------------
    $(window).scroll(function () {
        $('.better__left img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        });

        $('.better__right img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        })
        //end img----------------------------

        //dot----------------------------
        $('.better__block--dot').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            console.log(topOfWindow)
            if (imagePos < topOfWindow + 500) {
                $(this).css('opacity', '1')
                    .addClass('fadeInUpBig')
                    // .delay(1500)
                    .css('height', '250px');
            }
        })
        //end dot----------------------------

        //text----------------------------
        $('.better__block--text').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            console.log(topOfWindow)
            if (imagePos < topOfWindow + 500) {
                $(this).css('opacity', '1')
                    .addClass('animated zoomIn')
            }
        })
        //end text----------------------------

    });
//end animate section better--------------------------------

// cache element in variable
});

// cache element in variable

var main = function() { //главная функция

    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */

        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate

            left: '285px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */

        }, 200); //скорость движения меню в мс
    });


    /* Закрытие меню */

    $('.icon-close').click(function() { //выбираем класс icon-close и метод click

        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate

            left: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс
    });
};

$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
