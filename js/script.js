$(function () {
    $("#phone").mask("+7(999) 999-9999");
});
$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(window).resize(function () {
    adaptive_function2();
});
function adaptive_header2(w, h) {
    var headerMenu2 = $('.adpt_lng');
    var headerLang2 = $('.languages');
    if (w < 992) {
        if (!headerLang2.hasClass('done')) {
            headerLang2.addClass('done').appendTo(headerMenu2);
        }
    } else {
        if (headerLang2.hasClass('done')) {
            headerLang2.removeClass('done').prependTo($('.main_lng'));
        }
    }
}
function adaptive_function2() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header2(w, h);
}
adaptive_function2();

var swiper1 = new Swiper(".reviewsSwiper", {
    loop: 1,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 13,
        },
        650: {
            slidesPerView: 2,
        },
        365: {
            slidesPerView: 1,
        },
        315: {
            slidesPerView: 1,
        }
    }
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

