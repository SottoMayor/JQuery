$(document).ready(function(){

    $('button').click(function(){

        $.get('demo.html', function(data, status) {

            if(status === 'success'){
                $('.container').html(data);
            }else{
                alert('Error! Pag Not Found!')
            }

        })

    })

})