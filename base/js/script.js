$(function(){

  $('#hover').hover(function(){
    alert('button was hovered!')
  })

  //hover(handlerIn, handlerOut)
  $('.green-box').hover(function(){
    $(this).text('I was Hovered!')
  }, function(){
    $(this).text('Hover-me!')
  });

  var blueBlox = $(".blue-box");

  blueBlox.mouseenter(function(){
    $(this).stop().fadeTo(1000, 0.5);
  });
  blueBlox.mouseleave(function(){
    $(this).stop().fadeTo(1000, 1);
  })


  blueBlox.hover(function(){
    $(this).stop().fadeTo(1000, 0.5);
  }, function(){
    $(this).stop().fadeTo(1000, 1);
  });

});
