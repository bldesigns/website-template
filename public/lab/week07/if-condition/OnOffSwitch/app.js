var box1State = false;
var box2State = false;
var box3State = false;
var box4State = false;
var box5State = false;
var box6State = false;
var box7State = false;
var box8State = false;

$('.switch.box1').click(function(){
	if (box1State){
		$('.switch.box1').css('background-color','white');
		box1State = false;
	} else {
		$('.switch.box1').css('background-color','red');
		box1State = true;
	}
});

$('.switch.box2').click(function(){
	if (box2State){
		$('.switch.box2').css('background-color','white');
		box2State = false;
	} else {
		$('.switch.box2').css('background-color','orange');
		box2State = true;
	}
});

$('.switch.box3').click(function(){
	if (box3State){
		$('.switch.box3').css('background-color','white');
		box3State = false;
	} else {
		$('.switch.box3').css('background-color','yellow');
		box3State = true;
	}
});

$('.switch.box4').click(function(){
	if (box4State){
		$('.switch.box4').css('background-color','white');
		box4State = false;
	} else {
		$('.switch.box4').css('background-color','lime');
		box4State = true;
	}
});

$('.switch.box5').click(function(){
	if (box5State){
		$('.switch.box5').css('background-color','white');
		box5State = false;
	} else {
		$('.switch.box5').css('background-color','green');
		box5State = true;
	}
});

$('.switch.box6').click(function(){
	if (box6State){
		$('.switch.box6').css('background-color','white');
		box6State = false;
	} else {
		$('.switch.box6').css('background-color','blue');
		box6State = true;
	}
});

$('.switch.box7').click(function(){
	if (box7State){
		$('.switch.box7').css('background-color','white');
		box7State = false;
	} else {
		$('.switch.box7').css('background-color','purple');
		box7State = true;
	}
});

$('.switch.box8').click(function(){
	if (box8State){
		$('.switch.box8').css('background-color','white');
		box8State = false;
	} else {
		$('.switch.box8').css('background-color','indigo');
		box8State = true;
	}
});