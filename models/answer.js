const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answers: {
    active: {
        answer: { type: String, required: true },
        gif: { type: String, required: true }
    },
    creative: {
      answer: { type: String, required: true },
      gif: { type: String, required: true }
    },
    social: {
      answer: { type: String, required: true },
      gif: { type: String, required: true }
    },
    solo: {
      answer: { type: String, required: true },
      gif: { type: String, required: true }
    }
  }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
