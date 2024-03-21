const express = require("express");
const {
  getQuestion,
  getQuestionByQuiz,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const { verifyToken, isAdmin } = require("../middleware");

const router = express.Router();

router.get("/:id", getQuestion);
router.get("/quiz/:id", getQuestionByQuiz);
router.post("/", verifyToken, isAdmin, createQuestion);
router.put("/:id", verifyToken, isAdmin, updateQuestion);
router.delete("/:id", verifyToken, isAdmin, deleteQuestion);

module.exports = router;
