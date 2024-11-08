const express = require('express');
const {configMiddleware} = require('./config/middleware');
require('dotenv').config();
const {connect} = require('./db/DBConnect');
const route = require('./routes/MainRoutes');
const {viewEngine} = require('./config/viewEngine')
// config port and hostname
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME  || '127.0.0.1';

const app = express();
configMiddleware(app);
connect();
viewEngine(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({message: err.message});
})

app.use(route);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = app;
