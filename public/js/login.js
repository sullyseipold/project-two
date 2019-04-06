$(document).ready(function() {
  console.log("hi there!");


  // This file includes code to LOGIN and CREATE NEW USERS by taking input from the html file

  // METHODS FOR REQUESTS
  var API = {
    saveUser: function(user) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/users",
        data: JSON.stringify(user)
      });
    },
    getUser: function (username, password) {
      return $.ajax({
        url: "api/validate",
        type: "POST",
        data: {
          username: username,
          password: password
        }

      });
    },



  };

  // LOGIN FUNCTION
  function userLogin() {
    var username = $("[name=username]").val().trim();
    var password = $("[name=password]").val().trim();
    API.getUser(username, password).then(
      function() {
        // send to next page
        console.log("Yes!")
        return $.ajax({
          url: "/item",
          type: "GET"
        });
      },
      function(err) {
        console.log("Cry!");
      }
    );
  }

  //----------------------------------------
  // ADDING USERS
  //----------------------------------------

  // ADD USER FUNCTION
  function newUser() {
    if ($(".user-form").val() == "") {
      // validation - if form is blank display message (change alert to modal later)
      alert("Please fill in form");
    } else {
      var newUser = {
        name: $("#new-name").val().trim(),
        username: $("#new-username").val().trim(),
        email: $("#new-email").val().trim(),
        password: $("#new-password").val().trim(),
        city: $("#new-city").val().trim(),
        state: $("#new-state").val()
      };
      console.log(newUser);
      API.saveUser(newUser).then(function (data) {
        console.log("new user added");
        console.log(data);
      });
    };
  }

  // BUTTON LISTENERS
  // show modal
  $("#new-user-btn").on("click", function (e) {
    e.preventDefault();
    // showModal();
    $("#new-user-modal").modal("show");
  });

  // login with username and password
  $("#submit-btn").on("click", function (e) {
    e.preventDefault();
    userLogin();
  });

  // create a new user 
  $("#create-user-btn").on("click", function (e) {
    e.preventDefault();
    newUser();
    $("#new-user-modal").modal("hide");
  });
});