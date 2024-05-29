import mongoose from "mongoose";

const clinicShema = new mongoose.Schema({
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
