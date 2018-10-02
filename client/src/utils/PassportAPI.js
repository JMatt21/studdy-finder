import axios from "axios";

export default {
    getUserInfo: function () {
        return axios.get("/api/user_data");
    },
    signUp: function () {
        return axios.get("/api/signup");
    },
    logIn: function () {
        return axios.get("/api/login");
    },
    logOut: function () {
        return axios.get("/logout");
    }
};
