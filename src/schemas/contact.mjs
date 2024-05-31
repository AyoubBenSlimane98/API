import mongoose from "mongoose";

const contactShema = new mongoose.Schema({
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
  },
  message: {
    type: String,
    required: true,
  },
  isDone: {
    type : Boolean 
  }
});

export const Contact = mongoose.model('Contact', contactShema); 