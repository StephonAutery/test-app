const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 3001; // config for Heroku Deployment

// middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json(),
    passport.initialize()
);

// dbconfig
const db = require("./config/keys").mongoURI;
// connect to mongoDB
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)
    .then(() => console.log("- mongoDB successfully connected -"))
    .catch(err => console.log(err));

// passport middleware
// app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// routes
// app.use("/api/users", users);
app.use(routes);

app.listen(port, () => console.log(`server running on port ${port} !`));