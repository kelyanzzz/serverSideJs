import express from "express"
import cors from "cors"
import studentRouter from "./routes/students.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => res.json({ msg: "Hello World!" }))
app.use("/students", studentRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}`))