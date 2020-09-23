$(function(){
  
  $('.gallery').hide();

  var redBox = $('.red-box');
  console.log(redBox.css('width'));
  console.log(redBox.width());

  redBox.css('background-color', 'orange');
  $('p').css('font-size','19px');
  redBox.css('width', '+=20px');


  var props = $('p').css(['font-size', 'line-height', 'color']);
  console.log(props);

  //redBox.css('user-select','none');

  redBox.css('user-select', function(){
    return 'none';
  })

});