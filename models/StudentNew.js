const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentName: String,
  studio: [{
    type: Schema.Types.ObjectId,
    ref: 'studio'
  }]
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;