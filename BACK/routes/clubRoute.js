import express from "express";
import { authCheck } from "../middleware/auth-middleware.js";
import {
  getAllClubs,
  getClubById,
  createClub,
  updateClub,
  deleteClub,
} from "../controllers/clubController.js";

const clubRouter = express.Router();

clubRouter.get("/", authCheck, getAllClubs);
clubRouter.get("/:id", authCheck, getClubById);
clubRouter.post("/", authCheck, createClub);
clubRouter.put("/:id", authCheck, updateClub);
clubRouter.delete("/:id", authCheck, deleteClub);

export default clubRouter;