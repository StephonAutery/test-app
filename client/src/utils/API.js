import axios from "axios";
// const express = require("express");
// const app = express();

// app.use(cors());
// const cors = require('cors');

export default {
    // get all the questions
    getQuestions: function () {
        return axios.get("/api/questions");
    },

    // save a question to the database
    saveQuestion: function (question) {
        return axios.post("/api/questions", question)
    },

    // get the list of books from google
    getPresData: function (name) {
        return axios.get("https://exploratory.io/public/api/kanaugust/US-Presidents-Data-Jhy7OdW1hE/data?api_key=guest?fo=json")
    },
    // get the list of books from google
    LOC_API: function (name) {
        // return axios.get("https://www.loc.gov/?fo=json&at=trending_content")
        return axios.get("https://www.loc.gov/collections/?fo=json")

    },
    //get all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // get a single user
    getUserById: function (_id) {
        return axios.get("/api/users/" + _id);
    },
    // logout user
    logoutUser: function (logoutUser) {
        console.log("API - logOut a user")
        console.log("api/logout")
    },
    // login user
    loginUser: function (name) {
        return axios.get("api/login", name);
    },
    //save a result
    saveResults: function ( results ) {
        return axios.post("api/results", results)
    },
    //save stats
    saveStats: function ( stats ) {
        return axios.post("api/stats", stats)
    },
    getResults: function () {
        return axios.get("api/results")
    },
    findResultsById: function (id) {
        return axios.get("api/results/" + id); 
    },
    findUserStatsByID: function (id) {
        return axios.get("api/results/" + id); 
    }
};