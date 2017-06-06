<h1>clientKMC-HTML-CSS</h1> <br>
This website was built for a yoga teacher as a way to reach both clients and potential clients.<br>
The purpose is to provide contact and wellness information. It is an online business card.<br>


<img src="https://cloud.githubusercontent.com/assets/24955929/26830701/b4020fec-4a97-11e7-8870-aaa700e8d999.png">

FEATURES<br>
Accordion Navigation Menu
Expandable/Clickable Buttons
Imbedded Educational Video
Mailto Contact Feature

TECH/FRAMEWORKS/LIBRARIES USED<br>
<ul> 
<li>HTML5</li>
<li>CSS3</li>
<li>jQuery</li>
<li>accordion.js</li>
</ul>


USAGE<br>

$(document).ready(function() {
	"use strict";
	
	$('.accordion .accordion-control').on('click', function(e){
		e.preventDefault();

		$(this)
		.next('.accordion-panel')
		.slideToggle();

	});	// end accordion click

});	//end ready

Through the on click() function, each time the user interacts with the website, he or she is interacting with said function. 
This is what determines whether or not the accordion menu will open or close. 


TESTS<br>
<ul>Website was tested in the following browsers:
<li>Safari 10.1.1 </li>
<li>Safari iOS 10— iPhone</li>
<li>Safari iOS 10— iPod touch</li>
<li>Safari iOS 10— iPad</li>
<li>Microsoft Edge</li>
<li>Internet Explorer 11</li>
<li>Internet Explorer 10</li>
<li>Internet Explorer 9</li>
<li>Internet Explorer 8</li>
<li>Internet Explorer 7</li>
<li>Google Chrome for Mac</li>
<li>Google Chrome for Windows</li>
<li>Mozilla Firefox for Windows</li>
<li>Mozilla Firefox for Mac</li>
</ul>



GETTING HELP<br>
If encountering bugs, please e-mail cmmc [at] protonmail [dot] ch


LICENSE<br>
MIT &#169; 2017 Colleen McAuley

