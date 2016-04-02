if (window.matchMedia("(min-width: 768px)").matches) {
    document.getElementById("myNavBar").innerHTML = '<ul class="nav navbar-nav navbar-right"><li><a href="#about">ABOUT</a></li><li><a href="#photography">PHOTOGRAPHY</a></li><li><a href="#design">DESIGN&LAYOUT</a></li><li><a href="#contact">CONTACT</a></li></ul>';
}

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 150) {
			$("nav").addClass("navbar-opaque");
		} else {
			$("nav").removeClass("navbar-opaque")
		}
	})
});

//SMOOTH SCROLLING
$(document).ready(function() {
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		event.preventDefault;
		var hash = this.hash;
		
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function(){
			window.location.hash = hash;
		});
	});
});
