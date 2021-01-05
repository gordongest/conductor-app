const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  'title': String,
  'assignmentId': String,
  'tempo': Number,
  'dueDate': Date,
  'completed': Boolean,
  'notes': String
});

const studentSchema = new Schema({
  'studentName': String,
  'studentId': String,
  'age': Number,
  'level': String,
  'assignments': [assignmentSchema],
  'goals': [
    {
      'goalTitle': String,
      'goalBody': String
    }
  ],
  'instructorNotes': [
    {
      'instructorNoteBody': String
    }
  ]
});

const studioSchema = new Schema({
  'studioName': String,
  'studioId': String,
  'location': String,
  'size': Number,
  'days': [ String ],
  'students': [studentSchema]
})

studioSchema.pre('validate', function(next) {
  this.size = this.students.length;
  next();
});

const teacherSchema = new Schema({
  'teacherName': String,
  'teacherId': String,
  'studios': [studioSchema]
})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Teacher }