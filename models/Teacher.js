const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudioSchema = require('./Studio')

const TeacherSchema = new Schema({
  "teacherName": String,
  "teacherId": String,
  "studios": []
});

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;