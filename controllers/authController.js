const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      if (user.password !== password) {
        return res
          .status(401)
          .json({ message: "Email or password is incorrect" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  register: async (req, res) => {
    const email = req.body.email;
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({ message: "Email already exists" });
      }
      const newUser = await User.create(req.body);
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      return res.status(200).json({ user: newUser, token });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  checkAuth: async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = authController;