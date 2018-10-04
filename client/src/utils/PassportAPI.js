import axios from "axios";

export default {
    getUserInfo: function () {
        return axios.get("/api/user_data");
    },
    signUp: function (userData) {
        return axios.post("/api/signup", userData);
    },
    logIn: function (userData) {
        return axios.post("/api/login");
    },
    logOut: function () {
        return axios.get("/logout");
    }
};
