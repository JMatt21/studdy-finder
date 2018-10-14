import axios from "axios";

export default {
  getUserInfo: function (id) {
    return axios.get("/api/users/" + id);
  },
  updateUser: function (newUserInfo, id) {
    return axios.post("/api/users/update/" + id, newUserInfo);
  },
  newMessage: function(message) {
    return axios.post("/api/message", message)
  },
  getUsersRooms: function(userId) {
    return axios.get(`/api/users/rooms/${userId}`)
  },
  searchForUsers: function(search, lat, long, distance) {
    return axios.post(`/search/${search}`, {lat: lat, long: long, distance: distance})
  },
  getRoomMessages: function(roomId) {
    return axios.get(`/api/rooms/${roomId}`)
  },
  matchUsers: function(user1Id, user2Id){
    return axios.post(`/api/users/match`, {user1Id: user1Id, user2Id: user2Id})
  }
};
