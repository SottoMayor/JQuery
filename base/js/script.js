$(function(){

  $('#button').click(function(event){
    console.log(event);
    alert('The button was clicked!');
  })

  $('.red-box').click(function(){
    $(this).fadeTo(1500, 0.5);
  })


});
