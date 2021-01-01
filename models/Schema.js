const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'tempo': Number,
  'dueDate': Date,
  'completed': {
    type: Boolean,
    required: true
  },
  'notes': String
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

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

const studioSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'location': String,
  'size': Number,
  'days': [
    {
      type: String,
      enum: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    }
  ],
  'students': [studentSchema]
})

studioSchema.pre('validate', function(next) {
  this.size = this.students.length;
  next();
});

const Studio = mongoose.model('Studio', studioSchema);

const teacherSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'studios': [studioSchema],

})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Assignment, Student, Studio, Teacher }