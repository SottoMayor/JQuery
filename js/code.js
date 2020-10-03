$(document).ready(function(){
    //Insertion arround!

    //$('p').wrap('<div class="wrap"></div>');

    $('p').wrap(function(){
        return '<p class="wrap"></div>'
    })
})