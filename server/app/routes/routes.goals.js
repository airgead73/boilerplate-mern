const { Router } = require('express');
const goalsRouter = Router();

// controller
const { read, readOne, create, update, remove } = require('../controllers/controller.goals');

// routes
goalsRouter.route('/').get(read).post(create);

goalsRouter.route('/:id').get(readOne).put(update).delete(remove);

// export
module.exports = {
  goalsRouter
}