$(document).ready(function(){
  /* Initialize Digits for Web using your application's consumer key that Fabric generated */
  Digits.init({ consumerKey: 'JuFij749GxZKWOJ7H6BF7nJy7' });

  /* Embed the Digits widget. */
  Digits.embed({
    container: '.digits-widget'
  })
  .done(onLogin) /*handle the response*/
  .fail(onLoginFailure);

  /* Validate and log use in. */
  function onLogin(loginResponse){
    // Send headers to your server and validate user by calling Digits’ API
    var oAuthHeaders = loginResponse.oauth_echo_headers;
    var verifyData = {
      authHeader: oAuthHeaders['X-Verify-Credentials-Authorization'],
      apiUrl: oAuthHeaders['X-Auth-Service-Provider']
    };

    console.log('logged in!');
    console.log(verifyData);

    $('.digits-widget').hide();
    alert('You are now logged in!');

  }

  function onLoginFailure(err) {
    console.error(err);
  }

});
