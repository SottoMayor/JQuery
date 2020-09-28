$(function(){

  $('#btn-submit').click({
    user: 'David',
    domain: 'domain.com'
  }, function(event){
    greetUser(event.data);
    console.log(user)

    return false;
  })

  function greetUser(userdata){
    username = userdata.user || 'Anonymous';
    domain = userdata.domain || 'exemple.com'

    alert('Welcome ' + username + ' from ' + domain + '!')
  }

});
