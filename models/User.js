const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requiredL: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
