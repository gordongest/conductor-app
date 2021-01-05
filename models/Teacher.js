const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudioSchema = require('./Studio')

const TeacherSchema = new Schema({
  'teacherName': String,
  'teacherId': String,
  'studios': [ StudioSchema ]
})

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;