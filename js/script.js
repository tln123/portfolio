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
particlesJS.load("particles-js", {
  "particles": {
    "number": {
      "value": 240,
      "density": {
        "enable": true,
        "value_area": 1122.388442605866
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#F8D129",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 251.74825174825176,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
  }
  , function() {
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
