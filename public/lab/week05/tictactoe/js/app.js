var posneg = 1;
var value;

$('#box1-1').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box1-1').text(value);
	posneg = posneg * (-1);
})

$('#box1-2').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box1-2').text(value);
	posneg = posneg * (-1);
})

$('#box1-3').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box1-3').text(value);
	posneg = posneg * (-1);
})

$('#box2-1').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box2-1').text(value);
	posneg = posneg * (-1);
})

$('#box2-2').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box2-2').text(value);
	posneg = posneg * (-1);
})

$('#box2-3').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box2-3').text(value);
	posneg = posneg * (-1);
})

$('#box3-1').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box3-1').text(value);
	posneg = posneg * (-1);
})

$('#box3-2').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box3-2').text(value);
	posneg = posneg * (-1);
})

$('#box3-3').click(function(){
	if (posneg < 0) {
		value = 'X'
	} else {
		value = 'O'
	}

	$('#box3-3').text(value);
	posneg = posneg * (-1);
})

$(document).ready(function(){alert(posneg);})

