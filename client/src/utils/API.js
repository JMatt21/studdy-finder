import axios from "axios";

export default {
  getUserInfo: function (id) {
    return axios.get("/api/users/" + id);
  },
  updateUser: function (newUserInfo, id) {
    return axios.post("/api/users/" + id, newUserInfo);
  },
  newMessage: function(message) {
    return axios.post("/api/message", message)
  },
  getRooms: function(userId) {
    return axios.get(`/api/users/rooms/${userId}`)
  },
  searchForUsers: function(search) {
    return axios.get(`/search/${search}`)
  },
  getRooms: function(roomId) {
    return axios.get(`/api/rooms/${roomId}`)
  },
};
