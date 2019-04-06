$(document).ready(function() {
  console.log("hi there!");
  var firebase = require('firebase');
  var firebaseui = require('firebaseui');
  

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // This file includes code to LOGIN and CREATE NEW USERS by taking input from the html file
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };


// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
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

    loadItemPage: function() {
      console.log('INSIDE LOADITEMPAGE');
      return $.ajax({
        url: "/item",
        type: "GET"
      });
    }
  };

  // LOGIN FUNCTION
  function userLogin() {
    var username = $("[name=username]").val().trim();
    var password = $("[name=password]").val().trim();
    API.getUser(username, password).then(
      function() {
        // send to next page
        console.log("Yes!");
        // API.loadItemPage();
        location.assign("/item");
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