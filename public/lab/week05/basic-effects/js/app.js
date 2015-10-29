$('.show').click(function(){
    $('p').show(500);
    $('p').css('background-color','yellow')
    $('p').css('color','black')
});

$('.hide').click(function(){
    $('p').fadeOut("slow");
});