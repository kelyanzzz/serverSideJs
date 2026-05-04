import Club from "../models/clubModel.js";

export const findAllClubs = async () => await Club.find({});

export const findClubById = async (id) => await Club.findById(id);

export const createClubService = async (data) => await Club.create(data);

export const updateClubService = async (id, data) => 
  await Club.findByIdAndUpdate(id, data, { new: true });

export const deleteClubService = async (id) => 
  await Club.findByIdAndDelete(id);