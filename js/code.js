$(document).ready(function(){

    $('div').first().css('background-color', 'green');
    $('div').last().css('background-color', 'green');
    $('div').not('div:nth-of-type(3)').css('color', 'red');

})