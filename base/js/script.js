$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  for(var i=0; i < 10; i++){
    $(".red-box").fadeOut(2000);
    $(".red-box").fadeIn(4000);
    $('.green-box').fadeTo(2000, 0.5);
    $('.green-box').fadeTo(2000, 1);
    $('.blue-box').fadeToggle(2000);
  }
});