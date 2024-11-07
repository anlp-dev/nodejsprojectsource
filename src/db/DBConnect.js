const mongoose = require('mongoose');
require('dotenv').config()

async function connect(){
  try {
    await mongoose.connect(process.env.MONGODB_URI + process.env.NAMEDB);
    console.log('Connect successfuly!!!');
  } catch (error) {
    console.log('connect fail!!!');
  }
}

module.exports = {connect};
