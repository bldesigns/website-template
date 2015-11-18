$('#update').click(function(){
	var url = 'https://classroomchat.firebaseio.com/benson.json';

	var data = {
		text: 'hey there'
	}

	$.post(url, JSON.stringify(data), function(data, status){
	});
});