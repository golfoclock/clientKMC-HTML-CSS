$(document).ready(function() {
	"use strict";
	

	$('.accordion .accordion-control').on('click', function(e){
		e.preventDefault();
// console.log('click')

		$(this)
		.next('.accordion-panel')
		.slideToggle();

	});	// end accordion click


});	//end ready