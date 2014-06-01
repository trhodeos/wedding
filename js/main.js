jr = {};
jr.contentTop = [];

jr.bridesmaids = [{
        name: 'Melissa Timmons',
        title: 'Maid of Honor',
        imageUrl: 'blah',
        blurb: 'blahblah'
    },
    {
        name: 'Paige Fults',
        title: 'Bridesmaid',
        imageUrl: '/img/party/paige.jpg',
        blurb: "Paige's blurb"
    },
    {
        name: 'Jennifer Bell',
        title: 'Bridesmaid',
        imageUrl: '/img/party/jenn.jpg',
        blurb: "Jenn's blurb"
    },
    {
        name: 'Shradha Thakur',
        title: 'Bridesmaid',
        imageUrl: '/img/party/shradha.jpg',
        blurb: "Shradha's blurb"
    },
    {
        name: 'Ellen Pitts',
        title: 'Bridesmaid',
        imageUrl: '/img/party/ellen.jpg',
        blurb: "Ellen's blurb"
    }
];

jr.groomsmen = [{
        name: 'Jeff Rhodes',
        title: 'Best Man',
        imageUrl: '/img/party/jeff.jpg',
        blurb: "Jeff's blurb"
    },
    {
        name: 'Alec Herzog',
        title: 'Groomsman',
        imageUrl: '/img/party/alec.jpg',
        blurb: "Alec's blurb"
    },
    {
        name: 'Richard Veras',
        title: 'Groomsman',
        imageUrl: '/img/party/richard.jpg',
        blurb: "Richard's blurb"
    },
    {
        name: 'Will Campbell',
        title: 'Groomsman',
        imageUrl: '/img/party/will.jpg',
        blurb: "Will's blurb"
    },
    {
        name: 'Simon Dollo',
        title: 'Groomsman',
        imageUrl: '/img/party/simon.jpg',
        blurb: "Simon's blurb"
    }];

jr.setUpFloatingMenu = function() {
    var $window = $(window),
        $links = $('.links').first();
    
    $links.data('pos-y', $links.position().top);

    $window.scroll(function() {
        if ($window.scrollTop() > $links.data('pos-y')) {
            if (!($links.data('float-menu'))) {
                $links.clone(true).addClass('float-menu').css({position: 'fixed', top: '0px', 'z-index': 99}).appendTo('body');
                $links.data('float-menu', true);
            }
        } else if ($links.data('float-menu')) {
            $('.float-menu').remove();
            $links.data('float-menu', false);
        }
    });
};
jr.topBarSize = 54 /* px */;
jr.updateSectionPositions_ = function() {
    $('.menu-link').each(function(i) {
        var $this = $(this);
        jr.contentTop[i % 4] = $($this.attr('href')).offset().top;
        $this.data('index', i);
    });
};

jr.setUpScrolling = function() {
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
    var sel = this,
    newTop = Math.min(jr.contentTop[$(this).data('index') % 4], $(document).height() - $(window).height()); // get content top or top position if at the document bottom
  $('html,body').stop().animate({'scrollTop': newTop - jr.topBarSize}, animationTime, function() {
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
};

jr.partyTemplate = Hogan.compile($('#party-template').text());

jr.renderPartyBlurb = function($el, data) {
    $el.append(jr.partyTemplate.render(data));
};
jr.setUpPartySection = function() {
    var $girls = $('#girls'),
        $guys = $('#guys');
    
    $.each(jr.bridesmaids, function() {
        jr.renderPartyBlurb($girls, this);
    });
    $.each(jr.groomsmen, function() {
        jr.renderPartyBlurb($guys, this);
    });
};

jr.setUpParallax_ = function() {
  var $window = $(window);
  $('.section[data-type="background"]').each(function() {
    var $that = $(this);
    $window.scroll(function() {
      var pos = parseInt($that.data('original-y')),
      yPos = pos - ($window.scrollTop() / $that.data('speed')),
      coords = yPos + 'px',
      width = $window.width();
      // only parallax goodness if above 960 px 
    if (width >= 960) {
      $that.css({backgroundPositionY: coords});
    }
    });
  });
};

$(document).ready(function() {
  jr.setUpParallax_();
  jr.setUpPartySection();
  jr.setUpScrolling();
  jr.setUpFloatingMenu();
});
