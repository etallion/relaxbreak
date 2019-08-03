const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to add validation once successfully hooked into DB
const UserSchema = new Schema({
  name: { type: String, allowNull: false, require: true },
  email: { type: String, allowNull: false, required: true },
  zipcode: { type: String, allowNull: true, required: false },
  password: { type: String, allowNull: false, required: true },
  fb_id: { type: String, allowNull: true, required: false }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
