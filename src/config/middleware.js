const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');

const configMiddleware = (app) => {
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public')); 
}

module.exports = {configMiddleware};
