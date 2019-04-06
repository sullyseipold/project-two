// Get references to page elements
var $searchText = $("#search-text");
var $submitBtn = $("#submit");
var $allItemsBtn = $("#allItems");
var $searchList = $("#search-list");



// The API object contains methods for each kind of request we'll make
var API = {

  //return specific item related to a search term
  searchItem: function (searchTerm) {
    return $.ajax({
      url: `api/search/${searchTerm}`,
      type: "GET"
    });
  },
  //return all items in database
  searchAll: function () {
    return $.ajax({
      url: "api/search",
      type: "GET"
    })
  }
};


// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function (searchResults) {

  var searchLinks = searchResults.map(function (searchResult) {
    var $a = $("<a>")
      .text(searchResult.name)
      .attr("href", "/item/" + searchResult.id);

    var price = $("<p>")
      .text(`$${searchResult.price}`);

    var $li = $("<li>")
      .attr({
        class: "list-group-item",
        "data-id": searchResult.id
      })
      .append($a, price);

    return $li;

  });

  $searchList.empty();
  $searchList.append(searchLinks);

};

// handleFormSubmit is called whenever we submit a new search

var handleFormSubmit = function (event) {
  event.preventDefault();
  var searchTerm = $searchText.val().trim();

  if (!(searchTerm)) {
    displayAll();
    return;
  }

  API.searchItem(searchTerm).then(function (searchResults) {
    refreshExamples(searchResults);
  });

  $searchText.val("");
};

var displayAll = function (dbItems) {
  $searchText.empty();
  API.searchAll(dbItems).then(function (allItems) {
    refreshExamples(allItems)
  })
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
//For some reason allItems button reverts back to the login page? So I'm leaving it out for now
// $allItemsBtn.on("click", displayAll);

//when the page loads run the display all function to display all items
displayAll();