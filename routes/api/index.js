const router = require("express").Router();
const answerRoutes = require("./answers");
const bookRoutes = require("./books");
const questionRoutes = require("./questions");
const resultRoutes = require("./results");
const userRoutes = require("./userRoutes");
const personalityRoutes = require("./personalities");

// Book routes
router.use("/answers", answerRoutes);
router.use("/books", bookRoutes);
router.use("/questions", questionRoutes);
router.use("/results", resultRoutes);
router.use("/userRoutes", userRoutes);
router.use("/personalities", personalityRoutes);

module.exports = router;
