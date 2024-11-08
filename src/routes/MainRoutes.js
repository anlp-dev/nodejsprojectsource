const express = require('express');
const route = express.Router();
const QuestionRoutes = require('./QuestionRoutes');
const QuizRoutes = require('./QuizRoutes');

route.use('/questions', QuestionRoutes);
route.use('/quizzes', QuizRoutes);

module.exports = route;
