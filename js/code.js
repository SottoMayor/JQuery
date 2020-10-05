$(document).ready(function() {

   /*
   $('button').click(function(){
        $('.box').hide('slow'); //fast, slow or time
    })
    */ 

    /*
    $('.box').css('display', 'none');
    $('button').click(function(){
    $('.box').show('fast'); //fast, slow or time
    */

    // hide and show, and we can set slideToggle also!
    $('button').click(function(){
        $('.box').stop().toggle(2500); //fast, slow or time
    })

    
});

