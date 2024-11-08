const { sendResponse } = require("../helper/sendResponse");
const { success, error } = require("../enums/message");
const QuizService = require("../services/QuizService");

class QuizController {
  // [GET] /quizzes/
  async getAllQuiz(req, res) {
    try {
      const res_data = await QuizService.getAllQuiz();
      sendResponse(
        res,
        success.GET_QUIZ_SUCCESS.status,
        success.GET_QUIZ_SUCCESS.message,
        res_data
      );
    } catch (error) {}
  }
  // [GET]/quizzes/:id
  async getQuizById(req, res) {
    try {
      const res_data = await QuizService.getQuizById(req.params.id);
      sendResponse(
        res,
        success.GET_QUIZ_SUCCESS.status,
        success.GET_QUIZ_SUCCESS.message,
        res_data
      );
    } catch (error) {
      res.json({
        status: 500,
        message: "Fail",
      });
    }
  }
  // [POST]/quizzes/
  async addNewQuiz(req, res) {
    try {
      const res_data = await QuizService.addNewQuiz(req.body);
      const mess = `Added the quiz success with id: ${res_data._id}`;
      sendResponse(res, success.ADD_QUIZ.status, mess, res_data);
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }
  // [DELETE]/quizzes/:id
  async deleteQuizById(req, res) {
    try {
      const res_data = await QuizService.deleteQuizById(req.params.id);
      if (res_data) {
        sendResponse(
          res,
          success.DELETE_QUIZ.status,
          success.DELETE_QUIZ.message
        );
      }
    } catch (error) {
      sendResponse(res, 500, error.message);
    }
  }
  // [GET] /quizzes/:id/populate
  async getQuestionLikeCapital(req, res) {
    try {
      const res_quiz_id = await QuizService.getQuestionLike(req.params.id, "your")
      sendResponse(
        res,
        success.GET_QUIZ_SUCCESS.status,
        success.GET_QUIZ_SUCCESS.message,
        res_quiz_id
      );
    } catch (error) {}
  }
  // [POST] /quizzes/:id/question
  async createQuestionAndAddToQuiz(req, res) {
    try {
      const res_data = await QuizService.createQuestionByQuizId(req.params.id, req.body);
      sendResponse(res, success.ADD_QUIZ.status, success.ADD_QUIZ.message, res_data);
    } catch (error) {}
  }
  // [POST] /quizzes/:id/questions
  async createManyQuestionAndAddToQuiz(req, res) {
    try {
      const res_data = await QuizService.createManyQuestionByQuizId(req.params.id, req.body);
      sendResponse(res, success.ADD_QUIZ.status, success.ADD_QUIZ.message, res_data);
    } catch (error) {}
  }
}

module.exports = new QuizController();
