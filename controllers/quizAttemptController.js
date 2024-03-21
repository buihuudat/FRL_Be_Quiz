const UserQuizAttempt = require("../models/userQuizAttemptModel");
const Quiz = require("../models/quizModel");
const userQuizAttemptModel = require("../models/userQuizAttemptModel");

const quizAttemptController = {
  createQuizAttempt: async (req, res) => {
    const { userId, quizId } = req.body;
    try {
      const quizExists = await Quiz.exists({ _id: quizId });
      if (!quizExists) {
        return res.status(404).json({ error: "Quiz not found" });
      }

      const newAttempt = new UserQuizAttempt({
        user: userId,
        quiz: quizId,
        dateAttempted: new Date(),
        score: 0,
      });

      const savedAttempt = await newAttempt.save();
      return res.status(201).json(savedAttempt);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateQuizAttemptScore: async (req, res) => {
    const { attemptId, score } = req.body;
    try {
      const updatedAttempt = await UserQuizAttempt.findByIdAndUpdate(
        attemptId,
        { score },
        { new: true }
      );
      if (!updatedAttempt) {
        return res.status(404).json({ error: "Quiz attempt not found" });
      }
      return res.status(200).json(updatedAttempt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getQuizAttemptsForUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const quizAttempts = await UserQuizAttempt.find({ user: userId })
        .populate("quiz")
        .exec();

      res.json(quizAttempts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllQuizAttempts: async (req, res) => {
    try {
      const result = await userQuizAttemptModel
        .find()
        .populate("user")
        .limit(10)
        .sort({ score: -1 });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = quizAttemptController;
