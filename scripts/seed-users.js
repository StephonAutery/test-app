const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://final-project:1history@ds041586.mlab.com:41586/heroku_1thwh90l"
);

// create the data objects
const usersSeed = [
    {
        "f_name": "Stephon",
        "l_name": "Autery",
        "birthdate": 08/11/1965,
        "race": "Negro",
        "password": "stephon",
        "username": "stephon"
    },
    {
        "f_name": "Suzannah",
        "l_name": "Levy",
        "birthdate": 10/31/1967,
        "race": "Caucasian",
        "password": "sue",
        "username": "sue"
    },
    {
        "f_name": "Cate",
        "l_name": "Autery",
        "birthdate": 03/12/2008,
        "race": "Negro",
        "password": "cate",
        "username": "cate"
    },
    {
        "f_name": "John",
        "l_name": "Autery",
        "birthdate": 12/17/2009,
        "race": "Negro",
        "password": "john",
        "username": "john"
    },
    {
        "f_name": "American Indian ",
        "l_name": " / Alaskan Native",
        "birthdate": 1/2/2020,
        "race": "other",
        "password": "other",
        "username": "other"
    },
    {
        "f_name": "Asian",
        "l_name": " / American",
        "birthdate": 1/1/2020,
        "race": "other",
        "password": "other",
        "username": "other"
    },
    {
        "f_name": "Black",
        "l_name": " / African American",
        "birthdate": 1/1/2020,
        "race": "other",
        "password": "other",
        "username": "other"
    },
    {
        "f_name": "Native Hawaiian",
        "l_name": " / Pacific Islander",
        "birthdate": 1/1/2020,
        "race": "other",
        "password": "other",
        "username": "other"
    },
    {
        "f_name": "White",
        "l_name": " / American",
        "birthdate": 1/1/2020,
        "race": "white",
        "password": "other",
        "username": "other"
    }
]

db.Users.remove({})
	.then(() => db.Users.collection.insertMany(usersSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});