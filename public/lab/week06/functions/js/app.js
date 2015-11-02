var myHeightCM = 175;
var myWeightKG = 70;
var BMI = calculateBMI(myHeightCM, myWeightKG);

var BMI = calculateBMI(175,70);

function calculateBMI (height, weight) {
	return (weight / height);
}
