var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("accountPage", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("itemPage", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("searchPage", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //GET ALL ITEMS 
  app.get("/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
