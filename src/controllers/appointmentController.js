import { Apppointment } from '../schemas/appontment.mjs';
export const getApppointments = async (req, res) => {
  try {
    const appointment = await Apppointment.find();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getApppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Apppointment.findById(id);
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found ' });
    }
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createApppointment = async (req, res) => {
  console.log(req.body);
  try {
    const newApppointment = new Apppointment(req.body);
    const saveApppointment = await newApppointment.save();
    res.status(201).json(saveApppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateApppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const apppointment = await Apppointment.findByIdAndUpdate(id, req.body);
    if (!apppointment) {
      res.status(404).json({ message: 'Apppointment not found ' });
    }
    res.status(201).json({ message: 'Apppointment it update' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteApppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const apppointment = await Apppointment.findByIdAndDelete(id);
    if (!apppointment) {
      res.status(404).json({ message: 'Apppointment not found ' });
    }
    res.status(201).json(apppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};