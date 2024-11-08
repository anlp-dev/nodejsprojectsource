const express = require('express');
const route = express.Router();
const QuizController = require('../controllers/QuizController');

route.get('/:id', QuizController.getQuizById);
route.post('/', QuizController.addNewQuiz);
route.delete('/:id', QuizController.deleteQuizById);
route.get('/:id/populate', QuizController.getQuestionLikeCapital);
route.post('/:id/question', QuizController.createQuestionAndAddToQuiz);
route.post('/:id/questions', QuizController.createManyQuestionAndAddToQuiz);
route.get('/', QuizController.getAllQuiz);
module.exports = route;
