$(document).ready(function () {
  console.log("yo!");
  var newItemId;
  // API METHODS
  var API = {
    saveItem: function (item) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/item",
        data: JSON.stringify(item)
      });
    },
    getItems: function () {
      return $.ajax({
        url: "/items",
        type: "GET"
      });
    },
    deleteItem: function (id) {
      return $.ajax({
        url: "/item/" + id,
        type: "DELETE"
      });
    },

    uploadImage: function (file) {
      console.log('inside item.js uploadImage');
      return $.ajax({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        url: "/api/image-upload",
        type: "POST",
        data: file
      });
    },

    updateItemImageUrl: function(item) {
      console.log('update image url');
      return $.ajax({
        url: "/api/item/url",
        type: "POST",
        data: JSON.stringify(item)
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
        // imageurl: $("#image-url").val().trim()
      };
      console.log(newItem);
      API.saveItem(newItem).then(function (data) {
        console.log("new item added");
        console.log(data);
        newItemId = data;
        console.log('new id = ', newItemId);
        $("#item-image-modal").modal("show");
      });

      API.updateItemImageUrl(item);
    }
  }

  // BUTTON LISTENERS
  $("#new-item-btn").on("click", function (e) {
    e.preventDefault();
    newItem();
  });


  $('#add-image-btn').on('click', function () {
    console.log("#add-image-btn on click");

    var file_data = $('#file').prop('files')[0];
    var form_data = new FormData();
    form_data.append('image', file_data);
    $.ajax({
      url: "/api/image-upload", // point to server-side controller method
      dataType: 'json', // what to expect back from the server
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: 'post',
    }).then(function(res) {
      console.log('fucking response ', res);
      var item = {
        id: newItemId,
        imageurl: res.imageUrl
      };

      API.updateItemImageUrl(item);
      $("#item-image-modal").modal("hide");
    });
  });
});
