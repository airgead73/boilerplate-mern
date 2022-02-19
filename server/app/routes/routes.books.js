const { Router } = require('express');
const booksRouter = Router();
const { checkJwt } = require('../middleware/checkJwt');

// controller
const { read, readOne, create, update, remove } = require('../controllers/controller.books');

// routes
booksRouter.route('/').get(checkJwt, read).post(checkJwt,create);

booksRouter.route('/:id').get(checkJwt, readOne).put(checkJwt, update).delete(checkJwt, remove);

// export
module.exports = {
  booksRouter
}