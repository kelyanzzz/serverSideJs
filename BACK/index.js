import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./config/db.js";
import { studentRouter } from "./routes/studentsRoute.js";
import clubRouter from "./routes/clubRoute.js";

const app = express();
const port = process.env.PORT || 3000;

connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use("/api/students", studentRouter);
app.use("/api/clubs", clubRouter);

app.get("/", (req, res) => {
  res.send("Server is running ...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});