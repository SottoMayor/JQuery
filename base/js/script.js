$(function(){

  
  $('.gallery').hide();


  // text(), html()

  var fistpar = $('p:first');

  console.log(fistpar.text())
  console.log(fistpar.html())

  //fistpar.text('<strong>HELLO</strong> world!');
  //fistpar.html('<strong>HELLO</strong> world!');

  fistpar.html( fistpar.html() + ' It was just appended.' )

});
