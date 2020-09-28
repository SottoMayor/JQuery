$(function(){

  $('html').keydown(function(event){
    console.log(event.which);
  })  

  var move_right = 39;
  var move_left = 37;

  $('html').keydown(function(event){
    if (event.which == move_right){
      $('.blue-box').stop().animate({
        marginLeft : '+=30px'
      }, 500)
    }else if (event.which == move_left){
      $('.blue-box').stop().animate({
        marginLeft: '-=30px'
      }, 500)
    }
  })

});
