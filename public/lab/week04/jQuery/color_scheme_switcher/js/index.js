$('#grayButton').click(function(){
	$('body').css({
		backgroundColor: 'red'
	})
})

$('#whiteButton').click(whenWhiteButtonClicked)	//assigns listener trigger to #whiteButton

function whenWhiteButtonClicked(){
	$('#grayButton').click(function(){
		alert('tickles');	
	})
}

whenWhiteButtonClicked() //activates listener for grayButton
