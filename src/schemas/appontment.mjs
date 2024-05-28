import mongoose from 'mongoose';

const AppointmentShema = new mongoose.Schema({
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    phone:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    dateOfBirth:
    {
        type: String,
        required: true
    },
    doctor:
    {
        type: String,
        required: true
    },
    isAgree:
    {
        type: Boolean,
        required: true
    },
    time:
    {
        type: String,
        required: true
    },
    date:
    {
        type: String,
        required: true
    },
});
export const Apppointment = mongoose.model('appointment', AppointmentShema);
