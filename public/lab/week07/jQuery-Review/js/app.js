var students = ['Stephanie', 'Benson', 'Alice', 'Alissa', 'Rhianna', 'Lauren', 'Audrey', 'Sam', 'Ester', 'Tegan', 'Chev', 'Michelle'];

for (var i=0; i<students.length; i++){
	var person = students[i];
	$('#list').append("<li>" + person + "</li>");
}

$('#filter').keyup(function(){ //.keyup() will happen once key is released
	var filter = $('#filter').val();
	//console.log(filter);
	$('#list').html('');

	for (var i=0; i<students.length; i++){
		var person = students[i];
		//.indexOf(filter) > -1 means it cannot find anything
		if (person.toLowerCase().indexOf(filter.toLowerCase()) > -1){ 
			$('#list').append("<li>" + person + "</li>")
		}
	}
});