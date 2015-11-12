//$('.box').click(function(){

$('.box').click(function(){
	$('.results').css("color","red");
	$('.results').text("Wrong!");
});

$('.box.red').click(function(){
	$('.results').css("color","green");
	$('.results').text("Correct!");
});

/*
#Colour Test
This task is a colour test

* The user is given 6 different options and has to choose the box with the correct colour.
* If the user choses the correct colour, you should print in the results div "Correct!" in green.
* If the user choses the wrong colour, you should print in the results div "Wrong!" in red.
*/