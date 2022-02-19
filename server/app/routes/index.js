const { Router } = require('express');
const { goalsRouter } = require('./routes.goals');
const { booksRouter } = require('./routes.books');

const apiRouter = Router();

apiRouter.use('/goals', goalsRouter);
apiRouter.use('/books', booksRouter);

module.exports = {
  apiRouter
}