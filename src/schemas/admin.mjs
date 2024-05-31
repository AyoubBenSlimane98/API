import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password : {
    type: String,
    required: true,
  },
});
export const  Admin = mongoose.model('Admin', adminSchema);