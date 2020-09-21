$(function(){
  
  //attr(), prop(), val();

  var link = $('#special-link');
  console.log(link.attr("href"));

  link.attr('href','https://youtube.com').attr('target','_blank')

  var checkbox = $('input:checkbox');
  console.log(checkbox.prop('checked'))
  console.log(checkbox.attr('checked'))

  var text = $('input:text')

  console.log(text.val());

  var range = $('input[type=range]');
  console.log(range.val());

});