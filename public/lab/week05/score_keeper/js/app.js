var score = 0;

$(document).ready(function(){
	format();

	$('#zero').click(function(){
		score = 0;
		updateScore();
		alert(this.id);
	});
	$('#add5').click(function(){
		score+=5;
		updateScore();
		alert($(this).attr('id'));
	});
	$('#add10').click(function(){
		score+=10;
		updateScore();
		alert($(this).attr('id'));
	});
	$('#sub1').click(function(){
		score-=1;
		updateScore();
		alert($(this).attr('id'));
	});
});

function updateScore(){
	$('#result').text(score);
}

function format(){
	$('#result').css('font-family','lucida sans');
	$('#result').css('background-color','darkolivegreen');
	$('#result').css('border','solid 2px black');
	$('#result').css('width','8em');
	$('#result').css('color','darkgrey');
	$('#result').css('text-align','right');
	$('#result').css('padding','1px');
}