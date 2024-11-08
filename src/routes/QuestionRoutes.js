const express = require('express');
const route = express.Router();
const QuestionController = require('../controllers/QuestionController');

route.get('/', QuestionController.getQuestions);

module.exports = route;
