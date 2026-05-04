import User from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

// Returns all students from the database
export const findAllStudents = async () => {
  return await User.find({});
};

// Returns a single student by ID
export const findStudentById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid student ID format");
  }
  return await User.findById(id);
};

// Creates a new student with a hashed password
export const createStudentService = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
  return await User.create({ ...data, password: hashedPassword });
};

// Updates a student — hashes password only if it was changed
export const updateStudentService = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid student ID format");
  }
  if (data.password) {
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Deletes a student by ID
export const deleteStudentService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid student ID format");
  }
  return await User.findByIdAndDelete(id);
};

// Verifies email and password for login
export const loginService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid password");
  return user;
};