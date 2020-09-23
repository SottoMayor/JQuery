$(function(){

 // .on('click', function() {...})

 function logEvent(){
  console.log('Mouse was clicked or key was pressed!');
 }

 $('html').on('click keydown', logEvent());

  var images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ]
  var i = 0;
  var gallery = $('.gallery').find('img');
  gallery.on('click', execute);

  function execute (){
    i = (i + 1) % images.length
    gallery.fadeOut(function(){
      gallery.attr('src',images[i]).fadeIn();
    })
  }
 


});
