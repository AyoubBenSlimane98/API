import mongoose from "mongoose";

const clinicShema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Clinic = mongoose.model('Clinic', clinicShema);
