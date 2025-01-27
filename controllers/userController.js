const User = require('./models/userModel.js');


// get all users

const getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.status(200).json(users);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Get a single user
const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  // Create a new user
const createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };



// Update a user
const updateUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { name, email, password },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a user
  const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };