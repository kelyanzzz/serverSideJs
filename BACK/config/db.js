import mongoose from "mongoose";
import "dotenv/config";

// Read the MongoDB connection string from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Connects to MongoDB using the URI from .env
// Exits the process if the connection fails
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};