const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const express = require("express");
const app = express();
const axios = "axios";

const cors = require('cors');
app.use(cors());

// Matches with "/api/login"
// router
//   .route("/")
//   .get(loginController.findAll)
//   .post(loginController.create);

// Matches with "/api/login"
router
  .route("/login")
  .get(loginController.login);

// // Matches with "/api/login"
router
  .route("/login/:name")
  .post(loginController.login);

// Matches with "/api/login/:id"
// router
//   .route("/:id")
//   .get(loginController.findById)
//   .delete(loginController.remove);

module.exports = router;