$(document).ready(function(){
    //Insertion arround!

    //this function move selected elements by an only element-wrap!
    $('p').wrapAll('<div class="wrapAll"></div>');

    //This function wrap the content of the element selected!
    $('p').wrapInner('<b></b>')

    $('.wrapAll').css({
        'width':'300px',
        'height':'300px',
        'background-color':'gray',
        'display': 'flex',
        'justify-content': 'center',
        'align-items':'center'
    })

})