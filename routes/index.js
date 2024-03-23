const express = require("express");

const userRouter = require("../routes/user");
const authRouter = require("../routes/auth");
const quizRouter = require("../routes/quiz");
const quizAttemptRouter = require("../routes/quizAttempt");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/quiz", quizRouter);
router.use("/quizAttempt", quizAttemptRouter);

module.exports = router;
