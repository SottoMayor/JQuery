$(function(){

  $('.red-box').fadeTo(1000, 0.3);
  $('.green-box').delay(1000).fadeTo(1000, 0.5);
  $('.blue-box').delay(2000).fadeTo(1000, 0.8).fadeOut().delay(1000).fadeIn();

})