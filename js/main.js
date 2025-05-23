(function ($) {
    "use strict";

    // Add passive event listener support with proper error handling
    try {
        jQuery.event.special.touchstart = {
            setup: function(_, ns, handle) {
                this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.touchmove = {
            setup: function(_, ns, handle) {
                this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.wheel = {
            setup: function(_, ns, handle) {
                this.addEventListener("wheel", handle, { passive: true });
            }
        };
        jQuery.event.special.mousewheel = {
            setup: function(_, ns, handle) {
                this.addEventListener("mousewheel", handle, { passive: true });
            }
        };
    } catch (error) {
        console.warn('Passive event listener support failed:', error);
    }

    // Spinner with proper error handling
    const spinner = function () {
        setTimeout(function () {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs with error handling
    try {
        new WOW().init();
    } catch (error) {
        console.warn('WOW.js initialization failed:', error);
    }

    // Sticky Navbar with debounce
    let scrollTimeout;
    $(window).on('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        }, 10);
    });
    
    // Back to top button with proper event handling
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });

    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
    });

    // Testimonials carousel with error handling
    try {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    } catch (error) {
        console.warn('Testimonial carousel initialization failed:', error);
    }

    // Client carousel with error handling
    try {
        $(".client-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 90,
            dots: false,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
                1200: { items: 6 }
            }
        });
    } catch (error) {
        console.warn('Client carousel initialization failed:', error);
    }
    
})(jQuery);

