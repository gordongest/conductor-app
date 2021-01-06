const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudioSchema = require('./StudioOld')

const TeacherSchema = new Schema({
  "teacherName": String,
  "teacherId": String,
  "studios": [],
  newStudios: [{
    type: Schema.Types.ObjectId,
    ref: 'studio'
  }]
});

TeacherSchema.virtual('studioCount').get(function() {
  return this.studios.length;
});

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;