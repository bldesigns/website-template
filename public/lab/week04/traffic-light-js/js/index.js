$('#stopButton').click(function(){
	illuminateRed();
})

$('#slowButton').click(function(){
	illuminateYellow();
})

$('#goButton').click(function(){
	illuminateGreen();
})

function illuminateRed() {
  clearLights();
  setTimeout(function(){
	$('#stopLight').css("background-color","red");
  },1000)
}

function illuminateYellow() {
  clearLights();
  setTimeout(function(){
  	$('#slowLight').css("background-color","yellow"); 
  },1000)
}
/*
function clearLights() {
  $('#stopLight').css("background-color","black");  
  $('#slowLight').css("background-color","black"); 
  $('#goLight').css("background-color","black");   
}
*/

function clearLights() {
  $('.bulb').css("background-color","black");  
}

function illuminateGreen() {
  clearLights();
  setTimeout(function(){
  	$('#goLight').css("background-color","green"); 
  },1000)
}

$(document).ready(function(){alert("test code");})