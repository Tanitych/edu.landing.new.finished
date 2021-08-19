//'use strict';

$(function() {

    /*
    |--------------------------------------------------------------------------
    | Masked Input
    |--------------------------------------------------------------------------
    */

    $(".js-masked-phone").mask("+7 (999) 999-99-99");

    /*
    |--------------------------------------------------------------------------
    | Scroll Down
    |--------------------------------------------------------------------------
    */

    $(".js-scroll-down").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 700);
    });

    /*
    |--------------------------------------------------------------------------
    | Header
    |--------------------------------------------------------------------------
    */

    let header = $('.header');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
        {
            $('.header').addClass('is-fixed');
        } else {
            $('.header').removeClass('is-fixed');
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Reviews Slider
    |--------------------------------------------------------------------------
    */

    var reviewsThumbs = new Swiper('.js-reviews-thumbnail', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        containerClass: 'reviews__thumbs',
        wrapperClass: 'reviews__thumbs-wrapper',
        slideClass: 'reviews__thumbs-item',
        touchRatio: 1
    });

    let reviewsSlider = new Swiper('.js-reviews-slider', {
        thumbs: {
            swiper: reviewsThumbs
        },
        speed: 500,
        mousewheel: false,
        touchRatio: 1,
        loop: true,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: '.js-reviews-next',
            prevEl: '.js-reviews-prev',
        },
        centeredSlides: true,
        slidesPerView: 5.5,
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 15,
                slidesPerView: 1.2,
                slidesOffsetBefore: '15',
                centeredSlides: false,
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 1.2,
                slidesOffsetBefore: '15',
                spaceBetween: 15,
                centeredSlides: false,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1.8,
                slidesOffsetBefore: '15',
                spaceBetween: 15,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                centeredSlides: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4.5,
                centeredSlides: true,
            },
            // when window width is >= 1600px
            1600: {
                slidesPerView: 5.5,
                centeredSlides: true,
            },
        },
    });


    /*
    |--------------------------------------------------------------------------
    | Quiz Slider
    |--------------------------------------------------------------------------
    */

    var quizThumbs = new Swiper('.js-quiz-thumbnail', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        wrapperClass: 'quiz__steps',
        slideClass: 'quiz__steps-item',
        touchRatio: 0
    });

    var quizSlider = new Swiper('.js-quiz-slider', {
        spaceBetween: 15,
        navigation: {
            nextEl: '.js-quiz-slider-next',
            prevEl: '.js-quiz-slider-prev',
        },
        thumbs: {
            swiper: quizThumbs
        },
        touchRatio: 0,
        on: {
            reachEnd: function () {
                $('#quiz-header').hide();
                $('#quiz-header-finish').show();
                $('.js-quiz-slider-prev').hide();
            },
        },
        autoHeight: true,
    });

   /*
   |--------------------------------------------------------------------------
   | Showing modal with effect
   |--------------------------------------------------------------------------
   */

    $('.js-modal-effect').on('click', function(e) {

        e.preventDefault();

        var effect = $(this).attr('data-effect');
        $('.modal').addClass(effect);
    });
    // hide modal with effect

    /*
    |--------------------------------------------------------------------------
    | Mobile Menu
    |--------------------------------------------------------------------------
    */

    var menuLink = $('.m-menu__link');

    menuLink.on('click', function(e) {

        // Toggle Open Class
        $(burger).toggleClass('is-open');

        $('body').toggleClass('mmenu-open');
    });


    var burger = $('.js-menu-trigger');

    // Sidebar toggle to sidebar-folded
    burger.on('click', function(e) {

        // Toggle Open Class
        $(this).toggleClass('is-open');

        e.preventDefault();

        $('body').toggleClass('mmenu-open');

    });

    // close sidebar when click outside on mobile/table
    $(document).on('click touchstart', function(e){
        e.stopPropagation();

        // closing of sidebar menu when clicking outside of it
        if (!$(e.target).closest(burger).length) {
            var sidebar = $(e.target).closest('.m-menu').length;
            var sidebarBody = $(e.target).closest('.m-menu__body').length;
            if (!sidebar && !sidebarBody) {
                if ($('body').hasClass('mmenu-open')) {
                    $('body').removeClass('mmenu-open');
                }
            }
        }
    });
    /*
    |--------------------------------------------------------------------------
    | Responsive Iframe Inside Modal
    |--------------------------------------------------------------------------
    */

    function toggle_video_modal() {

        // Click on video thumbnail or link
        $(".js-video-modal").on("click", function(e){

            // prevent default behavior for a-tags, button tags, etc.
            e.preventDefault();

            // Grab the video ID from the element clicked
            var id = $(this).attr('data-youtube-id');

            // Autoplay when the modal appears
            // Note: this is intetnionally disabled on most mobile devices
            // If critical on mobile, then some alternate method is needed
            var autoplay = '?autoplay=1';

            // Don't show the 'Related Videos' view when the video ends
            var related_no = '&rel=0';

            // String the ID and param variables together
            var src = '//www.youtube.com/embed/'+id+autoplay+related_no;

            // Pass the YouTube video ID into the iframe template...
            // Set the source on the iframe to match the video ID
            $(".video-modal__iframe").attr('src', src);

            // Add class to the body to visually reveal the modal
            $("body").addClass("video-modal-show");

            $('body').css({"overflow": "hidden"});

        });

        // Close and Reset the Video Modal
        function close_video_modal() {

            event.preventDefault();

            // re-hide the video modal
            $("body").removeClass("video-modal-show");

            $('body').css({"overflow": ""});

            // reset the source attribute for the iframe template, kills the video
            $(".video-modal__iframe").attr('src', '');

        }
        // if the 'close' button/element, or the overlay are clicked
        $('body').on('click', '.video-modal__close, .video-modal__overlay', function(event) {

            // call the close and reset function
            close_video_modal();

        });
        // if the ESC key is tapped
        $('body').keyup(function(e) {
            // ESC key maps to keycode `27`
            if (e.keyCode == 27) {

                // call the close and reset function
                close_video_modal();

            }
        });
    }
    toggle_video_modal();

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    */

    $('.js-page-scroll').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash),
                speed = $(this).data("speed") || 800;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 0
                }, speed);
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Back to Top
    |--------------------------------------------------------------------------
    */

    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > 0) {
            $('.js-back-to-top').fadeIn('slow');
        } else {
            $('.js-back-to-top').fadeOut('slow');
        }
    });

    $(".js-back-to-top").on("click", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
