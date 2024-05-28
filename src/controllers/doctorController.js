import { Doctor } from '../schemas/doctor.mjs';

export const createDoctor = async (request, response) => {
  try {
    const newDoctor = new Doctor(request.body);
    const saveDoctor = await newDoctor.save();
    response.status(201).json(saveDoctor);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
export const getDoctors = async (request, response) => {
  try {
    const doctors = await Doctor.find();
    response.status(201).json(doctors);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getDoctor = async (request, response) => {
  try {
    const { params : {id}} = request;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      response.status(404).json({ message: 'Doctor not found ' });
    }
    response.status(201).json(doctor);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const updateDoctor = async (request, response) => {
  try {
    const {
      body,
      params: { id },
    } = request;
    const doctor = await Doctor.findByIdAndUpdate(id, body);
    response.status(201).json({ message: 'Doctor is updated', doctor });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (request, response) => {
  try {
    const {
      params: { id },
    } = request;
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      return response.status(404).json({ message: 'Doctor not found ' });
    }
    return response.status(201).json({ message: 'Doctor deleted ' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
