$(function(){

    $('form').submit(function(){
        if($('textarea').val().trim() == ''){
            $('textarea').css('box-shadow', '0 0 6px red')
            $(this).find('#write').append('<p>input a mensage!<p/>').css({
                fontSize: "10px",
                fontWeight: 800,
                color: 'red'
            })
            return false
        }
    })

});
