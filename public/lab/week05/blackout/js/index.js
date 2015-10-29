var lightsw = 0;
var color = 'black';

$(document).ready(lightswitch())


function lightswitch(){
	$('#light_switch').click(function(){
		if (lightsw==0){
			$('body').css('background-color',color);
			color = 'white';
			lightsw = 1;
		} else {
			$('body').css('background-color',color);
			color = 'black';
			lightsw = 0;
		}
	});
}