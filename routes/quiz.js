const express = require("express");
const {
  createQuiz,
  getAllQuizzes,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  quizQuery,
} = require("../controllers/quizController");
const { isAdmin, isUser, verifyToken } = require("../middleware");

const router = express.Router();

router.post("/", verifyToken, isAdmin, createQuiz);
router.get("/", getAllQuizzes);
router.get("/q", quizQuery);
router.get("/:id", getQuiz);
router.put("/:id", verifyToken, isAdmin, updateQuiz);
router.delete("/:id", verifyToken, isAdmin, deleteQuiz);

module.exports = router;
