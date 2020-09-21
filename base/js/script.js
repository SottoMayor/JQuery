$(function(){
  
  ///$('li').remove();
  $('form').children().not('input:text, textarea, br').remove();

  $('#content').prepend($('li').detach());

  $('p:first').empty();

  $('.red-box, .green-box, .blue-box').empty();



});