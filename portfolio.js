$(document).ready(function(){

	// var parallax = $('.parallax');

	// $(document).on('scroll', function(){
	// 	var currScrollPos = $(document).scrollTop();
	// 	parallax.css('background-position', '0 ' -currScrollPos/4 + 'px')
	// })


	var ypos, image;
	function parallax(){
		console.log('parallaxing all cool')
		ypos = window.pageYOffset;
		image = document.getElementById('parallax');
		image.style.top = (ypos * .4) + 'px';
	}

	window.addEventListener('scroll', parallax)


});