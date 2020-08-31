$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        fade: true,
        asNavFor: ".slidertwo",



    });
    $('.slidertwo').slick({
        arrows: false,
        asNavFor: ".slider",
        slidesToShow: 3,
        slidesPerRow: 1,
    });


});