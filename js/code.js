$(document).ready(function(){

    //FOCUS EFECT!
    
    $('.focus').focusin(function(){
        $(this).css('box-shadow', '0 0 6px gray')
    })

    $('.focus').focusout(function(){
        $(this).css('box-shadow', '0 0 0px gray')
    })

    $('input:checkbox').change(function(){
        var isChecked = $(this).is(':checked');
        if(isChecked){
            alert('The check is CHECKED!')
        }else{
            alert('The check is not CHECKED!')
        }
    })

    $('form').submit(function(event){
        event.preventDefault(); // or 'return false' in the last line! 
        console.log('Not realoding!')
        $('span').css({'display':'block', 'color':'red'}).fadeOut(2000);
    })


})