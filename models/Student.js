const mongoose = require('mongoose');
const Assignment = require('./Assignment')

const studentSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'age': Number,
  'level': {
    type: String,
    enum: [
      'beginner',
      'lower intermediate',
      'upper intermediate',
      'advanced'
    ]
  },
  'assignments': [assignmentSchema],
  'goals': [
    'title': String,
    'body': String
  ],
  'instructor_notes': [
    'title': String,
    'body': String
  ]
});

const Student = mongoose.model('Student', studentSchema);