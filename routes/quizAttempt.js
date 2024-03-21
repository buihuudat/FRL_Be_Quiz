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
router.put("/", verifyToken, isAdmin, updateQuizAttemptScore);
router.get("/:userId", verifyToken, isUser, getQuizAttemptsForUser);
router.get("/", verifyToken, isAdmin, getAllQuizAttempts);

module.exports = router;
