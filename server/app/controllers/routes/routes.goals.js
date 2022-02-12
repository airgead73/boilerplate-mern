const { Router } = require('express');
const goalsRouter = Router();

// actions
const { readItems, readItem, createItem, updateItem, deleteItem } = require('../actions/actions.goals');

// routes
goalsRouter.route('/').get(readItems).post(createItem);

goalsRouter.route('/:id').get(readItem).put(updateItem).delete(deleteItem);

// export
module.exports = {
  goalsRouter
}