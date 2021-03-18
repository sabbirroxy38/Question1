jQuery(document).ready(function() {
    "use strict";

/* -------- Appears Menu ------ */
	$(window).on('ready , scroll', function() {
	    if ($(window).scrollTop() > 30) {
	        $('.main-menu').addClass('minified');
	    } else {
	        $('.main-menu').removeClass('minified');
	    }
	});

/* ---------- Hide Menu-------- */
  jQuery(".nav a").on("click", function () {
      jQuery("#nav-menu").removeClass("in").addClass("collapse");
  });

/* --------- One Page Navigation -------- */
	$('#collapsingNavbar').onePageNav({
	    currentClass: 'active',
	    scrollSpeed: 500,
	    easing: 'linear'
	});

/* --------- Carousel Slider ---------- */
	// Feature Works
	$("#teams").owlCarousel({
		items : 3,
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile : [520,1],
		autoPlay: 5000
	});

/* ------------ Stellar ----------- */
$(window).stellar({
	responsive: true,
    positionProperty: 'position'
});

/* ------------ Home Slider ------------- */
$( '#slider' ).sliderPro({
	width: '100%',
    height: 600,
    fade: true,
    waitForLayers: true,
    buttons: true,
    autoplay: true,
    autoScaleLayers: false,
    slideAnimationDuration: 1500,
    breakpoints: {
        600: {
            height: 480
        }
	}
});


});

