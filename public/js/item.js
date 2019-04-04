$(document).ready(function() {
  console.log("yo!");
  // API METHODS
  var API = {
    saveItem: function(item) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/items",
        data: JSON.stringify(item)
      });
    },
    getItems: function() {
      return $.ajax({
        url: "api/items",
        type: "GET"
      });
    },
    deleteItem: function(id) {
      return $.ajax({
        url: "api/item/" + id,
        type: "DELETE"
      });
    }
  };

  // ADD ITEM FUNCTION
  function newItem() {
    if ($(".form-control").val() === "") {
      // validation - if form is blank display message (change alert to modal later)
      alert("Please fill in form!");
    } else {
      var newItem = {
        name: $("#item-name").val().trim(),
        price: $("#item-price").val().trim(),
        description: $("#item-description").val().trim(),
        imageurl: $("#image-url").val().trim()
      };
      console.log(newItem);
      API.saveItem(newItem).then(function(data) {
        console.log("new item added");
        console.log(data);
      });
    }
  }

  // BUTTON LISTENERS
  $("#new-item-btn").on("click", function(e) {
    e.preventDefault();
    newItem();
  });
});