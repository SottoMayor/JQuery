$(document).ready(function(){

    // innerHeight or innerWidth include padding!!
    console.log($('div').innerHeight())
    console.log($('div').innerWidth())

    // outerHeight or outerWidht include padding and border!
    console.log($('div').outerHeight())
    console.log($('div').outerWidth())
    console.log($('div').outerWidth() - $('div').innerWidth())
})