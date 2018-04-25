window.onload = init;

function init (){
		
	document.querySelector('.hamburger').onclick = showHideMobileMenu;
	$('.hamburger').on('click', function(){

		// .slideToggle(time) is the Jquery function that shows/hides elements with a slide animation 
		// time is speficied to determine the duration of animation
		// $('.mobile_nav').slideToggle(500);
		$('.mobile_nav').slideToggle(500);
});
}

function showHideMobileMenu() {

	mobileNav = document.querySelector('.mobile_nav');
	// mobileNav.style.display = "block";
	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}
}

function autoSlider() {

	var slideThumbs = document.querySelectorAll('.img-slide-thumb');
	// by default activeThumbIndex = 0 
	// therefore the accessed Thumnail will be 'img-slide-thumb-1' or the first thumbnail in the slideThumbs array
	changeSlide(slideThumbs[activeThumbIndex]);
	activeThumbIndex++;
	// in this case when activeThumbIndex becomes 2 we want it to switch back to 0
	if(activeThumbIndex == slideThumbs.length) {activeThumbIndex = 0};

	// setTimout(functionName, repeat-after-milliseconds) function calls the given function after the speficied time and makes an infinite looping functionality 
	setTimeout(autoSlider, 3000);
}