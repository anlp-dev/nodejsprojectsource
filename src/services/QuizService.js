const { Error } = require("mongoose");
const Question = require("../models/Question");
const Quiz = require("../models/Quiz");

class QuizService {
  async getAllQuiz() {
    try {
      const response = await Quiz.find({});
      return response;
    } catch (error) {
      throw new Error("Fail to add quiz");
    }
  }

  async addNewQuiz(object) {
    try {
      const response = await Quiz.create(object);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteQuizById(objectId) {
    try {
      const response = await Quiz.findByIdAndDelete(objectId);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getQuizById(objectId) {
    try {
      const response = await Quiz.findById(objectId);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getQuestionLike(id, strLike) {
    try {
      const response = await Quiz.findById(id).populate("questions");
      const result = response.questions.filter((question) =>
        question.text.toLowerCase().includes(strLike)
      );
      response.questions = result;
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createQuestionByQuizId(id, objData) {
    try {
      const response = await Question.create(objData);
      await Quiz.findByIdAndUpdate(id, { $push: { questions: response._id } });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createManyQuestionByQuizId(id, objData) {
    try {
      const response = await Question.insertMany(objData);
      const questionId = response.map((question) => question._id);
      await Quiz.findByIdAndUpdate(
        id,
        { $push: { questions: { $each: questionId } } },
        { new: true }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new QuizService();
