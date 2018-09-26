require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
var logger = require('morgan');
var passport = require('./config/passport.js');
var session = require("express-session");
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Enable logger
app.use(logger('dev'));

// Keeping Track of Users' Login Status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Start the API server

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Sequelize Server listening on: http://localhost:" + PORT);
    });
});
