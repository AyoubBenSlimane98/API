import { User } from '../schemas/user.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 
export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Register.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found ' });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, dateOfBirth, gender } =
      req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists!.' });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      dateOfbirth: dateOfBirth,
      gender: gender,
    });

    await newUser.save();

    return res.status(201).json({ message: 'Admin created succefully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      res.status(404).json({ message: 'User not found ' });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //test email
    if (!user) {
      return res.status(404).json({ message: 'User dos not  exists!.' });
    }

    //test password
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      return res
        .status(404)
        .json({ message: 'Email or Password is not correct!.' });
    }
    //add token for real  user
    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    return res.status(201).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const validateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Register.findOne({ email });

    //test email
    if (!user) {
      return res.status(404).json({ message: 'Admin dos not  exists!.' });
    }
    return res.status(201).json({ userId: user._id });
  } catch (error) {
    console.error('Error occurred while validating email:', error);
    res.status(500).json({ message: error.message });
  }
};
