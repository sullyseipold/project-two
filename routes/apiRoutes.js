/* eslint-disable camelcase */
var db = require("../models");



module.exports = function (app) {



  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   // eslint-disable-next-line prettier/prettier
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  /*==============================================================================
                  USER ROUTES
  ==============================================================================*/

  //GET ALL USERS
  app.get("/api/user/all", function (req, res) {
    console.log("GET /api/user/");

    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  //GET USER BY QUERY STRINGS username and password
  app.get("/api/user", function (req, res) {
    var query = req.query;
    console.log("query = ", query);

    db.User.findOne({
      where: {
        username: query.username,
        password: query.password
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // GET USER BY USER ID
  app.get("/api/user/:id", function (req, res) {
    console.log("req.params.id = ", req.params.id);

    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/validate", function (req, res) {
    db.User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function (record) {
      if (record) {
        res.status(200);
      } else {
        res.status(402);
      }
      res.send();
    })
  });

  // GET USER BY USER USERNAME
  app.get("/api/user/username/:username", function (req, res) {
    console.log("req.params.username = ", req.params.username);

    db.User.findOne({
      where: {
        username: req.params.username
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // CREATE NEW USER
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });


  /*==============================================================================
                    ITEM ROUTES
    ==============================================================================*/

  // // CREATE NEW ITEM
  // app.post("/api/items", function (req, res) {
  //   console.log(req.body);
  //   db.Item.create({
  //     item_name: req.body.item_name,
  //     price: req.body.price,
  //     description: req.body.description,
  //     image_url: req.body.image_url,
  //     UserId: req.body.userId
  //   }).then(function (dbItems) {
  //     res.json(dbItems);
  //   });
  // });

  //GET ITEM BY NAME
  app.get("/api/search/:item", function (req, res) {
    console.log("apiroute");
    db.Item.findAll({
      where: {
        name: {
          like: `%${req.params.item}%`
        }
      }
    }).then(function (searchResults) {
      console.log(searchResults)
      res.json(searchResults);
    });
  });


  // Get all items
  app.get("/api/search", function (req, res) {
    db.Item.findAll({}).then(function (dbItems) {
      res.json(dbItems);
    });
  });

    // CREATE NEW USER
    app.post("/api/item/url", function (req, res) {
      db.Item.update({imageurl: req.body.imagerl}, {where: {id: req.body.id}}).then(function (dbItem) {
        res.json(dbItem);
      });
    });
};