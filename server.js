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

// SocketIO requires
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// SocketIO connections
io.on('connection', (client) => { //  the server is expecting some parameter(s)
    console.log('client connected')
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => { // this will emit to the client every 'interval' i.e. 1 second
            client.emit('timer', new Date()); 
        }, interval);
    });

    client.on('test', (message, room) => { // so when the server gets a message from the client
        client.xd = room; // since client is a js object, we can add specific things to it
        console.log(`client says ${message}`);
        client.emit('testCase', `suck a fart outta my ass in room ${client.xd}`); // it sends a message back
    });
    
    client.on('send message', (message, room) => {
        // io.sockets.emit('newroom', [`${client.room} ${message}`]);
        io.to(room).emit('returned message', [`${room} ${message}`]);
        console.log('new message');
    });

    client.on("disconnect", () => {
        client.leave('newroom')
        console.log('client left');
    })

    client.on("join room", room => {
        console.log("user joined " + room);
        client.join(room);
    })
});














// Start the API server

db.sequelize.sync().then(function () {
    http.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Sequelize Server listening on: http://localhost:" + PORT);
    });
});
