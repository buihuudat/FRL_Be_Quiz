const User = require("./models/userModel");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (req.user && req.user.role === "user") {
    next();
  } else {
    return res.status(401).json({
      message: "You must be logged in as a user to access this route",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      message: "You must be logged in as an admin to access this route",
    });
  }
};

module.exports = {
  verifyToken,
  isUser,
  isAdmin,
};
