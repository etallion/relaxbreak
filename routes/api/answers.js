const router = require("express").Router();
const answersController = require("../../controllers/answersController");

// Matches with "/api/books"
router.route("/")
  .get(answersController.findAll)
  .post(answersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(answersController.findById)
  .put(answersController.update)
  .delete(answersController.remove);

module.exports = router;
