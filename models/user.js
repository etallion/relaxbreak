const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to add validation once successfully hooked into DB
const UserSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
    trim: true,
    required: "Name is required"
  },
  email: {
    type: String,
    allowNull: false,
    trim: true,
    required: "Email is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  zipcode: { type: String, trim: true, allowNull: true },
  password: {
    type: String,
    trim: true,
    allowNull: false,
    required: "Password is required"
  },
  fb_id: { type: String, allowNull: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
