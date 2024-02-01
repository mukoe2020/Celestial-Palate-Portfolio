$(document).ready(function() {
    var lastScrollTop = 0;
    var isScrollingUp = false;

    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    // Scrolling Effect
    $(window).on("scroll", function() {
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            // scrolling down
            isScrollingUp = false;
        } else {
            // scrolling up
            isScrollingUp = true;
        }

        lastScrollTop = st;

        if (isScrollingUp) {
            $('nav').removeClass('black');
        } else {
            $('nav').addClass('black');
        }
    });
});

