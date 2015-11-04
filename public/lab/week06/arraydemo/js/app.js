var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ,'j', 'k'];

for (var i = 0; i < letters.length; i++) {
    alert(letters[i]);
}



var numbers = ['1','1','2','3','8','11'];

for (var i = numbers.length; i < numbers.length+20; i++) { //infinite loop
    alert(numbers[i]);
}

//correct way would be 

var len = numbers.length;

for (var i = len; i < len+20; i++){
	numbers[i] = [numbers[i-1]+numbers[i-2]];
}