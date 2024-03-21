const express = require("express");
const {
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../controllers/answerController");
const { isAdmin, verifyToken } = require("../middleware");

const router = express.Router();

router.get("/:id", getAnswer);
router.post("/", verifyToken, isAdmin, createAnswer);
router.put("/:id", verifyToken, isAdmin, updateAnswer);
router.delete("/:id", verifyToken, isAdmin, deleteAnswer);

module.exports = router;
