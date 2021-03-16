const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { StudioSchema } = require('./Studio')

const TeacherSchema = new Schema({
  teacherName: String,
  teacherId: Number,
  studios: [{
    type: Schema.Types.ObjectId,
    ref: 'studio'
  }],
  newStudios: [ StudioSchema ]
});

TeacherSchema.virtual('studioCount').get(function() {
  return this.newStudios.length;
});

TeacherSchema.pre('remove', function(next) {
  const Studio = mongoose.model('studio');

  Studio.remove({ _id: {$in: this.studios } })
    .then(() => next());
})

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;