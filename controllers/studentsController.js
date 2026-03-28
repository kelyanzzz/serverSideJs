import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "../services/studentsService.js"

export const getAll = (req, res) => {
    const students = getAllStudents()
    res.json(students)
}

export const getOne = (req, res) => {
    const student = getStudentById(req.params.id)
    if (!student) return res.status(404).json({ error: "Student not found" })
    res.json(student)
}

export const create = (req, res) => {
    const newStudent = createStudent(req.body)
    res.status(201).json(newStudent)
}

export const update = (req, res) => {
    const updated = updateStudent(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: "Student not found" })
    res.json(updated)
}

export const remove = (req, res) => {
    const deleted = deleteStudent(req.params.id)
    if (!deleted) return res.status(404).json({ error: "Student not found" })
    res.json(deleted)
}