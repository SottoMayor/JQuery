$(function(){
  
  $('ul ul:first').append("<li>I'm gonna be the last sub-item!");

  $("<li>I'm the last sub-item </li>").appendTo($('ul ul:first'))

  $('ul ul:first').prepend("<li>I'm gonna be the first sub-item!");
  
  $("<li>I'm the first sub-item </li>").prependTo('ul ul:first');

  $("<h4>David Sotto Mayor</h4>").prependTo($('#content'))

  $('.red-box').after('<div class="red-box">Another Red!</div>');

  $('.blue-box').before(function(){
    return '<div class="red-box">Blue and Red Friends!</div>';
  });

  $('.blue-box').before($('.red-box'));

  $('p').after($('#list'));

});