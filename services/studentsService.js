import { readFileSync } from "fs"

const students = JSON.parse(readFileSync("./students.json", "utf-8"))

export const getAllStudents = () => {
    return students
}

export const getStudentById = (id) => {
    const student = students.find(s => s.id === parseInt(id))
    return student
}

export const createStudent = (data) => {
    const newStudent = { id: students.length + 1, ...data }
    students.push(newStudent)
    return newStudent
}

export const updateStudent = (id, data) => {
    const index = students.findIndex(s => s.id === parseInt(id))
    if (index === -1) return null
    students[index] = { ...students[index], ...data }
    return students[index]
}

export const deleteStudent = (id) => {
    const index = students.findIndex(s => s.id === parseInt(id))
    if (index === -1) return null
    return students.splice(index, 1)[0]
}