const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssignmentSchema = require('./Assignment')

const StudentSchema = new Schema({
  'studentName': String,
  'studentId': String,
  'age': Number,
  'level': String,
  'assignments': [],
  'goals': [
    {
      'goalTitle': String,
      'goalBody': String
    }
  ],
  'instructorNotes': [
    {
      'body': String
    }
  ]
});

module.exports = StudentSchema;