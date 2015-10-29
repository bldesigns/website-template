var value1 = 0;
var value2 = 0;

$(document).ready(function(){
	compare();
});

function compare() {
	$('#submit').click(function(){
		value1 = parseInt($('#a').val());
		value2 = parseInt($('#b').val());

		if ($('#a').val().length == 0 || $('#b').val().length == 0){
			alert ('Please check that you have entered a number into both boxes for comparison.');
		}
		else if (value1 > value2) {
			$('#comparison').text('>');
		} else if (value1 < value2) {
			$('#comparison').text('<');
		} else {
			$('#comparison').text('=');
		}	
	});
}