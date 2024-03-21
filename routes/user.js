const express = require("express");
const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { isUser, verifyToken, isAdmin } = require("../middleware");

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

module.exports = router;
