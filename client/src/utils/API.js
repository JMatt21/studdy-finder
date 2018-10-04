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
  }
};
