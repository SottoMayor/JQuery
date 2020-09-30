$(function(){

    $('#form').submit(function(){
        var name = $('#name').val();
        var password = $('#password').val();
        var message = $('#message').val();
        var checkbox = $('#checkbox').is(':checked');

        nameValidation(name);
        passwordValidation(password);
        messageValidation(message);
        checkedValidation(checkbox);

        return false;
    });

    function nameValidation(name){
        var feedback = $('#name-feedback');
        if(name.length < 2){
            feedback.text('Please enter your name!').css('color', 'red');
            return false;
        }else{
            feedback.text('');
        }
    }

    function passwordValidation(password){
        var feedback = $('#password-feedback');
        if(password.length > 6 && /.*[0-9]*./){
            feedback.text('');
        }else{
            feedback.text('The password should have at least 6 characters and 1 number!').css('color', 'red');
            return false;
        }
    }

    function messageValidation(message){
        var feedback = $('#message-feedback');
        if(message.trim() != ''){
            feedback.text('');
        }else{
            feedback.text('You should write your message!').css('color', 'red');
            return false;
        }
    }

    function checkedValidation(checkbox){
        var feedback = $('#checkbox-feedback');
        if(checkbox){
            feedback.text('');
        }else{
            feedback.text('you must accept the terms of use').css('color', 'red');
            return false;
        }
    }

});

