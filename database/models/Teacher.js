const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudioSchema = require('./StudioOld')

const TeacherSchema = new Schema({
  teacherName: String,
  teacherId: String,
  studios: [{
    type: Schema.Types.ObjectId,
    ref: 'studio'
  }]
});

TeacherSchema.virtual('studioCount').get(function() {
  return this.studios.length;
});

TeacherSchema.pre('remove', function(next) {
  const Studio = mongoose.model('studio');

  Studio.remove({ _id: {$in: this.newStudios } })
    .then(() => next());
})

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;