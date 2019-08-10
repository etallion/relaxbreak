const router = require("express").Router();
const placesController = require("../../controllers/googleApiController");

// Matches with "/api/search/:term"
router.route("/")
  .get(placesController.search);

module.exports = router;
