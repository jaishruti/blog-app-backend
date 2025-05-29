const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body;
    const newuser = await User.create({
      name,
      email,
      password,
      profilePicture,
    });
    res.status(200).json({ success: true, data: newuser });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
};
