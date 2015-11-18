var urlRegister = 'https://fewd20.herokuapp.com/register';
var urlLogin = 'https://fewd20.herokuapp.com/login';

var obj = {
	data: {
		username: '',
		password: '',
		email: ''
	}
}

$('#register-btn').click(function(){
	event.preventDefault();
	obj['username'] = $('#username').val();
	obj['password'] = $('#password').val();
	obj['email'] = $('#email').val();
	
	$.post(urlRegister, obj, function(data, status){
		$('#registration-page').hide();
		$('#login-page').show();
	}).fail(function(data){
		$('#error').show();
	})
});

$('#login-btn').click(function(){
	event.preventDefault();
	obj['username'] = $('#username1').val();
	obj['password'] = $('#password1').val();
	$.post(urlLogin, obj, function(data, status){
		$('#login-page').hide();
		$('#home-page').show();
		$.get(urlLogin, function)
		$('username').text(obj['username']);	
		$('password').text(obj['password']);
		$('username').text(obj['username']);
	}).fail(function(data){
		$('#error').show();
	});
});

//$(location).attr('href', './login.html')
