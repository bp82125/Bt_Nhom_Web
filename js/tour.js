$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    autoplay: true,
    dotsEach: 1,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})