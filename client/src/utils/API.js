import axios from "axios";

export default {
  getUserInfo: function (id) {
    return axios.get("/api/users/" + id);
  },
  updateUser: function (newUserInfo, id) {
    return axios.post("/api/users/update/" + id, newUserInfo);
  },
  newMessage: function (message) {
    return axios.post("/api/message", message)
  },
  getUsersRooms: function (userId) {
    return axios.get(`/api/users/rooms/${userId}`)
  },
  searchForUsers: function (searchTags, lat, long, distance, userId) {
    return axios.post(`/search`, { lat: lat, long: long, distance: distance, searchTags: searchTags, userId: userId })
  },
  getRoomMessages: function (roomId) {
    return axios.get(`/api/rooms/${roomId}`)
  },
  matchUsers: function (user1Id, user2Id) {
    return axios.post(`/api/users/match`, { user1Id: user1Id, user2Id: user2Id })
  },
  validateAndUpdatePassword: function (userId, oldPassword, newPassword) {
    return axios.post(`/api/users/validate_password`, { userId: userId, oldPassword: oldPassword, newPassword: newPassword })
  }
};  
