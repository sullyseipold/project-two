var db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   // eslint-disable-next-line prettier/prettier
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // LOAD LOGIN PAGE
  app.get("/", function (req, res) {
    res.render("index");
  });

  // RENDER ADD ITEM PAGE
  app.get("/items/add", function (req, res) {
    res.render("additem");
  });

  // RENDER USER ACCOUNT PAGE
  app.get("/account", function (req, res) {
    res.render("account");
  });

  //GET ALL ITEMS 
  app.get("/search", function (req, res) {
    res.render("search");
  });

  // RENDER USER ACCOUNT PAGE
  app.get("/account", function (req, res) {
    res.render("account");
  });




  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};