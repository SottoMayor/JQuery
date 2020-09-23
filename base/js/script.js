$(function(){

  $('#hover').hover(function(){
    alert('button was hovered!')
  })

  $('.green-box').hover(function(){
    $(this).text('I was Hovered!')
  }, function(){
    $(this).text('Hover-me!')
  });


});
