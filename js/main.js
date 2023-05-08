$(function () {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');

        animateGradient();
    });

    /*=========================================================================
        Burger Menu
    =========================================================================*/
    var burgerMenu = function () {
        $('.js-addo-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            }
            else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#addo-aside, .js-addo-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas')) {
                    $('body').removeClass('offcanvas');
                    $('.js-addo-nav-toggle').removeClass('active');
                }
            }
        });
        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.js-addo-nav-toggle').removeClass('active');
            }
        });
    };
    var wind = $(window);

    /*=========================================================================
        Typed js Active
    =========================================================================*/
    $(".typed").typed({
        strings: ["a Freelancer.", " a Designer.", " a Developer."],
        loop: true,
        typeSpeed: 150
    });

    /*=========================================================================
        Portfolios
    =========================================================================*/
    $('.portfolio-items').imagesLoaded(function () {

        // Add isotope click function
        $('.portfolio-filter li').on('click', function () {
            $(".portfolio-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        $(".portfolio-items").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });


    /*=========================================================================
        wow Settings
    =========================================================================*/
    var wow = new WOW({
        mobile: false,
        offset: 0
    });
    wow.init();
    // scroll
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });

});



var carouselItems = document.querySelectorAll(".carousel-item");
jsonDataProjects.forEach(function(project, index) {
  var carouselItem = carouselItems[index];
  var img = carouselItem.querySelector("img");
  img.src = project.pro_thumb;
});



function animateGradient() {
    var colors = new Array(
    [243, 242, 241], // $light-gray
      [58, 142, 186], // $color-blue
      [108, 195, 237], // $color-light-blue
      [255, 184, 95], // $color-orange

    );
  
    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];
  
    //transition speed
    var gradientSpeed = 0.002;
  
    function updateGradient() {
      if ($ === undefined) return;
  
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];
  
      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  
      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  
      $('.about-section').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(" + color1 + "), to(" + color2 + "))"
      }).css({
        background: "-moz-linear-gradient(top, " + color1 + " 0%, " + color2 + " 100%)"
      });
  
      step += gradientSpeed;
      if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
  
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  
      }
    }
  
    setInterval(updateGradient, 10);
  }
  
