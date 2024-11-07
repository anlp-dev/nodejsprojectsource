const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const Quiz = new Schema({
  title: {type: String},
  description: {type: String},
  questions: {type: Array},
})

module.exports = mongoose.model('Quiz', Quiz);
