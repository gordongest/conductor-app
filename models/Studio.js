const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = require('./Student')

const StudioSchema = new Schema({
  'studioName': String,
  'studioId': String,
  'location': String,
  'size': Number,
  'days': [ String ],
  'students': [ StudentSchema ]
})

StudioSchema.pre('validate', function(next) {
  this.size = this.students.length;
  next();
});

module.exports = StudioSchema;