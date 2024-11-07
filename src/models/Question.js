const Schema = require('mongoose').Schema;
const { text } = require('express');
const mongoose = require('mongoose');

const Question = new Schema({
  text: {type: String},
  options: {type: Array},
  keywords: {type: Array},
  correctAnswerIndex: {type: Number}
})
