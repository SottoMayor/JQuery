$(document).ready(function(){

    $('table tr:odd').css('background-color','lightgray');
    $('table td, table th').css('border','5px solid white');

    $('#checkMaster').click(function(){
        $('.check').prop('checked',$(this).prop('checked'));
    });
        

})