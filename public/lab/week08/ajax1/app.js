$('#update').click(function(){
	var url = 'https://classroomchat.firebaseio.com/start.json';
	$.get(url, function(data, status){
		$('#print').text(data);
		$('#image').css()
	});
});