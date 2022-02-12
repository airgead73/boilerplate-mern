const express = require('express');
const { apiRouter } = require('./controllers/routes');
const { errorHandler } = require('./middleware/errorMiddleware');

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

app.use(errorHandler)

module.exports = app;