const express = require('express');
const {configMiddleware} = require('./config/middleware');
require('dotenv').config();

// config port and hostname
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME  || '127.0.0.1';

const app = express();
configMiddleware(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({message: err.message});
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = app;
