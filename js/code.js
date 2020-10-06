$(document).ready(function(){

    $('input:text').keyup(function(){
        var userName = $(this).val();
        
        $.post('demo.php', {
            name: userName
        }, function(data, status){
            $('#text').html(data);
        })
    })

})  