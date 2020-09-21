$(function(){
  
 $('li').replaceWith('<li>Replaced</li>')

 $('li').replaceWith(function() {
   return '<li> Replaced with function </li>'
 })

 var firstListItem = $("li:first");
 $('p:first').replaceWith(firstListItem);

 $('.blue-box, .red-box').replaceWith($('<div class="green-box">Others Greens!</div>'));

 $('<div class="green-box">Others Greens!</div>').replaceAll('.blue-box, .red-box')

});