const { Router } = require('express');
const booksRouter = Router();

// controller
const { read, readOne, create, update, remove } = require('../controllers/controller.books');

// routes
booksRouter.route('/').get(read).post(create);

booksRouter.route('/:id').get(readOne).put(update).delete(remove);

// export
module.exports = {
  booksRouter
}