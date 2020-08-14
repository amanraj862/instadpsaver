
$("button").click(function(){
  var user=  $('#usernameInput').val().trim();
  getpic(user);

});
function getpic(a) {
  // validation for instagram usernames
  var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
  var validation = regex.test(a);

  if(validation) {

    $.get("https://www.instagram.com/"+a+"/?__a=1")
    .done(function(data) {

      // getting the url
      var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];

      // update img element
      $("#photoReturn").attr("src",photoURL)

     })
    .fail(function() {
      // code for 404 error
      alert('Username was not found!')
    })

  } else {

    alert('The username is invalid!')
  }

}



var input = document.getElementById("usernameInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mybtn").click(function(){
          var user1=  $('#usernameInput').val().trim();
          getpic(user1);

        });
    }
});
