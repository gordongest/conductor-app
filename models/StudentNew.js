const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssignmentSchema = require('./AssignmentNew')

const StudentSchema = new Schema({
  studentName: String,
  studentId: String,
  age: Number,
  level: String,
  studio: {
    type: Schema.Types.ObjectId,
    ref: 'studio'
  },
  assignments: [ AssignmentSchema ],
  goals: [
    {
      goalTitle: String,
      goalBody: String
    }
  ],
  instructorNotes: [
    {
      body: String
    }
  ]
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;