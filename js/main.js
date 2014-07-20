jr = {};
jr.contentTop = [];

jr.bridesmaids = [{
        name: 'Melissa Timmons',
        title: 'The College Roommate',
        imageUrl: 'img/party/melissa.jpg',
        blurb: "It all started Sophomore year of high school when I’m pretty sure Paige and I challenged her to a game of 007 Nightfire on Play Station. We quickly became close and decided we would room together as freshman at UT. Little did I know that would start a 4 year stint as a married couple (sorry, Tyler!). We’ve been through it all and grown so much together throughout college."
    },
    {
        name: 'Paige Fults',
        title: 'The Childhood Friend',
        imageUrl: 'img/party/paige.jpg',
        blurb: "Not many people can say they’ve seen me in a diaper...luckily. Paige and I have exceeded all boundaries when it comes to our friendship. We were Brownies together and vampires together. We remained best friends in a pre-cell phone and pre-email world when I moved to Saudi, and we are closer than ever despite living on separate sides of the country. It’s pretty awesome."
    },
    {
        name: 'Jennifer Bell',
        title: 'The Post-College BFF',
        imageUrl: 'img/party/jenn.jpg',
        blurb: "It’s safe to say that Jenn has been there to support me through all the life changes of the last 2 years. Not many people can say that their friendship started around a night dedicated to watching notoriously bad movies, but we did it! She has been there from the early months of my relationship with Tyler, to the engagement, and through our move to California. She is also the best listener in the world." 
    },
    {
        name: 'Ellen Pitts',
        title: 'The Aggie',
        imageUrl: 'img/party/ellen.jpg',
        blurb: "Because every Longhorn needs that one Aggie friend! We were close in high school but I would have never guessed we would remain as close as we did throughout college. I can always be certain that even though Ellen and I have grown separately, we seem to always resume right where we left off. Since I followed her to the Pacific coast, I am only sure that our friendship will remain this way for years to come."
    },
    {
        name: 'Shradha Thakur',
        title: 'The Introducer',
        imageUrl: 'img/party/shradha.jpg',
        blurb: "In high school the whole school did a “friendship test” to identify who within your grade you were compatible with - all in the name of charity of course. Shradha turned out to be my number one pick. We went about our high school careers never really interacting until the end of freshman year of UT. Melissa and I were looking for more roommates and Shradha just so happened to need some as well (and a 414 shoutout to Brenna)! I guess the compatibility test was correct because we ended up living together for 4 years. And one final note, I’m going to give Shradha the credit she has always wanted: she is responsible for introducing Tyler and I."
    }
];

jr.groomsmen = [{
        name: 'Jeff Rhodes',
        title: 'The Brother',
        imageUrl: 'img/party/jeff.jpg',
        blurb: "Jeff and I go way back. Even though he once hit me with a ping pong paddle so hard that it broke (I won the match :) ), Jeff has always been an awesome role model for me. Some might even say that is why we ended up being so similar. Even though we live on opposite sides of the country, every time we see each other it’s like we never missed a beat."
    },
    {
        name: 'Alec Herzog',
        title: 'The Drummer',
        imageUrl: 'img/party/alec.jpg',
        blurb: "I still remember meeting Alec while waiting our percussion lessons during the summer before 8th grade. Fast forward 10 (!?) years. We have been through it all: drumline, proms, graduations, and, most importantly, monster truck rallies. Give it a couple more months, and I’ll be able to add a wedding to that list!"
    },
    {
        name: 'Simon Dollo',
        title: 'The Canadian',
        imageUrl: 'img/party/simon.jpg',
        blurb: "In true Canadian fashion, the first word Simon ever spoke to me was \“Sorry\”. Sorry for what, you may ask. I honestly don’t remember. He was probably sorry for introducing me to the movie \“The Room.\” Or maybe it was for almost killing us in his brake-less car. All jokes aside, Simon has been a fantastic friend ever since the first (but definitely not last) \"sorry,\" and I’m so glad he’s going to be a part of our special day."
    },
    {
        name: 'Will Campbell',
        title: 'The Soups',
        imageUrl: 'img/party/will.jpg',
        blurb: "Will \“Lil’ Soups\” Campbell was one of the HomeAway-ers that I met. With similar interests (that definitely no one else had), such as frisbee and beer, we were destined to be best buds. And best buds we became. Over the next two years, we watched some of the crappiest movies ever made, endured Simon’s terrible, terrible puns, and worked really hard at avoiding work."
    },
    {
        name: 'Richard Veras',
        title: 'The Influencer',
        imageUrl: 'img/party/richard.jpg',
        blurb: "It’s true: Richard and I met in high school computer science club. We were cool kids back then, much like we are now. When I was checking out colleges, I hadn’t even considered going to UT until Richard showed me around. He even got me into his research group (cool kids, remember?). Despite becoming vegetarian \“for the fun of it\”, Richard was my best friend throughout college, and I can’t even begin to count the number of adventures we had."
    }];

jr.lodging = [
  {
    name: "Hampton Inn & Suites",
    distance: "2.3 miles",
    address1: "2013 FM 620 South",
    address2: "Austin, Texas 78734",
    phone: "(512) 263-7474",
    url: "http://hamptoninn3.hilton.com/en/hotels/texas/hampton-inn-and-suites-austin-lakeway-AUSLWHX/index.html"
  },
  {
    name: "Mountain Star Lodge",
    distance: "3.6 miles",
    address1: "3573 RR 620 South",
    address2: "Austin, Texas 78738",
    phone: "(888) 263-2010",
    url: "www.mountainstarlodge.com"
  },
  {
    name: "The Lakeway Resort & Spa",
    distance: "3.9 miles",
    address1: "101 Lakeway Drive",
    address2: "Austin, Texas 78734",
    phone: "(512) 261-6600",
    url: "www.lakewayresortandspa.com"
  },
  {
    name: "Holiday Inn Express",
    distance: "5.1 miles",
    address1: "15707 Bella Blvd",
    address2: "Austin, Texas 78734",
    phone: "(512) 735-5555",
    url: "http://www.ihg.com/holidayinnexpress/hotels/us/en/lakeway/ausog/hoteldetail"
  },
];

jr.setUpFloatingMenu = function() {
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

jr.lodgingTemplate = Hogan.compile($('#lodging-template').text());

jr.setUpLodgingSection = function() {
  var $el = $('#lodging-article');
  $.each(jr.lodging, function() {
    $el.append(jr.lodgingTemplate.render(this));
  });
};

jr.setUpParallax = function() {
  var $window = $(window);
  $('.section[data-type="background"]').each(function() {
    var $that = $(this);
    $window.scroll(function() {
      var pos = parseInt($that.data('original-y'));
      var yPos = pos - ($window.scrollTop() / $that.data('speed'));
      // only parallax goodness if above 960 px 
      if ($window.width() >= 960) {
        $that.css({backgroundPositionY: yPos + 'px'});
      }
    });
  });
};

$(document).ready(function() {
  jr.setUpPartySection();
  jr.setUpLodgingSection();
  jr.setUpParallax();
  jr.setUpFloatingMenu();
  jr.setUpScrolling();
});
