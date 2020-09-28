$(function(){

  /*
  $('p').click(function(){
    $(this).slideUp();
  });

  $('#content').append('<p> This is a dinamically added paragraph! </p>');

   */

  // Delegated Events!

  $('#content').on('click', 'p', function(){
    $(this).slideUp();
  });

  $('#content').append('<p> This is a dinamically added paragraph! </p>');

  $('body').on('click mouseleave', 'li', function(){
    $(this).css('color', 'blue');
  })

});
