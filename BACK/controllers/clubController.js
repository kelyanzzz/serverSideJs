import {
  findAllClubs,
  findClubById,
  createClubService,
  updateClubService,
  deleteClubService,
} from "../services/clubService.js";

export const getAllClubs = async (req, res) => {
  try {
    const clubs = await findAllClubs();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClubById = async (req, res) => {
  try {
    const club = await findClubById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.status(200).json(club);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClub = async (req, res) => {
  try {
    const { name, category, president, members } = req.body;
    const newClub = await createClubService({ name, category, president, members });
    res.status(201).json({ message: "Club created successfully", data: newClub });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateClub = async (req, res) => {
  try {
    const club = await updateClubService(req.params.id, req.body);
    res.status(200).json({ message: "Club updated successfully", data: club });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteClub = async (req, res) => {
  try {
    await deleteClubService(req.params.id);
    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};