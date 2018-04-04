function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('.g-signin2').css('display','none');
  $('.name').html('Name: '+profile.getName());
  $('.image').attr('src', profile.getImageUrl())
  $('.email').html('Email: '+profile.getEmail());
  $('.button').css('display','block');

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      location.reload();
    });
}
