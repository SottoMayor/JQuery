$(function(){

  $('.gallery').hide();
  $('a').addClass('fancy-link');
  $('p:first').addClass('large emphasize');

  $('div').addClass(function(index, current_class){
    if(current_class === 'dummy'){
      return 'red-box';
    }
  })

  $('.dummy').removeClass('dummy').addClass('green-box');

});
