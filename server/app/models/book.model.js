const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please, add a title value.']
  },
  author: {
    type: String,
    required: [true, 'Please, add an author value.']
  }  
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema)