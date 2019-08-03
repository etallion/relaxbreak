const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: { type: String, required: true },
  answers:
    {
      // Store ObjectId
      type: Schema.Types.ObjectId,
      // The ObjectId will refer to the id in the Answer model
      ref: "Answer"
    }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;