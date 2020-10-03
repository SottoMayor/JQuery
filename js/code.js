$(document).ready(function(){
   
    $('.container').click(function(){
        alert("You've Clicked")
    })

    $('.container').hover(function(){
        $(this).css("background-color",'blue');
    }, function(){
        $(this).css("background-color",'white');
    });
    
    /*$('#content').mousedown(function(){
        console.log('Mouse Down!')
    })

    $('#content').mouseup(function(){
        console.log('Mouse Up!')
    })
    */

    $('#content').click(function(){
        console.log('mousedown and mouseup!')
    })

    $('#content').mousemove(function(){
        console.log('Mouse Move!!')
    })
})