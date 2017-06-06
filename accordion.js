$(document).ready(function() {
	"use strict";
	

	$('.accordion .accordion-control').on('click', function(e){
		e.preventDefault();

		$(this)
		.next('.accordion-panel')
		.slideToggle();

	});	// end accordion click


});	//end ready

