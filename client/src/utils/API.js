import axios from "axios";

export default {
  getTest: function () {
    return axios.get("/api/test");
  },
  postTest: function () {
    return axios.post("/api/test");
  }
};
