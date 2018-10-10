import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:3001');
const socket = openSocket('https://shrouded-beyond-13240.herokuapp.com'); 

export default {
    socketUser: function (userId) {
        socket.emit('socket user', userId);
    },

    sendMessage: function (text, room, userId) {
        socket.emit('send message', text, room, userId);
    },

    getMessage: function (cb) {
        socket.on('returned message', (text) => {
            cb(text);
          })
    },

    joinRoom: function(room) {
        socket.emit('join room', room);
    },

    massJoinRoom: function(room) {
        room.forEach(thisRoom => {
            socket.emit('join room', thisRoom);
            // console.log('Room',thisRoom)
        });
    },

    leaveRoom: function(room) {
        socket.emit('leave room', room);
    }

}