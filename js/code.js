$(document).ready(function(){

    var box = $('.box');

    //Position on the document left and top of the element!
    console.log(box.offset());

    //Position on the document left of the element!
    console.log(box.offset().left);

     //Position on the document top of the element!
     console.log(box.offset().top);

     //alert('top: '+ box.offset().top +' and left: '+box.offset().left)

     // Position on the parent in relation of the element (if position:relative!)!
     alert(box.position().top + ' and ' + box.position().left)



})