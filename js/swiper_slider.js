/*!
 * Deluxe Business v1.0.0 
 * Copyright 2016 Deluxe Business
 * Licensed under the Themeforest Standard Licenses
 */
function isScrolledIntoView(a) {
    var b = $(a),
        c = $(window),
        d = c.scrollTop(),
        e = d + c.height(),
        f = b.offset().top,
        g = f + b.height();
    return e >= g && f >= d
}
$(function() {
    "use strict";
    $('a[href="#"]').on("click", function(a) {
        a.preventDefault()
    }), $("#scroll-up").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    });
    new Swiper(".header-slider", {
        nextButton: ".header-slider .swiper-button-next",
        prevButton: ".header-slider .swiper-button-prev",
        pagination: ".header-slider .swiper-pagination",
        paginationClickable: !0,
        spaceBetween: 0,
        slidesPerView: 1
    }), new Swiper(".testimonial-slider", {
        nextButton: ".testimonial-button-next",
        prevButton: ".testimonial-button-prev",
        pagination: ".testimonial-pagination",
        paginationClickable: !0,
        spaceBetween: 30,
        slidesPerView: 3,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    }), new Swiper(".services-slider", {
        pagination: ".services-slider .swiper-pagination",
        paginationClickable: !0,
        spaceBetween: 30,
        slidesPerView: 3,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    }), new Swiper(".speeches-slider", {
        pagination: ".speeches-slider .swiper-pagination",
        paginationClickable: !0,
        spaceBetween: 30,
        slidesPerView: 2,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    if ($(window).on("scroll", function() {
            $(this).scrollTop() > 20 ? $("body").addClass("body-scrolled") : $("body").removeClass("body-scrolled")
        }), $(window).on("scroll", function() {
            $(".counter span:not(.counted-before)").each(function(a, b) {
                isScrolledIntoView(this) && $(this).countTo().addClass("counted-before")
            })
        }), $(".faq h6").on("click", function() {
            $(this).parents("li").hasClass("open") || ($(this).parents(".faq").find(".open .faq-body").slideUp(400).parent().removeClass("open"), $(this).siblings(".faq-body").slideDown(400).parent().addClass("open"))
        }), $(".navbar-toggler, .navbar-backdrop").on("click", function(a) {
            a.preventDefault(), $("body").toggleClass("offcanvas-show"), $(this).children().toggleClass("ti-menu ti-close"), $("body").hasClass("offcanvas-show") ? $("html").css("overflow", "hidden") : $("html").css("overflow", "visible")
        }), $(window).on("resize", function() {
            $(window).width() > 991 && ($("body").removeClass("offcanvas-show"), $("html").css("overflow", "visible"))
        }), $("#shuffle-grid").size()) {
        var a = new shuffle($("#shuffle-grid"), {
                itemSelector: ".shuffle-item",
                sizer: ".shuffle-sizer",
                delimeter: ","
            }),
            b = function() {
                var b = $(".shuffle-filter").children();
                b.on("click", function() {
                    var b = $(this),
                        c = b.hasClass("active"),
                        d = c ? "all" : b.data("group");
                    c || $(".shuffle-filter .active").removeClass("active"), b.toggleClass("active"), a.filter(d)
                }), b = null
            };
        b()
    }
});
var chartColors = {
        primary: "rgba(4, 35, 79, 1)",
        blue: "rgba(71, 177, 245, 0.9)",
        red: "rgba(240, 71, 71, 0.93)",
        yellow: "rgba(249, 191, 59, 0.93)",
        white: "#fff"
    },
    chartOptions = {
        scales: {
            xAxes: [{
                ticks: {
                    display: !1
                }
            }]
        }
    };
"undefined" != typeof Chart && (Chart.defaults.global.responsive = !0, Chart.defaults.global.defaultColor = "rgba(240, 71, 71, 0.93)", Chart.defaults.global.defaultFontFamily = "Montserrat, Helvetica Neue", Chart.defaults.global.defaultFontColor = "#00283b", Chart.defaults.global.defaultFontStyle = "bold", Chart.defaults.global.defaultFontSize = 14, Chart.defaults.global.elements.point.backgroundColor = "#00283b", Chart.defaults.global.elements.point.borderColor = "#fff", Chart.defaults.global.elements.point.radius = 5, Chart.defaults.global.elements.point.borderWidth = 3, Chart.defaults.global.elements.point.hoverRadius = 5, Chart.defaults.global.elements.point.hoverBorderWidth = 3, Chart.defaults.global.tooltips.backgroundColor = "rgba(4, 35, 79, 0.9)", Chart.defaults.global.tooltips.bodyFontStyle = "normal", Chart.defaults.global.legend.display = !1);