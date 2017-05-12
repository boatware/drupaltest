/**
 * @file
 * Global javascripts for the theme.
 */

(function ($) {
  // Superfish behavior.
  Drupal.behaviors.superfish = {
    attach: function () {
      $('ul.sf-menu').superfish({
        delay: 100,
        animation: {opacity: 'show', height: 'show'},
        speed: 'fast',
        autoArrows: true
      });
    }
  };

  Drupal.behaviors.responsiveSuperfish = {
    attach: function () {
      $("#close").hide();

      $('#hamburger').click(
        function () {
          $(this).hide();
          $("#close").show();
          $(".sf-menu").addClass("mobile-active");
        }
      );

      $("#close").click(
        function () {
          $(this).hide();
          $("#hamburger").show();
          $(".sf-menu").removeClass("mobile-active");
        }
      );

      $('.mobnav-subarrow').click(
        function () {
          $(this).parent().toggleClass("xpopdrop");
        });
    }
  };

  Drupal.behaviors.backToTop = {
    attach: function () {
      var offset = 220;
      $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn("slow");
        } else {
          $('.back-to-top').fadeOut("slow");
        }
      });

      $('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, "slow");
        return false;
      })
    }
  };

  Drupal.behaviors.menuHamBurger = {
    attach: function (context, settings) {
      $('#burger-menu').click(function () {
        $('.push-menu').addClass('show-pm');
        $('body').addClass("off-canvas-active");
      });
      $('.close-menu').click(function () {
        $('.push-menu').removeClass('show-pm');
        $('body').removeClass("off-canvas-active");
      });
      $('.pm-overlay').click(function () {
        $('.push-menu').removeClass('show-pm');
        $('body').removeClass("off-canvas-active");
      });
    }
  };

})(jQuery);
