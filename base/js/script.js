$(function(){

  var inputFields = $('input:text, input[type="email"], input:password, textarea');
  
  inputFields.focus(function(){
    $(this).css('box-shadow', '0 0 6px #aaa');
  });

  inputFields.blur(function(){
    $(this).css('box-shadow', 'none');
  })

  $('#name').blur(function(){
    var name = $(this).val();
    var name_len = name.length;
    if(name_len < 3){
      $(this).css('box-shadow', '0 0 6px red');
    }else{
      $(this).css('box-shadow', '0 0 6px green');
    }
  })


});
