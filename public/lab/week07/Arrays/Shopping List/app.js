var items = [];
var itemPosition = 0;

$(document).ready(function(){ //Do you know what this function is for? if not ask yang!


	$('#add-item').click(function(e){
	//for (var i=0; i<items.length(); i++){
		e.preventDefault();
		items.push($('#new-item').val());
		$('#list').append("<li>" + items[itemPosition] + "<button id=\"remove-item\" class=\"item"+itemPosition+"\">Remove</button></li>");
		itemPosition++;
	});

	$('#remove-item').click(function(){
		alert('remove item');
	});




	//<li>Item 1 <button id="remove-item-1">Remove Item</button></li>
});


/*
#Shopping List

##Instructions
This is a simple shopping list app, you can add items and remove items.

Before you start, remove the current list item (item 1), that's just an example item.

##What you will need
* You will need jQuery click listeners
* You will need Arrays to keep track of your items
* You will need Array.push to add items and Array.splice to remove items
* Loops to render the items

##Further Challenge
Add a filter input field and as the user types, it filters the results.  You will need to use the 'indexOf' function.

##Good Luck
*/