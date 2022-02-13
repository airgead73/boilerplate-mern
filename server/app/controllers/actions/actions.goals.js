const asyncHandler = require('express-async-handler');
const Goal = require('../../models/goal.model');

/**
 * @desc Get goals
 * @route GET - /api/goals
 * @access Private
 * */

exports.readItems = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals)
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

  const goal = await Goal.create({
    text: req.body.text
  });
  
  res.status(200).json(goal)
});

/**
 * @desc Update goal
 * @route PUT - /api/goals/:id
 * @access Private
 * */
exports.updateItem = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedGoal);
  
});

/**
 * @desc Delete goal
 * @route GET - /api/goals/:id
 * @access Private
 * */
exports.deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

