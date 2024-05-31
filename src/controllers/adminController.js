import { Admin } from '../schemas/admin.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAdmins= async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Admin.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found ' });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const {username , password } =
      req.body;

    const user = await Admin.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists!.' });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new Admin({
        username: username,
        password :hashPassword 
    });

    await newUser.save();

    return res.status(201).json({ message: 'Admin created succefully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const user = await Admin.findByIdAndUpdate(id, body, { new: true });
    if (!user) {
      res.status(404).json({ message: 'User not found .' });
    }
    if (body.password) {
      const hashPassword = await bcrypt.hash(body.password, 10);
      user.password = hashPassword;
      await user.save();
    }
    res.status(201).json({ message: 'User is update .', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Admin.findByIdAndDelete(id);

    if (!user) {
      res.status(404).json({ message: 'Admin not found ' });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

