var db = require("../models");

module.exports = function (app) {

  // ===== Login ===========
  app.get("/", function (req, res) {
    res.render("index");
  });

  // ===== Items ======
  //View all items
  app.get("/item", function (req, res) {
    console.log('inside app.get /item');
    db.Item.findAll({}).then(function (data) {
      res.render("search", {
        items: data
      });
    });
  });

  // Add item page
  app.get("/add", function (req, res) {
    res.render("additem");
  });

  // Create a new item entry
  app.post("/item", function (req, res) {
    // Create new Item from /allitems body??
    db.Item.create(req.body).then(function (dbItem) {
      console.log('inside create new item route');

      res.json(dbItem.id);
    });
  });

  app.get("/search", function (req, res) {
    res.render("search");
  });

  app.get("/search/:name", function (req, res) {
    db.Item.findAll({
      where: {
        name: req.params.name
      }
    }).then(function (data) {
      res.render("search", {
        items: data
      });
    });
  });

  // When one clicks on a posted item
  app.get("/item/:id", function (req, res) {
    // Find that special searched item
    db.Item.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.render("item", {
        item: data
      });
    });
  });

  app.get("/account", function (req, res) {
    res.render("account");
  });
  // ===== Users ======
  // Specific user account
  app.get("/account/:id", function (req, res) {
    // Get user from ID in parameters
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      // Plug User data into "account" page
      res.render("account", {
        data: dbUser
      });
    });
  });

  // Create a new user entry
  // app.post("/users", function(req, res) {
  //   db.User.create(req.body).then(function() {
  //     res.redirect("/");
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};