$(function(){
  
  //items e subitems
  ///$('#list').find('li').css('background-color','yellow');

  //subitems
  ///$("#list").children('li').css('background-color','blue');

  //items parents
  //$("#list").parents('div').css('background-color','red');
  $("#list").parents('body').css('background-color','red');


  //items parent
  ///$("#list").parent('div').css('background-color','yellow');

  ///$("#list").siblings().css('background-color','yellow');
  ////$("#list").siblings(':header').css('background-color','yellow');
  //$("#list").prev().css('background-color','yellow');
  //$("#list").next().css('background-color','yellow');
  $("#list").prev().next().css('background-color','yellow');

});