$('body').keydown(function(e){
	//alert(e.which);
	if (e.which == 37 || e.which == 65){
		//left
		//alert('move left');
		$('#ball').animate({
			left: "-=50"
		});
	} else if (e.which == 40 || e.which == 83){
		//down
		//alert('move down');
		$("#ball").finish().animate({
            top: "+=50"
        });
	} else if (e.which == 39 || e.which == 68){
		//right
		//alert('move right');
		$('#ball').animate({
			left: "+=50"
		});
	} else if (e.which == 38 || e.which == 87){
		//up
		//alert('move up');
		$("#ball").finish().animate({
            top: "-=50"
        });
	}
})