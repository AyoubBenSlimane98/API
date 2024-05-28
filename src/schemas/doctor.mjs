import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  sex: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  subSpeciality: {
    type: String,
    required: true,
  },
  numberMalde: Number,
  numberOfRecovery: Number,
  languages: [String],
  nationality: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
export const Doctor = mongoose.model('Doctor', DoctorSchema);
