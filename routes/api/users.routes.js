const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const express = require("express");
const app = express();
const axios = "axios";

const cors = require('cors');
app.use(cors());

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  
router
  .route("/:_id")
  .get(usersController.findUserById)
  .delete(usersController.remove);

module.exports = router;