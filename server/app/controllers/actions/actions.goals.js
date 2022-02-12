const asyncHandler = require('express-async-handler');

/**
 * @desc Get goals
 * @route GET - /api/goals
 * @access Private
 * */

exports.readItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals'})
});

/**
 * @desc Get single goal
 * @route GET - /api/goals/:id
 * @access Private
 * */
exports.readItem =  asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get goal ${req.params.id}`});
  
});

/**
 * @desc Create goal
 * @route CREATE - /api/goals
 * @access Private
 * */
exports.createItem = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400);
    throw new Error('please send text field')
  }
  console.log(req.body);
  res.status(200).json({ message: 'Create goal'})
});

/**
 * @desc Update goal
 * @route PUT - /api/goals/:id
 * @access Private
 * */
exports.updateItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}`})
});

/**
 * @desc Delete goal
 * @route GET - /api/goals/:id
 * @access Private
 * */
exports.deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

