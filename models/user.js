const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to add validation once successfully hooked into DB
const UserSchema = new Schema({
  email: { type: String, allowNull: false, required: true },
  password: { type: String, allowNull: false, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
