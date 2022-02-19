const asyncHandler = require('express-async-handler');
const Goal = require('../models/goal.model');

/**
 * @desc Create goal
 * @route CREATE - /api/goals
 * @access Private
 * */
 exports.create = asyncHandler(async (req, res) => {
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
 * @desc Get goals
 * @route GET - /api/goals
 * @access Private
 * */

exports.read = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals)
});

/**
 * @desc Get single goal
 * @route GET - /api/goals/:id
 * @access Private
 * */
exports.readOne =  asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get goal ${req.params.id}`});
  
});

/**
 * @desc Update goal
 * @route PUT - /api/goals/:id
 * @access Private
 * */
exports.update = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    const error = new Error('Goal not found.');
    error.status = 400
    return next(error)
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedGoal);
  
});

/**
 * @desc Delete goal
 * @route GET - /api/goals/:id
 * @access Private
 * */
exports.remove = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if(!goal) {
    const error = new Error('Goal not found.');
    error.status = 400
    return next(error)
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
  
})

