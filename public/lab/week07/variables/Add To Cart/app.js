var item1Count = 0;
var item2Count = 0;
var item3Count = 0;
var item4Count = 0;
var price = 0;
var subtotal = 0;

$('button.item1').click(function(){
	//alert('add item1');
	item1Count++;
	$('.item1.quantity').text(item1Count);
	price = $('.item1.price').text().replace('$','')*1;
	subtotal += price;
	$('#totalCost').text('$' + subtotal.toFixed(2));
});

$('button.item2').click(function(){
	//alert('add item2');
	item2Count++;
	$('.item2.quantity').text(item2Count);
	price = $('.item2.price').text().replace('$','')*1;
	subtotal += price;
	$('#totalCost').text('$' + subtotal.toFixed(2));
});

$('button.item3').click(function(){
	//alert('add item3');
	item3Count++;
	$('.item3.quantity').text(item3Count);
	price = $('.item3.price').text().replace('$','')*1;
	subtotal += price;
	$('#totalCost').text('$' + subtotal.toFixed(2));
});

$('button.item4').click(function(){
	//alert('add item4');
	item4Count++;
	$('.item4.quantity').text(item4Count);
	price = $('.item4.price').text().replace('$','')*1;
	subtotal += price;
	$('#totalCost').text('$' + subtotal.toFixed(2));
});

/*
#Add to cart
There are 4 items in this shop, you will be creating a counter for them.

When the user adds an item, increment that item's count and add onto the total amount.
*/