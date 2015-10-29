//$('#salary')
var salary = 0;
var taxpayable = 0;
var taxBracket1 = 0;
var taxBracket2 = 0.19;
var taxBracket3 = 0.325;
var taxBracket4 = 0.37;
var taxBracket5 = 0.45;

$(document).ready(function(){

	$('#calculate').click(function(){
		//needed to change salary value to number for calculating
		salary = parseInt($('#salary').val());

		if (salary < 18201 ) {
			taxpayable = 0;
			// display tax payable result
			$('#tax').text(taxpayable);
			// display tax payable result
			$('#tax-bracket').text('$0 - $18200');
		
		} else if (salary >= 18201 && salary <= 37000) {
			// calculate tax payable and save to taxpayable variable
			// if salary is $18201 then you would pay $1 x $0.19 = $0.19
			taxpayable = (salary - 18200) * taxBracket2;
			// display tax payable result
			$('#tax').text(taxpayable); 
			// display tax payable result
			$('#tax-bracket').text('$18201 - $37000'); 
		
		} else if (salary >= 37001 && salary <= 80000) {
			// calculate tax payable and save to taxpayable variable
			// if salary is $37001 then you would pay $1 x $0.32.5 + $3572 = $3572.325
			taxpayable = (salary - 37000) * taxBracket2 + 3572;
			// display tax payable result
			$('#tax').text(taxpayable); 
			// display tax payable result
			$('#tax-bracket').text('$18201 - $37000'); 
		
		} else if (salary >= 80001 && salary <= 180000) {
			alert('80001-180000');
		} else if (salary > 180000) {
			alert('180001+');
		}
	});

});

//danielle.grothen@etouches.com