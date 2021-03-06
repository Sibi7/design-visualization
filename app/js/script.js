$(document).ready(function () {

    /*scroll menu*/
    $(document).on('click', '.menu ul a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    $(document).on('click', '.footer__menu a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*close*/

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

    $('.header-slide__content__wrap [href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1200);
        return false;
    });

    $('.portfolios-meaning-right__right [href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1200);
        return false;
    });

    //counter-------------------

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


    var initCounterFlag = false;// создаем флаг для счетчика

    $(window).scroll(function () {

        var counterBlock = $('#about').offset().top;

        if ($(this).scrollTop() >= counterBlock && initCounterFlag === false) {// при проверке значения флага false
            /*console.log( 111 );*/
            $('.js-counter').each(function () { //срабатывает анимация
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

            initCounterFlag = true;//после сработки анимации значение флагу задается true, чтобы анимация прекратилась
        }

    });

    //animate text header
    $('.header-slide__content__wrap h1').each(function () {
        $(this).addClass('animated bounceInDown').css('opacity', '1');
    });
    $('.header-slide__content__wrap h2').each(function () {
        $(this).addClass('animated bounceInUp').css('opacity', '1');
    });
    //end animate text header

    //animate when scrolling------------------------------
    $(window).scroll(function () {

        $('.better__left img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 0) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        });

        $('.better__right img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('fadeInUpBig').css('opacity', '1');
            }
        });
        //end img----------------------------

        //dot----------------------------
        $('.better__block--dot').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).css('opacity', '1')
                    .addClass('fadeInUpBig')
                    .css('height', '250px');
            }
        });
        //end dot----------------------------

        //text----------------------------
        $('.better__block--text').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1')
                    .addClass('animated zoomIn')
            }
        });
        //end text----------------------------

        //time-and-money----------------------------
        $('.time-money__left p img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1').addClass('animated rotateIn')
            }
        })
        //end time-and-money----------------------------

    });
//end animate section better--------------------------------
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:false,
                loop:true
            }
        }
    })

// cache element in variable
});

// cache element in variable

var main = function () { //главная функция

    $('.icon-menu').click(function () { /* выбираем класс icon-menu и
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

    // $(document).on('click', function (e) {
    //     if ($(e.target).closest('html').length != 1) {
    //         $('body').click(function () {
    //
    //             $('.menu').animate({
    //
    //                 left: '-285px'
    //
    //             }, 200);
    //
    //             $('body').animate({
    //
    //                 left: '0px'
    //
    //             }, 200);
    //         });
    //     }
    // });
    $(document).mouseup(function (e) {
        var container = $(".menu");
        if (container.has(e.target).length === 0) {
            $('.menu').animate({
                left: '-285px'
            }, 200);
            $('body').animate({
                left: '0px'
            }, 200);
        }
    });
    /* Закрытие меню */

    $('.icon-close').click(function () {

        $('.menu').animate({

            left: '-285px'

        }, 200);

        $('body').animate({

            left: '0px'

        }, 200);
    });
};
$(document).ready(main);

var valid = new Validation();
var valid1 = new Validation();
var valid2 = new Validation();
var valid4 = new Validation();

valid.addTpl('kl', /^[А-Яа-яЁё\s]+$/, 'ghghghghghg');

valid.init({
    classItem: 'vItem',
    eventElement: '#subm',
    //event:'onblur',
    promptMsgTpl: '<div style="color: darkslateblue"><i class="fa fa-info" aria-hidden="true"></i> {msg}</div>',
    errorMsgTpl: '<div><i class="fa fa-bomb" aria-hidden="true"></i> {msg}</div>',
    successMsgTpl: '<div><i class="fa fa-check" aria-hidden="true"></i> {msg}</div>',
    items: [
        {
            item:'v_name',
            promptMsg:'Напишите свое имя',
            successMsg:'',
            tpl:'kir',
            tplMsg: 'Только кириллица'
        },
        {
            item:'v_phone',
            promptMsg:'Напишите свой телефон',
            successMsg:'',
            tpl:'number',
            tplMsg: 'Только цифры'
        }
    ],
    submitError: function (err, form) {
        alert('Ошибка в заполнении');
    },
    submitSuccess: function (err, form) {
        if (!err) {
            //form.submit();
            alert('Благодарим Вас за оставленную заявку. Наш менеджер свяжется с Вами в ближайшее время.');
        }
    },
});
valid1.init({
    classItem: 'vItem1',
    eventElement: '#subm1',
    //event:'onblur',
    promptMsgTpl: '<div style="color: darkslateblue"><i class="fa fa-info" aria-hidden="true"></i> {msg}</div>',
    errorMsgTpl: '<div><i class="fa fa-bomb" aria-hidden="true"></i> {msg}</div>',
    successMsgTpl: '<div><i class="fa fa-check" aria-hidden="true"></i> {msg}</div>',
    items: [
        {
            item:'v_name1',
            promptMsg:'Напишите свое имя',
            successMsg:'',
            tpl:'kir',
            tplMsg: 'Только кириллица'
        },
        {
            item:'v_phone1',
            promptMsg:'Напишите свой телефон',
            successMsg:'',
            tpl:'number',
            tplMsg: 'Только цифры'
        }
    ],
    submitError: function (err, form) {
        alert('Ошибка в заполнении');
    },
    submitSuccess: function (err, form) {
        if (!err) {
            //form.submit();
            alert('Благодарим Вас за оставленную заявку. Наш менеджер свяжется с Вами в ближайшее время.');
        }
    },
});
valid2.init({
    classItem: 'vItem2',
    eventElement: '#subm2',
    //event:'onblur',
    promptMsgTpl: '<div style="color: darkslateblue"><i class="fa fa-info" aria-hidden="true"></i> {msg}</div>',
    errorMsgTpl: '<div><i class="fa fa-bomb" aria-hidden="true"></i> {msg}</div>',
    successMsgTpl: '<div><i class="fa fa-check" aria-hidden="true"></i> {msg}</div>',
    items: [
        {
            item:'v_name2',
            promptMsg:'Напишите свое имя',
            successMsg:'',
            tpl:'kir',
            tplMsg: 'Только кириллица'
        },
        {
            item:'v_phone2',
            promptMsg:'Напишите свой телефон',
            successMsg:'',
            tpl:'number',
            tplMsg: 'Только цифры'
        }
    ],
    submitError: function (err, form) {
        alert('Ошибка в заполнении');
    },
    submitSuccess: function (err, form) {
        if (!err) {
            //form.submit();
            alert('Благодарим Вас за оставленную заявку. Наш менеджер свяжется с Вами в ближайшее время.');
        }
    },

});
valid4.init({
    classItem: 'vItem4',
    eventElement: '#subm4',
    //event:'onblur',
    promptMsgTpl: '<div style="color: darkslateblue"><i class="fa fa-info" aria-hidden="true"></i> {msg}</div>',
    errorMsgTpl: '<div><i class="fa fa-bomb" aria-hidden="true"></i> {msg}</div>',
    successMsgTpl: '<div><i class="fa fa-check" aria-hidden="true"></i> {msg}</div>',
    items: [
        {
            item:'v_name4',
            promptMsg:'Напишите свое имя',
            successMsg:'',
            tpl:'kir',
            tplMsg: 'Только кириллица'
        },
        {
            item:'v_phone4',
            promptMsg:'Напишите свой телефон',
            successMsg:'',
            tpl:'number',
            tplMsg: 'Только цифры'
        }
    ],
    submitError: function (err, form) {
        alert('Ошибка в заполнении');
    },
    submitSuccess: function (err, form) {
        if (!err) {
            //form.submit();
            alert('Благодарим Вас за оставленную заявку. Наш менеджер свяжется с Вами в ближайшее время.');
        }
    },

});