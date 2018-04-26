window.onload = init;

function init (){
		
	document.querySelector('.hamburger').onclick = showHideMobileMenu;
	$('.hamburger').on('click', function(){
	$('.mobile_nav').slideToggle(500);
});
}

function showHideMobileMenu() {

	mobileNav = document.querySelector('.mobile_nav');
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}
}

function autoSlider() {

	var slideThumbs = document.querySelectorAll('.img-slide-thumb');
	changeSlide(slideThumbs[activeThumbIndex]);
	activeThumbIndex++;
	if(activeThumbIndex == slideThumbs.length) {activeThumbIndex = 0};


}