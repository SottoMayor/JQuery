$(document).ready(function(){

    $('#content div:odd').css('background-color','blue');
    $('#content div:even').css('background-color','red');

    $('thead').css('background-color','lightgray');
    $('tbody tr:odd').css('background-color','orange');
    $('tbody tr:even').css('background-color','chartreuse');

})