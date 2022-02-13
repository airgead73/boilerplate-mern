const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const { apiRouter } = require('./controllers/routes');
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();
const app = express();

/**
 * @description middleware
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

/**
 * @description App routes
 */

app.use("/api", apiRouter);

/**
 * @description error handling
 */

app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(errorHandler);

/**
 * @description export
 */

module.exports = app;