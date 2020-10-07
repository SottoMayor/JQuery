$(document).ready(function(){

    $(window).scroll(function(){

        var scroll_top_window = $(window).scrollTop();

        if(scroll_top_window > 60){
            $('.navigation').addClass('sticky').fadeIn(400);
        }else{
            $('.navigation').removeClass('sticky', 700);
        }

    });


   

});