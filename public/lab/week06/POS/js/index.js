var total = 0;

/*
$('#entry').submit(function(e){
  e.preventDefault();
*/

$('#entry').submit(function(event){
  event.preventDefault();
  if ($.isNumeric($('#newEntry').val())){
    updateTotal();
  }
  else {
    alert("Please enter in a valid amount.");
  }
});

function updateTotal() {
  var amount = parseFloat($('#newEntry').val());
  //var amount = $('#newEntry').val() * 1;        TYPE CASTING
  total += amount;
  $('#entries').append('<tr><td>',amount,'</td></tr>');
  $('#total').text('$'+total);
  $('#newEntry').val(''); //reset text area
}