import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfbirth: {
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
  },
  gender: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);
