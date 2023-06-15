// Returns true if the specified element has been scrolled into the viewport.
// function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

function isElementInViewport(elem) {
	var $elem = $(elem);

	// Get the scroll position of the page.
	var scrollElem =
		navigator.userAgent.toLowerCase().indexOf("webkit") !== -1
			? "body"
			: "html";
	var viewportTop = $(scrollElem).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	// Check if the element exists
	if ($elem.length === 0) {
		return false;
	}

	// Get the position of the element on the page.
	var elemTop = Math.round($elem.offset().top);
	var elemBottom = elemTop + $elem.outerHeight();

	return elemTop < viewportBottom && elemBottom > viewportTop;
}

// Check if it's time to start the animation.
function checkAnimation() {
	var $elem = $(".Web,.Graphics,.Developing,.Photoshop,.Photography");

	if (isElementInViewport($elem)) {
		// Start the animation
		$elem.addClass("start");
	} else {
		$elem.removeClass("start");
	}
}

// Capture scroll events
$(window).scroll(function () {
	checkAnimation();
});
