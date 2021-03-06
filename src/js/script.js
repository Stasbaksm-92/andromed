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




    function valideForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    number: true
                }
            },
            messages: {
                name: "Пожалуйста, введите Ваше имя",
                phone: {
                    required: "Пожалуйста,введите Ваш мобильный номер",
                    phone: "Введите в формате +380..."
                }
            }
        });

    };

    valideForms('#consultation-form');
    valideForms('#consultation form');






    /* $('.slider-closet').slick({

        arrows: true,
        adaptiveHeight: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: ".slider-closet-two",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]



    });
    $('.slider-closet-two').slick({
        arrows: false,
        adaptiveHeight: true,
        asNavFor: ".slider-closet",
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
    }); */


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });


    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.modal_mini, #thancs').fadeIn('slow');


            $('form').trigger('reset');
        });
        return false;
    });

});