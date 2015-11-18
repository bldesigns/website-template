$('#update').click(function(){
	var stock = $('#stock').val().toUpperCase();
	var url = 'https://fewdstockprice.herokuapp.com/finance/'+stock;
	$.get(url, function(data, status){
		if (data !== 'error'){
			$('#print').text('The currenct price of ' + stock +' is $' + data);
		} else {
			$('#print').text('The ' + stock + ' stock does not exist. Please enter a valid ASX code.');
		}
	});
});