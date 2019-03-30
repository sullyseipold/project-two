$(document).ready(function () {

  // This file includes code to LOGIN and CREATE NEW USERS by taking input from the html file
  var $username = $("#username");
  var $password = $("#password");

  // METHODS FOR REQUESTS
  var API = {
    getUser: function (username, ) {
      return $.ajax({
        url: `/user?user_name=${username}&password=${password}`,
        type: "GET"
      });
    },
    saveUser: function () {
      return $.ajax({
        url: "/api/users",
        type: "POST"
      });
    }
  };

  // LOGIN FUNCTION
  function userLogin() {
    var username = $username.val().trim();
    var password = $password.val().trim();
    API.getUser(username, password).then(function (data) {
      var user = data.user;
      if (!user.user_name) {
        alert("User name or password is incorrect.");
      } else {
        window.location.href = "/search";
      }
    });
  };

  // ADD USER FUNCTION
  function newUser() {
    if ($(".form-control").val() == "") {
      // validation - if form is blank display message (change alert to modal later)
      alert("Please fill in form");
    } else {
      var newUser = {
        name: $("#new-name").val().trim(),
        username: $("#new-username").val().trim(),
        email: $("#new-email").val().trim(),
        password: $("#new-password").val().trim(),
        location: $("#new-city").val().trim()
      };
      console.log(newUser);
      API.saveUser(newUser).then(function () {
        console.log("new user added");
      });
    };
  }

  // BUTTON LISTENERS
  $("submit-btn").on("click", userLogin);
  $("new-user-btn").on("click", newUser);
})