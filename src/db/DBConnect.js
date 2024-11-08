const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI + process.env.NAMEDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfuly!!!");
  } catch (error) {
    console.log("connect fail!!!");
  }
}

module.exports = { connect };
