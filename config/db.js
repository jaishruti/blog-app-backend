const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("mongodb connect successful");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = connectDB;
