var toggle = 0;

$('#toggle').click(function(){
	if (toggle===0){
		$('#productContent').hide();
		$('#footer').hide();
		$('#toggle').html("<i class=\"fa fa-caret-down\"></i>")
		toggle = 1;
	}
	else {
		$('#productContent').show();
		$('#footer').show();
		$('#toggle').html("<i class=\"fa fa-caret-up\"></i>")
		toggle = 0;
	}

});