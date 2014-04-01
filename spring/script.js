// On your marks, get set...
$(document).ready(function(){
	console.log("loading 1");
	
	/* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
    		console.log("hovering")
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    						
     $(window).scroll(function() {
     	redrawDotNav();
     });

	// Cache the Window object
	$window = $(window);
	

	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
	//	var $self = $(this),
	//		offsetCoords = $self.offset(),
	//		topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
			console.log("scrolling");
			redrawDotNav();
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type




}); // document ready

function nextList() {
	$('#weekendlist2').fadeIn();	
	$('#weekendlist1').hide();												
}

function prevList() {
	$('#weekendlist1').fadeIn();	
	$('#weekendlist2').hide();												
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#Formal').offset().top - (($('#ArtsGala').offset().top - $('#Formal').offset().top) / 2);
	var section3Top =  $('#ArtsGala').offset().top - (($('#WorkShops').offset().top - $('#ArtsGala').offset().top) / 2);
	var section4Top =  $('#WorkShops').offset().top - (($('#Cooking').offset().top - $('#WorkShops').offset().top) / 2);
	var section5Top =  $('#Cooking').offset().top - (($('#BacContest').offset().top - $('#Cooking').offset().top) / 2);
	var section6Top =  $('#BacContest').offset().top - (($('#HappyHours').offset().top - $('#BacContest').offset().top) / 2);
	var section7Top =  $('#HappyHours').offset().top - (($('#SeniorNights').offset().top - $('#HappyHours').offset().top) / 2);
	var section8Top =  $('#SeniorNights').offset().top - (($('#BarCrawl').offset().top - $('#SeniorNights').offset().top) / 2);
	var section9Top =  $('#BarCrawl').offset().top - (($('#Trivia').offset().top - $('#BarCrawl').offset().top) / 2);
	var section10Top =  $('#Trivia').offset().top - (($('#Swag').offset().top - $('#Trivia').offset().top) / 2);
	var section11Top =  $('#Swag').offset().top - (($('#Bookstore').offset().top - $('#Swag').offset().top) / 2);
	var section12Top =  $('#Bookstore').offset().top - (($('#DormReunions').offset().top - $('#Bookstore').offset().top) / 2);
	var section13Top =  $('#DormReunions').offset().top - (($('#ReverseSendOff').offset().top - $('#DormReunions').offset().top) / 2);
	var section14Top =  $('#ReverseSendOff').offset().top - (($('#Match').offset().top - $('#ReverseSendOff').offset().top) / 2);
	var section15Top =  $('#Match').offset().top - (($('#Toast').offset().top - $('#Match').offset().top) / 2);
	var section16Top =  $('#Toast').offset().top - (($('#GradWeekend').offset().top - $('#Toast').offset().top) / 2);
	var section17Top =  $('#GradWeekend').offset().top - (($('#Facebook').offset().top - $('#GradWeekend').offset().top) / 2);
	var section18Top =  $('#Facebook').offset().top - (($(document).height() - $('#Facebook').offset().top) / 2);;
	
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.first').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.second').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.third').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.fourth').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.fifth').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.sixth').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.seventh').addClass('active');
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top){
		$('nav#primary a.eighth').addClass('active');
	} else if ($(document).scrollTop() >= section9Top && $(document).scrollTop() < section10Top){
		$('nav#primary a.ninth').addClass('active');
	} else if ($(document).scrollTop() >= section10Top && $(document).scrollTop() < section11Top){
		$('nav#primary a.tenth').addClass('active');
	} else if ($(document).scrollTop() >= section11Top && $(document).scrollTop() < section12Top){
		$('nav#primary a.eleventh').addClass('active');
	} else if ($(document).scrollTop() >= section12Top && $(document).scrollTop() < section13Top){
		$('nav#primary a.twelvth').addClass('active');
	} else if ($(document).scrollTop() >= section13Top && $(document).scrollTop() < section14Top){
		$('nav#primary a.thirteenth').addClass('active');
	} else if ($(document).scrollTop() >= section14Top && $(document).scrollTop() < section15Top){
		$('nav#primary a.fourteenth').addClass('active');
	} else if ($(document).scrollTop() >= section15Top && $(document).scrollTop() < section16Top){
		$('nav#primary a.fifteenth').addClass('active');
	} else if ($(document).scrollTop() >= section16Top && $(document).scrollTop() < section17Top){
		$('nav#primary a.sixteenth').addClass('active');
	} else if ($(document).scrollTop() >= section17Top && $(document).scrollTop() < section18Top){
		$('nav#primary a.seventeenth').addClass('active');	
	} else if ($(document).scrollTop() >= section18Top){
		$('nav#primary a.eighteenth').addClass('active');
	} 
	
}

// FAQ
