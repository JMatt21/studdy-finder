import openSocket from 'socket.io-client';
const socket = openSocket(process.env.PORT || 'http://localhost:3001');

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
    },

    leaveAllRooms: function() {
        socket.emit('logout')
    },

    matchUsers: function(user1Id, user2Id) {
        socket.emit('new match', user1Id, user2Id)
    },

    listenToMatches: function(cb) {
        socket.on('update new match', (newMatch) => {
            cb(newMatch);
        });
    }

}