import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

export default {
    subscribeToTimer: function (cb) {
        socket.on('timer', timestamp => cb(null, timestamp));
        socket.emit('subscribeToTimer', 1000); // react to socket route 'subscribeToTimer' every second
    },

    test: function (cb) {
        socket.on('testCase', (message) => cb(message)); // cb will get called
        socket.emit('test', 'fuck', 'xdd'); // here we have 2 parameters being emited to the server
        // in this case we have 2 strings
    },

    connectToRoom: function (text, room) {
        // socket.on('return message', (message) => cb(message)); // cb will get called
        socket.emit('send message', text, room);
        // socket.on('newroom', (message) => cb(message));
    },

    getMessage: function () {
        socket.on('returned message', (text) => {
            console.log(text)
          })
    },

    joinRoom: function(room) {
        socket.emit('join room', room);
    }

}