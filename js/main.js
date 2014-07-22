jr = {};
jr.contentTop = [];

jr.isMobile = function() {
  return window.screen.width < 960;
};

jr.setUpFloatingMenu = function() {
  if (!jr.isMobile()) {
    var $window = $(window),
      $links = $('.links').first();

    $links.data('pos-y', $links.offset().top);

    $window.scroll(function() {
      if ($window.scrollTop() > $links.data('pos-y')) {
        if (!($links.data('float-menu'))) {
          $links.clone(true).addClass('float-menu').appendTo('body');
          $links.data('float-menu', true);
        }
      } else if ($links.data('float-menu')) {
        $('.float-menu').remove();
        $links.data('float-menu', false);
      }
    });
  }
};
jr.numLinks = 5;
jr.topBarSize = 54 /* px */;
jr.updateSectionPositions_ = function() {
  var $menuLinks = $('.menu-link');
  $menuLinks.each(function(i) {
    var $this = $(this);
    jr.contentTop[i % jr.numLinks] = $($this.attr('href')).offset().top;
    $this.data('index', i);
  });
};

jr.setUpScrolling = function() {
  if (!jr.isMobile()) {
    var animationTime = 1000;
    // Stop animated scroll if the user does something
    $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
      if (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') {
        $('html,body').stop();
      }
    });

    jr.updateSectionPositions_();
    $(window).resize(function() {
      jr.updateSectionPositions_();
    });


    // Animate menu scroll to content
    $('.menu-link').click(function() {
      var sel = this;
      var newTop = Math.min(jr.contentTop[$(this).data('index') % jr.numLinks] - jr.topBarSize, $(document).height() - $(window).height()); // get content top or top position if at the document bottom
      $('html,body').stop().animate({'scrollTop': newTop + 1}, animationTime, function() {
        window.location.hash = $(sel).attr('href');
      });
      return false;
    });

    // adjust top menu
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop() + jr.topBarSize;
      var set = false;
      $.each(jr.contentTop, function(i, loc) {
        if (set) return; // short circuit if we've already set the menu
        var nextLoc = jr.contentTop[i + 1] || $(document).height(); 
        if (loc <= scrollPos && nextLoc > scrollPos) {
          // do this to both the floating menu and the in-place menu
          $('.links li').removeClass('selected').eq(i).addClass('selected');
          $('.float-menu li').removeClass('selected').eq(i).addClass('selected');
          set = true;
        }
      });
    });
  }
};

$(document).ready(function() {
  jr.setUpFloatingMenu();
  jr.setUpScrolling();
});
