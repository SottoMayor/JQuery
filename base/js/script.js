$(function(){

  var gallery = $('.gallery');
  var images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ]

  gallery.data('availableImages',images);
  console.log(gallery.data('availableImages'))
  gallery.data('name','Nominhho');
  console.log(gallery.data());
  gallery.removeData('name');
  console.log(gallery.data('name'));

  var fistpar = $('p:first');

  console.log(fistpar.data('mydata'));

});
