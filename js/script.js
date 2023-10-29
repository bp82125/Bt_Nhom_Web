$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('nav').addClass('sticky');
            $('nav a').removeClass('text-white');
            $('nav a').addClass('text-black');
        } else {
            $('nav').removeClass('sticky');
            $('nav a').removeClass('text-black');
            $('nav a').addClass('text-white');
        }
    });
});