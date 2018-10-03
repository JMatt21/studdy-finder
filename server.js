var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models/index.js");
let apiRoutes = require('./apiroutes.js');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


// Socket Stuff
io.sockets.on('connection', function (socket) {
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length);
});


socket.on("disconnect", function (data) {
  users.splice(users.indexOf(socket.username), 1);
  updateUsernames();
  connections.splice(connections.indexOf(socket, 1));
  console.log("Disconnected %s sockets connected", connections.length);

});

socket.on('new user', function (data, callback) {
  callback(true);
  socket.username = data;
  users.push(socket.username);
  updateUsernames();
});

let updateUsernames = () =>{
      io.sockets.emit('get users', users);
};



db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
    });
  });