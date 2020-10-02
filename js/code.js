$(document).ready(function(){
    // All children
    //$('.parent').children().css('background-color', 'blue');

    $('.parent').children('.span').css('background-color', 'blue');
    $('.parent div:first-child').css('color', 'white');
    $('.parent div:last-child').css('color', 'red');
    $('.parent div:nth-of-type(2)').css('color', 'orange');
    $('.parent div:nth-last-of-type(2)').css('color', 'gray');
    $('.parent').find('.sub-child').css('background-color','green')
})