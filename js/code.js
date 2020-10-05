$(document).ready(function() {

    var box = $('.box');


    /*
    
     $('.slideUp').click(function(){
        box.slideUp(1000);
    })

    $('.slideDown').click(function(){
        box.slideDown(1000);
    })

    */

    $('.slideToggle').click(function(){
        box.slideToggle('slow');
    })
   

    
});

