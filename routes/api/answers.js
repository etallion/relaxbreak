const router = require("express").Router();
const answersController = require("../../controllers/answersController");

// Matches with "/api/books"
router.route("/")
  .get(answersController.findAll);
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .post(answersController.create)
  .get(answersController.findById)
  .put(answersController.update)
  .delete(answersController.remove);

module.exports = router;
