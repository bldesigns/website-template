var url = 'https://fewd20.herokuapp.com/data';

var obj = {
	data: {
		name: 'Benson',
		reason: 'start a new career'
	}	
}


$('#send').click(function(){
	$.post(url, obj, function(data, status){
	    $('#success').show();
	}).fail(function(data){
	    $('#error').show();
	})
});

var usedNames = [];

$('#read').click(function(){
	$.get(url, obj, function(data, status){
	    for (var i=0; i<data.length; i++){

	    	if (usedNames.indexOf(data[i].name) === -1){
		    	usedNames.push(data[i].name);
		    	$('#list').append('<li>Name:' + data[i].name + ' reason: ' + data[i].reason + '</li>');
		    	//console.log(data[i].name);	
		    }

	    }
	}).fail(function(data){
	    $('#error').show();
	})
});