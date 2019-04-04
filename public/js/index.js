// Get references to page elements
var $searchText = $("#search-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $allItems = $("#allItems");
var $searchList = $("#search-list");


// The API object contains methods for each kind of request we'll make
var API = {
  //return specific item related to a search term
  searchItem: function (searchTerm) {
    return $.ajax({
      type: "GET",
      url: `api/search/${searchTerm}`
    });
  },
  //return all items in database
  searchAll: function () {
    return $.ajax({
      type: "GET",
      url: "api/item"
    })
  }
};



// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function (searchResults) {
  console.log(searchResults);
  var searchLinks = searchResults.map(function (searchResult) {
    var $a = $("<a>")
      .text(searchResult.item_name)
      .attr("href", "/item/" + searchResult.id);

    var price = $("<p>")
      .text(`$${searchResult.price}`);

    var $li = $("<li>")
      .attr({
        class: "list-group-item",
        "data-id": searchResult.id
      })
      .append($a, price);

    console.log(searchResult);
    return $li;

  });

  $searchList.empty();
  $searchList.append(searchLinks);

};


//Session Storage???
var storage = function () {
  sessionStorage.clear();
  sessionStorage.setItem("item", searchLinks);

  $("#search-list").text(sessionStorage.getItem("item"))
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  var searchTerm = $searchText.val().trim();
  console.log(searchTerm);

  if (!(searchTerm)) {
    alert("You must enter item!");
    return;
  }

  API.searchItem(searchTerm).then(function (searchResults) {
    refreshExamples(searchResults);
  });

  $searchText.val("");

};

var displayAll = function (event) {
  event.preventDefault();
  API.searchAll().then(function (dbItems) {
    refreshExamples(dbItems)
  })
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$searchList.on("click", ".delete", handleDeleteBtnClick);
$allItems.on("click", displayAll)