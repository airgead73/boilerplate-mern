const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const { apiRouter } = require('./routes');
const { errorHandler } = require('./middleware/errorMiddleware');
const helmet = require('helmet');
const cors = require('cors');
const { clientOrigins } = require('./config/env.dev');

connectDB();
const app = express();

/**
 * @description middleware
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }))
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