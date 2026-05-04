import {
  findAllStudents,
  findStudentById,
  createStudentService,
  updateStudentService,
  deleteStudentService,
  loginService,
} from "../services/studentServiceMongoDB.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const getAllStudents = async (req, res) => {
  try {
    const students = await findAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await findStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, password, major, gpa } = req.body;
    const newStudent = await createStudentService({ name, email, password, major, gpa });
    const token = jwt.sign({ id: newStudent._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(201).json({ token, user: newStudent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const student = await updateStudentService(req.params.id, req.body);
    res.status(200).json({ message: "Student updated successfully", data: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await deleteStudentService(req.params.id);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService(email, password);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};