const { Router } = require('express');
const { goalsRouter } = require('./routes.goals');

const apiRouter = Router();

apiRouter.use('/goals', goalsRouter);

module.exports = {
  apiRouter
}