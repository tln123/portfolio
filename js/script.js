/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
  });

/* =========================================
                Particles
============================================ */
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "/portfolio/js/particles/particles.json", function() {
    console.log("callback - particles.js config loaded");
  });

/* =========================================
                Typing Effect
============================================ */
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 40,
      loop: true,
      backDelay: 1100,
      backSpeed: 40
    });
  }


/* =========================================
              Navigation
============================================ */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const nav = document.querySelector(".fixed-top");


  $(".toggle").click(function () {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
      nav.classList.remove("black-bg");
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
      nav.classList.add("black-bg")
    }
  });

  $(".close-nav").click(function () {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
      nav.classList.remove("black-bg");
    }
  });




/* Hide Navigation Effect*/
$(function () {

  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {

    // show/hide nav on window's scroll
    showHideNav();

  });

  function showHideNav() {
    if ($(window).scrollTop() > 80) {

      $("nav ul").addClass("menuHide");

      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      $("nav ul").removeClass("menuHide");

      // Hide back to top button
      $("#back-to-top").fadeOut()
    }
  }
});

/* =========================================
            Education Time Line
============================================ */

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min - 400) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);
 
$("#timeline-1").timeline();

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

  $("#arrow-down i").addClass("animated fadeInDown infinite");
  $("#home-title").addClass("animated fadeIn");

});
