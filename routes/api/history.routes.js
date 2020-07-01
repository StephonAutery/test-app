const router = require("express").Router();
const historyController = require("../../controllers/historyController");

// Matches with "/api/books"
router
  .route("/")
  .get(historyController.findAll)
  .post(historyController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(historyController.findById)
  .delete(historyController.remove);

module.exports = router;