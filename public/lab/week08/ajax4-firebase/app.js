var url = 'https://bldesign.firebaseio.com/name.json';

$.get(url, function(data, status){
	console.log(data);
});

var stringify = JSON.stringify({data: "418 I'm a teapot (RFC 2324)"});

$.post(url, stringify, function(data, status){

});

var user = {
    username: 'jones',
    firstname: 'Jack',
    surname: 'Jones',
    phoneNumber: '012345678'
}

console.log(user.firstname);
console.log(user['phoneNumber']);

user.firstname = 'Amanda'; //change object property

var a = 'firstname';

console.log(user[a]);