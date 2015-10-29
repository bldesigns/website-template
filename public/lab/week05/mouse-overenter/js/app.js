var enterWrap = 0;
var mouseOver = 0;

$('.wrap').mouseenter(function(){
	enterWrap++;
	$('.data').text("Number of times entered: " + enterWrap);
});


$('.inner-0').mouseover(function(){
	mouseover++;
	
	$('.data').text("Number of times mouse over: " + mouseover);
});