$(document).ready(function(){
    $(document).on('click', '#subm', function() {
        event.preventDefault();

        var name = $('#v_name').val();
        var phone = $('#v_phone').val();
        var data = {
            action: 'booking',
            name: name,
            phone: phone
        };

        $.ajax({
            url: myajax.url,
            type: 'POST',
            data: data,
            success: function (response) {
               console.log(response);
            }
        });

        return false;
    });

    $(document).on('click', '#subm1', function() {
        event.preventDefault();

        var name = $('#v_name1').val();
        var phone = $('#v_phone1').val();
        var data = {
            action: 'booking',
            name: name,
            phone: phone
        };

        $.ajax({
            url: myajax.url,
            type: 'POST',
            data: data,
            success: function (response) {
                console.log(response);
            }
        });

        return false;
    });

    $(document).on('click', '#subm2', function() {
        event.preventDefault();

        var name = $('#v_name2').val();
        var phone = $('#v_phone2').val();
        var data = {
            action: 'booking',
            name: name,
            phone: phone
        };

        $.ajax({
            url: myajax.url,
            type: 'POST',
            data: data,
            success: function (response) {
                console.log(response);
            }
        });

        return false;
    });
    $(document).on('click', '.prices__block--bottom a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        console.log(target);
        var top = target.offset().top;

        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
});
