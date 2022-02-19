const asyncHandler = require('express-async-handler');
const Book = require('../models/book.model');

/**
 * @desc Create book
 * @route CREATE - /api/books
 * @access Private
 * */
 exports.create = asyncHandler(async (req, res) => {
  if(!req.body.title || !req.body.author) {
    res.status(400);
    throw new Error('please send required fields')
  }

  const book = await Book.create({
    title: req.body.title,
    author: req.body.author
  });
  
  res.status(200).json(book);
});

/**
 * @desc Get books
 * @route GET - /api/books
 * @access Private
 * */

exports.read = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books)
});

/**
 * @desc Get single book
 * @route GET - /api/books/:id
 * @access Private
 * */
exports.readOne =  asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if(!book) {
    const error = new Error('Book not found.');
    error.status = 400
    return next(error)
  }

  res.status(200).json(book);
  
});

/**
 * @desc Update book
 * @route PUT - /api/books/:id
 * @access Private
 * */
exports.update = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if(!book) {
    const error = new Error('Book not found.');
    error.status = 400
    return next(error)
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedBook);
  
});

/**
 * @desc Delete book
 * @route GET - /api/books/:id
 * @access Private
 * */
exports.remove = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if(!book) {
    const error = new Error('Book not found.');
    error.status = 400
    return next(error)
  }

  await book.remove();

  res.status(200).json({ id: req.params.id });
  
})

