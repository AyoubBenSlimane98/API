import { Clinic } from '../schemas/clinic.mjs';

export const getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.status(201).json(clinics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClinic = async (req, res) => {
  try {
    const { id } = req.params;
    const clinic = await Clinic.findById(id);
    if (!clinic) {
      res.status(404).json({ message: 'Clinic not found ' });
    }
    res.status(201).json(clinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createClinic = async (req, res) => {
  try {
    const newClinic = new Clinic(req.body);
    const saveClinic = await newClinic.save();
    res.status(201).json(saveClinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const updateClinic = async (req, res) => {
  try {
    const { id } = req.params;
    const clinic = await Clinic.findByIdAndUpdate(id, req.body);
    if (!clinic) {
      res.status(404).json({ message: 'Clinic not found ' });
    }
    res.status(201).json({ message: 'Clinic it update' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteClinic = async (req, res) => {
  try {
    const { id } = req.params;
    const clinic = await Clinic.findByIdAndDelete(id);
    if (!clinic) {
      res.status(404).json({ message: 'Clinic not found ' });
    }
    res.status(201).json(clinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};