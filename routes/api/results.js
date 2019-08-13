const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");

// Matches with "/api/books"
router.route("/")
  .get(resultsController.findAll)
  .post(resultsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(resultsController.findById)
  .put(resultsController.update)
  .delete(resultsController.remove);

module.exports = router;
