$(document).ready(function() {

    var box = $('.box');

    /*
    box.css('display','none');
   $('.fadeIn').click(function(){
       box.fadeIn(1000, function(){
           console.log('Done!')
       });
   })

   $('.fadeOut').click(function(){
       box.fadeOut(1000, function(){
           console.log('Done Again!')
       })
   })
   */

   $('.fadeToggle').click(function(){
       box.fadeToggle('slow', function(){
           console.log('BORA!')
       })
   })

    
});

