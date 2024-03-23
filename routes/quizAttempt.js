const express = require("express");
const {
  createQuizAttempt,
  updateQuizAttemptScore,
  getQuizAttemptsForUser,
  getAllQuizAttempts,
} = require("../controllers/quizAttemptController");
const { verifyToken, isAdmin, isUser } = require("../middleware");

const router = express.Router();

router.post("/", verifyToken, isUser, createQuizAttempt);
router.put("/", verifyToken, updateQuizAttemptScore);
router.get("/:userId", verifyToken, isUser, getQuizAttemptsForUser);
router.get("/", verifyToken, getAllQuizAttempts);

module.exports = router;
