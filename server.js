require("dotenv").config();
var express = require("express");
// var methodOverride = require('method-override');
var exphbs = require("express-handlebars");
var aws = require("aws-sdk");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
  region: "us-east-1"
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Override with POST having ?_method=PUT
// app.use(methodOverride('_method'));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/s3Routes")(app);
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running on heroku, set syncOptions.force to true
if (process.env.NODE_ENV === "production") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;