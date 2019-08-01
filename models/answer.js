const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answer: { type: String, required: true },
  personality: { type: String, required: true },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  img_link: { type: String, required: true }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
