$(document).ready(function(){
   /*
   $('.box').on('click', function(){
       console.log('clicked by event on!')
   })
   */

   $(document).on('click', '.box', function(){
       console.log('Clicked by event on!')
   })

    $('.box').fadeOut();
    $(window).scroll(function(){
       var distScroll = $(document).scrollTop();

       if(distScroll > 500){
           $('.box').fadeIn(500)
       }else{
            $('.box').fadeOut(500)
       }
   })

   $(window).resize(function(){
       console.log($(this).width() + ' px')
   })

})
