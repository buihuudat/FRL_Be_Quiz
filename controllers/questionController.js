const Question = require("../models/questionModel");

const questionController = {
  getQuestion: async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (!question) return res.status(404).json({ message: "No Question" });
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json(message);
    }
  },
  getQuestionByQuiz: async (req, res) => {
    try {
      const question = await Question.find({ quizId: req.params.id });
      if (!question) return res.status(404).json({ message: "No Question" });
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  createQuestion: async (req, res) => {
    try {
      const question = await Question.create(req.body);
      return res.status(201).json(question);
    } catch (error) {
      return res.status(500).json(message);
    }
  },
  updateQuestion: async (req, res) => {
    try {
      const question = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!question) return res.status(404).json({ message: "No Question" });
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json(message);
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      const question = await Question.findByIdAndDelete(req.params.id);
      if (!question) return res.status(404).json({ message: "No Question" });
      return res.status(200).json("Delete Question Successfully");
    } catch (error) {
      return res.status(500).json(message);
    }
  },
};

module.exports = questionController;
