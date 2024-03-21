const Answer = require("../models/answerModel");

const answerController = {
  getAnswer: async (req, res) => {
    try {
      const answer = await Answer.findOne({
        questionId: req.params.id,
      });
      if (!answer)
        return res.status(404).json({
          message: "Answer not found",
        });
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  createAnswer: async (req, res) => {
    try {
      const answer = await Answer.create(req.body);
      return res.status(201).json(answer);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateAnswer: async (req, res) => {
    try {
      const answer = await Answer.findByIdAndUpdate(
        req.params.id,
        {
          content: req.body.content,
          isCorrect: req.body.isCorrect,
        },
        { new: true }
      );
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteAnswer: async (req, res) => {
    try {
      const answer = await Answer.findByIdAndDelete(req.params.id);
      if (!answer) return res.status(404).json({ message: "Answer not found" });
      return res.status(200).json("Deleted successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = answerController;
