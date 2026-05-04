import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  president: { type: String, required: true },
  members: { type: Number, required: true },
});

export default mongoose.model("Club", clubSchema);