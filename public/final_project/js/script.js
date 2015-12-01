// images & icons
var arrowDown = "img/arrow-down-512px.svg";

var locateImg = "img/purple-locate.svg";
var twitterImg = "img/purple-twitter.svg";
var facebookImg = "img/purple-fb.svg";
var instagramImg = "img/purple-instagram.svg";
var googleImg = "img/purple-google.svg";
var pinterestImg = "img/purple-pinterest.svg";
var emailImg = "img/purple-email.svg";
var phoneImg = "img/purple-phone.svg";

var ingredient1Img = "img/raspberries.png";
var ingredient2Img = "img/pomegranate.png";
var ingredient3Img = "img/blueberries.png";

var blog1Img = "img/blog1.png";
var blog2Img = "img/blog2.png";
var blog3Img = "img/blog3.png";
var blog4Img = "img/blog4.png";
var blog5Img = "img/blog5.png";
var blog6Img = "img/blog6.png";

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
        $('.navbar-header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
            $('.navbar-header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$().ready(function(){
	$('.arrow-down').attr("src",arrowDown);
	//ingredient images
	$('#ingredient1-image').attr("src",ingredient1Img);
	$('#ingredient1-modal-image').attr("src",ingredient1Img);
	$('#ingredient2-image').attr("src",ingredient2Img);
	$('#ingredient2-modal-image').attr("src",ingredient2Img);
	$('#ingredient3-image').attr("src",ingredient3Img);
	$('#ingredient3-modal-image').attr("src",ingredient3Img);

	//social media icons
	$('#locate-ico').attr("src",locateImg);
	$('#twitter-ico').attr("src",twitterImg);
	$('#fb-ico').attr("src",facebookImg);
	$('#google-ico').attr("src",googleImg);
	$('#insta-ico').attr("src",instagramImg);
	$('#pinterest-ico').attr("src",pinterestImg);
	$('#email-ico').attr("src",emailImg);
	$('#phone-ico').attr("src",phoneImg);

	//blog images
	$('#blog1').attr("src",blog1Img);
	$('#blog2').attr("src",blog2Img);
	$('#blog3').attr("src",blog3Img);
	$('#blog4').attr("src",blog4Img);
	$('#blog5').attr("src",blog5Img);
	$('#blog6').attr("src",blog6Img);

	if($(window).width() < 568){
  		$('.blog-hr').show();
	}
});