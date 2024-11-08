const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const Quiz = new Schema({
  title: { type: String },
  description: { type: String },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }], // Sửa lỗi tại đây
});

module.exports = mongoose.model("Quiz", Quiz);
