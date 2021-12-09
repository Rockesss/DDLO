var counter = 0;

$(document).ready(function(){
    $('.counter-value').text(counter);
    bindevent();
});

function bindevent(){
    $(".btn").click(function(e){
        e.preventDefault();

     if($(this).hasClass('minus') ){
        counter--;
        $('.counter-value').text(counter);
    }
     else if( $(this).hasClass('plus')
            ){
        counter++;
        $('.counter-value').text(counter);
        }
    });
}