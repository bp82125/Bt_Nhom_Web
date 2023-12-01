$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('nav').addClass('sticky');
            $('nav a, nav span').removeClass('text-white');
            $('nav a, nav span').addClass('text-black');

        } else {
            $('nav').removeClass('sticky');
            $('nav a, nav span').removeClass('text-black');
            $('nav a, nav span').addClass('text-white');
        }
    });


});

