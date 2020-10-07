$(document).ready(function(){

    var scroll_top = $('.scroll-top');

    $(window).scroll(function(){

        if( $(this).scrollTop() > 250 ){
            scroll_top.stop().fadeIn(700);
        }else{
            scroll_top.stop().fadeOut(700);
        }

    })

    scroll_top.click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 750)
    })
})  