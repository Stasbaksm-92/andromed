$(document).ready(function () {
    $('.slider').slick({

        arrows: true,
        adaptiveHeight: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: ".slidertwo",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]



    });
    $('.slidertwo').slick({
        arrows: false,
        adaptiveHeight: true,
        asNavFor: ".slider",
        slidesToShow: 4,
        centerMode: false,
        focusOnSelect: true,
        swipe: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }],
        mobileFirst: false

    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


});