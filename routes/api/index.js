const router = require("express").Router();
const answerRoutes = require("./answers");
const bookRoutes = require("./books");
const questionRoutes = require("./questions");
const resultRoutes = require("./results");

// Book routes
router.use("/answers", answerRoutes);
router.use("/books", bookRoutes);
router.use("/questions", questionRoutes);
router.use("/results", resultRoutes);

module.exports = router;
