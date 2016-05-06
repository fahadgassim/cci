/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
	// Initialize jVector Map
	var gdpData = {
	  "CR": 2,
	  "UA": 2,
	};
	
	$('#world-map').vectorMap({
	  map: 'world_mill',
	  backgroundColor: '#f05f40',
	  series: {
		regions: [{
		  values: gdpData,
		  scale: ['#C8EEFF', '#383A3F'],
		  normalizeFunction: 'polynomial'
		}]
	  },
	});
	
	// Initialize CountUp
	var options = {
		useEasing : false, 
		useGrouping : true, 
		separator : ',', 
		decimal : '.', 
		prefix : '', 
		suffix : '' 
		};
	var employeeCount = new CountUp("employeeCount", 0, 140, 0, 1.5, options);
	var clothingCount = new CountUp("clothingCount", 0, 8, 0, 1, options);
	var tonCount = new CountUp("tonCount", 0, 280, 0, 1.6, options);
	var yearCount = new CountUp("yearCount", 0, 20, 0, 1.25, options);
	employeeCount.start();
	clothingCount.start();
	tonCount.start();
	yearCount.start();

})(jQuery); // End of use strict
