var temperature = $('#temperature').val();
var celsius = 0;
var fahrenheit = 0;

$('#convertor').submit(function(e){
	e.preventDefault();
	temperature = $('#temperature').val() *1;
	if ($.isNumeric($('#temperature').val())){
    	convertTemp();
  	} else {
    	alert("Please enter in a valid temperature value.");
  	}
})

function convertTemp() {
	if ($('input[name=temperatureUnit]:checked').val()=="fahrenheit") {
		// Celsius = (Fahrenheit - 32)/1.8
		celsius = (temperature-32)/1.8;
	} else {
		celsius = temperature;
	}
	$('#celsius').text(celsius);
	changeBackground();
}

function changeBackground () {
	if (celsius < 0) {
		$('body').css('background-color','#3300FF');
	} else if (celsius < 11) {
		$('body').css('background-color','#99CCFF');
	} else if (celsius < 21) {
		$('body').css('background-color','#FFFF00');
	} else if (celsius < 31) {
		$('body').css('background-color','#FF9900');
	} else if (celsius < 41) {
		$('body').css('background-color','#FF6600');
	} else {
		$('body').css('background-color','#FF0000');
	}
}