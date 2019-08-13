const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  answer: {
      type: Schema.Types.ObjectId,
      ref: "Answer"
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
