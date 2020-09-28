$(function(){

  var galleryItems = $('.gallery').find('img');
  galleryItems.css({
    width : '33%',
    opacity : 0.7
  });

  galleryItems.hover(function(){
    $(this).stop().fadeTo(500, 1);
  }, function(){
    $(this).stop().fadeTo(500, 0.7);
  })

  galleryItems.click(function(){
    var source = $(this).attr('src');
    var image = $('<img>').attr('src', source).css("width", "100%");
    $('.lightbox').empty().append(image).fadeIn(1500); 

    image.click(function(event){
      event.stopPropagation();
    })
  })

  $('.lightbox').click(function(){
    $(this).fadeOut(500);
  })


  

});
