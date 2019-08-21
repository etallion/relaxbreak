const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to add validation once successfully hooked into DB
const UserSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
    trim: true,
    required: "Name is required",
    validate: [
      input => input.length >= 2 && input.length <= 50,
      "name must be between 2 and 50 characters"
    ]
  },
  email: {
    type: String,
    allowNull: false,
    trim: true,
    required: "Email is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  zipcode: {
    type: String,
    trim: true,
    allowNull: true,
    validate: [input => input.length <= 5, "zipcode is too long"]
  },
  location: {
    type: Object
  },
  password: {
    type: String,
    trim: true,
    allowNull: false,
    required: "Password is required",
    validate: [
      input => input.length <= 20 && input.length >= 5,
      "password must be between 5 and 20 characters"
    ]
  },
  fb_id: { type: String, allowNull: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
