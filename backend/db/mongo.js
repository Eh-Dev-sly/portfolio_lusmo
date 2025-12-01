const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
