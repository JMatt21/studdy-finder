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

// Enable logger
// app.use(logger('dev'));

// Keeping Track of Users' Login Status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
app.use(routes);

// SocketIO connections
io.on('connection', (client) => { //  the server is expecting some parameter(s)
    console.log('client connected')
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => { // this will emit to the client every 'interval' i.e. 1 second
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('update user', (user1, user2) => { //user1 sends stuff to user2
        io.to(`USER: ${user2}`).emit('returned message', { message: dbMessage.message, UserId: dbMessage.UserId });
    });

    client.on('new match', (user1Id, user2Id) => {
        console.log("RESPONDING TO USERS")
        return Promise.all([
            db.Users.findOne({where: {id: user1Id}, attributes: {exclude: 'password'}}),
            db.Users.findOne({where: {id: user2Id}, attributes: {exclude: 'password'}})
        ]).then(results => {
            io.to(`USER: ${results[0].id}`).emit('update new match', results[1]);
            io.to(`USER: ${results[1].id}`).emit('update new match', results[0]);
        })
    });

    client.on('send message', (message, room, UserId) => {
        db.Messages.create({ message: message, RoomId: room, UserId: UserId })
            .then(dbMessage => {
                io.to(room).emit('returned message', { message: dbMessage.message, UserId: dbMessage.UserId });
                // Whats emited here is a single object
                console.log(`new message in room: ${dbMessage.RoomId}`);
            })
    });

    client.on("disconnect", () => {
        console.log('client left');
    })

    client.on("join room", room => {
        db.Rooms.findOne({
            where: { id: room },
            include: [{
                model: db.Messages
            }]
        }).then(dbRoom => {
            if (dbRoom) {
                console.log("user joined " + dbRoom.id);
                let ret = dbRoom.Messages.map(dbMessage => {
                    return { message: dbMessage.message, UserId: dbMessage.UserId }
                })
                client.emit('returned message', ret) // Whats emited here is an array of objects
                client.join(room);
            } else {
                db.Rooms.create({ id: room })
                    .then(dbRoom => {
                        console.log("user created and joined " + dbRoom.id);
                        client.join(room);
                    })
            }
        });

    })

    client.on("leave room", room => {
        console.log("user left " + room);
        client.leave(room);
    })

    client.on("logout", () => {
        console.log("client left all rooms.")
        client.leaveAll();
    })

    client.on("socket user", userId => {
        console.log(`${userId} has come online!`)
        client.join(`USER: ${userId}`);
    })
});

// Start the Sequelize/Socket server

db.sequelize.sync().then(function () {
    http.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Sequelize Server listening on: http://localhost:" + PORT);
    });
});
