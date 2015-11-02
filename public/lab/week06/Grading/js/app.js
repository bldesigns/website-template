var mark = $('#mark').val();
var result; //Unassigned at this point

$('#grade').click(function(){
	mark = $('#mark').val();
	// no need to explicitly define mark >= 75 && mark < 85 due to top down logic flow
	if (mark >= 85) {
		result = 'HD';
	} else if (mark >= 75){
		result = 'DN';
	} else if (mark >= 65){
		result = 'CR';
	} else if (mark >= 50){
		result = 'PS';
	} else {
		result = 'FL';
	}
	$('#result').text(result); //Print result to screen
});
