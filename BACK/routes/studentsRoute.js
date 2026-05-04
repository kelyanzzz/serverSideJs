import express from "express";
import { authCheck } from "../middleware/auth-middleware.js";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  login,
} from "../controllers/studentsController.js";

const studentRouter = express.Router();

studentRouter.post("/signup", createStudent);
studentRouter.post("/login", login);
studentRouter.get("/", authCheck, getAllStudents);
studentRouter.get("/:id", authCheck, getStudentById);
studentRouter.put("/:id", authCheck, updateStudent);
studentRouter.delete("/:id", authCheck, deleteStudent);

export default studentRouter;