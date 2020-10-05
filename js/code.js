$(document).ready(function() {

    var box = $('.box');

    /*
    $(document).click(function(){
        box.animate({
            left: '10px',
            top: "20px",
            width: '50px',
            height: '50px'
        }, 5000, function(){
            console.log('Animation Done!')
        })
    });
    */

   $('.box').mousemove(function(){
    box.animate({
        left: '10px',
        top: "20px",
        width: '50px',
        height: '50px'
    }, 5000, function(){
        console.log('Animation Done!')
        });

    });

    

    
});

