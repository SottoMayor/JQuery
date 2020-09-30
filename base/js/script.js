$(function(){



  $('input[type="checkbox"]').change(function(){
      var isChecked = $(this).is(':checked');

      if(isChecked){
          $(this).add('label[for="cb"]').css('box-shadow', '0 0 6px green');
      }else{
          $(this).add('label[for="cb"]').css('box-shadow', '0 0 6px red')

      }
  })

  /*$('#option').change(function(){
      alert($(this).val() + ' is my option!')
  })
  */

  $('#option').change(function(){
      myOption = $(this).find(':selected').text();
      alert(myOption)
  })

});
