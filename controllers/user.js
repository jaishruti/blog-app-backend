const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, profilepic } = req.body;
    const newuser = await UserSchema.create({
      name,
      email,
      password,
      profilepic,
    });
    res.status(200).json({ success: true, data: newuser });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
};
