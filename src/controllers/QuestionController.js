const Question = require("../models/Question");

class QuestionController {
  async getQuestions(req, res) {
    try {
      const res_data = await Question.find({});
      res.json({
        status: 200,
        message: "success",
        data: res_data,
      });
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      });
    }
  }
}

module.exports = new QuestionController();
