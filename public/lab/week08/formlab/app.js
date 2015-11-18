$('#login').submit(function(){
	event.preventDefault();
	var username = $('#username').val();
	var password = $('#password').val();

	if (username === 'benson' && password === 'lam'){
        alert('logged in!');
    } else {
        alert('wrong login');
    }
})