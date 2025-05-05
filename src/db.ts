import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongoURI =
    process.env.MONGO_URI || "mongodb://localhost:27017/fallbackdb";
  console.log("Connecting to MongoDB with URI:", mongoURI); // ← Add this

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};


export default connectDB;
