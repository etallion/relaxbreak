const router = require("express").Router();
const personalityController = require("../../controllers/personalityController");

router
  .route("/")
  .get(personalityController.findAll)
  .post(personalityController.create)
  .put(personalityController.update);

module.exports = router;
