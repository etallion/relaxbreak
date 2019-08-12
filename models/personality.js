const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalitySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  terms: { type: Array, required: true }
});

const Personality = mongoose.model("Personality", personalitySchema);

module.exports = Personality;
